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
                            {/* <tr>
                                <td>09.09.2023</td>
                                <td>Alphaville</td>
                                <td>Brooklyn, NY</td>
                                <td className="td">
                                    <Link target="_blank" to="https://maindragmusic.com/collections/live-at-main-drag">
                                    <button className="onSaleButton">on sale</button>
                                </Link>
                                </td>
                                <td>
                                    <Link target="_blank" to="https://maindragmusic.com/collections/live-at-main-drag">
                                        <button className="onSaleButton">details</button>
                                    </Link>
                                </td>
                            </tr> */}
                            <tr>
                                <td>09.28.2023</td>
                                <td>Main Drag Music</td>
                                <td>Brooklyn, NY</td>
                                <td className="td">
                                    <Link target="_blank" to="https://maindragmusic.com/collections/live-at-main-drag">
                                    <button className="onSaleButton">on sale</button>
                                </Link>
                                </td>
                                <td>
                                    <Link target="_blank" to="https://maindragmusic.com/collections/live-at-main-drag">
                                        <button className="onSaleButton">details</button>
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <td>10.27.2023</td>
                                <td>The Gutter</td>
                                <td>Brooklyn, NY</td>
                                <td className="td">
                                    <Link target="_blank" to="https://www.youtube.com/watch?v=xupQHKzirRE">
                                    <button className="onSaleButton">on sale</button>
                                </Link>
                                </td>
                                <td>
                                    <Link target="_blank" to="https://www.thegutterbarles.com/williamsburg">
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
