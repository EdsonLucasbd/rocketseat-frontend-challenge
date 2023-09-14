import React from 'react'

interface SkeletonLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className: string
}

export const SkeletonLoader = ({ className, ...rest }: SkeletonLoaderProps) => {
  return (
    <div
      className={`${className} flex bg-gray-300 rounded-lg animate-pulse`}
      {...rest}
    />
  )
}
