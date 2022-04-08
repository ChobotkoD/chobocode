import React from 'react'
import HEADER_IMG from '../../assets/header-img.jpg'
import {BsInstagram} from 'react-icons/bs'

import resume from '../../assets/header-img.jpg'


import {HeaderSection, HeaderContact, HeaderSocial, HeaderArrowDown} from './header.js'

const Header = () => {
  return (
    <header className='container'>
      <HeaderSection id='home'>
        <h5>Hello, I`m</h5>
        <h1>Chobotko Dmytro</h1>
        <h5>Fullstack Developer</h5>
        <HeaderContact >
          <a href={resume} className='btn' download>
            Download CV
          </a>
          <a href='#contact' className='btn btn-primary'>
            Lets Talk
          </a>
        </ HeaderContact>
        <div className='HeaderImg'>
          <HeaderSocial id='HeaderSocial'>
            <ul>
              <li><a><BsInstagram/></a></li>
              <li><a><BsInstagram/></a></li>
              <li><a><BsInstagram/></a></li>
              <li><a><BsInstagram/></a></li>
            </ul>
          </HeaderSocial>
          <img src={HEADER_IMG} alt='me'/>
          <HeaderArrowDown id='HeaderArrowDown'/>
        </div>
      </HeaderSection>  
    </header>
  )
}

export default Header