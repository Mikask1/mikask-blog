import React, { useEffect } from 'react';

import './index.css';

import Gallery from "./components/Gallery.js"
import NavBar from "./components/NavBar.js"
import TitleSection from "./components/TitleSection.js"
import { GitHub, Window } from "./components/GitHub.js"
import Skills from "./components/Skills.js"
import DropdownMenu from "./components/DropdownParagraph.js"
import ContactMe from './components/ContactMe.js';

import Aos from "aos"
import "aos/dist/aos.css"

function App() {
  return (
    <div className="App">
      <NavBar />
      <section className='content'>
        <Gallery />

        <section id='about-me'>
          <TitleSection subtitle='ABOUT ME' title='WHO AM I?'>
            <AboutMe />
          </TitleSection>
        </section>

        <section id='github'>
          <GitHub />
          <Window />
        </section>

        <section id='skills'>
          <TitleSection subtitle='MY SPECIALTY' title='MY SKILLS'>
            <Skills />
          </TitleSection>
        </section>

        <section id='education'>
          <TitleSection subtitle="EDUCATION" title="EDUCATION">
            <DropdownMenu text="Studying at Intitute Technology Sepuluh Nopember">
              Sepuluh Nopember Institute of Technology is one of the best University in Indonesia. Situated in Surabaya, Indonesia's second largest city, it boasts around 22,833 undergraduates, with Computer Science being its most popular and most competitive major.
            </DropdownMenu>
            <DropdownMenu text="Dian Harapan Highschool">
              I studied in Dian Harapan from 2017-2021, and took the Science Track. My extracurricular activities during this period are badminton and programming.
            </DropdownMenu>
          </TitleSection>
        </section>

        <section id="courses">
          <TitleSection subtitle="education" title="courses">
            <DropdownMenu text="Intro to Computer Science - Harvard's CS50">
              Harvard CS50 has been widely acknowledge by students and professionals alike to be one of the best courses to take for the introduction to Computer Science. It is held by Harvard University, and the coruse has been held every year since 2012.
            </DropdownMenu>
          </TitleSection>
        </section>

        <section id="work-experience">
          <TitleSection title="work experience" subtitle="experience">
            <DropdownMenu text="Intern at ICHIRO ITS (2022)">
              ICHIRO ITS is a highly skillfull robotics team, boasting the most achievements and accolades among other robotics team in ITS university. It is one of the best university robotics team in Indonesia. Unfortunately, I resigned my rights from being a permanent member as I learned that I didn't have much interest in robotics during the internship, and would like to focus more on other branches of programming.
            </DropdownMenu>
          </TitleSection>
        </section>

        <section id='contact-me'>
          <TitleSection title="contact me" subtitle="let's get in touch">
            <ContactMe />
          </TitleSection>
        </section>

        <section className='footer mb-40'></section>
      </section>
    </div>
  );
}

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 800 })
  }, [])
  return (
    <div className="text-justify w-11/12 z-0" data-aos="fade-right">
      <p id='hello' className='font-semibold'>
        Hi, I'm Darren Prasetya.
        <span className='font-normal ml-1'>
          Born in 2004. I came to love the art of programming at Highscool.I am currently an undergraduate student at Sepuluh Nopember Intitute of Technology.I take the Computer Science major as I am fascinated by how modern gadgets, specifically programming, have become so integrated in our lives and I want to be a part of that. For my education, I have maintained a 3.8 GPA so far, aswell as finishing a couple of small fun side projects to explore and learn more about programming. I am goal-oriented, responsible, and driven person. While I don't have any work experience, I am always excited to learn.
        </span>
      </p>
      <br />
      <p className='font-normal'>On this website, you'll learn more about my qualifications and hopefully more about me aswell. This website designed to be similar to a curriculum vitae, rather than a blog. This website is purely built with ReactJS and TailwindCSS. If you wish to know more about me, you can find my contact details below</p>
    </div>
  )
}

export default App;
