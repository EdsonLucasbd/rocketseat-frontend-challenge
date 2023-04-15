import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/router";

interface PageNavigationButtonProps {
  array: number[],
  currentPage: string
}

export const PageNavigationButton = ({array, currentPage}: PageNavigationButtonProps) => {
  const router = useRouter() 

  function goToNextPage() {
    let initial_page = router.query.page ?? 0
  
    router.push(`/?page=${Number(initial_page) + 1}`)
  }

  return (
    <div className="flex items-center justify-end gap-[2px] pb-8 pt-6">
        {
          array.map((buttonNumber) => (
            <Link 
              key={buttonNumber} 
              href={`?page=${buttonNumber}`} 
              aria-label={`acessar a página ${buttonNumber + 1}`}
              className={`flex items-center justify-center rounded-lg w-8 h-8 
                ${(currentPage === `/?page=${buttonNumber}`) || (currentPage === '/' && buttonNumber === 0) ? 'bg-background text-others-orange_low ring-1 ring-others-orange_low' : 'bg-[#E9E9F0] text-texts-complement'}
                hover:bg-shapes-02`}
            >
              {buttonNumber + 1}
            </Link>
          ))
        }

        <div className="flex flex-row gap-1 ml-1">
          <button 
            aria-label='voltar uma página'
            className={`${(currentPage !== '/' && currentPage !== '/?page=0') ? 'flex' : 'hidden '} items-center justify-center rounded-lg w-8 h-8 bg-[#E9E9F0] text-texts-complement
            hover:bg-shapes-02 `}
            onClick={router.back}
          >
            <CaretLeft />
          </button>
          <button 
            aria-label='voltar uma página'
            className={`flex items-center justify-center rounded-lg w-8 h-8 bg-[#E9E9F0] text-texts-complement
            hover:bg-shapes-02 ${currentPage === `/?page=${array.length - 1}` && 'hidden'}`}
            onClick={goToNextPage}
          >
            <CaretRight />
          </button>
        </div>
        
      </div>
  );
}
