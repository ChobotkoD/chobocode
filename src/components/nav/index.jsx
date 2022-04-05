import React, {useState} from 'react';

import {NavSection, Home, About, Experience, Services, Contact} from './nav.js';

const Nav = () => {
const [activeNav, setActiveNav] = useState('#')



  return (
    <NavSection id='NavSection'>
      <a href='#home' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><Home/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><About/></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><Experience/></a>
      <a href='#services' onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><Services/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><Contact/></a>
    </NavSection>
  )
}

export default Nav