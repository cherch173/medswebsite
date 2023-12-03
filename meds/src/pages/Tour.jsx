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
                                    <p className="venueTD">
                                        <Link target="_blank" className="supportA" to="https://www.instagram.com/alphavillebk">
                                            Alphaville
                                        </Link>
                                    </p>
                                </td>
                                <td className="td">
                                    Brooklyn, NY
                                </td>
                                <td className="td">
                                    <i>
                                        <Link className="supportA" target="_blank" to="https://open.spotify.com/artist/20u1eNEFrgn9XCwUGuBNt9?si=HysKacO6QIeVijRbyMB4Qg">
                                            Brunch
                                        </Link>
                                        <br />
                                        &nbsp;(Burlington, VT)
                                        <br />
                                        <Link className="supportA" target="_blank" to="https://open.spotify.com/artist/2AUvhMfDlJMpAyPIHy9i8a?si=cc-L5MYNSouzb22zZg5D6w">
                                            Cold Sugar
                                        </Link>
                                        <br />
                                        <Link className="supportA" target="_blank" to="http://www.instagram.com/alphavillebk">
                                            The Alphaville All-Stars
                                        </Link>
                                    </i>
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
                                    <p className="venueTD">
                                        <Link target="_blank" className="supportA" to="https://www.instagram.com/sleepwalk.nyc">
                                            Sleepwalk
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
                                        <br />
                                        & TBA
                                    </i>
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
