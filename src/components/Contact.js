import AOS from 'aos'
import { useEffect } from 'react'

const Contact = () => {
  useEffect(() => {
    AOS.init()
  }, []);

  return (
    <div data-aos="fade-right" data-aos-duration="1500" className='sect-space contact-sect'>
      <div className="title-sect">
        <span className="about-line"></span>
        <h1 className="about-title">Contact Me</h1>
        <span className="about-line"></span>
      </div>
      <input placeholder='Your name' type="text" />
      <input placeholder='email' type="email" />
      <textarea placeholder='Drop a comment...' name="" id="" cols="30" rows="10"></textarea>
      <button className='btn btn-primary'>Send</button>
    </div>
  )
}

export default Contact