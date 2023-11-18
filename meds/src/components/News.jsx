import React from 'react'
import { Link } from 'react-router-dom'

const News = () => {
    const getYear = () => {
        return new Date().getUTCFullYear()
    }

    return (
        <div>
            <div className="card">
                <h3 className="headerText">News</h3>
                <h4 className="newsHeaderText">Meds featured + an Interview with Cherch in <i>The Deli Magazine</i></h4>
                <br />
                <div className="news">
                    <iframe
                        src="https://thedelimag.com/meds-drop-debut-single-on-an-unexpected-visit-with-mental-health-advocacy-as-their-prime-directive/"
                        frameborder="0"
                        className="article"
                        title="Meds Deli Magazine"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                        robustness="10"
                        allowFullScreen
                    >
                    </iframe>
                </div>
                <br />
                <Link target="_blank" to="https://thedelimag.com/meds-drop-debut-single-on-an-unexpected-visit-with-mental-health-advocacy-as-their-prime-directive/">
                <button className="button">read more</button>
                </Link>
                <br />
                <br />
                <div className="news">
                <h4 className="newsHeaderText">Debut Single <i> "An Unexpected Visit to the Isabella Stewart Gardner Museum"</i>
                    <br />
                    now available on all platforms
                </h4>
                <br />
                <Link className="Link" to="https://open.spotify.com/artist/1ZS6JkgfS2sUjAnP9SrK0d" target="blank">
                    <img className="releaseImage" src="/meds_gardner2.jpg" alt="MedsSpotifyIsabella" />
                </Link>
                <figcaption className="captionA">© {getYear()} Ana Asnes Becker, all rights reserved.</figcaption>
                <br />
                <p className="bioText">On Friday October 20th, 2023 our debut single
                    <span className="boldBioText"><i>&nbsp;"An Unexpected Visit to the Isabella Stewart Gardner Museum"&nbsp;</i></span>
                    was released worldwide.
                </p>
                <p>The single was produced and engineered by
                    <span className="boldBioText">&nbsp;Jeff Berner&nbsp;</span>
                    (<i>Psychic TV, Catty, Shilpa Ray)&nbsp;</i>
                    at Studio G in Brooklyn, NY and was mastered by Carl Saff at Saff Mastering.
                </p>
                <p>
                    In addition,
                    <span className="boldBioText">&nbsp;"<i>An Unexpected Visit to the Isabella Stewart Gardner Museum</i>"&nbsp;</span>
                    made its (extra)terrestrial radio debut on
                    <a className="newsA" href="https://wfuv.org/options" target="_blank"> WFUV (90.7FM in NYC)</a> on Friday October 20th at 12pm EST courtesy of
                    <a className="newsA" href="https://www.instagram.com/actionali" target="_blank"> Alisa Ali. </a>
                </p>
                <br />
                <div className="socialNav">
                    <Link className="navA" to="https://open.spotify.com/artist/1ZS6JkgfS2sUjAnP9SrK0d" target="_blank">
                        <img className="socialImage" src="data:image/png;base64,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" alt='Meds_SpotifyImage' />
                    </Link>
                    <Link className="navA" to="https://music.apple.com/album/1709693366" target="_blank">
                        <img className="socialImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc152WfP3902WyyFYLV8RPbh7KopGL7UqxUAlP7lQYNggPYu9Nk5f80M-ieSYeUZ73qx0&usqp=CAU" alt='Meds_AppleMusic' />
                    </Link>
                    <Link className="navA" to="https://listen.tidal.com/album/319140743/track/319140744" target="_blank">
                        <img className="socialImage" src="https://www.exchangewire.com/wp-content/uploads/2021/03/tidal-logo-300x300.jpg" alt='Meds_Tidal' />
                    </Link>
                    <Link className="navA" to="https://www.pandora.com/artist/meds/an-unexpected-visit-to-the-isabella-stewart-gardner-museum/ALJ4vkjz9ZjvjPg" target="_blank">
                        <img className="socialImage" src="https://e7.pngegg.com/pngimages/228/963/png-clipart-pandora-logo-music-genome-project-internet-radio-pandora-miscellaneous-blue.png" alt='Meds_Pandora' />
                    </Link>
                    <Link className="navA" to="https://music.youtube.com/watch?v=aj5WFi898ow&si=5uYIJmcnMOTAJ7qq" target="_blank">
                        <img className="socialImage" src="https://cdn.jim-nielsen.com/watchos/512/youtube-music-2021-06-14.png" alt='Meds_YoutubeMusic' />
                    </Link>
                </div>
                <br />
                <iframe 
                className="videoYT" 
                width="100%" 
                height="420" 
                src="https://www.youtube.com/embed/3vRHr5_SaIk?si=jw6SDZuoZivxVqaC" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
                robustness="10" 
                allowFullScreen>
                </iframe>
                <br />
                <br />
                <iframe 
                className="spotifyPlayer" 
                src="https://open.spotify.com/embed/artist/1ZS6JkgfS2sUjAnP9SrK0d?utm_source=generator&theme=0;" 
                width="100%" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; fullscreen; picture-in-picture" 
                robustness="10" 
                loading="lazy">
                </iframe>
                </div>
            </div>
        </div>
    )
}

export default News
