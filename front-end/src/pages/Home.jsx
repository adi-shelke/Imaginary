import React from 'react'
import { useState,useEffect } from 'react'
import {Loader, Card, FormField} from "../components"


const Home = () => {
  const [Loading, setLoading] = useState(false)
  const [AllPosts, setAllPosts] = useState(null)
  return (
    <div>Home</div>
  )
}

export default Home