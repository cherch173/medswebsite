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
                                    SAT 04.27.2024
                                </Link>
                            </td>
                            <td>
                                <p className="venueTD">
                                    <Link target="_blank" className="supportA" to="https://www.ticketmaster.com/event/00006084ADEA4A77">
                                        <strong>Mercury Lounge</strong>
										<br />
										(doors 6pm)
                                    </Link>
                                </p>
                            </td>
                            <td className="td">
                                <Link target="_blank" className="supportA" to="https://www.ticketmaster.com/event/00006084ADEA4A77">
                                    New York, NY
                                </Link>
                            </td>
                            <td className="td">
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/seanspada">
                                    <i>Sean Spada 
										<br />& the Doppelgangers</i>
                                </Link>
								<br />
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/safehousestheband">
                                    <i>Safe Houses</i>
                                </Link>
                            </td>
                            <td className="td">
                                <Link target="_blank" to="https://www.ticketmaster.com/event/00006084ADEA4A77">
                                    <button className="onSaleButton">tickets</button>
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
