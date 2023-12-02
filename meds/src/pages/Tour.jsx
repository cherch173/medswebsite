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
                            <tr>
                                <td>FRI JAN 05, 2024</td>
                                <td>
                                    <p className="venueTD">Alphaville</p>
                                </td>
                                <td>&nbsp;Brooklyn, NY&nbsp;</td>
                                <td>
                                    <i>&nbsp;Cold Sugar + TBA&nbsp;</i>
                                </td>
                                <td className="td">
                                    <Link target="_blank" to="https://www.alphavillebk.com/">
                                        <button className="onSaleButton">on sale</button>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>TUE JAN 30, 2024</td>
                                <td>
                                    <p className="venueTD">Sleepwalk</p>
                                </td>
                                <td>&nbsp;Brooklyn, NY&nbsp;</td>
                                <td>
                                    <i>&nbsp;Nite Music & TBA&nbsp;</i>
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
        </div>
    )
}

export default Tour
