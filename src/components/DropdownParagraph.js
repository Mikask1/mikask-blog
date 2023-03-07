import React, { useState, useEffect, useRef, useCallback } from 'react';

import { CSSTransition } from 'react-transition-group';
import Aos from "aos"

import { PlusIcon } from './Icons';

function DropdownMenu(props) {
    useEffect(() => {
        Aos.init({ duration: 800, offset: 150 })
    }, [])

    const [open, setOpen] = useState(false)
    const containerRef = useRef(null)

    const openDropdown = useCallback(
        () => {
            setOpen(!open);
            containerRef.current.style.backgroundColor = open ? "rgb(241, 245, 249)" : "#2c98f0"
            containerRef.current.style.color = open ? "black" : "white"
        }, [open]
    )

    return (
        <section>
            <div data-aos="slide-up" ref={containerRef} onClick={openDropdown} className='dropdown-container flex justify-between items-center w-11/12 bg-slate-100 p-5 mb-2 quicksand uppercase tracking-widest text-sm text-gray-600'>

                <p className='ml-2'>{props.text}</p>
                {<PlusIcon fill={open ? "white" : "gray"} className={(open ? "flip-h" : "")} />}
            </div>

            <CSSTransition in={open === true} unmountOnExit timeout={500} classNames="dp">
                <div className='dropdown-paragraph w-11/12 text-justify p-6 pb-10 mb-2'>
                    <p>{props.children}</p>
                </div>
            </CSSTransition>
        </section>
    )
}
export default DropdownMenu