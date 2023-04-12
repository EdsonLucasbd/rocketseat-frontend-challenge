import { saira } from '@/utils/fonts';
import Link from 'next/link';
import React from 'react';

export const CategoryNav = () => {
  return (
    <div className='flex flex-row w-full items-center justify-between'>
      <div className="flex flex-row gap-10">
        <Link href='/' className={`${saira} font-saira font-semibold`}>Todos os produtos</Link>
        <Link href='/' className={`${saira} font-saira font-normal text-texts-complement`}>Camisetas</Link>
        <Link href='/' className={`${saira} font-saira font-normal text-texts-complement`}>Canecas</Link>
      </div>
      <>
        <select name="orderBy" id="orderBy">Organizar por</select>
      </>
    </div>
  );
}