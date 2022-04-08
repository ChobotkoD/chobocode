import React from 'react'
import { ContactArticleForm, ContactDirectForm, ContactForms, ContactMessagersForms, ContactSection } from './contact'

import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <ContactSection id='contact' className='container'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <ContactForms>
        <ContactMessagersForms>
          <ContactArticleForm>
            <AiOutlineMail/>
            <h6>Email</h6>
            <h5>mymail@gmail.com</h5>
            <small>Send a message</small>
          </ContactArticleForm>
          <ContactArticleForm>
            <AiOutlineMail/>
            <h6>Email</h6>
            <h5>mymail@gmail.com</h5>
            <small>Send a message</small>
          </ContactArticleForm>
          <ContactArticleForm>
            <AiOutlineMail/>
            <h6>Email</h6>
            <h5>mymail@gmail.com</h5>
            <small>Send a message</small>
          </ContactArticleForm>
          
        </ContactMessagersForms>
        <ContactDirectForm>
          
            <input type="text" placeholder='Your Full Name'/>
            <input type="text" placeholder='Your Email'/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
            <button className='btn btn-primary'>Send Message</button>
        </ContactDirectForm>
      </ContactForms>
    </ContactSection>
  )
}

export default Contact