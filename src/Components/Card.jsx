import React from 'react'
import placeholderimage from '../assets/placeholderimage.png'

export default function Card(props) {
  return (
 

<div className="w-full p-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  <div className="overflow-hidden rounded-lg">
    <img className="object-cover " src={placeholderimage} alt="product image" />
  </div>
  <div className="px-1 py-2">
    <a href="#">
      <h5 className="text-md font-semibold text-white">{props.title}</h5>
    </a>
    <div className="flex text-white text-xs items-center mt-1 mb-2">
     {props.description}
    </div>
    <div className="flex items-center justify-between">
      <span className="text-xs font-bold text-gray-900 dark:text-white">{props.source}</span>
      <span className="text-xs font-bold text-gray-900 dark:text-white">{props.date}</span>
    </div>
  </div>
</div>


  )
}
