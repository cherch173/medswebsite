import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Photos = () => {
    const getYear = () => {
        return new Date().getUTCFullYear()
    }

    return (
        <div className="card">
            <h1 className="medsText">photos</h1>
            <Link target="_blank" to="http://medsofficial.bandcamp.com">
                <figure>
                    <img className="medsImage" src="/pesoscherchBB.webp" alt="cherchBB" />
                    <figcaption>© {getYear()} Nathan Fallon, all rights reserved.</figcaption>
                </figure>
            </Link>
            <figure>
                <Link target="_blank" to="http://medsofficial.bandcamp.com">
                    <img className="medsImage" src="/tbd_dd1.jpg" alt="bb1Image" />
                    <figcaption>© {getYear()} Dana Distortion, all rights reserved.</figcaption>
                </Link>
            </figure>
            <figure>
                <Link target="_blank" to="http://medsofficial.bandcamp.com">
                    <img className="medsImage" src="/The-Bottom-Dollars-29-868x580.jpg" alt="bb1Image" />
                    <figcaption>© {getYear()} Nathan Fallon, all rights reserved.</figcaption>
                </Link>
            </figure>
            <figure>
                <Link target="_blank" to="http://medsofficial.bandcamp.com">
                    <img className="medsImage" src="/the bottom dollars-45.jpg" alt="bb1Image" />
                    <figcaption>© {getYear()} Kylie Squiers, all rights reserved.</figcaption>
                </Link>
            </figure>
            <figure>
                <Link target="_blank" to="http://medsofficial.bandcamp.com">
                    <img className="medsImage" src="https://ef4537.p3cdn1.secureserver.net/wp-content/uploads/2015/01/The-Bottom-Dollars-40-868x580.jpg" alt="bb2Image" />
                    <figcaption>© {getYear()} Nathan Fallon, all rights reserved.</figcaption>
                </Link>
            </figure>
            <br />
        </div>
    )
}

export default Photos
