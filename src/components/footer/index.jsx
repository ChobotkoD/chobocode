import React from 'react'
import { FooterArea, FooterLinks, FooterSection, FooterSocials } from './footer'
import {AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <FooterSection>
      <FooterArea id='footer' className='container'> 
        <h2>CHOBOCODE</h2>
        <FooterLinks>
          <ul>
            <a href='#home'><li>Home</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#experience"><li>Experience</li></a>
            <a href="#services"><li>Services</li></a>
            <a href="#portfolio"><li>Portfolio</li></a>
            <a href="#testimonials"><li>Testimonials</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
        </FooterLinks>
        {/* <FooterSocials>
          <AiOutlineGithub/>
          <AiOutlineGithub/>
          <AiOutlineGithub/>
        </FooterSocials> */}
        <p>© Chobotko. All rights reserved</p>
      </FooterArea>
    </FooterSection>
  )
}

export default Footer