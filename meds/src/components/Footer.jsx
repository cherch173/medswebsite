import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    const getYear = () => {
       return new Date().getUTCFullYear()
    }

    return (
        <div>
            <footer className="footer">
                © {getYear()} Cherch, all rights reserved.
                <a className="footerLink" target="_blank" href="mailto:booking@medsmusic.com">CONTACT</a> |
                <a className="footerLink" target="_blank" href="mailto:booking@medsmusic.com">BOOKING</a>
            </footer>
        </div>
    )
}

export default Footer
