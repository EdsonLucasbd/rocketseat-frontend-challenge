import { MagnifyingGlass } from '@phosphor-icons/react';
import { saira } from '@/utils/fonts';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const ItemSearchForm = () => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')

  function handleSearch(val: string) {
    router.push(`/search/${val}`)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setSearchValue(value)
  }

  function handleSearchByEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    const key = event.key
    if (key === 'Enter') {
      router.push(`/search/${searchValue}`)
    }
  }

  return (
    <div className='relative flex justify-between gap-4'>
      <input
        type="search"
        name="searchProduct"
        id="searchProduct"
        placeholder="Procurando por algo específico?"
        onChange={handleChange}
        onKeyDown={handleSearchByEnter}
        className={`${saira} font-saira placeholder-transparent text-color-text 
          peer focus:outline-none focus:ring-1 focus:ring-brand-blue w-44 md:w-[22rem] 
          h-[2.625rem] px-4 py-[.625rem] bg-[#F3F5F6] dark:bg-dark-900 
          dark:text-dark-300 rounded-lg search-input`}
      />
      <label
        htmlFor="searchProduct"
        className={`${saira} font-saira absolute transition-all top-1 md:top-3 left-3 
          text-color-text dark:text-dark-300 text-xs md:text-sm peer-placeholder-shown:flex
          peer-focus:hidden hidden`}
      >
        Procurando por algo específico?
      </label>
      <button className='absolute top-2 right-3 border-none bg-transparent'>
        <MagnifyingGlass
          className='w-5 h-5 md:w-6 md:h-6 text-color-text dark:text-dark-300'
          alt='buscar'
          onClick={() => handleSearch(searchValue)}
        />
      </button>
    </div>
  )
}
