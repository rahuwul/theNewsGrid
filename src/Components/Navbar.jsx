import React from 'react';

export default function Navbar({ dark }) {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const monthName = monthNames[monthIndex];

  let suffix = 'th';
  if (day % 10 === 1 && day !== 11) suffix = 'st';
  else if (day % 10 === 2 && day !== 12) suffix = 'nd';
  else if (day % 10 === 3 && day !== 13) suffix = 'rd';

  const formattedDate = `${day}${suffix} ${monthName} ${year}`;

  return (
    <nav className={` ${dark ? 'bg-[#313131]' : 'bg-[#A2E0D1]'} h-24 fixed w-full z-80 top-0 start-0`}>
      <div className={`mx-4 my-2 h-20 ${dark ? 'bg-[#171717]' : 'bg-[#f5f5f5] shadow-xl'} rounded-xl flex items-center justify-between p-4`}>
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span id="logo" className={`self-center max-sm:text-lg text-2xl font-semibold whitespace-nowrap ${dark ? 'text-[#e9e9e9] hover:text-[#7FFF9B]' : 'text-[#171717] hover:text-[#235347]'} transition ease-out duration-300`}>
            <span id="the">the</span>NewsGrid
          </span>
        </a>
        <div className="hidden md:block">
          <h1 className={`text-md font-semibold ${dark ? 'text-white' : ''}`}>{formattedDate}</h1>
        </div>
        <div className="relative">
          <input type="text" className={`block max-sm:w-40 w-full p-2 pl-10 text-xs ${dark ? 'placeholder-[#171717] bg-[#7FFF9B]' : 'placeholder-[#e9e9e9] bg-[#235347]'} rounded-lg`} placeholder="Search..." />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-4 h-5" fill="none" stroke={`${dark ? '#171717' : '#e9e9e9'}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6M3 10a7 7 0 1114 0 7 7 0 01-14 0z"></path>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
