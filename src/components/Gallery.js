import Photo from '../resources/photo.png';

import Aos from "aos"
import { useEffect } from "react"

const Gallery = () => {
    useEffect(() => {
        Aos.init({ duration: 1500})
    }, [])
    return (
        <div className='gallery' id='home' data-aos="fade">
            <section className='gallery-text'>
                <h1 className='playfair'>Hello!</h1>
                <h1 className='playfair'>I'm Darren</h1>
                <p className='quicksand'>Student at Sepuluh Nopember Institute of Technology</p>
                <button className='cv-button'>DOWNLOAD CV</button>
            </section>
            <img id='gallery-photo' alt='Big Photo of Darren Prasetya' src={Photo} />
        </div>
    )
}

export default Gallery