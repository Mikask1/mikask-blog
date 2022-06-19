import Aos from "aos"
import { useEffect } from "react"

const TitleSection = (props) => {
    useEffect(() => {
        Aos.init({ duration: 800, offset: 0, delay: 100})
    }, [])
    return (
        <div>
            <p className='about-me quicksand text-gray-500 text-xs pt-40 mb-6 uppercase' data-aos="fade-down">{props.subtitle}</p>
            <p className='playfair text-black text-xl font-bold tracking-widest mb-14 uppercase' data-aos="fade-up" data-aos-offset="0">{props.title}</p>
            {props.children}
        </div>
    )
}

export default TitleSection