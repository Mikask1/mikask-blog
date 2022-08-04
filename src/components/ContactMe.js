import { useRef, useEffect, useCallback } from "react";

import Aos from "aos"

import { GmailIcon, PhoneIcon, DiscordIcon, InstagramIcon } from "./Icons.js"
import { database } from "../index.js";
import { ref, set, push } from "firebase/database";

function ContactMe() {
    useEffect(() => {
        Aos.init({ duration: 800 })
    }, [])

    const nameRef = useRef()
    const emailRef = useRef()
    const subjectRef = useRef()
    const messageRef = useRef()

    const handleSubmit = useCallback(
      (event) => {
        event.preventDefault();
  
        const name = event.target.name.value;
        const email = event.target.email.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;
        const responseID = email.replace(/[\W_]+/g, "")
  
        nameRef.current.value = ""
        emailRef.current.value = ""
        subjectRef.current.value = ""
        messageRef.current.value = ""
        
        const reference = ref(database, responseID)
  
        set(push(reference), {
            name: name,
            email: email,
            subject: subject,
            message: message
        })
      },[]
    )
    

    return (
        <div className="contact-grid grid grid-cols-2 w-11/12">
            <div className="contact-form quicksand">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <input data-aos="slide-up" ref={nameRef} name="name" className="bg-slate-200 w-full ml-1 mr-5 h-12 pl-5 mt-0 mb-4 opacity-90" placeholder="Name" type="text" ></input>
                    <input data-aos="slide-up" ref={emailRef} name="email" className="bg-slate-200 w-full ml-1 mr-5 h-12 pl-5 mt-0 mb-4 opacity-90" placeholder="Email" type="email" ></input>
                    <input data-aos="slide-up" ref={subjectRef} name="subject" className="bg-slate-200 w-full ml-1 mr-5 h-12 pl-5 mt-0 mb-4 opacity-90" placeholder="Subject" type="text" ></input>
                    <textarea data-aos="slide-up" ref={messageRef} name="message" className="bg-slate-200 w-full ml-1 mr-5 h-36 pt-2 pb-2 pr-5 pl-5 mt-0 mb-4 opacity-90" placeholder="Message" rows={4} cols={50}></textarea>
                    <button data-aos="fade" data-aos-offset={-10} data-aos-duration={1500} className="submit uppercase text-sm ml-1" type="submit">send message</button>
                </form>
            </div>

            <div className="contact-details ml-12 pl-8">
                <DetailIcon icon={DiscordIcon}>
                    <a href="https://discordapp.com/users/605683392926842911" target="_blank" rel='noreferrer noopener nofollow'>Mikask#8368</a>
                    <span className="text-xs inline-block italic ml-1"> (Preferred)</span>
                </DetailIcon>
                <DetailIcon icon={GmailIcon}>
                    mikask41@gmail.com
                </DetailIcon>
                <DetailIcon icon={PhoneIcon}>
                    +62 89502162757
                </DetailIcon>
                <DetailIcon icon={InstagramIcon}>
                    <a href="https://www.instagram.com/mikask123" target="_blank" rel='noreferrer noopener nofollow'>mikask123</a>
                </DetailIcon>
            </div>
        </div>
    )
}

const DetailIcon = (props) => {
    return (
        <div className="flex align-middle mb-5" data-aos="slide-up">
            {<props.icon className="inline-block" />}
            <p className="inline-block ml-3">{props.children}</p>
        </div>
    )
}

export default ContactMe