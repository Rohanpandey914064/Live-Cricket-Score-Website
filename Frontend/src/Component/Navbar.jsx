import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-10 border border-black flex justify-center gap-5 bg-blue-500 text-white'>
      <Link to="/">Home</Link>     
      <Link to="/match">Match</Link>
      <Link to="/table">Table</Link>
    </div>
  )
}

export default Navbar