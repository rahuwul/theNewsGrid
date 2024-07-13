import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ind from '../assets/indiaflag.svg';
import us from '../assets/usa flag.svg';
import backArrow from '../assets/Back Arrow.svg';
import backArrowDark from '../assets/backarrowdark.svg'

export default function Sidebar({ onCountryChange, selectedCountry,dark }) {
  const items = [
    { name: 'General', route: '/' },
    { name: 'Business', route: '/business' },
    { name: 'Entertainment', route: '/entertainment' },
    { name: 'Health', route: '/health' },
    { name: 'Science', route: '/science' },
    { name: 'Technology', route: '/technology' }
  ];

  const [activeItem, setActiveItem] = useState(items[0].route);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleClick = (route) => {
    setActiveItem(route);
  };

  const handleCountryClick = (countryCode) => {
    onCountryChange(countryCode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`relative `}>
      <button
        data-drawer-target={`default-sidebar`}
        data-drawer-toggle={`default-sidebar`}
        aria-controls={`default-sidebar`}
        type="button"
        className={`fixed w-16 z-50 top-20 -left-4 m-4 p-2 ${sidebarOpen ? "rotate-180 translate-x-60 transition-transform" : "rotate-0 transition-transform"}  rounded-lg sm:hidden`}
        onClick={toggleSidebar} // Toggle sidebar visibility on button click
      >
        <span className={`sr-only`}>Open sidebar</span>
        <img src={dark?backArrow:backArrowDark} alt="Toggle Sidebar" />
      </button>
      <aside
        id={`default-sidebar`}
        className={`fixed left-4 top-24 z-40 w-72 max-lg:w-64 max-md:w-56 transition-transform ${sidebarOpen ? '' : '-translate-x-full sm:translate-x-0'}`}
        aria-label="Sidebar"
      >
        <div className={`h-full px-3 py-4 rounded-2xl shadow-xl overflow-y-auto ${dark?'bg-[#171717] ':'bg-[#f5f5f5] '} `}>
          <ul className={`space-y-2 font-medium`}>
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.route}
                  onClick={() => handleClick(item.route)}
                  className={`flex items-center h-14 md:h-16 p-2 rounded-lg group transition ease-out duration-300 ${
                    activeItem === item.route ?
                      (dark ? 'text-[#171717] bg-[#7FFF9B]' : 'text-[#e9e9e9] bg-[#235347]')
                      :  (dark ? 'text-[#e9e9e9] hover:bg-[#7FFF9B] hover:text-[#171717]' : 'text-[#171717] hover:bg-[#235347] hover:text-[#e9e9e9]')
                  }`}
                  
                >
                  <span className={`ms-3`}>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className={`grid grid-row-2 gap-2 md:grid-cols-2 px-20 py-5`}>
            <div className={`flex flex-col items-center`}>
              <img
                src={ind}
                onClick={() => handleCountryClick('in')}
                alt="India"
                className={`flex items-center justify-center 
                  ${selectedCountry === 'in' ? 
                   (dark? 'outline outline-4 outline-[#7FFF9B] rounded-sm':'outline outline-4 outline-[#235347] rounded-sm') :
                     ('')}
                      w-10 cursor-pointer`}
              />
              <span className={`text-xs pt-2 
                ${selectedCountry === 'in' ?
                 (dark?'text-[#7FFF9B] font-bold':'text-[#235347] font-bold') : (dark?'text-[#e9e9e9]':'text-[#171717]')}
                 `}>
                India
              </span>
            </div>
            <div className={`flex flex-col items-center`}>
              <img
                src={us}
                onClick={() => handleCountryClick('us')}
                alt="USA"
                className={`flex items-center justify-center 
                  ${selectedCountry === 'us' ? 
                   (dark? 'outline outline-4 outline-[#7FFF9B] rounded-sm':'outline outline-4 outline-[#235347] rounded-sm') :
                     ('')}
                   w-10 cursor-pointer`}
              />
             <span className={`text-xs pt-2 
                ${selectedCountry === 'us' ?
                 (dark?'text-[#7FFF9B] font-bold ':'text-[#235347] font-bold') : (dark?'text-[#e9e9e9]':'text-[#171717]')}
                 `}>
                USA
              </span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
