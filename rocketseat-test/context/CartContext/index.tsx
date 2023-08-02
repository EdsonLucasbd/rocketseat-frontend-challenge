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
  ) => void;
  removeItemFromCart: (id: string) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
  getCart: () => IStoredItem[];
  getTotal: () => number;
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  amount: 0,
  addItemToCart: (id: string, quantity: number) => { },
  removeItemFromCart: (id: string) => { },
  updateItemQuantity: (id: string, quantity: number) => { },
  getCart: () => [],
  getTotal: () => 0,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const [cartData, setCartData] = useState<CartState>({
    cart: [],
    amount: 0,
  });

  useEffect(() => {
    async function loadCartFromStorage() {
      try {
        const cart = await localforage.getItem<IStoredItem[]>('cart');
        const total = await localforage.getItem<number>('total');
        if (cart && total !== null) {
          setCartData({ cart, amount: total });
        }
      } catch (error) {
        console.error('Error loading cart from storage:', error);
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
    return cartData.amount;
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