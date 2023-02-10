import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home,CreatePost } from './pages'
import Header from './components/Header'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
      <main className='sm:p8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
    </>
  )
}
export default App