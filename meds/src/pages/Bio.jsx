import React from 'react'
import { Link } from 'react-router-dom'

const Bio = () => {
    return (
        <div>
            <h3 className="headerText">meds official bio</h3>
            <br />
            <img className="bandImage" src="/the bottom dollars-45.jpg" alt="" />
            <br />
            <p>
                <strong className="boldBioText">Meds</strong>
                began as an experiment.
            </p>
            <p>
                In an effort to compose outside of existing genres, Brooklyn based multi-instrumentalist <strong className="boldBioText">Cherch</strong>(given name: Brian Cherchiglia) went big.
            </p>
            <p>
                <strong className="boldBioText">
                    Cherch
                </strong>
                sought to combine his love of hip-hop production elements with his notorious arsenal of guitar; so the <i> New York Times & Village Voice </i> heralded composer enlisted several of his past collaborators and entered the studio with producer Jeff Berner (<i>Psychic TV, Shilpa Ray</i>), resulting in their debut album
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
            The first single, “An Unexpected Visit to the Isabella Stewart Gardner Museum,” off will be available worldwide on all digital streaming platforms in late 2023.
            </p>
            <p>
                <strong className="boldBioText">
                    Meds
                </strong> are:
            </p>
            <p>
                <label className="bandLabel" htmlFor="band">Cherch </label>
                - Guitar, Lead Vocals, 808
                <br />
                <label className="bandLabel" htmlFor="band">Evan Berg </label>
                - Drums, Guitars, 808, Aux Perc
                <br />
                <label className="bandLabel" htmlFor="band">Chris Urriola </label>
                - Bass, Vocals, Synthesis
                <br />
                <label className="bandLabel" htmlFor="band">Jeremy Kolker </label>
                - Drums, Vocals, 808, Aux Perc
                <br />
            </p>
            <br />
            <Link to="/">
                <button>back</button>
            </Link>
        </div>
    )
}

export default Bio
