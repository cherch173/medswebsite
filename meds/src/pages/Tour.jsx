import React from 'react'
import { Link } from 'react-router-dom'

const Tour = () => {
    return (
        <div>

            <div className="card">
                <h1 className="headerText">Tour Dates</h1>
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
                                <td>10.27.2023</td>
                                <td> The Gutter
                                    <br />
                                    🎃 set as <i>Gorillaz</i>
                                </td>
                                <td>Brooklyn, NY</td>
                                <td className="td">
                                    <Link target="_blank" to="https://www.instagram.com/gutterbar/">
                                        <button className="onSaleButton">on sale</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link target="_blank" to="https://www.thegutterbarles.com/williamsburg">
                                        <button className="onSaleButton">details</button>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>11.05.2023</td>
                                <td>Our Wicked Lady
                                </td>
                                <td>Brooklyn, NY</td>
                                <td className="td">
                                    <Link target="_blank" to="https://www.ourwickedlady.com/">
                                        <button className="onSaleButton">on sale</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link target="_blank" to="https://www.instagram.com/ourwickedlady">
                                        <button className="onSaleButton">details</button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Tour
