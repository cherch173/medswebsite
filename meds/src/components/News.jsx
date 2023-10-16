import React from 'react'
import { Link } from 'react-router-dom'

const News = () => {
  return (
    <div>
        <div className="card">
            <h3>News</h3>
            <br />
            <Link to="https://open.spotify.com/artist/1ZS6JkgfS2sUjAnP9SrK0d" target="blank">
                <img src="meds/public/meds_gardner2.jpg" alt="MedsSpotifyIsabella" />
                <figcaption>© Ana Becker, all rights reserved.</figcaption>
            </Link>
            <br />
            <h5>Debut Single "An Unexpectede Visit to the Isabella Stewart Gardner Museum" to be released October 20, 2023</h5>
            <p>this will be text about it</p>
        </div>
      
    </div>
  )
}

export default News
