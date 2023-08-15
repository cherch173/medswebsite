import React from 'react'
import { Link } from 'react-router-dom'

const Bio = () => {


    return (
        <div>
            <h3 className="headerText">Official Bio</h3>
            <img className="medsImage" src="/pesoscherchBB.webp" alt="cherchBB" />
            <br />
            <p>
                <strong className="boldBioText">Meds</strong>
                began as an experiment.
            </p>
            <p>
                In an effort to compose in more experimental theatres, Brooklyn based multi-instrumentalist <strong className="boldBioText">Cherch</strong>(given name: Brian Cherchiglia) went in.
            </p>
            <p>
                <strong className="boldBioText">
                    Cherch
                </strong>
                sought to combine his love of hip-hop production elements with his notorious guitar work; the <i> New York Times & Village Voice </i> heralded composer enlisted several of his best collaborators (featuring members of <i>The Bottom Dollars, God Tiny, Hollis Brown, Catty</i> and more) and entered the studio with world-renowned producer Jeff Berner (<i>Psychic TV, Shilpa Ray</i>), resulting in the debut recording
                <strong className="boldText">
                    <i>
                        Night (Volume 1).
                    </i>
                </strong>
            </p>
            <p>
                <strong >
                    <i>
                        Night (Volume 1)
                    </i>
                </strong>
                : is a short vignette of weaving, ornate compositions themed around trauma survival and mental health advocacy. <strong className="boldBioText">Meds</strong>live somewhere between the psychedelia of <i>Spiritualized and TV On the Radio </i> and the indie punk joie de vivre of
                <i>
                    The Replacements, The Cure and The War on Drugs.
                </i>
            </p>
            <p>
                The first single, “An Unexpected Visit to the Isabella Stewart Gardner Museum,” will be available on all digital streaming platforms worldwide in late 2023.
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
                <label className="boldBioText" htmlFor="band">Cherch </label>
                - Guitar, Lead Vocals, 808
                <br />
                <label className="boldBioText" htmlFor="band">Evan Berg </label>
                - Drums, Guitars, 808, Aux Perc
                <br />
                <label className="boldBioText" htmlFor="band">Chris Urriola </label>
                - Bass, Vocals, Synthesis
                <br />
                <label className="boldBioText" htmlFor="band">Jeremy Kolker </label>
                - Drums, Vocals, 808, Aux Perc
                <br />
            </p>
            <br />
            <div className="card">
                <p>
                <span className="boldBioText">Meds</span>are endorsed by:
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
            <br />
            <br />
            <Link to="/">
                <button className="button">back</button>
            </Link>
        </div>
    )
}

export default Bio
