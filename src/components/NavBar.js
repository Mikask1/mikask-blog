import Potrait from '../resources/potrait.png';
import { useState } from 'react';
import { Link } from 'react-scroll'

const NavBar = () => {
    const [click, setClick] = useState(false)

    const changeFocus = () => {
        setClick(false)
    }
    return (
        <section id='navbar' className='z-50'>
            <img id='potrait' className='object-center' alt='potrait' src={Potrait} />

            <h1 id='name' className='playfair'>Darren Prasetya</h1>

            <span className='nav-style quicksand'>
                <a className='link' href='https://en.wikipedia.org/wiki/Programmer' target="_blank" rel='noreferrer noopener nofollow'>SOFTWARE DEVELOPER </a>
                IN INDONESIA
            </span>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <NavSection name='HOME' id='home' offset={-50} onClick={changeFocus} />
                <NavSection name='ABOUT' id='about-me' offset={30} onClick={changeFocus} />
                <NavSection name='GITHUB' id='github' offset={-70} onClick={changeFocus} />
                <NavSection name='SKILLS' id='skills' offset={50} onClick={changeFocus} />
                <NavSection name='EDUCATION' id="education" offset={50} onClick={changeFocus} />
                <NavSection name='COURSES' id="courses" offset={50} onClick={changeFocus} />
                <NavSection name='WORK EXPERIENCE' id="work-experience" onClick={changeFocus} />
                <NavSection name='CONTACT ME' id="contact-me" offset={100} onClick={changeFocus} />
            </ul>
        </section>
    )
}

function NavSection(props) {
    return (
        <li className='nev-item quicksand'>
            <Link to={props.id} spy={true} smooth={true} offset={props.offset} duration={250} onClick={props.onClick}>
                {props.name}
            </Link>
        </li>
    )
}

export default NavBar