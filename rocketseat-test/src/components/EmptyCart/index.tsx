import Image from 'next/image'

export const EmptyCart = () => {
  return (
    <div className='mt-10 w-[46rem] opacity-50'>
      <Image
        src={'/EmptyShopCart.svg'}
        width={1597}
        height={785}
        alt=''
      />
    </div>
  )
}
