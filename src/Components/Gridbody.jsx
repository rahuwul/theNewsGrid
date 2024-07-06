import React from 'react'


export default function Gridbody() {
  const data={
    title:"Lorem Ipsum Dolor",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the...",
    date:"22th July 2024",
    source:"Times Of India",

  }
  return (
    <>
   <div className='flex-1 bg-[#171717] max-lg:ml-[18rem] max-md:ml-[16rem] max-sm:ml-[1rem] ml-[22rem] mr-4 mt-24 overflow-y-auto'>
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 '>
    <div className='bg-red-500 h-72'>.</div>
    <div className='bg-red-500 h-72'>.</div>
    <div className='bg-red-500 h-72'>.</div>
    <div className='bg-red-500 h-72'>.</div>
    <div className='bg-red-500 h-72'>.</div>
    <div className='bg-red-500 h-72'>.</div>
    <div className='bg-red-500 h-72'>.</div>
    <div className='bg-red-500 h-72'>.</div>
    <div className='bg-red-500 h-72'>.</div>
    <div className='bg-red-500 h-72'>.</div>
    <div className='bg-red-500 h-72'>.</div>
    <div className='bg-red-500 h-72'>.</div>
    <div className='bg-red-500 h-72'>.</div>
    <div className='bg-red-500 h-72'>.</div>
    <div className='bg-red-500 h-72'>.</div>
    </div>
   </div>
    </>
  )
}
