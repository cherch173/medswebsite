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
    const scrollUpRef = useRef()


    const scrollUp = () => {
        scrollDownRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollDown = () => {
        scrollUpRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div ref={scrollDownRef}>
            <h1 className="medsText" >meds</h1>
            <button className="button" onClick={scrollDown}>beam down</button>
            <Tour />
            <br />
            <Photos />
            <br />
            <button className="button" onClick={scrollUp} ref={scrollUpRef} >beam up</button>
        </div>
    )
}

export default Home
