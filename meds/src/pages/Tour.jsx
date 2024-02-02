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
                                    <Link target="_blank" className="supportA" to="https://www.instagram.com/tgn_bk">
                                        <strong>The Grassy Noll</strong>
                                        <br />
                                        <i>Meds Presents:</i>
                                        <br />
                                        <strong>Harmonic Ontology Episode II</strong>
                                    </Link>
                                </p>
                            </td>
                            <td className="td">
                                Brooklyn, NY
                            </td>
                            <td className="td">
                                <i>
                                    <Link className="supportA" target="_blank" to="https://open.spotify.com/artist/3kQ55Rw5xE19eiAV3hLROi?si=KhsxCIZmSTGMp4nfZw6kZg">
                                        Jamie Frey
                                    </Link>
                                    <br />
                                    <Link className="supportA" target="_blank" to="https://open.spotify.com/artist/4aCJXSWJ1OXSyULyYhCua2?si=4PiaATtMTdiuqCWnJU90-A">
                                        Mike Borchardt
                                    </Link>
                                    <br />
                                    <Link className="supportA" target="_blank" to="https://open.spotify.com/artist/70C7Nli7wLiQXza0YUPe7E?si=O1I6Edz_T86j1pbeQ1MNIA">
                                        Chris Urriola
                                    </Link>
                                    <br />
                                    <Link className="supportA" target="_blank" to="https://open.spotify.com/artist/4Puycf8k2igE6Qth1dMWeS?si=VhOInJOsRo-GoxTMMZKw0Q">
                                        Melody Henry
                                    </Link>
                                    <br />
                                    <Link className="supportA" target="_blank" to="https://open.spotify.com/artist/15wXdPQif1yMmZfsF5y0kR?si=QZpB2sw_QcWKKMk1xghOfg">
                                        Mike Cicchetti
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
                                </i>
                            </td>
                            <td className="td">
                                <Link target="_blank" to="https://www.alphavillebk.com">
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
