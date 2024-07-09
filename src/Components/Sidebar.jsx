import React, { useState } from "react";
import {Link} from 'react-router-dom';
import globe from '../assets/globe.svg';
import ind from '../assets/indiaflag.svg';
import us from '../assets/usa flag.svg';

export default function Sidebar() {
  const items = [
    { name: 'General', route: '/' },
    { name: 'Business', route: '/business' },
    { name: 'Entertainment', route: '/entertainment' },
    { name: 'Health', route: '/health' },
    { name: 'Science', route: '/science' },
    { name: 'Technology', route: '/technology' }
  ];

  const [activeItem, setActiveItem] = useState(items[0].route);

  const handleClick = (route) => {
    setActiveItem(route);
  };

  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed left-4 top-24 z-40 w-72 max-lg:w-64 max-md:w-56 transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 rounded-2xl overflow-y-auto bg-[#171717]">
          <ul className="space-y-2 font-medium">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.route}
                  onClick={() => handleClick(item.route)}
                  className={`flex items-center h-14 p-2 rounded-lg group transition ease-out duration-300 ${
                    activeItem === item.route 
                      ? 'text-[#171717] bg-[#7FFF9B]'
                      : 'text-white  hover:bg-[#7FFF9B] hover:text-[#171717]'
                  }`}
                >
                  <span className="ms-3">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-3 gap-1 px-10 py-5">
            <img src={ind} className="w-10"/>
            <img src={us} className="w-10"/>
            <img src={globe} className="w-10"/>
          </div>
        </div>
      </aside>
    </>
  );
}
