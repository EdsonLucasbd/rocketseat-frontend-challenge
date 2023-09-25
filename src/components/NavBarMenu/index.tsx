/* eslint-disable @next/next/no-img-element */
import { Fragment, Ref, forwardRef, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowsClockwise,
  List,
  ChartPieSlice,
  CursorClick,
  Fingerprint,
  CirclesThreePlus,
  X,
  CaretDown,
  Phone,
  PlayCircle
} from '@phosphor-icons/react'
import { useRouter } from 'next/router'
import queryString from 'query-string'
import Link from 'next/link'
import { saira } from '@/utils/fonts'
import { ThemeButton } from '../ThemeButton'


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

export const NavBarMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const currentPage = router.asPath
  const { search = '' } = router.query || {}

  const isActive = (title: string) => {
    const { sortField = '' } = router.query || {}
    return sortField === title
  }

  const links = [
    { href: currentPage, sortField: 'createdAt_DESC', label: 'Novidades' },
    { href: currentPage, sortField: 'price_DESC', label: 'Preço: Maior - menor' },
    { href: currentPage, sortField: 'price_ASC', label: 'Preço: Menor - maior' },
    { href: currentPage, sortField: 'sales_DESC', label: 'Mais vendidos' },
  ]

  return (
    <header>
      <nav className="mx-auto w-full flex max-w-7xl items-start justify-between gap-5 px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:hidden relative left-full">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700
            dark:text-dark-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir o menu</span>
            <List className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 justify-between w-full">
          <div className='flex flex-row gap-4 md:gap-10'>
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
            <Popover className="relative">
              <Popover.Button className="inline-flex w-full justify-center rounded-md 
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
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 
                w-56 max-w-md overflow-hidden rounded-md 
                 ring-gray-900/5 divide-y divide-gray-100 
                bg-white dark:bg-dark-700 shadow-lg ring-1 focus:outline-none">
                  <div className="p-4">
                    {links.map((link) => (
                      <SortLink
                        key={link.label}
                        sortField={link.sortField}
                        title={link.label}
                        className={`${isActive(link.sortField) ? 'bg-color-title text-white dark:bg-dark-900 dark:text-dark-200' : 'bg-white dark:bg-dark-700 text-color-text dark:text-dark-300'
                          } ${(router.query.sortField === link.sortField) ? 'ring-1 ring-color-title dark:ring-dark-800' : ''} group 
                      hover:bg-color-title dark:hover:bg-dark-200/40 hover:text-white dark:hover:text-dark-900 flex w-full items-center rounded-md px-2 py-2 my-2 text-sm`}
                      />
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <ThemeButton />
          </div>
        </Popover.Group>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto 
          bg-white dark:bg-dark-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div></div>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-dark-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar o menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-dark-300">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center 
                        justify-between rounded-lg py-2 pl-3 pr-3.5 text-base 
                        font-semibold leading-7 text-color-text hover:bg-gray-50
                        dark:text-dark-200 dark:hover:bg-dark-900">
                        Organizar por
                        <CaretDown
                          className={`${open ? 'rotate-180' : ''} 'h-5 w-5 flex-none'`}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                      >
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {links.map((link) => (
                            <Disclosure.Button
                              key={link.label}
                              as={SortLink}
                              sortField={link.sortField}
                              title={link.label}
                              className={`${isActive(link.sortField) ? 'bg-color-title text-white dark:bg-dark-900 dark:text-dark-200' : 'bg-white dark:bg-dark-700 text-color-text dark:text-dark-300'
                                } ${(router.query.sortField === link.sortField) ? 'ring-1 ring-color-title dark:ring-dark-800' : ''} group 
                            hover:bg-color-title dark:hover:bg-dark-200/40 hover:text-white dark:hover:text-dark-900 flex w-full items-center 
                            rounded-md px-2 py-2 pl-6 my-2 text-sm`}
                            >
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </Transition>
                    </>
                  )}
                </Disclosure>

                <Link href='/' className="-mx-3 block rounded-lg px-3 py-2 text-base 
                font-semibold leading-7 hover:bg-gray-50 font-saira text-color-text 
                hover:text-color-title dark:text-dark-200
                dark:hover:bg-dark-900">
                  Todos os produtos
                </Link>
                <Link href={`/category/${encodeURIComponent('t-shirts')}`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base 
                  font-semibold leading-7 hover:bg-gray-50 font-saira text-color-text 
                  hover:text-color-title dark:text-dark-200
                  dark:hover:bg-dark-900">
                  Camisetas
                </Link>
                <Link href={`/category/${encodeURIComponent('mugs')}`}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base 
                  font-semibold leading-7 hover:bg-gray-50 font-saira text-color-text 
                  hover:text-color-title dark:text-dark-200
                  dark:hover:bg-dark-900">
                  Canecas
                </Link>
              </div>
              <div className="py-6 flex flex-1 justify-end">
                <ThemeButton />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
