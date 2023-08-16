import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Photos = () => {
    const getYear = () => {
        return new Date().getUTCFullYear()
    }

    return (
        <div className="card">
            <h1 className="headerText">Photos</h1>
            <figure>
                <Link target="_blank" to="http://medsofficial.bandcamp.com">
                    <img className="medsImage" src="/pesoscherchBB.webp" alt="cherchBB" />
                    <figcaption className="captionA">© {getYear()} Nicholas Fallon, all rights reserved.</figcaption>
                </Link>
            </figure>
            <figure>
                <Link target="_blank" to="http://medsofficial.bandcamp.com">
                    <img className="medsImage" src="/tbd_dd1.jpg" alt="bb1Image" />
                    <figcaption className="captionA">© {getYear()} Dana Distortion, all rights reserved.</figcaption>
                </Link>
            </figure>
            <figure>
                <Link target="_blank" to="http://medsofficial.bandcamp.com">
                    <img className="medsImage" src="/The-Bottom-Dollars-29-868x580.jpg" alt="bb1Image" />
                    <figcaption className="captionA">© {getYear()} Nicholas Fallon, all rights reserved.</figcaption>
                </Link>
            </figure>
            <figure>
                <Link target="_blank" to="http://medsofficial.bandcamp.com">
                    <img className="medsImage" src="/the bottom dollars-45.jpg" alt="bb1Image" />
                    <figcaption className="captionA">© {getYear()} Kylie Squiers, all rights reserved.</figcaption>
                </Link>
            </figure>
            <figure>
                <Link target="_blank" to="http://medsofficial.bandcamp.com">
                    <img className="medsImage" src="https://ef4537.p3cdn1.secureserver.net/wp-content/uploads/2015/01/The-Bottom-Dollars-40-868x580.jpg" alt="bb2Image" />
                    <figcaption className="captionA">© {getYear()} Nicholas Fallon, all rights reserved.</figcaption>
                </Link>
            </figure>
            <figure>
                <Link target="_blank" to="http://medsofficial.bandcamp.com">
                    <img className="medsImage" src="/the bottom dollars-50.jpg" alt="bergGuitImage" />
                    <figcaption className="captionA">© {getYear()} Kylie Squiers, all rights reserved.</figcaption>
                </Link>
            </figure>
            <figure>
                <Link target="_blank" to="http://medsofficial.bandcamp.com">
                    <img className="medsImage" src="/the bottom dollars-48.jpg" alt="jerImage" />
                    <figcaption className="captionA">© {getYear()} Kylie Squiers, all rights reserved.</figcaption>
                </Link>
            </figure>
            <figure>
                <Link target="_blank" to="http://medsofficial.bandcamp.com">
                    <img className="medsImage" src="/the bottom dollars-49.jpg" alt="chrisImage" />
                    <figcaption className="captionA">© {getYear()} Kylie Squiers, all rights reserved.</figcaption>
                </Link>
            </figure>
            <figure>
                <Link target="_blank" to="http://medsofficial.bandcamp.com">
                    <img className="medsImage" src="/the bottom dollars-55.jpg" alt="cherchImage" />
                    <figcaption className="captionA">© {getYear()} Kylie Squiers, all rights reserved.</figcaption>
                </Link>
            </figure>
        </div>
    )
}

export default Photos
