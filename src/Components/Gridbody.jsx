import React, { useState, useEffect } from 'react';
import Card from './Card';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';



export default function Gridbody(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    setPage(1); // Reset page to 1 on props change
    fetchNews(1); // Fetch news for the first page
  }, [props.country, props.category]);

  const fetchNews = async (page) => {
    const url = `https://newsapi.org/v2/top-headlines?language=en&country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);

    try {
      const response = await fetch(url);
      const parsedData = await response.json();
      if (page === 1) {
        setArticles(parsedData.articles); // Reset articles for the first page
      } else {
        setArticles((prevArticles) => [...prevArticles, ...parsedData.articles]);
      }
      setTotalResults(parsedData.totalResults);
    } catch (error) {
      console.error('Error fetching news:', error);
    }

    setLoading(false);
  };

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    await fetchNews(nextPage);
  };

  return (
    <>
     
     <div className="flex justify-center items-center max-lg:ml-[18rem] max-md:ml-[16rem] max-sm:ml-[3rem] ml-[20rem] mr-4 mt-24 overflow-y-auto">
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        
      >
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-auto">
            {articles?.map((item, index) => (
              item.title !== '[Removed]' && (
                <Card
                  key={index}
                  imageURL={item.urlToImage}
                  title={item.title}
                  newsUrl={item.url}
                  description={item.description}
                  source={item.source.name}
                  timestamp={item.publishedAt}
                  dark={props.dark}
                />
              )
            ))}
          </div>
       
      </InfiniteScroll>
      </div>
    </>
  );
}
