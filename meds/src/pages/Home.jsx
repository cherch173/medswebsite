import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Tour from './Tour'
import Photos from '../components/Photos'

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
            <h1 className="medsText" ref={scrollDownRef}>meds</h1>
            {/* <button className="button" onClick={scrollDown}>scroll down</button> */}
            <Tour />
            <br />
            <Photos />
            <button className="button" onClick={scrollUp} ref={scrollUpRef} >jump to top</button>
        </div>
    )
}

export default Home
