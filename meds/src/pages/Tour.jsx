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
                                <Link target="_blank" className="supportA" to="https://link.dice.fm/B5LpnmimkJb?sharer_id=64a6e811a667430001f571a7">
                                    THU 6.6.2024
                                </Link>
                            </td>
                            <td>
                                <p className="venueTD">
                                    <Link target="_blank" className="supportA" to="https://www.instagram.com/ourwickedlady">
                                        <strong>Our Wicked Lady</strong>
										<br />
										(doors 7pm)
                                    </Link>
                                </p>
                            </td>
                            <td className="td">
                                <Link target="_blank" className="supportA" to="hhttps://link.dice.fm/B5LpnmimkJb?sharer_id=64a6e811a667430001f571a7">
                                    Brooklyn, NY
                                </Link>
                            </td>
                            <td className="td">
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/cooldeadwoman">
                                    <i>Cool Dead Woman</i>
                                </Link>
                                {" "}&{" "}
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/chick_eddie">
                                    <i>Chick Eddie</i>
                                </Link>
                            </td>
                            <td className="td">
                                <Link target="_blank" to="https://link.dice.fm/B5LpnmimkJb?sharer_id=64a6e811a667430001f571a7">
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
