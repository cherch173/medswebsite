import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Tour from './Tour'

const Home = () => {
    const getYear = () => {
        return new Date().getUTCFullYear()
    }

    const scrollDownRef = useRef()
    const scrollallTheWayDownRef = useRef()
    const scrollUpRef = useRef()


    const scrollUp = () => {
        scrollDownRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollDown = () => {
        scrollUpRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollBottom = () => {
        scrollallTheWayDownRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <h3 className="medsText" ref={scrollDownRef}>meds</h3>
            <Tour />
            <br />
            <h3 className="medsText">photos</h3>
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
            <button className="button" onClick={scrollUp}>jump to top</button>
        </div>
    )
}

export default Home
