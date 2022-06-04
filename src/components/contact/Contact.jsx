import React,{useRef} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_rwy04mb', 'template_a77uxdp', form.current, 'tMe8GCGl4uc7w7CdM')
      .then((result) => {
          // console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id="Contact">
    <h2>Contact Me</h2>
      <form action="" className="container contact-container" autoComplete='off'  ref={form} onSubmit={sendEmail}>
          <div className="input1">
            <input required type="text" name='name' placeholder='Your Name' />
            <input required type="email" name='email' autoComplete='off' placeholder='Your Email' />
          </div>
        <input required type="text" name="subject"placeholder='Subject' />
        <textarea required minLength={10} cols="10" rows="6" name='message' placeholder='Message'></textarea>
          <button className='btn' type='submit'>Send Message</button>
      </form>
    </section>
  )
}

export default Contact

// <a href="mailto:chandra240797@gmail.com" className='btn' type='submit'rel="noreferrer">Send Message</a>