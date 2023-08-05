import React from 'react'
import { Link } from 'react-router-dom'
import Tour from './Tour'

const Home = () => {
    const getYear = () => {
        return new Date().getUTCFullYear()
      }

    return (
        <div>
            <h3 className="medsText">meds</h3>
            <Tour />
            <br />
            <h3 className="medsText">photos</h3>
            <Link target="_blank" to="http://medsofficial.bandcamp.com">
                <img className="medsImage" src="public/tbd_dd1.jpg" alt="bb1Image" />
            </Link>
            <Link target="_blank" to="http://medsofficial.bandcamp.com">
                <img className="medsImage" src="public/The-Bottom-Dollars-29-868x580.jpg" alt="bb1Image" />
            </Link>
            <Link target="_blank" to="http://medsofficial.bandcamp.com">
                <img className="medsImage" src="public/the bottom dollars-45.jpg" alt="bb1Image" />
            </Link>
            <Link target="_blank" to="http://medsofficial.bandcamp.com">
                <img className="medsImage" src="https://ef4537.p3cdn1.secureserver.net/wp-content/uploads/2015/01/The-Bottom-Dollars-40-868x580.jpg" alt="bb2Image" />
            </Link>
            <br />
            <br />
        </div>
    )
}

export default Home
