import { ProductSkeletonLoader } from '@/components/ProductSkeletonLoader';
import { SkeletonLoader } from '@/components/SkeletonLoader';
import { IStoredItem } from '@/pages/product/[id]';
import localforage from 'localforage';
import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react'

export interface CartState {
  cart: IStoredItem[];
  amount: number;
}

interface ICartContext {
  cart: CartState[];
  amount: number;
  addItemToCart: (
    id: string,
    quantity: number,
    price: number,
    name: string,
    description: string,
    image_url: string
  ) => Promise<void>;
  removeItemFromCart: (id: string) => Promise<void>;
  updateItemQuantity: (id: string, quantity: number) => Promise<void>;
  getCart: () => IStoredItem[];
  getTotal: () => number;
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  amount: 0,
  addItemToCart: async (id: string, quantity: number) => { },
  removeItemFromCart: async (id: string) => { },
  updateItemQuantity: async (id: string, quantity: number) => { },
  getCart: () => [],
  getTotal: () => 0,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const [cartData, setCartData] = useState<CartState>({
    cart: [],
    amount: 0,
  });

  const [isLoading, setIsLoading] = useState(true)

  const fakeProductsArray = Array.from({ length: 4 }, (_, index) => index + 1)

  useEffect(() => {
    async function loadCartFromStorage() {
      try {
        const cart = await localforage.getItem<IStoredItem[]>('cart');
        const amount = await localforage.getItem<number>('total');
        if (cart && amount !== null) {
          setCartData({ cart, amount });
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading cart from storage:', error);
        setIsLoading(true);
      }
    }

    loadCartFromStorage();
  }, []);

  const addItemToCart = async (
    id: string,
    quantity: number,
    price: number,
    name: string,
    description: string,
    image_url: string
  ) => {
    const existingItem = cartData.cart.find((item) => item.id === id);

    if (existingItem) {
      updateItemQuantity(id, existingItem.quantity + quantity)
      router.push('/shoppingCart')
    } else {
      const newItem = { id, quantity, price, name, description, image_url };
      const newCart = [...cartData.cart, newItem];

      try {
        await localforage.setItem('cart', newCart);
        await calculateTotal(newCart).then(() => {
          router.push('/shoppingCart')
        })
      } catch (error) {
        console.error('Error adding item to cart:', error);
      }
    }
  };

  const removeItemFromCart = async (id: string) => {
    const newCart = cartData.cart.filter((item) => item.id !== id);

    try {
      await localforage.setItem('cart', newCart);
      await calculateTotal(newCart);
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const updateItemQuantity = async (id: string, quantity: number) => {
    const newCart = cartData.cart.map((item) => {
      if (item.id === id) {
        item.quantity = quantity;
      }
      return item;
    });

    try {
      await localforage.setItem('cart', newCart);
      await calculateTotal(newCart);
    } catch (error) {
      console.error('Error updating item quantity in cart:', error);
    }
  };

  const calculateTotal = async (cart: IStoredItem[]) => {
    const amount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    try {
      await localforage.setItem('total', amount);
      setCartData(prevState => ({ ...prevState, cart, amount }));
    } catch (error) {
      console.error('Error calculating and saving total:', error);
    }
  }

  const getCart = () => {
    return cartData.cart;
  }

  const getTotal = () => {
    return Number(cartData.amount.toFixed(2));
  }

  if (isLoading) {
    return <div className='relative flex flex-col h-screen w-full items-center 
    justify-center px-7 md:px-40 py-[3.75rem] bg-black'
    >
      <SkeletonLoader className='absolute top-0 w-full h-20' />

      <div className="ml-2 md:ml-0 grid grid-cols-2 w-full gap-y-9 md:grid-cols-4 
              md:gap-x-14 md:gap-y-6">
        {
          fakeProductsArray.map(item => <ProductSkeletonLoader key={item} />)
        }
      </div>
    </div>;
  }

  return (
    <CartContext.Provider value={{
      cart: [cartData],
      amount: cartData.amount,
      addItemToCart,
      removeItemFromCart,
      updateItemQuantity,
      getCart,
      getTotal
    }}
    >
      {children}
    </CartContext.Provider>
  );
}