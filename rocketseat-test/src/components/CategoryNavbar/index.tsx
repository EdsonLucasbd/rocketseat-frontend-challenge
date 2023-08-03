import { saira } from '@/utils/fonts';
import { Menu, Transition } from '@headlessui/react';
import { CaretDown } from '@phosphor-icons/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import { Fragment } from 'react';

interface ISortLink {
  sortField: string
  sortOrder: string
  title: string
  className: string
}

const SortLink = ({ sortField, sortOrder, title, className }: ISortLink) => {
  const router = useRouter();
  const currentUrl = router.asPath.split('?')[0]
  const queryParams = queryString.parse(router.asPath.split('?')[1] || '')
  const newQueryParams = {
    ...queryParams,
    sortField,
    sortOrder,
  };
  const newQueryString = queryString.stringify(newQueryParams)
  const newUrl = `${currentUrl}?${newQueryString}`

  console.log(sortField)

  return (
    <Link href={newUrl} className={`${className}`}>
      {title}
    </Link>
  );
}

export const CategoryNav = () => {
  const router = useRouter()
  const currentPage = router.asPath
  const { category = '' } = router.query || {}

  console.log(router.query)

  const links = [
    { href: currentPage, sortField: 'created_at', sortOrder: 'desc', label: 'Novidades' },
    { href: currentPage, sortField: 'price_in_cents', sortOrder: 'desc', label: 'Preço: Maior - menor' },
    { href: currentPage, sortField: 'price_in_cents', sortOrder: 'asc', label: 'Preço: Menor - maior' },
    { href: currentPage, sortField: 'sales', sortOrder: 'desc', label: 'Mais vendidos' },
  ]

  return (
    <div className='flex flex-row w-full items-center justify-between pt-[35px]'>
      <div className="flex flex-row gap-10">
        <Link href='/' className={`${saira} ${(currentPage === '/' || currentPage.includes('/?page')) && 'pb-1 border-b-4 border-b-others-orange_low font-semibold'} font-saira text-color-text`}>Todos os produtos</Link>
        <Link href={`/category/${encodeURIComponent('t-shirts')}`} className={`${saira} ${currentPage.includes('t-shirts') && 'pb-1 border-b-4 border-b-others-orange_low font-semibold'} font-saira font-normal text-color-text`}>Camisetas</Link>
        <Link href={`/category/${encodeURIComponent('mugs')}`} className={`${saira} ${currentPage.includes('mugs') && 'pb-1 border-b-4 border-b-others-orange_low font-semibold'} font-saira font-normal text-color-text`}>Canecas</Link>
      </div>
      <>
        <Menu as='div' className='relative inline-block text-left'>
          <>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-transparent bg-opacity-20 px-4 py-1 text-sm font-medium text-color-text hover:ring-2 hover:outline-none hover:ring-texts-title hover:ring-opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-texts-title focus-visible:ring-opacity-75">
              Organizar por
              <CaretDown
                className="ml-2 -mr-1 h-4 w-4 mt-[2px] text-color-text"
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
              <div className="px-4 py-3">
                {links.map((link) => (
                  <Menu.Item key={link.label}>
                    {({ active }) => (
                      <SortLink
                        sortField={link.sortField}
                        sortOrder={link.sortOrder}
                        title={link.label}
                        className={`${active ? 'bg-texts-title text-white' : 'bg-white text-color-text'
                          } ${(router.query.sortField === link.sortField && router.query.sortOrder === link.sortOrder) ? 'ring-1 ring-texts-title' : ''} group hover:bg-texts-title hover:text-white flex w-full items-center rounded-md px-2 py-2 my-2 text-sm`}
                      />
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </>
    </div>
  );
}