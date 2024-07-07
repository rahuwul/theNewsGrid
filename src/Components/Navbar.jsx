import React from 'react'

export default function Navbar() {
  const currentDate=new Date();
  const daySuffix = ['th', 'st', 'nd', 'rd'];

// Get the day, month, and year
const day = currentDate.getDate();
const monthIndex = currentDate.getMonth(); // January is 0, so no adjustment needed
const year = currentDate.getFullYear();

// Determine the suffix for the day
const dayFormatted = day + (daySuffix[(day - 1) % 10] || 'th');

// Array of month names
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Get the month name
const monthName = monthNames[monthIndex];

// Format the date as "24th July 2024"
const formattedDate = `${dayFormatted} ${monthName} ${year}`;
  return (
    <>
  <nav className="bg-[#313131] h-24   fixed w-full z-80 top-0 start-0 ">
  <div className="mx-4 my-2 h-20 bg-[#171717] rounded-xl flex items-center justify-between  p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span id='logo' className="self-center max-sm:text-lg text-2xl font-semibold whitespace-nowrap dark:text-white"><span id='the'>the</span>NewsGrid</span>
    </a>
    <div className="hidden md:block">
      <h1 className="text-md font-semibold dark:text-white">{formattedDate}</h1>
    </div>
    <div className="relative">
      <input type="text" className="block max-sm:w-40 w-full p-2 pl-10 text-xs placeholder-[#171717] italic rounded-lg bg-[#7FFF9B]" placeholder="Search..." />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg aria-hidden="true" className="w-4 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="#171717" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6M3 10a7 7 0 1114 0 7 7 0 01-14 0z"></path>
</svg>

      </div>
    </div>
  </div>
</nav>

    </>
  )
}
