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

  function goToNextPage() {
    let initial_page = router.query.page ?? 0

    router.push(`${category !== '' ? category : search}?page=${Number(initial_page) + 1}`)
  }

  function checkPage(btnNumber: number) {
    const categoryCase = currentPage === `/category/${category}` && btnNumber === 0
    const searchCase = currentPage === `/search/${search}` && btnNumber === 0
    const homeCase = currentPage === '/' && btnNumber === 0

    return categoryCase || searchCase || homeCase
  }

  return (
    <div className="flex items-center justify-end w-full gap-[2px] pb-8 pt-6">
      {
        array.map((buttonNumber) => (
          <Link
            key={buttonNumber}
            href={`${category !== '' ? category : search}?page=${buttonNumber}`}
            aria-label={`acessar a página ${buttonNumber + 1}`}
            className={`flex items-center justify-center rounded-lg w-8 h-8 
                ${(currentPage.includes(`?page=${buttonNumber}`)) || checkPage(buttonNumber) ? 'bg-background text-others-orange_low ring-1 ring-others-orange_low' : 'bg-[#E9E9F0] text-color-complement'}
                hover:bg-shapes-02`}
          >
            {buttonNumber + 1}
          </Link>
        ))
      }

      <div className="flex flex-row gap-1 ml-1">
        <button
          aria-label='voltar uma página'
          className={`${(currentPage !== '/' && currentPage !== '/?page=0') && (currentPage !== `/category/${category}` && currentPage !== `/category/${category}?page=0` && currentPage !== `/search/${search}` && currentPage !== `/search/${search}?page=0`) ? 'flex' : 'hidden '} items-center justify-center rounded-lg w-8 h-8 bg-[#E9E9F0] text-color-complement
            hover:bg-shapes-02 `}
          onClick={router.back}
        >
          <CaretLeft />
        </button>
        <button
          aria-label='voltar uma página'
          className={`flex items-center justify-center rounded-lg w-8 h-8 bg-[#E9E9F0] text-color-complement
            hover:bg-shapes-02 ${(currentPage === `/category/${category}?page=${array.length - 1}` || currentPage === `/search/${search}?page=${array.length - 1}`) && 'hidden'}`}
          onClick={goToNextPage}
        >
          <CaretRight />
        </button>
      </div>

    </div>
  );
}
