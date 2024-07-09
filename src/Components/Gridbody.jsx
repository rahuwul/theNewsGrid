import React, {useState,useEffect} from 'react'
import Card from './Card'
import data from '../SampleOutput.json'

export default function Gridbody(props) {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    fetchNews();
  }, [props.country, props.category, props.apikey]); // Dependency array ensures useEffect runs on prop change

  const fetchNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=e243412e09af41afa03e28dfa5ea65e8`;
    setLoading(true);

    try {
      let response = await fetch(url);
      let parsedData = await response.json();

      setArticles(parsedData.articles);
      console.log(articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }

    setLoading(false);
  }; 
  return (
    <>
<div className='flex  justify-center items-center  max-lg:ml-[18rem] max-md:ml-[16rem] max-sm:ml-[3rem] ml-[20rem] mr-4 mt-24 overflow-y-auto'>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 mx-auto'>
  {articles.map((item, index) => (
      item.title!='[Removed]' && <Card key={index} imageURL={item.urlToImage} title={item.title} newsUrl={item.url} description={item.description} source={item.source.name} timestamp={item.publishedAt} />
      ))}
  </div>
</div>

    </>
  )
}
