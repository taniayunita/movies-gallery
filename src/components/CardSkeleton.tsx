import React from 'react'

const CardSkeleton = () => {
  return (
    <div className="bg-gray-100 h-[350px] p-0 sm:p-4 sm:h-64 rounded-2xl relative shadow-lg gap-5 select-none ">
      <div className="h-full w-full rounded-xl bg-gray-200 animate-pulse" >
      </div>
    </div>
  )
}

export default CardSkeleton