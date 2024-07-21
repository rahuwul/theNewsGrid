import React from 'react'

export default function Contextmenu({ top, left, onSave,onUnsave, onCopy, saved }) {
  return (
    <div className={`absolute top-[${top}px] left-[${left}px]`}>
    <div className='bg-[#171717] w-32 h-20 grid grid-row-2 rounded-lg object-cover   '>
        <div onClick={saved?onUnsave:onSave} className='flex px-2 text-[#7fff9b] hover:bg-[#222222] rounded-t-lg text-sm cursor-pointer pointer w-full'><button>{saved?"Unsave":"Save"} </button></div>
      
        <div onClick={onCopy} className='flex px-2 text-[#7fff9b] hover:bg-[#222222] rounded-b-lg text-sm cursor-pointer pointer w-full'><button>Copy Link</button></div>
      
    </div>
    </div>
  )
}
