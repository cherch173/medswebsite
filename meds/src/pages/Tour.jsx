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
                                <Link target="_blank" className="supportA" to="https://www.ticketmaster.com/event/00006084ADEA4A77">
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
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/ourwickedlady">
                                    Brooklyn, NY
                                </Link>
                            </td>
                            <td className="td">
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/chick_eddie">
                                    <i>Chick Eddie</i>
                                </Link>
								<br />
                                & more TBA
                            </td>
                            <td className="td">
                                <Link target="_blank" to="https://www.instagram.com/ourwickedlady">
                                    <button className="onSaleButton">on sale soon</button>
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
