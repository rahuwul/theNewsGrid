import React from 'react'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'

export default function Mode({changeMode,dark}) {
  const onChangeMode=()=>{
    changeMode(!dark);
    
  }
  return (
    <div onClick={()=>onChangeMode(dark)} className={`fixed z-96 cursor-pointer bottom-10 right-10 ${dark?'bg-[#f5f5f5]':'bg-[#171717]'}  p-5 rounded-full `}>
        <img src={dark?sun:moon} alt="light" className=' w-6 md:w-10' />
    </div>
  )
}
