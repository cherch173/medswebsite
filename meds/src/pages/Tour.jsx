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
                        <tr>
                            <td className="td">
                                THU FEB 22, 2024
                            </td>
                            <td>
                                <p className="venueTD">
                                    <Link target="_blank" className="supportA" to="https://www.instagram.com/alphavillebk">
                                        <strong>Alphaville</strong>
                                    </Link>
                                </p>
                            </td>
                            <td className="td">
                                Brooklyn, NY
                            </td>
                            <td className="td">
                                <i>

                                    <Link className="supportA" target="_blank" to="https://open.spotify.com/artist/151m7o9ULqLUt8t54dE79Y?si=XseUfAg6QVKxGYcODJuNhQ">
                                        Ian St. George
                                    </Link>
                                    <br />
                                    <Link className="supportA" target="_blank" to="https://open.spotify.com/artist/03n10SXHwslbZktFzW0OGT?si=Ab073uT7S2SgXxVom3Mimg">
                                        Bayaz
                                    </Link>
                                    <br />
                                    <Link className="supportA" target="_blank" to="https://open.spotify.com/artist/2d11uzrnCsKBwyDzyotbdA?si=_0yOVn_aQomAQQ3Z0FJ5BA">
                                        Jet Daisy
                                    </Link>
                                    <br />
                                </i>
                            </td>
                            <td className="td">
                                <Link target="_blank" to="https://dice.fm/event/ax9gx-meds-ian-st-george-bayaz-22nd-feb-alphaville-new-york-tickets">
                                    <button className="onSaleButton">on sale</button>
                                </Link>
                            </td>
                        </tr>
                        <br />
                        <tr>
                            <td className="td">
                                WEDS MAR 20, 2024
                            </td>
                            <td>
                                <p className="venueTD">
                                    <Link target="_blank" className="supportA" to="https://www.instagram.com/tgn_bk">
                                        <strong>The Grassy Noll</strong>
                                        <br />
                                        <i>Meds Presents:</i>
                                        <br />
                                        <strong>Harmonic Ontology Episode III</strong>
                                    </Link>
                                </p>
                            </td>
                            <td className="td">
                                Brooklyn, NY
                            </td>
                            <td className="td">
                                <i>
                                    <Link className="supportA" target="_blank" to="https://www.instagram.com/medsaworldpeace">
                                        Cherch (Meds)
                                    </Link>
                                    <br />
                                    <Link className="supportA" target="_blank" to="https://www.instagram.com/medsaworldpeace">
                                        & TBA
                                    </Link>
                                    <br />
                                </i>
                            </td>
                            <td className="td">
                                <Link target="_blank" to="https://www.eventbrite.com/e/harmonic-ontology-episode-2-tickets-810881236607?aff=oddtdtcreator">
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
