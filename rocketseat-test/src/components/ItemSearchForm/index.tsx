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

  return (
    <div className='relative flex justify-between gap-4'>
      <input
        type="search"
        name="searchProduct"
        id="searchProduct"
        placeholder="Procurando por algo específico?"
        onChange={handleChange}
        className={`${saira} font-saira placeholder-transparent text-color-text peer focus:outline-none focus:ring-1 focus:ring-brand-blue w-[352px] h-[42px] px-4 py-[10px] bg-[#F3F5F6] rounded-lg search-input`}
      />
      <label
        htmlFor="searchProduct"
        className={`${saira} font-saira absolute transition-all top-3 left-3 text-color-text text-sm peer-placeholder-shown:flex peer-focus:hidden hidden`}
      >
        Procurando por algo específico?
      </label>
      <button className='absolute top-2 right-3 border-none bg-transparent'>
        <MagnifyingGlass
          className='w-6 h-6 text-color-text'
          alt='buscar'
          onClick={() => handleSearch(searchValue)}
        />
      </button>
    </div>
  )
}
