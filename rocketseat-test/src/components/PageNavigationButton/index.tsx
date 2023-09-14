import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface PageNavigationButtonProps {
  array: number[],
  currentPage: string
  hasNext: boolean | undefined
  hasPrevious: boolean | undefined
}

export const PageNavigationButton = ({ array, hasNext, hasPrevious }: PageNavigationButtonProps) => {
  const router = useRouter()
  const { category = '' } = router.query || {}
  const { search = '' } = router.query || {}
  const { sortField = '' } = router.query || {}
  const { page = '' } = router.query || {}

  function checkQueryStrings(pageNum?: number) {
    const queryParams = [];

    if (pageNum !== undefined) {
      queryParams.push(`page=${pageNum}`);
    }
    if (category !== '') {
      queryParams.push(`category=${category}`);
    }
    if (search !== '') {
      queryParams.push(`search=${search}`);
    }
    if (sortField !== '') {
      queryParams.push(`sortField=${sortField}`);
    }

    return queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
  }

  function goToNextPage() {
    let initial_page = router.query.page ?? 0

    router.push(`${category !== '' ? category : search}?page=${Number(initial_page) + 1}` +
      `${sortField !== '' ? `&sortField=${sortField}` : ''}`)
  }

  const goToPreviousPage = () => {
    router.push(`${category !== '' ? category : search}?page=${Number(page) - 1}` +
      `${sortField !== '' ? `&sortField=${sortField}` : ''}`);
  };

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
            href={checkQueryStrings(buttonNumber)}
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
        onClick={goToPreviousPage}
        disabled={!hasPrevious}
      >
        <CaretLeft />
      </button>
      <button
        aria-label='voltar uma página'
        className={`items-center justify-center rounded-lg w-8 h-8 
            bg-[#E9E9F0] text-color-complement hover:bg-shapes-02 
            flex disabled:opacity-75 disabled:cursor-not-allowed 
            disabled:hover:bg-[#E9E9F0]`}
        onClick={goToNextPage}
        disabled={!hasNext}
      >
        <CaretRight />
      </button>

    </div>
  );
}
