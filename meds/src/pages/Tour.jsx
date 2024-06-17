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
                                <Link target="_blank" className="supportA" to="https://www.sugarloafpacny.com/shows">
                                    SAT 8.31.2024
                                </Link>
                            </td>
                            <td>
                                <p className="venueTD">
                                    <Link target="_blank" className="supportA" to="https://www.sugarloafpacny.com">
                                        <strong>DEAD AHEAD FESTIVAL</strong>
										<br />
										@ Sugar Loaf Performing Arts Center
                                    </Link>
                                </p>
                            </td>
                            <td className="td">
                                <Link target="_blank" className="supportA" to="https://www.sugarloafpacny.com/shows">
                                    Chester, NY
                                </Link>
                            </td>
                            <td className="td">
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/zachnugent">
                                    <i>Zach Nugent (two sets)</i>
                                </Link>
                                {" "}&{" "}
                                <Link target="_blank" className="supportA" to="https://www.instagram.com/steelydeadband">
                                    <i>Steely Dead (two sets)</i>
                                </Link>
                            </td>
                            <td className="td">
                                <Link target="_blank" to="https://www.sugarloafpacny.com/shows">
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
