import { Moon, Sun } from '@phosphor-icons/react'
import React from 'react'
import useColorMode from '../../../hooks/useColorMode'

export const ThemeButton = () => {
  const [colorMode, setColorMode] = useColorMode()

  function handleButtonClick() {
    if (typeof setColorMode === 'function') {
      const newColorMode = colorMode === 'light' ? 'dark' : 'light';
      setColorMode(newColorMode);
    }
  }

  return (
    <button onClick={handleButtonClick} className='flex h-10 w-10 md:h-6 md:w-6 
      items-center justify-center rounded-md shadow ring-1 ring-slate-900/10
      dark:ring-dark-300'
    >
      {
        colorMode === 'dark' ? (
          <Sun className='text-others-orange_low dark:text-dark-200 
            animate-rotate-in-center h-6 w-6 md:w-4 md:h-4' weight='fill' />
        ) : (
          <Moon className='text-others-orange_low  animate-scale-up-center h-6 w-6 md:w-4 md:h-4' />
        )
      }
    </button>
  )
}
