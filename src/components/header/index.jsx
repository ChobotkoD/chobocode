import React from 'react'
import HEADER_IMG from '../../assets/header-img.jpg'
import {BsInstagram} from 'react-icons/bs'

import resume from '../../assets/header-img.jpg'


import {HeaderSection, HeaderContact, HeaderSocial, HeaderArrowDown} from './header.js'

const Header = () => {
  return (
    <header className='container'>
      <HeaderSection >
        <h2>Hello, I`m</h2>
        <h1>Chobotko Dmytro</h1>
        <h2>Fullstack Developer</h2>
        <HeaderContact >
          <a href={resume} className='btn' download>
            Download CV
          </a>
          <a href='#contact' className='btn btn-primary'>
            Lets Talk
          </a>
        </ HeaderContact>
        <div className='HeaderImg'>
          <HeaderSocial className='HeaderSocial'>
            <ul>
              <li><a><BsInstagram/></a></li>
              <li><a><BsInstagram/></a></li>
              <li><a><BsInstagram/></a></li>
              <li><a><BsInstagram/></a></li>
            </ul>
          </HeaderSocial>
          <img src={HEADER_IMG} alt='me'/>
          <HeaderArrowDown className='HeaderArrowDown'/>
        </div>
      </HeaderSection>  
    </header>
  )
}

export default Header