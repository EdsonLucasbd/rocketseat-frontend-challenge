import { saira, saira_stencil_one } from '@/utils/fonts';
import { MagnifyingGlass, ShoppingBagOpen } from '@phosphor-icons/react';

const Header = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between w-full h-20 bg-shapes-01 px-40'>
        <span className={`${saira_stencil_one} font-saira-stencil-one text-texts-text text-[40px]`}>capputeeno</span>
        <div className='flex flex-row gap-6'>
          <div className='relative flex justify-between gap-4'>
            <input 
              type="search" 
              name="searchProduct" 
              id="searchProduct" 
              placeholder="Procurando por algo específico?"
              className={`${saira} font-saira placeholder-transparent text-texts-text peer focus:outline-none focus:ring-1 focus:ring-brand-blue w-[352px] h-[42px] px-4 py-[10px] bg-[#F3F5F6] rounded-lg search-input`}
            />
            <label 
              htmlFor="searchProduct"
              className={`${saira} font-saira absolute transition-all top-3 left-3 text-texts-text text-sm peer-placeholder-shown:flex peer-focus:hidden`}
            >
              Procurando por algo específico?
            </label>
            <button className='absolute top-2 right-3 border-none bg-transparent'>
              <MagnifyingGlass 
                className='w-6 h-6 text-texts-text'
                alt='buscar'
              />
            </button>
          </div>
          <span className='relative inline-flex'>
            <button>
              <ShoppingBagOpen 
                className='w-6 h-6 text-texts-text'
                alt='buscar'
              />
            </button>
            <span className={`absolute ${saira} font-saira w-[17px] h-[17px] -bottom-2 right-0 inline-flex items-center justify-center p-[5px] text-[10px] font-medium leading-none text-shapes-01 transform translate-x-1/2 -translate-y-1/2 bg-others-delete rounded-full`}>0</span>
          </span>
        </div>
      </div>
      <main className={`${saira} font-saira w-screen h-full bg-page-background px-40 -mx-4 pb-[60px]`}>
        {children}
      </main>
    </div>
  )
}

export default Header;