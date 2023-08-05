import React from 'react'
import { Link } from 'react-router-dom'

const Tour = () => {
    return (
        <div>
            <div className="card">
                <h1 className="medsText">tour dates</h1>
                <div className="tourCard">
                    <table>
                        <thead>
                            <tr>
                                <th className="th">date</th>
                                <th className="th">venue</th>
                                <th className="th">city</th>
                                <th className="th">tickets</th>
                                <th className="th">more info</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="td">08.21.2023</td>
                                <td className="td">Our Wicked Lady</td>
                                <td className="td">Brooklyn, NY</td>
                                <td className="td">
                                    <Link target="_blank" to="https://dice.fm/event/7knb7-roof-show-red-tank-small-meds-21st-aug-our-wicked-lady-new-york-tickets?lng=en-US">
                                        <button className="onSaleButton">on sale</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link target="_blank" to="https://dice.fm/event/7knb7-roof-show-red-tank-small-meds-21st-aug-our-wicked-lady-new-york-tickets?lng=en-US">
                                        <button className="onSaleButton">details</button>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Tour
