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
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/alphavillebk">
                                    THU 2.27.2025
                                </Link>
                            </td>
                            <td>
                                <p className="venueTD">
                                    <Link target="_blank" className="supportA" to="https://www.alphavillebk.com">
                                        <strong>ALPHAVILLE</strong>
                                    </Link>
                                </p>
                            </td>
                            <td className="td">
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/alphavillebk">
                                   Brooklyn, NY
                                </Link>
                            </td>
                            <td className="td">
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/chrisurriola">
                                    <i>Chris Urriola</i>
                                </Link>
                                <br />
                                {" "}+{" "}
                                <br />
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/seanspada">
                                    <i>Sean Spada <br />& the Dopplegangers</i>
                                </Link>
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
