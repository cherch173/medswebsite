import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Photos = () => {
    const getYear = () => {
        return new Date().getUTCFullYear()
    }

    return (
        <>
            <h1 className="headerText">Photos</h1>
            <div className="card">
                <figure>
                    <img className="medsImage" src="/pesoscherchBB.webp" alt="cherchBB" />
                    <Link target="_blank" to="https://www.nickfallonphotography.com/music">
                        <figcaption className="captionA">© {getYear()} Nick Fallon, all rights reserved.</figcaption>
                    </Link>
                </figure>
                <figure>
                    <img className="medsImage" src="/tbd_dd1.jpg" alt="bb1Image" />
                    <Link target="_blank" to="https://www.instagram.com/danadistortion">
                        <figcaption className="captionA">© {getYear()} Dana Distortion, all rights reserved.</figcaption>
                    </Link>
                </figure>
                <figure>
                    <img className="medsImage" src="/The-Bottom-Dollars-29-868x580.jpg" alt="bb1Image" />
                    <Link target="_blank" to="https://www.nickfallonphotography.com/music">
                        <figcaption className="captionA">© {getYear()} Nick Fallon, all rights reserved.</figcaption>
                    </Link>
                </figure>
                <figure>
                    <img className="medsImage" src="https://ef4537.p3cdn1.secureserver.net/wp-content/uploads/2015/01/The-Bottom-Dollars-40-868x580.jpg" alt="bb2Image" />
                    <Link target="_blank" to="https://www.nickfallonphotography.com/music">
                        <figcaption className="captionA">© {getYear()} Nick Fallon, all rights reserved.</figcaption>
                    </Link>
                </figure>
                <figure>
                    <img className="medsImage" src="/the bottom dollars-50.jpg" alt="bergGuitImage" />
                    <Link target="_blank" to="https://www.instagram.com/ks.photog/">
                        <figcaption className="captionA">© {getYear()} Kylie Squiers, all rights reserved.</figcaption>
                    </Link>
                    <Link to="https://www.instagram.com/p/CnwwrKROT4B/" target="_blank">
                        <button className="viewAllButton">view all</button>
                    </Link>
                </figure>
                <figure>
                    <img className="medsImage" src="/the bottom dollars-48.jpg" alt="jerImage" />
                    <Link target="_blank" to="https://www.instagram.com/ks.photog/">
                        <figcaption className="captionA">© {getYear()} Kylie Squiers, all rights reserved.</figcaption>
                    </Link>
                    <Link to="https://www.instagram.com/p/CnwwrKROT4B/" target="_blank">
                        <button className="viewAllButton">view all</button>
                    </Link>
                </figure>
                <figure>
                    <img className="medsImage" src="/the bottom dollars-55.jpg" alt="cherchImage" />
                    <Link target="_blank" to="https://www.instagram.com/ks.photog/">
                        <figcaption className="captionA">© {getYear()} Kylie Squiers, all rights reserved.</figcaption>
                    </Link>
                    <Link to="https://www.instagram.com/p/CnwwrKROT4B/" target="_blank">
                        <button className="viewAllButton">view all</button>
                    </Link>
                </figure>
            </div>
        </>
    )
}

export default Photos
