import { GitHubIcon } from "./Icons.js"

import Aos from "aos"
import { useEffect } from "react"

const Window = () => {
    useEffect(() => {
        Aos.init({ duration: 800 })

    }, [])
    return (
        <div className='container -ml-6 mt-20'>
            <div className='rect flex justify-between items-center bg-gray-30 text-white'>
                <Counter count={5} detail='Small Projects' />
                <Counter count={0} detail='Clients' />
                <Counter count={0} detail='Partners' />
                <Counter count={0} detail='Years in Work Experience' />
            </div>
        </div>
    )
}

const Counter = (props) => {
    return (
        <span className='p-10 text-center'>
            <p className='counter-count quicksand font-sans' >{props.count}</p>
            <p className='counter-detail font-mono uppercase tracking-widest mt-2'>{props.detail}</p>
        </span>
    )
}

const GitHub = () => {
    useEffect(() => {
        Aos.init({ duration: 500 })
    }, [])
    return (
        <div className='bg-yellow-500 p-8 mt-52 w-11/12 rounded-md' data-aos="slide-up">
            <p className='text-4xl font-serif pb-5'>
                Check out my
                <span className='text-gray-100'> Personal Projects </span>
                on GitHub!
            </p>
            <button onClick={() => { window.open("https://github.com/Mikask1?tab=repositories") }} className='cv-button'>
                <GitHubIcon />
                <span className="">Go to GitHub</span>
            </button>
        </div>
    )
}


export { GitHub, Window }