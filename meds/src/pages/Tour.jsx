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
                                <th className="th">with</th>
                                <th className="th">tickets</th>
                            </tr>
                        </thead>
                        <tbody>
                            <br />
                            <tr>
                                <td className="td">
                                    FRI JAN 05, 2024
                                </td>
                                <td>
                                    <p className="venueTD">Alphaville</p>
                                </td>
                                <td className="td">
                                    Brooklyn, NY
                                </td>
                                <td className="td">
                                    <i>Cold Sugar
                                        <br />
                                        Brunch (Burlington, VT)
                                        <br />
                                         The Alphaville All-Stars</i>
                                        <br />
                                </td>
                                <td className="td">
                                    <Link target="_blank" to="https://www.alphavillebk.com/">
                                        <button className="onSaleButton">on sale</button>
                                    </Link>
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <td className="td">
                                    TUE JAN 30, 2024
                                    </td>
                                <td>
                                    <p className="venueTD">Sleepwalk</p>
                                </td>
                                <td className="td">
                                    Brooklyn, NY
                                </td>
                                <td className="td">
                                    <i>&nbsp;Nite Music 
                                        <br />
                                        + TBA&nbsp;</i>

                                </td>
                                <td className="td">
                                    <Link target="_blank" to="https://www.sleepwalk.nyc/">
                                        <button className="onSaleButton">on sale</button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Tour
