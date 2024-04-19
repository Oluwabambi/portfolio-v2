import {useState,useEffect} from 'react'
import { data } from '../components/Experiences'
import AOS from 'aos';
import ExperienceSection from './ExperienceSection';
import SkillsSection from './SkillsSection';


const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [clicked, setClicked] = useState(null);

  const toggle = (o) => {
    if (clicked === o) {
      return setClicked(null)
    }
    setClicked(o)
  }
  return (
    <div data-aos="fade-right" data-aos-duration="1500" className="about-sect sect-space">
      <div className="title-sect">
        <span className="about-line"></span>
        <h1 className="about-title">About Me</h1>
        <span className="about-line"></span>
      </div>
      <h1> Hello, I'm <span className='about-name'> Awe Oluwabambi</span></h1>
      <p className='about-summ'>
        I am a frontend developer with industry experience in building
        responsive and weel functional web applications. I am a developer based
        in Lagos, Nigeria focused on creating interactive digital experiences on
        the web, working with brands and industry leaders.
      </p>
      <div className='xp-sect'>
        <h3 className='a-title' onClick={() => toggle(1)}>
          EXPERIENCE <i className={ `fa-solid fs-4 ${clicked === 1 ? 'fa-circle-chevron-down' : 'fa-circle-chevron-right'} ` }></i>
        </h3>
        <div className="container-fluid">  
          <div className={clicked === 1 ? 'items row show' : 'items row'}>
            {data.map((item) => (
              <ExperienceSection key={item.id} {...item}></ExperienceSection>
            ) )}
          </div>
        </div>
        <h3 className='a-title' onClick={() => toggle(2)}>
          SKILLS <i className={ `fa-solid fs-4 ${clicked === 2 ? 'fa-circle-chevron-down' : 'fa-circle-chevron-right'} ` }></i>
        </h3>
        <div className="container-fluid">
          <div className={clicked === 2 ? 'items row show' : 'items row'}>
            {/* { skills.map((skill) => ( */}
              <SkillsSection />
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About