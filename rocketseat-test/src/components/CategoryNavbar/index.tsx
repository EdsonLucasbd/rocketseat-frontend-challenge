import { saira } from '@/utils/fonts';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const CategoryNav = () => {
  const router = useRouter()

  return (
    <div className='flex flex-row w-full items-center justify-between pt-[35px]'>
      <div className="flex flex-row gap-10">
        <Link href='/' className={`${saira} ${router.asPath === '/' && 'pb-1 border-b-4 border-b-others-orange_low font-semibold'} font-saira`}>Todos os produtos</Link>
        <Link href='/' className={`${saira} ${router.asPath === '/t-shirt' && 'pb-1 border-b-4 border-b-others-orange_low font-semibold'} font-saira font-normal text-texts-text`}>Camisetas</Link>
        <Link href='/' className={`${saira} ${router.asPath === '/mug' && 'pb-1 border-b-4 border-b-others-orange_low font-semibold'} font-saira font-normal text-texts-text`}>Canecas</Link>
      </div>
      <>
        <select 
          name="orderBy" 
          id="orderBy"
          className='bg-transparent w-[140px] h-6 text-texts-text'
        >
          <option hidden selected value="">Organizar por</option>
          <option 
            value="news"
            className='bg-background'
            >
              Novidades
            </option>
          <option 
            value="price-down"
            >
              Preço: Maior - menor
            </option>
          <option 
            value="price-up"
            >
              Preço: Menor - maior
            </option>
          <option 
            value="best-sellers"
            >
              Mais vendidos
            </option>
        </select>
      </>
    </div>
  );
}