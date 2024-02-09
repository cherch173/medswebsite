import React from 'react'
import isabellaCover from '/meds_gardner2.jpg'
import thirtyCover from '/30for30_Meds_v4.jpg'
import thirtyRP from '/1_5_2024 _30for30.png'
import twentyNineCover from '/29orTwoFor50_Meds_AndresCorrea_2.png'
import { Link } from 'react-router-dom'

const News = () => {
    const getYear = () => {
        return new Date().getUTCFullYear()
    }

    return (
        <div>
            <h1 className="headerText">News</h1>
            <div className="newsCard">
                <h4 className="newsHeaderText">New Single <span className="boldText">"29 OR TWO FOR 50"</span> Now Available Worldwide
                </h4>
                <p>Feb 9, 2024</p>
                <br />
                <Link className="newsA" target="_blank" to="https://open.spotify.com/album/0jGxlMFNBcWBE9aHDO0rYS?si=_DsyrPGbR3qrE0dTRWALYg">
                    <img className="releaseImage" src={twentyNineCover} alt="meds_29orTwofor50_image" />
                </Link>
                <p>
                    Greetings, Earthings. 
                    <br />
                    <br />
                    We're elated to share that our newest installment off of
                    <i>&nbsp;Night: (Volume 1):&nbsp;</i>
                    <a target="_blank" className="newsA" href="https://open.spotify.com/album/0jGxlMFNBcWBE9aHDO0rYS?si=_DsyrPGbR3qrE0dTRWALYg">29 or Two for 50&nbsp;</a>
                    is now available.
                </p>
                <p>
                    <Link className="newsA" target="_blank" to="https://music.apple.com/us/album/29-or-two-for-50-single/1728774012" >29 or Two for 50&nbsp;</Link>
                    is our tribute to Queens' former mecca of graffiti, <strong>5 Pointz</strong> (in our opinion, the greatest museum of all time) 
                    and features an actual mural from <strong>5Pointz</strong> by artist 
                    <Link className="newsA" target="_blank" to="">&nbsp;Andres Correa&nbsp;</Link> 
                    as its offficial artwork.
                    <br />
                    <br />
                    In addition, we'd like to issue a special thank you to <strong>Meres</strong> and <strong>5Pointz</strong> for supporting our noise.
                    <br />
                    <br />
                    <Link className="newsA" target="_blank" to="https://music.apple.com/us/album/29-or-two-for-50-single/1728774012" >29 or Two for 50&nbsp;</Link> was produced and mixed by&nbsp;
                    <a target="-_blank" className="newsA" href="https://www.instagram.com/jeffreyberner/">Jeff Berner&nbsp;</a>
                    at <span className="boldText">Studio G&nbsp;</span>and performed by:
                    <br />
                    <br />
                    Cherch (music & lyrics, vocals, guitars, aux perc)
                    <br />
                    Evan Berg (drums, 808s, linn)
                    <br />
                    Jeff Berner (rhodes, subs)
                    <br />
                    Jeremy Kolker (backing vocals)
                    <br />
                    Sean Spada (mellotron)
                    <br />
                    Chris Urriola (bass, backing vocals)
                    <br />
                </p>
                <p>
                    To <span className="boldText">listen to&nbsp;</span>
                    <a target="-_blank" className="newsA" href="https://open.spotify.com/album/0jGxlMFNBcWBE9aHDO0rYS?si=5_1rHaoyQ06XEMBVHQKzGw">29 or Two for 50&nbsp;</a>
                    click the button of your choice
                </p>
                <div className="socialNav">
                    <Link className="navA" to="https://open.spotify.com/album/0jGxlMFNBcWBE9aHDO0rYS?si=_DsyrPGbR3qrE0dTRWALYg" target="_blank">
                        <img className="socialImage" src="data:image/png;base64,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" alt='Meds_SpotifyImage' />
                    </Link>
                    <Link className="navA" to="https://music.apple.com/us/album/29-or-two-for-50-single/1728774012" target="_blank">
                        <img className="socialImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc152WfP3902WyyFYLV8RPbh7KopGL7UqxUAlP7lQYNggPYu9Nk5f80M-ieSYeUZ73qx0&usqp=CAU" alt='Meds_AppleMusic' />
                    </Link>
                    <Link className="navA" to="https://medsofficial.bandcamp.com/album/29-or-two-for-50" target="_blank">
                        <img className="socialImage" src="data:image/png;base64,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" alt="bandcampImage" />
                    </Link>
                    <Link className="navA" to="https://www.pandora.com/artist/meds/29-or-2-for-50/ALlwfr5J4fn9gVw" target="_blank">
                        <img className="socialImage" src="https://e7.pngegg.com/pngimages/228/963/png-clipart-pandora-logo-music-genome-project-internet-radio-pandora-miscellaneous-blue.png" alt='Meds_Pandora' />
                    </Link>
                    <Link className="navA" to="https://music.youtube.com/channel/UCY0KcfYhqKKr6bIl9fS3JHg?si=5luOJg71g1ilbiDX" target="_blank">
                        <img className="socialImage" src="https://cdn.jim-nielsen.com/watchos/512/youtube-music-2021-06-14.png" alt='Meds_YoutubeMusic' />
                    </Link>
                </div>
                <br />
            </div>
            <br />
            <div className="newsCard">
                <h4 className="newsHeaderText">New Single <span className="boldText">"30 FOR 30"</span> Out Now
                </h4>
                <p>Jan 5, 2024</p>
                <br />
                <Link className="" target="_blank" to="https://open.spotify.com/album/5hL7odzG4i5J9CSe1LtpKA?si=1q4Yj00JSleQX7WCaDLGRg">
                    <img className="releaseImage" src={thirtyCover} alt="meds_30for30_image" />
                </Link>
                <p>
                    Entroducing the next single off of our debut effort
                    <i>&nbsp;Night: (Volume 1):&nbsp;</i>
                    <a target="_blank" className="newsA" href="https://open.spotify.com/artist/1ZS6JkgfS2sUjAnP9SrK0d?si=B875lvjcSL2QL1IF07YzQg">30 for 30&nbsp;</a>
                </p>
                <p>
                    <i>30 for 30</i> was produced and mixed by&nbsp;
                    <a target="-_blank" className="newsA" href="https://www.instagram.com/jeffreyberner/">Jeff Berner&nbsp;</a>
                    at <span className="boldText">Studio G&nbsp;</span>and was performed by:
                    <br />
                    <br />
                    Cherch (music & lyrics, vocals, guitars)
                    <br />
                    Evan Berg (drums, 808s)
                    <br />
                    Jeff Berner (rhodes, subs)
                    <br />
                    Jeremy Kolker (backing vocals)
                    <br />
                    Sean Spada (mellotron)
                    <br />
                    Chris Urriola (bass, backing vocals)
                    <br />
                </p>
                <p>
                    To <span className="boldText">listen to&nbsp;</span>
                    <a target="-_blank" className="newsA" href="https://open.spotify.com/album/5hL7odzG4i5J9CSe1LtpKA?si=9lqvEypkTG2yRhUlex35iA">30 for 30&nbsp;</a>
                    click the button of your choice
                </p>
                <div className="socialNav">
                    <Link className="navA" to="https://open.spotify.com/album/5hL7odzG4i5J9CSe1LtpKA?si=9lqvEypkTG2yRhUlex35iA" target="_blank">
                        <img className="socialImage" src="data:image/png;base64,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" alt='Meds_SpotifyImage' />
                    </Link>
                    <Link className="navA" to="https://music.apple.com/us/album/30-for-30-single/1719957708" target="_blank">
                        <img className="socialImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc152WfP3902WyyFYLV8RPbh7KopGL7UqxUAlP7lQYNggPYu9Nk5f80M-ieSYeUZ73qx0&usqp=CAU" alt='Meds_AppleMusic' />
                    </Link>
                    <Link className="navA" to="https://medsofficial.bandcamp.com/track/30-for-30-2" target="_blank">
                        <img className="socialImage" src="data:image/png;base64,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" alt="bandcampImage" />
                    </Link>
                    <Link className="navA" to="https://www.pandora.com/artist/meds/30-for-30/ALkrX7ljmh22V94?part=ug-desktop&corr=154336250315149326" target="_blank">
                        <img className="socialImage" src="https://e7.pngegg.com/pngimages/228/963/png-clipart-pandora-logo-music-genome-project-internet-radio-pandora-miscellaneous-blue.png" alt='Meds_Pandora' />
                    </Link>
                    <Link className="navA" to="https://music.youtube.com/watch?v=574c9Va59pI&si=cHYAoOX8oHLDAusK" target="_blank">
                        <img className="socialImage" src="https://cdn.jim-nielsen.com/watchos/512/youtube-music-2021-06-14.png" alt='Meds_YoutubeMusic' />
                    </Link>
                </div>
                <br />
            </div>
            <br />
            <div className="newsCard">
                <h4 className="newsHeaderText">New Single <span className="boldText">"30 FOR 30"</span>
                    <br />
                    and Official Release Party at
                    <br />
                    Alphaville on Jan 5, 2024
                </h4>
                <p>Dec 7, 2023</p>
                <br />
                <Link className="" target="_blank" to="https://distrokid.com/hyperfollow/meds7/30-for-30-2">
                    <img className="releaseImage" src={thirtyCover} alt="meds_30for30_image" />
                </Link>
                <p>
                    We're proud to announce the release of the next single off of
                    <i>&nbsp;Night: (Volume 1):&nbsp;</i>
                    <a target="_blank" className="newsA" href="https://open.spotify.com/album/5hL7odzG4i5J9CSe1LtpKA?si=lPrQCVMZRwe8FIYoujtjhg">30 for 30&nbsp;</a>
                    due out <span className="boldText">January 5, 2024.</span>
                </p>
                <p>
                    <a target="-_blank" className="newsA" href="https://open.spotify.com/album/5hL7odzG4i5J9CSe1LtpKA?si=lPrQCVMZRwe8FIYoujtjhg">30 for 30&nbsp;</a>
                    was produced and mixed by&nbsp;
                    <a target="-_blank" className="newsA" href="https://www.instagram.com/jeffreyberner/">Jeff Berner&nbsp;</a>
                    at <span className="boldText">Studio G&nbsp;</span>and was performed by:
                    <br />
                    <br />
                    Cherch (music & lyrics, vocals, guitars)
                    <br />
                    Evan Berg (drums, 808s)
                    <br />
                    Jeff Berner (rhodes, subs)
                    <br />
                    Jeremy Kolker (backing vocals)
                    <br />
                    Sean Spada (mellotron)
                    <br />
                    Chris Urriola (bass, backing vocals)
                    <br />
                </p>
                <p>
                    To <span className="boldText">pre save&nbsp;</span>
                    <a target="-_blank" className="newsA" href="https://open.spotify.com/album/5hL7odzG4i5J9CSe1LtpKA?si=lPrQCVMZRwe8FIYoujtjhg">30 for 30&nbsp;</a>
                    just click the button below
                </p>
                <br />
                <Link target="_blank" to="https://distrokid.com/hyperfollow/meds7/30-for-30-2">
                    <button className="button">pre save</button>
                </Link>
                <br />
                <p>
                    In addition, we'll be celebrating with an <span>official release party</span> at
                    <a href="https://www.alphavillebk.com/" className="newsA" target="_blank">&nbsp;Alphaville&nbsp;</a>(140 Wilson Ave - Brooklyn, NY)
                    on January 5th as well with support from <span className="boldText">Bayaz, Cold Sugar and Brunch (VT).</span>
                </p>
                <p>
                    Alphaville now hosts an exceptional in-house restaurant <a href="https://www.instagram.com/lorijaynebk" target="_blank" className="newsA">Lori Jayne</a> that's expertly curated by our dear pal chef
                    <a href="https://www.instagram.com/yachtrockuniversity" target="_blank" className="newsA">&nbsp;Sam Braverman</a>&nbsp;and we strongly encourage attendees to indulge in their menu.
                </p>
                <p>
                    To <span className="boldText">purchase tickets</span> to the <span className="boldText">release party</span> click the poster below.
                </p>
                <br />
                <Link target="_blank" to="https://link.dice.fm/45B1haYsFFb">
                    <img src={thirtyRP} alt="Meds_30for30_releaseParty" className="posterImage" />
                </Link>
            </div>
            <br />
            <div className="newsCard">
                <h4 className="newsHeaderText">Meds Featured + an Interview
                    <br />
                    with Cherch in <i>The Deli Magazine</i></h4>
                <p>Nov 17, 2023</p>
                <br />
                <iframe
                    src="https://thedelimag.com/meds-drop-debut-single-on-an-unexpected-visit-with-mental-health-advocacy-as-their-prime-directive/"
                    frameBorder="0"
                    className="article"
                    title="Meds Deli Magazine"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    robustness="10"
                    allowFullScreen
                >
                </iframe>
                <br />
                <br />
                <Link target="_blank" to="https://thedelimag.com/meds-drop-debut-single-on-an-unexpected-visit-with-mental-health-advocacy-as-their-prime-directive/">
                    <button className="button">read more</button>
                </Link>
            </div>
            <br />
            <div className="newsCard">
                <h4 className="newsHeaderText">Debut Single <i> "An Unexpected Visit to the Isabella Stewart Gardner Museum"</i>
                    <br />
                    now available on all platforms
                </h4>
                <p>Oct 20, 2023</p>
                <br />
                <Link className="Link" to="https://open.spotify.com/artist/1ZS6JkgfS2sUjAnP9SrK0d" target="blank">
                    <img className="releaseImage" src={isabellaCover} alt="MedsSpotifyIsabella" />
                </Link>
                <figcaption className="captionA">© {getYear()} Ana Asnes Becker, all rights reserved.</figcaption>
                <br />
                <p className="bioText">On Friday October 20th, 2023 our debut single
                    <span className="boldBioText"><i>&nbsp;"An Unexpected Visit to the Isabella Stewart Gardner Museum"&nbsp;</i></span>
                    was released worldwide.
                </p>
                <p className="bioText">The single was produced and engineered by
                    <span className="boldBioText">&nbsp;Jeff Berner&nbsp;</span>
                    (<i>Psychic TV, Catty, Shilpa Ray)&nbsp;</i>
                    at Studio G in Brooklyn, NY and was mastered by Carl Saff at Saff Mastering.
                </p>
                <p className="bioText">
                    In addition,
                    <span className="boldBioText">&nbsp;"<i>An Unexpected Visit to the Isabella Stewart Gardner Museum</i>"&nbsp;</span>
                    made its (extra)terrestrial radio debut on
                    <a className="newsA" href="https://wfuv.org/options" target="_blank"> WFUV (90.7FM in NYC)</a> on Friday October 20th at 12pm EST courtesy of
                    <a className="newsA" href="https://www.instagram.com/actionali" target="_blank"> Alisa Ali. </a>
                </p>
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
            </div>
        </div>
    )
}

export default News
