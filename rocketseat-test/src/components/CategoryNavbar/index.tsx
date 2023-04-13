import { saira } from '@/utils/fonts';
import { Menu, Transition } from '@headlessui/react';
import { CaretDown } from '@phosphor-icons/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

export const CategoryNav = () => {
  const router = useRouter()

  const links = [
    { href: '/account-settings', label: 'Novidades' },
    { href: '/support', label: 'Preço: Maior - menor' },
    { href: '/license', label: 'Preço: Menor - maior' },
    { href: '/sign-out', label: 'Mais vendidos' },
  ]

  return (
    <div className='flex flex-row w-full items-center justify-between pt-[35px]'>
      <div className="flex flex-row gap-10">
        <Link href='/' className={`${saira} ${router.asPath === '/' && 'pb-1 border-b-4 border-b-others-orange_low font-semibold'} font-saira`}>Todos os produtos</Link>
        <Link href='/' className={`${saira} ${router.asPath === '/t-shirt' && 'pb-1 border-b-4 border-b-others-orange_low font-semibold'} font-saira font-normal text-texts-text`}>Camisetas</Link>
        <Link href='/' className={`${saira} ${router.asPath === '/mug' && 'pb-1 border-b-4 border-b-others-orange_low font-semibold'} font-saira font-normal text-texts-text`}>Canecas</Link>
      </div>
      <>
      <Menu as='div' className='relative inline-block text-left'>
        <>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-transparent bg-opacity-20 px-4 py-1 text-sm font-medium text-texts-text hover:ring-2 hover:outline-none hover:ring-texts-title hover:ring-opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-texts-title focus-visible:ring-opacity-75">
            Organizar por
            <CaretDown
                className="ml-2 -mr-1 h-4 w-4 mt-[2px] text-texts-text"
                aria-hidden="true"
              />
          </Menu.Button>
        </>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-1 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-4 py-3 ">
              {links.map((link) => (
                /* Use the `active` state to conditionally style the active item. */
                <Menu.Item key={link.href} as={Fragment}>
                  {({ active }) => (
                    <a
                      href={link.href}
                      className={`${
                        active ? 'bg-texts-title text-white' : 'bg-white text-texts-text'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {link.label}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
        {/* <select 
          name="orderBy" 
          id="orderBy"
          className='bg-transparent w-[140px] h-6 text-texts-text'
        >
          <option hidden selected value="">Organizar por</option>
          <option 
            value="news"
            className='bg-background'
            >
              Novidades
            </option>
          <option 
            value="price-down"
            >
              Preço: Maior - menor
            </option>
          <option 
            value="price-up"
            >
              Preço: Menor - maior
            </option>
          <option 
            value="best-sellers"
            >
              Mais vendidos
            </option>
        </select> */}
      </>
    </div>
  );
}