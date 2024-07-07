import React from 'react';

export default function Card(props) {
  const truncateText = (text, maxChars) => {
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
    <div className="w-full p-4 max-w-sm rounded-lg shadow bg-[#171717]">
      <div className="overflow-hidden rounded-lg">
        <img className="object-cover" src={props.imageURL} alt="news image" />
      </div>
      <div className="px-1 py-2">
        <a href="#">
          <div className="text-md font-semibold text-white hover:text-[#7FFF9B] transition ease-out duration-300">
            {truncatedTitle}&nbsp;&nbsp;&nbsp;
            <i className="fa-solid fa-arrow-turn-up  text-[#7FFF9B]"></i>
          </div>
        </a>
        <div className="flex text-white text-xs items-center mt-1 mb-2">
          {truncatedDescription}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[0.6rem] font-bold text-[#7FFF9B]">{props.source}</span>
          <span className="text-[0.6rem] font-bold text-[#7FFF9B]">{formattedTime}</span>
        </div>
      </div>
    </div>
  );
}
