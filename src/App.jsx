import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Navbar from './components/Header/navbar'

function App() {

  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks)
  }

  const handleSpentTime = (time) => {
    setReadingTime(readingTime + time)
  }

  return (
    <>
    <Navbar></Navbar>
    <div className='grid grid-cols-3 container mx-auto gap-6'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleSpentTime={handleSpentTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
    </>
  )
}

export default App
