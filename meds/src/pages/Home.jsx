import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Tour from './Tour'
import Photos from '../components/Photos'
import Footer from '../components/Footer'

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
            <br />
            <br />
            <Tour />
            <br />
            <Photos />
            <br />
            <br />Í
            <button className="button" onClick={scrollUp} ref={scrollUpRef} >beam up</button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default Home
