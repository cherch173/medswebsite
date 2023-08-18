import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Merch = () => {
    return (
        <div>
            <h3 className="headerText">Merch</h3>
            <br />
            <div className="bioCard">
                <p>
                    coming soon... <br />
                </p>
                <p>
                    xo
                    <br />
                    <br />
                    <span className="medsText">
                        Meds
                    </span>
                </p>
            </div>
            <br />
            <br />
            <Link to="/">
                <button className="button">back</button>
            </Link>
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
            <br />
            <Footer />
        </div>
    )
}

export default Merch
