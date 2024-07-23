import React from "react";
import SavedCard from "./SavedCard";

export default function Saved(props) {
  const savedNews = props.savedData;
  console.log("savednewssss",savedNews);

  return (
    <div className="flex justify-center items-center max-lg:ml-[18rem] max-md:ml-[16rem] max-sm:ml-[3rem] ml-[20rem] mr-4 mt-24 overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-auto">
        {savedNews?.map((item, index) => (
          <SavedCard
            key= {item._id} 
            imageURL={item.urlToImage}
            title={item.title}
            newsUrl={item.url}
            description={item.description}
            source={item.source.name}
            timestamp={item.publishedAt}
            dark={props.dark}
          />
        ))}
      </div>
    </div>
  );
}
