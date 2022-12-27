import AOS from 'aos'
import { useEffect, useRef, useState } from 'react'
import { sendForm } from 'emailjs-com';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Contact = () => {
  const [submitted, setSubmitted] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const swal = withReactContent(Swal)

  useEffect(() => {
    AOS.init()
  }, []);

  const form = useRef();

  const validateForm = () => {
    if(username.length === 0 || email.length === 0 || message.length === 0) {
      setError('Please fill in all fields')
      return false;
    }

    if(!email.includes('@')) {
      setError('Invalid email address')
      return false;
    }

    setError(null)
    return true;
  }

  const resetForm = () => {
    setUsername('');
    setEmail('');
    setMessage('');
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(validateForm()) {
      setSubmitted(true);
      sendForm('service_297zu1l', 'template_2bhvxue', form.current, '4fMjQYsjvD3C6szxI')
      .then((response)=> {
        setSubmitted(false);
        resetForm();
        swal.fire({
          title: "Message sent successfully!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      })
      .catch((err) => {
        setSubmitted(false);
        swal.fire({
          title: "Message not sent",
          icon: "error",
          timer: 2000,
          showConfirmButton: false,
        });
        console.log("Error occured", err);
      })
    }

  }

  return (
    <div data-aos="fade-right" data-aos-duration="1500" className='sect-space contact-sect'>
      <div className="title-sect">
        <span className="about-line"></span>
        <h1 className="about-title">Contact Me</h1>
        <span className="about-line"></span>
      </div>
      <div>
        <p>Let me know about your current job opportunities or just say hi! I'll do my best to respond to you.</p>
      </div>
      <div className='contact-container'>
        <form className='form-section' ref={form} onSubmit={onSubmit}>
          {error && <p className='text-danger'>{error}</p>}
          <div className='field-container'>
            <input className='form-inp' name='user_name' onChange={ (e) => setUsername(e.target.value) }  value={username} placeholder='Your name' type="text" />
          </div>
          <div className='field-container'>
            <input className='form-inp' name='user_email'  onChange={ (e) => setEmail(e.target.value) } value={email} placeholder='Email' type="text" />
          </div>
          <div className='field-container'>
            <textarea className='form-inp' name='message' onChange={ (e) => setMessage(e.target.value) }  value={message} placeholder='Drop a message...' cols="30" rows="10"></textarea>
          </div>
          <button className="home-btn beige-btn" type='submit'>
            <span className = {`${ submitted ? '' : 'd-none' } me-1 spinner-border spinner-border-sm`} role="status" aria-hidden="true"></span>
            <span>
              { submitted ? 'Loading...' : 'Send' }
            </span>
          </button>
        </form>
        <div className='extras-section'>
          <h3>Lagos, Nigeria</h3>
          <a href='tel:+2348099877707' className='tele-text'>+2348099877707</a>
          <a className='email-text' href="mailto:aweoluwabambi@gmail.com">aweoluwabambi@gmail.com</a>
        </div>
      </div>
    </div>
  )
}

export default Contact