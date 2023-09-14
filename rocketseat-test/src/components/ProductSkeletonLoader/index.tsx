export const ProductSkeletonLoader = () => {
  return (
    <div className="flex flex-col w-32 h-[189px] md:w-64 md:h-[378px] 
      bg-white/40 rounded-lg animate-pulse">
      <div className="w-32 h-[189px] md:w-64 md:h-[300px] rounded-t-lg bg-gray-300"></div>
      <div className="h-6 mt-4 rounded-full bg-gray-300"></div>
      <div className="h-4 mt-2 rounded-full bg-gray-300"></div>
    </div>
  );
};