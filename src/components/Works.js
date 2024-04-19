import {useEffect} from 'react'
import AOS from 'aos';
import { data } from './WorksList';

const Works = () => {
  useEffect(()=> {
    AOS.init();
  }, [])
  return (
    <div data-aos="fade-right" data-aos-duration="1500" className='works-sect sect-space'>
      <div className="title-sect">
        <span className="about-line"></span>
        <h1 className="about-title">Some of My Works</h1>
        <span className="about-line"></span>
      </div>
      <div>
        <p>What I have below are some of the things I've worked on as a frontend developer:</p>
      </div>
      {/* <h1 className='text-center'>MY PORTFOLIO</h1> */}
      <div className='works'>
        {data.map((work) => (
          <div key={work.id} className='work'>
            <div className='work-img'>
              <img src={work.src} alt="restaurant app" />
            </div>
            <div className='work-info'>
              <h5>{work.name}</h5>
              <p>{work.summary}</p>
              <div className='mb-4'>
                {work.tools.map((tool) => (
                  <span key={tool.id} className="badge px-4 py-2 rounded-pill me-3 badge-bg">{tool.name}</span>
                ))}
                {/* <span className="badge px-4 py-2 rounded-pill me-3 badge-bg">ReactJS</span>
                <span className="badge px-4 py-2 rounded-pill badge-bg">CSS</span> */}
              </div>
              <a href={work.link} rel='noreferrer' target='_blank' className='site-link'>VISIT SITE <i className="fa-solid ms-2 fa-arrow-right"></i></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works