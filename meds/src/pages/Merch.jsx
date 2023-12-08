import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Merch = () => {
    return (
        <div>
            <br />
            <h3 className="headerText">Merch</h3>
            <br />
            <div className="newsCard">
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
        </div>
    )
}

export default Merch
