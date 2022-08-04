import React, { useEffect, useState, useRef } from 'react'

import Aos from "aos"

import {PSIcon, HTMLIcon, JSIcon, TailwindIcon, ReactIcon, CSSIcon, CIcon, PythonIcon, GoogleIcon} from "./Icons.js"
import { useCallback } from 'react'

const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])
    return (
        <div className='text-justify w-11/12 z-0'>
            <p data-aos="fade-right">Below are my personal assesment on my skill level on a couple of programming languages, software, and frameworks. I rate them in comparison to my other skills and see how confident I am in each topic. You can think of this assesment as a ranking system rather than precise analysis. You can play with the slider if you want to aswell. This is by design since it's harder than it being non-editable.</p>
            <ProgressGrid />
        </div>
    )
}

const ProgressGrid = () => {
    return (
        <div className='progress-grid grid grid-cols-2 pt-10'>
            <ProgressBar text='Photoshop' color='#5CD0FA' value="18" dataAos="slide-right"><PSIcon/></ProgressBar>
            <ProgressBar text='HTML5' color='#E34C26' value="81" dataAos="slide-left" data-aos-delay="1000"><HTMLIcon/></ProgressBar>
            <ProgressBar text='CSS3' color='#264DE4' value="31" dataAos="slide-right" ><CSSIcon /></ProgressBar>
            <ProgressBar text='TailwindCSS' color='#06b6d4' value="41" dataAos="slide-left" data-aos-delay="1000"><TailwindIcon /></ProgressBar>
            <ProgressBar text='JavaScript' color='#F0DB4F' value="42" dataAos="slide-right"><JSIcon /></ProgressBar>
            <ProgressBar text='ReactJS' color='#61DBFB' value="14" dataAos="slide-left" data-aos-delay="1000"><ReactIcon /></ProgressBar>
            <ProgressBar text='Python' color='#FFD43B' value="58" dataAos="slide-right"><PythonIcon /></ProgressBar>
            <ProgressBar text='C' color='#6f82e9' value="15" dataAos="slide-left" data-aos-delay="1000"><CIcon /></ProgressBar>
            <ProgressBar text='Google' color='#4285F4' value="98" dataAos="slide-right"><GoogleIcon/></ProgressBar>
        </div>
    )
}


function ProgressBar(props){
    const [value, setValue] = useState(props.value)
    
    const sliderRef = useRef(null);
    const progressValue = useRef(null)

    const progress = value + '%'
    const styleInput = { background: `linear-gradient(90deg, ${props.color} 0% ${progress}, lightgrey ${progress} 100%)`, }

    const updateBar = useCallback((props) =>{
        // setValue(sliderRef.current.value)
        // const progressUpdate = value + '%'
        
        
        // sliderRef.current.style.background = `linear-gradient(90deg, ${props.color} 0% ${progressUpdate}, lightgrey ${progressUpdate} 100%)`
        // progressValue.current.innerText = sliderRef.current.value + "%"
    }, [])

    return(
        <div className='mt-5 mb-5 ml-5 mr-5 static' data-aos={props.dataAos} data-aos-offset="0">
            <div className='flex align-center'>
                {props.children}
                <p className='text-base quicksand tracking-wider inline-block pl-2'>{props.text}</p>
            </div>
            <input className="progress-bar inline-block" ref={sliderRef} type="range" min="0" max="100" value={value} onChange={updateBar} style={styleInput} />
            <p ref={progressValue} className={`float-right inline-block`}>{value + "%"}</p>
        </div>
    )
}

export default Skills