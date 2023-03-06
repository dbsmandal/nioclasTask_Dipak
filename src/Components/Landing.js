import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='landing_screen'>
        <h1>Welcome to Nioclass Assignment</h1>
        <Link to='/home'>
            <button className='btn' >Enter</button>
        </Link>


      
    </div>
  )
}

export default Landing
