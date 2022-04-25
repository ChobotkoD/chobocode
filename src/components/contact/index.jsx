import React, { useState, useContext} from 'react'
import { Context } from '../../App';
//EMAIL service for sending messages
import emailjs from '@emailjs/browser';
import { ContactArticleForm, ContactDirectForm, ContactForms, ContactMessagersForms, ContactSection, ContactSpinner } from './contact'

import { AiOutlineMail } from 'react-icons/ai'
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const value = useContext(Context)
  const [formName, setFormName] = useState('');
  const [formMail, setFormMail] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const [fillForm, setFillForm] = useState(false)

  const [btnDisable, setBtnDisable] = useState(false)

  const templateParams = {
    name: formName,
    mail: formMail,
    message: formMessage
};


const sendMail = (e) => {
  

  if(formName !== '' && formMail !== '' && formMessage !== ''){
    setBtnDisable(true);
    emailjs.send('service_guo37tm','template_u3f1t25', templateParams, 'Hqh8aNXX1M4P8nazs')
    .then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       setFormName('');
       setFormMail('');
       setFormMessage('');
       setBtnDisable(false);
    }, (err) => {
       console.log('FAILED...', err);
    });
  } else {
    setBtnDisable(true);
    setFillForm(prev => !prev)
    setTimeout(() => {
      setFillForm(prev => !prev)
      setBtnDisable(false);
    },2000)
  }
  }




  return (
    <ContactSection id='contact' className='container anim-items'>
      <h5>{ value ? 'Налагодити Зв\'язок' : 'Get In Touch'}</h5>
      <h2>{ value ? 'Зв\'яжіться зі мною' : 'Contact Me'}</h2>
      <ContactForms>
        <ContactMessagersForms>
          <ContactArticleForm>
            <AiOutlineMail/>
            <h6>Email</h6>
            <h5>dev4chob@gmail.com</h5>
            <small><a href="mailto:dev4chob@gmail.com">{ value ? 'Надіслати повідомлення' : 'Send a message'}</a></small>
          </ContactArticleForm>
          <ContactArticleForm>
            <FaTelegramPlane/>
            <h6>Telegram</h6>
            <h5>@d2c666</h5>
            {/* <small>Have question?</small> */}
          </ContactArticleForm>
          <ContactArticleForm>
            <FaTwitter/>
            <h6>Twitter</h6>
            <h5>pac2rat</h5>
            <small>What I think? Check it out.</small>
          </ContactArticleForm>
          
        </ContactMessagersForms>
        <ContactDirectForm name={formName}>
            {fillForm && formName === '' && <small className='emptyName'>Fill your NAME</small>}             
            {fillForm && formMail === '' && <small className='emptyMail'>Fill your MAIL</small>}             
            {fillForm && formMessage === '' && <small className='emptyMessage'>Fill your MESSAGE</small>}             
            <input id='ContactFormName' value={formName} onChange={(e)=>{setFormName(e.target.value)}} type="text" placeholder={ value ? 'Ваше Ім\'я По Батькові' : 'Your Full Name'} autoComplete="off"/>
            <input value={formMail} onChange={(e)=>{setFormMail(e.target.value)}} type="text" placeholder={ value ? 'Ваша Електронна Пошта' : 'Your Email'} autoComplete="off"/>
            <textarea value={formMessage} onChange={(e)=>{setFormMessage(e.target.value)}} cols="30" rows="10" placeholder={ value ? 'Ваше Повідомлення' : 'Your Message'}/>
            <button disabled={btnDisable} onClick={(e)=>{sendMail(e)}} className='btn btn-primary'>{ value ? 'Надіслати повідомлення' : 'Send a message'}</button>
            <ContactSpinner btnDisable={btnDisable}>
              <div>
              </div>
              <div>
              </div>
              <div>
              </div>
              <div>
              </div>
            </ContactSpinner>
        </ContactDirectForm>
      </ContactForms>
    </ContactSection>
  )
}

export default Contact