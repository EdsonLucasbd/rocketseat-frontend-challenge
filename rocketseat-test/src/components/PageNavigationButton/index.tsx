import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface PageNavigationButtonProps {
  array: number[],
  currentPage: string
}

export const PageNavigationButton = ({ array, currentPage }: PageNavigationButtonProps) => {
  const router = useRouter()
  const { category = '' } = router.query || {}
  const { search = '' } = router.query || {}
  const { sortField = '' } = router.query || {}
  const { sortOrder = '' } = router.query || {}
  const { page = '' } = router.query || {}

  console.log('page', page)

  function goToNextPage() {
    let initial_page = router.query.page ?? 0

    router.push(`${category !== '' ? category : search}?page=${Number(initial_page) + 1}` +
      `${sortField !== '' ? `&sortField=${sortField}&sortOrder=${sortOrder}` : ''}`)
  }

  function checkPage() {
    const categoryCase = currentPage === `/category/${category}` && `/category/${category}`
    const searchCase = currentPage === `/search/${search}` && `/search/${search}`
    const homeCase = currentPage === '/' && '/'

    return categoryCase || searchCase || homeCase
  }

  const isCurrent = (btnNumber: number) => {
    return (
      page === '' && btnNumber === 0 ||
      page === `${btnNumber}`
    )
  }

  return (
    <div className="flex items-center justify-end w-full gap-2 md:gap-[2px] pb-8 pt-6">
      {
        array.map((buttonNumber) => (
          <Link
            key={buttonNumber}
            data-current={isCurrent(buttonNumber)}
            data-position={buttonNumber}
            href={`${category !== '' ? category : search}?page=${buttonNumber}
            ${sortField !== '' ? `&sortField=${sortField}&sortOrder=${sortOrder}` : ''}`}
            aria-label={`acessar a página ${buttonNumber + 1}`}
            className={`flex items-center justify-center rounded-lg w-8 h-8 
                data-[current=true]:bg-background data-[current=true]:text-others-orange_low 
                data-[current=true]:ring-1 data-[current=true]:ring-others-orange_low
                bg-[#E9E9F0] text-color-complement hover:bg-shapes-02`}
          >
            {buttonNumber + 1}
          </Link>
        ))
      }

      <button
        aria-label='voltar uma página'
        className={`
              items-center justify-center rounded-lg w-8 h-8 bg-[#E9E9F0] text-color-complement
            hover:bg-shapes-02 flex
            disabled:opacity-75 disabled:cursor-not-allowed 
            disabled:hover:bg-[#E9E9F0] `}
        onClick={router.back}
        disabled={page === '0' || page === ''}
      >
        <CaretLeft />
      </button>
      <button
        aria-label='voltar uma página'
        className={`items-center justify-center rounded-lg w-8 h-8 
            bg-[#E9E9F0] text-color-complement hover:bg-shapes-02 
            flex disabled:opacity-75 disabled:cursor-not-allowed 
            disabled:hover:bg-[#E9E9F0]`}
        disabled={router.query.page === `${array.length - 1}`}
        onClick={goToNextPage}
      >
        <CaretRight />
      </button>

    </div>
  );
}
