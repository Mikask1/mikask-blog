import React, {useEffect} from 'react';

import './index.css';

import Gallery from "./components/Gallery.js"
import NavBar from "./components/NavBar.js"
import TitleSection from "./components/TitleSection.js"
import {GitHub, Window} from "./components/GitHub.js"
import Skills from "./components/Skills.js"
import DropdownMenu from "./components/DropdownParagraph.js"
import ContactMe from './components/ContactMe.js';

import Aos from "aos"
import "aos/dist/aos.css"

const CONTENT = () => <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia fugit voluptatibus illo. Voluptatum quasi totam exercitationem sunt culpa debitis commodi eius velit corporis, pariatur, natus esse incidunt sit repellendus illum quod possimus dolor minima quaerat error itaque? Tempore rem, provident, eaque perspiciatis neque totam nam repudiandae amet sapiente quo quisquam placeat, delectus excepturi quas voluptas ea dolores minus? Amet ex fuga expedita possimus deleniti aliquid odit, veritatis necessitatibus sint. Ipsam expedita est voluptates ab repellat inventore repellendus mollitia quisquam non error consequatur, illo similique debitis autem tempora! Architecto animi quas minus. Numquam, magnam! Fugiat ipsa quasi optio aspernatur numquam? Quos culpa, asperiores beatae assumenda tempora atque alias aspernatur repellat laudantium eaque dolore nihil a, quibusdam quidem nemo expedita minima animi aliquid porro eius accusamus facere, iure neque quo! Veritatis accusamus non exercitationem sunt mollitia voluptatem saepe? Quis earum facere voluptatum nulla. Deleniti illo, reiciendis possimus, amet similique ducimus quam accusamus pariatur numquam quidem nostrum accusantium reprehenderit facilis consectetur eos rerum ex doloribus dignissimos eaque ipsum aperiam molestiae maiores? Corrupti, natus fugiat, vel deleniti illo nam aliquid et, nulla corporis quaerat praesentium officia ea porro. Fugiat pariatur voluptatum, impedit odit accusantium quis molestias voluptatibus enim officia commodi nisi culpa architecto. Expedita veritatis dignissimos ab eos non temporibus possimus natus. Earum praesentium iusto quasi repellendus sunt eligendi quidem natus recusandae possimus aperiam dignissimos nemo nesciunt suscipit, laboriosam fugit cum facilis sequi autem culpa? Labore sapiente aliquam porro quos, maiores cumque blanditiis, quam velit voluptates eum distinctio. Debitis a itaque cum eligendi consequuntur eum nihil ratione placeat ipsam expedita dolores temporibus, rerum esse commodi in, accusantium odit incidunt. Animi nemo id amet fugiat numquam necessitatibus excepturi quos modi eveniet qui nam cumque fugit molestiae perspiciatis, distinctio earum consequuntur ipsam debitis ratione, pariatur dolorem veniam itaque harum unde? Dicta labore illo iste molestiae. Beatae ea hic iste natus suscipit dolor maiores tempora consectetur ut placeat ad cupiditate, iusto quisquam velit. Adipisci commodi voluptates aspernatur accusamus nisi veritatis consequuntur dolores, sunt dignissimos blanditiis, quibusdam eligendi tempore repellendus ab eos ipsam ullam dolore. Consequatur id impedit deleniti, eum officia tenetur labore commodi. Distinctio deserunt, at alias corporis temporibus unde adipisci fugit aliquid nisi inventore vero, doloribus voluptas quasi! Voluptatem rem labore similique maxime repellat? Aperiam vero a voluptates sint impedit aliquid laboriosam nihil fugiat mollitia officia dolorem unde, excepturi consequatur. Vero voluptates culpa aliquam totam accusantium consectetur laborum eveniet minima modi sed, iste nulla autem odit sapiente minus doloribus dignissimos cupiditate nihil ea obcaecati dolorem dolor magnam sint? Fugiat, quaerat incidunt velit, culpa consectetur omnis illum odit, magni amet pariatur unde laborum autem sint libero quae sit est assumenda! Corporis, totam velit? Numquam, iste harum. Officia repellendus necessitatibus, eligendi aperiam sint eos, cupiditate, quis quae iusto debitis in odio mollitia perferendis sunt deserunt temporibus nisi? Ut quo perferendis illo amet explicabo vitae excepturi qui accusamus assumenda. Expedita eligendi, quidem cumque incidunt exercitationem quisquam totam perferendis, rerum voluptatum ex reprehenderit. Laboriosam cupiditate quos deserunt, quis maiores officiis beatae laborum obcaecati molestiae corrupti mollitia optio esse! Sit, deleniti. Velit voluptatem, vel deserunt dolor consequatur accusantium quis, dolores culpa quia, eius nam! Nesciunt facere vitae sequi ea molestiae, nobis reprehenderit. Quaerat rerum velit accusantium quae excepturi vitae alias consequuntur fugiat omnis, laborum asperiores. Adipisci beatae recusandae blanditiis, quidem cumque ut soluta possimus asperiores rerum praesentium voluptates mollitia quasi, necessitatibus nulla obcaecati laborum pariatur? Et cum maxime magni mollitia! Alias similique aliquid aperiam magni dignissimos tenetur nostrum deserunt quisquam ut sint. Cupiditate, temporibus. Unde rem, eveniet facere minus, sint fuga tempore iste id libero illo eos sunt maxime numquam illum aliquam necessitatibus quisquam incidunt dolore possimus. Sunt, consequatur aliquam? Accusamus aperiam quia aspernatur at, magni, fuga officiis distinctio similique molestias ea tenetur blanditiis sit aliquid, iusto alias sunt expedita amet deserunt maiores autem ullam explicabo dolorem error rem. Sequi deleniti modi aut amet sit saepe quo incidunt! Sint quia inventore asperiores repellat itaque nobis eius doloremque eveniet explicabo reiciendis esse libero hic amet quis nostrum laudantium sunt architecto nemo, dicta excepturi iusto delectus quas culpa. Maxime at architecto aliquam similique id atque sit ab provident mollitia officiis assumenda ratione, consectetur dolorem, iure quod est aut natus quia error, sapiente molestiae explicabo. Quibusdam, quam atque. Incidunt porro recusandae officiis. Adipisci error ipsam quam eius sint earum vero beatae a atque, minus sapiente maxime, molestias voluptates? Dolores fugiat laudantium numquam nulla tempore, eligendi sapiente est voluptas iure eaque repellendus molestiae sunt minus, eum cum nesciunt veritatis! Assumenda, non? Harum velit ratione, vitae iusto commodi doloremque quod culpa voluptatibus, voluptatum minima est sed perspiciatis voluptas odit, eum fugiat vero quaerat dolor! Aliquid dolorem adipisci vel dolore, eveniet optio ratione illo architecto officiis veritatis exercitationem at reprehenderit perferendis qui atque laborum aut consequuntur. Dolorem odit laboriosam ut amet iusto voluptates illum. Sit suscipit dignissimos in fugit! Veritatis explicabo voluptatibus id, autem quas illo exercitationem provident, eum neque voluptatem labore enim quia amet officiis facilis odio in inventore. At alias quisquam accusantium, culpa molestiae adipisci assumenda incidunt impedit dolores, repellat quaerat? In asperiores earum, doloremque odio laudantium omnis quia, sequi quasi voluptate ducimus dolor repellendus consectetur illo rem et optio magnam! Facere reprehenderit, voluptatum excepturi illo minus a, alias, voluptatem autem cumque dignissimos obcaecati ut distinctio nesciunt doloremque labore totam! Asperiores esse, tempora exercitationem deserunt vitae, illo, perferendis quae odio blanditiis nam ipsum maxime hic recusandae laboriosam facere? Quisquam deserunt hic dignissimos ex corporis esse unde neque aperiam maxime? Ipsam incidunt praesentium deleniti reprehenderit rem? Consequatur repellendus saepe dolores, suscipit, incidunt, unde enim reiciendis obcaecati corporis maxime natus dolorum libero? Facilis amet expedita eos possimus? Repudiandae modi rem maiores aspernatur iure voluptas id expedita. Natus molestias alias reprehenderit quisquam dolorum. Quod itaque dolorem asperiores illo ducimus commodi voluptas laboriosam quam error iusto sit, repudiandae dicta repellat, autem culpa ad doloremque id delectus dolores? Eius, expedita autem sunt et excepturi repellat distinctio, omnis culpa officia ab sint maxime, similique hic necessitatibus. Accusamus quidem fuga omnis incidunt, architecto saepe, consectetur inventore cumque libero eos ipsa consequatur possimus minima. Asperiores expedita assumenda eos libero similique modi nam esse.</p>

