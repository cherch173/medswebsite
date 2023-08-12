import React from 'react'
import { Link } from 'react-router-dom'

const Merch = () => {
    return (
        <div>
            <h3 className="headerText">Merch</h3>
            <br />
            <div className="card">
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
        </div>
    )
}

export default Merch
