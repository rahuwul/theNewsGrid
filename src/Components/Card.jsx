import React from 'react';
import altImage from '../assets/noimage.svg';

export default function Card(props,{dark}) {
  const truncateText = (text, maxChars) => {
    if (!text) {
      return '';
    }
    
    if (text.length > maxChars) {
      return text.slice(0, maxChars) + '...';
    }
    
    return text;
  };
  const description = props.description;
  const truncatedDescription = truncateText(description, 150);

  const title = props.title;
  const truncatedTitle = truncateText(title, 50);

  const timestamp = props.timestamp;
  const date = new Date(timestamp);

  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const formattedTime = hours >= 12 
    ? `${hours === 12 ? 12 : hours % 12}:${minutes < 10 ? '0' + minutes : minutes} PM` 
    : `${hours === 0 ? 12 : hours}:${minutes < 10 ? '0' + minutes : minutes} AM`;

  return (
    <div className="w-full  p-4 max-w-sm rounded-lg shadow bg-[#171717] hover:bg-[#222222]">
      <div className="overflow-hidden rounded-lg h-36 max-md:h-44 " >
        <a href={props.newsUrl} target="_blank" rel="noopener noreferrer"><img className='w-full h-full object-cover' src={props.imageURL?props.imageURL:altImage} alt="news image" /></a>
      </div>
      <div className="px-1 py-2">
        <a href={props.newsUrl} target="_blank" rel="noopener noreferrer">
          <div className="text-md font-semibold text-[#E9E9E9] hover:text-[#7FFF9B] transition ease-out duration-300">
            {truncatedTitle}&nbsp;&nbsp;&nbsp;
            <i className="fa-solid fa-arrow-turn-up  text-[#7FFF9B]"></i>
          </div>
        </a>
        <div className="flex text-[#E9E9E9] cursor-pointer text-xs items-center mt-1 mb-2">
          {truncatedDescription?truncatedDescription:'The specifics for this item have not been provided'}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[0.6rem] cursor-pointer font-bold text-[#7FFF9B]">{props.source}</span>
          <span className="text-[0.6rem] cursor-pointer font-bold text-[#7FFF9B]">{formattedTime}</span>
        </div>
      </div>
    </div>
  );
}
