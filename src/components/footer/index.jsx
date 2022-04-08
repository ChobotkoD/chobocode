import React from 'react'
import { FooterArea, FooterLinks, FooterSection, FooterSocials } from './footer'
import {AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <FooterSection>
      <FooterArea className='container'> 
        <h2>EGATOR</h2>
        <FooterLinks>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </FooterLinks>
        <FooterSocials>
          <AiOutlineGithub/>
          <AiOutlineGithub/>
          <AiOutlineGithub/>
        </FooterSocials>
        <p>© Chobotko. All rights reserved</p>
      </FooterArea>
    </FooterSection>
  )
}

export default Footer