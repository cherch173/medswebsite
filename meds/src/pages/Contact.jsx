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
                    <button className='contactButton'>booking</button>    
                </Link>
                <br />
                <br />
                <Link to="mailto:mmmedddsss@gmail.com" target="_blank">
                    <button className='contactButton'>press</button>    
                </Link>
                <br />
                <br />
                <Link to="mailto:mmmedddsss@gmail.com" target="_blank">
                    <button className='contactButton'>sync</button>    
                </Link>
                <br />
                <br />
                <Link to="mailto:mmmedddsss@gmail.com" target="_blank">
                    <button className='contactButton'>other</button>    
                </Link>
                <br />
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
