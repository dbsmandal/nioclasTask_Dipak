import React from 'react'
import { Link } from 'react-router-dom'
import './Landing.css'

const Landing = () => {
    return (
        <div className="home_screen">
            <div>
                <h1>Welcome to our Math Practice App</h1>
                <Link to='/home'>
                    <button className="button">Enter</button>
                </Link>
            </div>

        </div>

    )
}

export default Landing
