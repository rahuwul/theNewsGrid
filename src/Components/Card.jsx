import React, { useState, useEffect } from 'react';
import altImage from '../assets/noimage.svg';
import noImage from '../assets/noimage.svg';
import Contextmenu from '../Components/Contextmenu';

export default function Card(props) {
  const [clicked, setClicked] = useState(false);
  const [saved,setSaved]=useState(false);
  const [points, setPoints] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleClick = () => setClicked(false);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const truncateText = (text, maxChars) => {
    if (!text) {
      return '';
    }

    if (text.length > maxChars) {
      return text.slice(0, maxChars) + '...';
    }

    return text;
  };

  const handleSaveNews = () => {
    const newsData = {
      source: { id:null,name: props.source },
      title: props.title,
      description: props.description,
      url: props.newsUrl,
      urlToImage: props.imageURL,
      publishedAt: props.timestamp,
    };
    
    props.onSaveNews(newsData);
    setSaved(true);
  };
  const handleUnsaveNews = () => {
   props.onUnsaveNews()
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(props.newsUrl).then(() => {
      alert("Link copied to clipboard", props.newsUrl);
    }).catch(err => {
      console.error("Failed to copy link:", err);
    });
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
    <>
      <div
        onContextMenu={(e) => {
          e.preventDefault();
          console.log('Context menu event triggered'); // Debug log
          setClicked(true);
          setPoints({
            x: e.pageX,
            y: e.pageY,
          });
        }}
        className={`w-full p-4 max-w-sm rounded-lg ${props.dark ? 'bg-[#171717] hover:bg-[#222222] shadow' : 'bg-[#f5f5f5] hover:bg-[#ededed] shadow-md'}`}
      >
        <div className="overflow-hidden rounded-lg h-36 max-md:h-44">
          <a href={props.newsUrl} target="_blank" rel="noopener noreferrer">
            <img className="w-full h-full object-cover" src={props.imageURL ? props.imageURL : noImage} alt={altImage} />
          </a>
        </div>
        <div className="px-1 py-2">
          <a href={props.newsUrl} target="_blank" rel="noopener noreferrer">
            <div className={`text-md leading-5 font-semibold ${props.dark ? 'text-[#E9E9E9] hover:text-[#7FFF9B]' : 'text-[#171717] hover:text-[#235347]'} transition ease-out duration-300`}>
              {truncatedTitle}&nbsp;&nbsp;&nbsp;
              <i className={`fa-solid fa-arrow-turn-up ${props.dark ? 'text-[#7FFF9B]' : 'text-[#235347]'}`}></i>
            </div>
          </a>
          <div className={`flex ${props.dark ? 'text-[#E9E9E9]' : 'text-[#171717]'} cursor-pointer text-xs items-center mt-1 mb-2`}>
            {truncatedDescription ? truncatedDescription : 'The specifics for this item have not been provided'}
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-[0.6rem] cursor-pointer font-bold ${props.dark ? 'text-[#7FFF9B]' : 'text-[#235347]'} `}>{props.source}</span>
            <span className={`text-[0.6rem] cursor-pointer font-bold ${props.dark ? 'text-[#7FFF9B]' : 'text-[#235347]'} `}>{formattedTime}</span>
          </div>
        </div>
      </div>
      {clicked && <Contextmenu top={points.y} left={points.x} onSave={handleSaveNews} onUnsave={handleUnsaveNews} onCopy={handleCopyLink} saved={saved} />}
    </>
  );
}
