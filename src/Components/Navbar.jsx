import React from 'react'

export default function Navbar() {
  return (
    <>
  <nav class="bg-[#313131] h-24  fixed w-full z-80 top-0 start-0 ">
  <div class="mx-4 my-2 bg-[#171717] rounded-xl flex items-center justify-between  p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">theNewsGrid</span>
    </a>
    <div class="hidden md:block">
      <h1 class="text-2xl font-semibold dark:text-white">22th July 2024</h1>
    </div>
    <div class="relative">
      <input type="text" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6M3 10a7 7 0 1114 0 7 7 0 01-14 0z"></path>
        </svg>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}
