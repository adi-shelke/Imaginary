import React from 'react'
import { useState,useEffect } from 'react'
import {Loader, Card, FormField} from "../components"
const RenderCards = ({data,title}) =>{
  if(data?.length >0){
    return data.map((post)=> <Card  key={post._id} {...post}/>)
  }
  return (
    <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>{title}</h2>
  )
}

const Home = () => {
  const [Loading, setLoading] = useState(false)
  const [AllPosts, setAllPosts] = useState(null)
  const [SearchText, setSearchText] = useState("")
  return (
    <section className='max-w-7xl mx-auto'>
      <div> 
        <h1 className='font-extrabold text-[#222328] text-[32px]'>The Community Showcase</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[600px]'>Browse through a collection of imaginative and visually stunning images</p>
      </div>

      <div className='mt-16 '>
        <FormField />
      </div>
      <div className='mt-10'>
        {Loading ? (
          <div className='flex justify-center items-center'> 
            <Loader />
          </div>
        ): (
          <>
          {SearchText && (
            <h2 className='font-medium text-[#666e75] text-xl mb-3'>
              Showing results for <span className='text-[#222328]'>{SearchText}</span>
            </h2>
          )}

            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
              {SearchText ?(
                <RenderCards
                data={[]}
                title="No search results found"
                />
              ) : (
                <RenderCards 
                data={[]}
                title="no posts found"
                />
              )}
            </div>

          </>
        )}
      </div>
    </section>
  )
}

export default Home