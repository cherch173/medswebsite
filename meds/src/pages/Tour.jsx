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
                                FRI JAN 19, 2024
                            </td>
                            <td>
                                <p className="venueTD">
                                    <Link target="_blank" className="supportA" to="https://www.instagram.com/tgn_bk">
                                        <strong>The Grassy Noll</strong>
                                        <br />
                                        Cherch Presents:
                                        <br />
                                        <i>Harmonic Ontology
                                            <br />
                                            Episode 1</i>
                                    </Link>
                                </p>
                            </td>
                            <td className="td">
                                Brooklyn, NY
                            </td>
                            <td className="td">
                                <i>
                                    <Link className="supportA" target="_blank" to="https://open.spotify.com/artist/1ZS6JkgfS2sUjAnP9SrK0d?si=rM0HiFdRQFiXL1MNBZh-Zg">
                                        Meds (solo)
                                    </Link>
                                    <br />
                                    <Link className="supportA" target="_blank" to="https://open.spotify.com/artist/600GgDUq9kzGJgNIrVsWfz?si=Auhos1FcQJy75wU1AbV_Pg">
                                        Ana Becker (Catty, Habibi)
                                    </Link>
                                    <br />
                                    <Link className="supportA" target="_blank" to="https://open.spotify.com/artist/7ILisSfJlzl4DBOoPvnHz6?si=5mn8mmCLR9euLlvTTUVVoA">
                                        Sean Spada
                                    </Link>
                                    <br />
                                    <Link className="supportA" target="_blank" to="https://open.spotify.com/album/2QHYfdHq982XzvZta0WSGO?si=isUymQ3mTIW-JoGCCRy9XA">
                                        Rose Blanshei
                                    </Link>
                                    <br />
                                    <Link className="supportA" target="_blank" to="https://open.spotify.com/artist/1lAzczFXXpEWQoDFkgScRL?si=3El-oMDKTpWgn5-f3c9liw">
                                        Brian LaRue (Safe Houses)
                                    </Link>
                                </i>
                                <br />
                            </td>
                            <td className="td">
                                <Link target="_blank" to="https://www.eventbrite.com/e/harmonic-ontology-episode-i-tickets-779859048407">
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
                                    <br />
                                    & TBA
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
