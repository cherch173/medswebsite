import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Bio = () => {


    return (
        <div>
            <h3 className="headerText">Official Bio</h3>
            <img className="medsImage" src="/Cherch_danadist.jpg" alt="cherchBB" />
            <div className="bioTextCard">
                <p>
                    <strong className="boldBioText">Meds&nbsp;</strong>
                    began as an experiment.
                </p>
                <p>
                    In an effort to compose in more avant garde theatres, Brooklyn based multi-instrumentalist
                    <strong className="boldBioText">&nbsp;Cherch&nbsp;</strong>(Brian Cherchiglia) went in.
                </p>
                <p>
                    <strong className="boldBioText">
                        Cherch&nbsp;
                    </strong>
                    sought to combine his love of hip-hop production elements with his notorious guitar work; so the
                    <i> New York Times & Village Voice </i> heralded composer enlisted several of his best collaborators (featuring members of
                    <i>&nbsp;The Bottom Dollars, God Tiny, Deathrow Tull, Catty&nbsp;</i>
                    and more) and entered the studio with world-renowned producer Jeff Berner (<i>Psychic TV, Shilpa Ray</i>), resulting in the debut recording
                    <strong className="boldText">
                        <i>
                            &nbsp;Night (Volume 1).
                        </i>
                    </strong>
                </p>
                <p>
                    <strong >
                        <i>
                            Night (Volume 1):
                        </i>
                    </strong>
                    &nbsp;is a short vignette of weaving, ornate compositions themed around mental health advocacy. Sonically,
                    <strong className="boldBioText">&nbsp;Meds</strong>
                    &nbsp;reside somewhere between the psychedelia of
                    <i>&nbsp;Spiritualized and TV On the Radio </i>
                    yet retain the indie punk joie de vivre of
                    <i>
                        &nbsp;The Replacements;&nbsp;
                    </i>
                    Cherch’s smokey vocal delivery sizzles with a crisp nonchalance just like Paul Westerberg’s.
                </p>
                <p>
                    More fascinatingly, the juxtaposition of 808s and subharmonics across his guitar driven indie rock create an intoxicating and unique sound that elusively blurs the lines between genres,
                    revealing a 90’s kid finally comfortable in their own skin; equal parts
                    <i>&nbsp;OK Computer</i>&nbsp;and
                    <i>&nbsp;Aquemini</i> and completely ok with that.
                </p>
                <br />
                <p>
                    "If you don't know them, get to know them" - Alisa Ali,<i>&nbsp;WFUV 90.7FM</i>
                </p>
                <p>
                    "A big sonic comfort blanket" - Jason Lee,<i>&nbsp;The Deli</i>
                </p>
                <br />
                <p>
                    <strong className="medsText">
                        Meds
                    </strong>
                    <br />
                    <br />
                    are:
                    <br />
                </p>
                <p>
                    <Link to="http://www.instagram.com/medsaworldpeace" target="_blank">
                        <label className="bandA" htmlFor="band">Cherch -&nbsp;</label>
                    </Link>
                    Guitar, Lead Vocals, 808
                    <br />
                    <Link to="http://www.instagram.com/thebkbuffalo" target="_blank">
                        <label className="bandA" htmlFor="band">Evan Berg -&nbsp;</label>
                    </Link>
                    Drums, Guitar, 808, Aux Perc
                    <br />
                    <Link to="http://www.instagram.com/kol.ker" target="_blank">
                        <label className="bandA" htmlFor="band">Jeremy Kolker -&nbsp;</label>
                    </Link>
                    Drums, Vocals
                    <br />
                    <Link to="http://www.instagram.com/stegrowalker" target="_blank">
                        <label className="bandA" htmlFor="band">Stephen Surrett -&nbsp;</label>
                    </Link>
                    Bass, Vocals
                    <br />
                </p>
                <br />
                <div className="bioCard">
                    <p>
                        <span className="boldBioText">Meds</span>&nbsp;are endorsed by:
                        <br />
                        <br />
                        <Link to="https://www.gibson.com" target="_blank" className="contactA" >Gibson Guitars</Link>
                        <br />
                        <Link to="https://www.earthquakerdevices.com/" target="_blank" className="contactA" > Earthquaker Devices</Link>
                        <br />
                        <Link to="https://www.telefunken-elektroakustik.com/" target="_blank" className="contactA" >Telefunken Microphones</Link>
                        <br />
                        <Link to="https://dreamcymbals.com/artists/usa/berg-evan-buffalo" target="_blank" className="contactA" >Dream Cymbals</Link>
                        <br />
                    </p>
                </div>
            </div>
            <br />
            <Link to="/">
                <button className="button">back</button>
            </Link>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </div>
    )
}

export default Bio
