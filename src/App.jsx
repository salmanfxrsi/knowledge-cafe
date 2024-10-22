import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Header/navbar'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <div className='grid grid-cols-3 container mx-auto'>
      <Blogs></Blogs>
    </div>
    </>
  )
}

export default App
