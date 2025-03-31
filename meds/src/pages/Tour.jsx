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
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/medsaworldpeace">
                                    TUES 4.22.2025
                                </Link>
                            </td>
                            <td>
                                <p className="venueTD">
                                    <Link target="_blank" className="supportA" to="https://link.dice.fm/jRTGwplm3Rb?sharer_id=64a6e811a667430001f571a7">
                                        <strong>OUR WICKED LADY</strong>
                                    </Link>
                                </p>
                            </td>
                            <td className="td">
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/ourwickedlady">
                                   Brooklyn, NY
                                </Link>
                            </td>
                            <td className="td">
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/nitemusicrocknroll">
                                    <i>NITE MUSIC</i>
                                </Link>
                                <br />
                                {" "}+{" "}
                                <br />
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/reggaelar_people">
                                    <i>REGGAELAR PEOPLE</i>
                                </Link>
                                <br />
                                {" "}+{" "}
                                <br />
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/dirtbagivy_">
                                    <i>DIRTBAG IVY</i>
                                </Link>
                            </td>
                            <td className="td">
                                <Link target="_blank" to="https://link.dice.fm/jRTGwplm3Rb?sharer_id=64a6e811a667430001f571a7">
                                    <button className="onSaleButton">on sale</button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="td">
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/medsaworldpeace">
                                    SAT 8.30.2025
                                </Link>
                            </td>
                            <td>
                                <p className="venueTD">
                                    <Link target="_blank" className="supportA" to="https://sugarloafpacny.com">
                                        <strong><i>DEAD AHEAD FESTIVAL</i></strong>
                                        <br />
                                        <strong>SUGAR LOAF PERFORMING ARTS CENTER</strong>
                                    </Link>
                                </p>
                            </td>
                            <td className="td">
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/sugarloafpacny">
                                   Chester, NY
                                </Link>
                            </td>
                            <td className="td">
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/zachnugent">
                                    <i>ZACH NUGENT</i>
                                </Link>
                                <br />
                                {" "}+{" "}
                                <br />
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/sugarloafpacny">
                                    <i>MORE TBA</i>
                                </Link>
                            </td>
                            <td className="td">
                                <Link target="_blank" to="https://diamondgradetix.com/events.php?lid=1">
                                    <button className="onSaleButton">on sale 
                                        <br />
                                        MAY 1 @ 7:30am</button>
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