function App() {
  return (
    <div className="App">
      <NavBar />
      <section className='content'>
        <Gallery/>

        <section id='about-me'>
          <TitleSection subtitle='ABOUT ME' title='WHO AM I?'>
            <AboutMe />
          </TitleSection>
        </section>

        <section id='github'>
          <GitHub/>
          <Window/>
        </section>

        <section id='skills'>
          <TitleSection subtitle='MY SPECIALTY' title='MY SKILLS'>
            <Skills />
          </TitleSection>
        </section>

        <section id='education'>
          <TitleSection subtitle="EDUCATION" title="EDUCATION">
            <DropdownMenu text="Studying at Intitute Technology Sepuluh Nopember">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis maxime numquam explicabo incidunt nulla optio velit laudantium, eos unde consequuntur sit modi ea laboriosam iusto. Quia dolorem architecto blanditiis laboriosam, nemo placeat, neque veritatis sed ad quod est asperiores doloremque explicabo iure impedit atque, accusantium ipsam sunt? Iure, fugit.
            </DropdownMenu>
            <DropdownMenu text="Dian Harapan Highschool">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis maxime numquam explicabo incidunt nulla optio velit laudantium, eos unde consequuntur sit modi ea laboriosam iusto. Quia dolorem architecto blanditiis laboriosam, nemo placeat, neque veritatis sed ad quod est asperiores doloremque explicabo iure impedit atque, accusantium ipsam sunt? Iure, fugit.
            </DropdownMenu>
          </TitleSection>
        </section>

        <section id="courses">
          <TitleSection subtitle="education" title="courses">
            <DropdownMenu text="Intro to Computer Science - Harvard's CS50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis maxime numquam explicabo incidunt nulla optio velit laudantium, eos unde consequuntur sit modi ea laboriosam iusto. Quia dolorem architecto blanditiis laboriosam, nemo placeat, neque veritatis sed ad quod est asperiores doloremque explicabo iure impedit atque, accusantium ipsam sunt? Iure, fugit.
            </DropdownMenu>
          </TitleSection>
        </section>

       <section id="work-experience">
          <TitleSection title="work experience" subtitle="experience">
            <DropdownMenu text="Intern at ICHIRO ITS (2022)">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis maxime numquam explicabo incidunt nulla optio velit laudantium, eos unde consequuntur sit modi ea laboriosam iusto. Quia dolorem architecto blanditiis laboriosam, nemo placeat, neque veritatis sed ad quod est asperiores doloremque explicabo iure impedit atque, accusantium ipsam sunt? Iure, fugit.
            </DropdownMenu>
          </TitleSection>
        </section>

        <section id='contact-me'>
          <TitleSection title="contact me" subtitle="let's get in touch">
            <ContactMe/>
          </TitleSection>
        </section>

        <section className='footer mb-32'></section>
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
        Hi I'm Darren Prasetya,
        <span className='font-normal'> lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aliquam reprehenderit aperiam similique cupiditate quia, in laudantium fugit corporis omnis, odit id recusandae eveniet earum nihil sit ullam eius temporibus possimus rerum cumque saepe consectetur maiores. Inventore cupiditate ducimus quasi, mollitia qui sapiente saepe nam maxime vero laborum ea voluptatibus!</span>
      </p>
      <br />
      <p className='font-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores aliquam reprehenderit aperiam similique cupiditate quia, in laudantium fugit corporis omnis, odit id recusandae eveniet earum nihil sit ullam eius temporibus possimus rerum cumque saepe consectetur maiores. Inventore cupiditate ducimus quasi, mollitia qui sapiente saepe nam maxime vero laborum ea voluptatibus!</p>
    </div>
  )
}

export default App;
