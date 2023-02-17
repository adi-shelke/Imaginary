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
  const [searchedResults, setsearchedResults] = useState(null)
  const [searchTimeout, setsearchTimeout] = useState(null)

  //use effect hook that will run only once at the start once the component is load
  useEffect(() => {
    const fetchPosts = async () =>{
      setLoading(true)
      try {
        const response = await fetch("https://imaginary-fh4p.onrender.com/api/v1/post",{
          method:"GET",
          headers:{
            "Content-Type":"application/json",
          },
        })
        if(response.ok){
          const result = await response.json()
          setAllPosts(result.data.reverse())

        }
      } catch (error) {
        alert (error)
      }finally{
        setLoading(false)
      }
    }
    fetchPosts()
  }, []);

  const handleSearchChange = (e) =>{
    clearTimeout(searchTimeout)
    setSearchText(e.target.value)
    setsearchTimeout(
      setTimeout(()=>{
        const searchResults =  AllPosts.filter((item)=>item.name.toLowerCase().includes(SearchText.toLowerCase())|| item.prompt.toLowerCase().includes(SearchText.toLowerCase()))
  
        setsearchedResults(searchResults)
      },500)
    )
  }
  

  return (
    <section className='max-w-7xl mx-auto'>
      <div> 
        <h1 className='font-extrabold text-[#222328] text-[32px]'>The Community Showcase</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[600px]'>Browse through a collection of imaginative and visually stunning images</p>
      </div>

      <div className='mt-16 '>
        <FormField 
        LabelName="Search posts"
        type="text"
        name="text"
        placeholder="Search posts"
        value={SearchText}
        handleChange={handleSearchChange}
        />
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
                data={searchedResults}
                title="No search results found"
                />
              ) : (
                <RenderCards 
                data={AllPosts}
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