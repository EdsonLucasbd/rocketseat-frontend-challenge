import { Ref, forwardRef } from 'react'
import { saira } from '@/utils/fonts';
import { Menu, Transition } from '@headlessui/react';
import { CaretDown } from '@phosphor-icons/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import { Fragment } from 'react';
import { ThemeButton } from '../ThemeButton';

interface ISortLink {
  sortField: string
  title: string
  className: string
}

// eslint-disable-next-line react/display-name
const SortLink = forwardRef((props: ISortLink, ref: Ref<HTMLAnchorElement>) => {
  const { sortField, title, className } = props
  const router = useRouter();
  const currentUrl = router.asPath.split('?')[0]
  const queryParams = queryString.parse(router.asPath.split('?')[1] || '')
  const newQueryParams = {
    ...queryParams,
    sortField,
  };
  const newQueryString = queryString.stringify(newQueryParams)
  const newUrl = `${currentUrl}?${newQueryString}`

  return (
    <Link href={newUrl} className={`${className}`}>
      {title}
    </Link>
  );
})

export const CategoryNav = () => {
  const router = useRouter()
  const currentPage = router.asPath
  const { search = '' } = router.query || {}

  const links = [
    { href: currentPage, sortField: 'createdAt_DESC', label: 'Novidades' },
    { href: currentPage, sortField: 'price_DESC', label: 'Preço: Maior - menor' },
    { href: currentPage, sortField: 'price_ASC', label: 'Preço: Menor - maior' },
    { href: currentPage, sortField: 'sales_DESC', label: 'Mais vendidos' },
  ]

  return (
    <div className={`flex flex-row w-full items-center ${search ? 'justify-end' : 'justify-between'}`}>
      <div className={`flex flex-row gap-4 md:gap-10 ${search && 'hidden'}`}>
        <Link href='/' className={`${saira} ${(currentPage === '/' || currentPage.includes('/?page')) &&
          'pb-1 border-b-4 border-b-others-orange_low dark:border-b-brand-orange/75 dark:text-dark-200 font-semibold'} 
          font-saira text-color-text dark:text-dark-300 hover:text-color-title 
          dark:hover:text-dark-100 text-sm md:text-base`}>
          Todos os produtos
        </Link>
        <Link href={`/category/${encodeURIComponent('t-shirts')}`} className={`${saira} ${currentPage.includes('t-shirts') &&
          'pb-1 border-b-4 border-b-others-orange_low dark:border-b-brand-orange/75 dark:text-dark-200 font-semibold'} 
          font-saira font-normal text-color-text dark:text-dark-300 
          hover:text-color-title dark:hover:text-dark-100 text-sm md:text-base`}>
          Camisetas
        </Link>
        <Link href={`/category/${encodeURIComponent('mugs')}`} className={`${saira} ${currentPage.includes('mugs') &&
          'pb-1 border-b-4 border-b-others-orange_low dark:border-b-brand-orange/75 dark:text-dark-200 font-semibold'} 
          font-saira font-normal text-color-text dark:text-dark-300 
          hover:text-color-title dark:hover:text-dark-100  text-sm md:text-base`}>
          Canecas
        </Link>
      </div>
      <div className='flex flex-row gap-2'>
        <Menu as='div' className='relative inline-block text-left'>
          <>
            <Menu.Button className="inline-flex w-full justify-center rounded-md 
              bg-transparent bg-opacity-20 px-4 py-1 text-sm font-medium 
              text-color-text dark:text-dark-300 hover:ring-2 hover:outline-none hover:ring-texts-title 
              hover:ring-opacity-75 focus:outline-none focus-visible:ring-2 
              focus-visible:ring-color-title dark:focus-visible:ring-dark-300 
              focus-visible:ring-opacity-75">
              Organizar por
              <CaretDown
                className="ml-2 -mr-1 h-4 w-4 mt-[2px] text-color-text dark:text-dark-300"
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
            <Menu.Items className="absolute z-10 right-0 mt-1 w-56 origin-top-right 
              divide-y divide-gray-100 rounded-md bg-white dark:bg-dark-700 shadow-lg ring-1 
              ring-black ring-opacity-5 focus:outline-none">
              <div className="px-4 py-3">
                {links.map((link) => (
                  <Menu.Item key={link.label}>
                    {({ active }) => (
                      <SortLink
                        sortField={link.sortField}
                        title={link.label}
                        className={`${active ? 'bg-color-title text-white' : 'bg-white dark:bg-dark-700 text-color-text dark:text-dark-300'
                          } ${(router.query.sortField === link.sortField) ? 'ring-1 ring-color-title' : ''} group 
                          hover:bg-color-title dark:hover:bg-dark-200/40 hover:text-white dark:hover:text-dark-900 flex w-full items-center rounded-md px-2 py-2 my-2 text-sm`}
                      />
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
        <ThemeButton />
      </div>
    </div>
  );
}