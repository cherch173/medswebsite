import React from 'react'
import { Link } from 'react-router-dom'

const Tour = () => {
    return (
        <div>
            <h1 className="headerText">Tour Dates</h1>
            <div className="newsCard">
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
                                TUE JAN 30, 2024
                            </td>
                            <td>
                                <p className="venueTD">
                                    <Link target="_blank" className="supportA" to="https://www.instagram.com/sleepwalk.nyc">
                                        <strong>Sleepwalk</strong>
                                        <br />
                                        curated by:
                                        <br />
                                        <i>Cameo Presents</i>
                                    </Link>
                                </p>
                            </td>
                            <td className="td">
                                Brooklyn, NY
                            </td>
                            <td className="td">
                                <i>
                                    <Link className="supportA" target="_blank" to="https://open.spotify.com/artist/3kQ55Rw5xE19eiAV3hLROi?si=KhsxCIZmSTGMp4nfZw6kZg">
                                        Nite Music
                                    </Link>
                                </i>
                            </td>
                            <td className="td">
                                <Link target="_blank" to="https://link.dice.fm/M75085ad7d07">
                                    <button className="onSaleButton">on sale</button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default Tour
