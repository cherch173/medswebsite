import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Contact = () => {
    return (
        <div>
            <br />
            <h3 className="headerText">Contact</h3>
            <br />
            <div className="bioCard">
                <br />
                <Link to="mailto:booking@medsmusic.com" target="_blank">
                    <button className='button'>booking</button>    
                </Link>
                <br />
                <br />
                <Link to="mailto:mmmedddsss@gmail.com" target="_blank">
                    <button className='button'>press</button>    
                </Link>
                <br />
                <br />
                <Link to="mailto:mmmedddsss@gmail.com" target="_blank">
                    <button className='button'>sync</button>    
                </Link>
                <br />
                <br />
                <Link to="mailto:mmmedddsss@gmail.com" target="_blank">
                    <button className='button'>other</button>    
                </Link>
                <br />
                <br />
                <p>
                    xo
                </p>
                <span className="medsText">Meds</span>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* <Footer /> */}
        </div>
    )
}

export default Contact
