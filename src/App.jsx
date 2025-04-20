import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './Navbar/Navbar'

function App() {

  return (
    <>
    
     <Navbar></Navbar>
     

<div className="main-container flex text-center mt-5">
  <div className="left-container w-[65%]">
  <h1 className='text-3xl font-semibold'>Total Blogs: 4</h1>
  <Blogs></Blogs>
  </div>



  <div className="right-container w-[35%]">
    <h1 className='text-3xl font-semibold'>BookMark Count: 0</h1>
    <h1 className='text-3xl font-semibold'>Reading Count: 0</h1>
  </div>
</div>
    
    </>
  )
}

export default App
