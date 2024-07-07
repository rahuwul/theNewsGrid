import React from 'react'
import Card from './Card'
import data from '../SampleOutput.json'

export default function Gridbody() {
  
  return (
    <>
<div className='flex  justify-center items-center  max-lg:ml-[18rem] max-md:ml-[16rem] max-sm:ml-[3rem] ml-[20rem] mr-4 mt-24 overflow-y-auto'>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 mx-auto'>
  {data.articles.map((item, index) => (
        <Card key={index} imageURL={item.urlToImage} title={item.title} description={item.description} source={item.source.name} timestamp={item.publishedAt} />
      ))}
  </div>
</div>

    </>
  )
}
