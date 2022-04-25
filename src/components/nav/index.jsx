import React, {useState, useEffect} from 'react';

import {NavSection, Home, About, Experience, Services, Testimonials, Contact, Portfolio} from './nav.js';
import offset from '../../helpers';

const Nav = () => {
const [activeNav, setActiveNav] = useState('#')

useEffect(()=>{
  const animItems = document.querySelectorAll('.anim-items')

  if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(){
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;

        animItem.classList.remove('_active')

        let animItemPoint = window.innerHeight - animItemHeight / 2;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / 2;
        }

        if((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight / 2)){
          setActiveNav(animItem.id)
        }  
      }
    }
  }

},[])


  return (
    <NavSection id='NavSection' >
      <a href='#home' onClick={()=> setActiveNav('home')} className={activeNav === 'home' ? 'active' : ''}><Home/></a>
      <a href='#about' onClick={()=> setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}><About/></a>
      <a href='#experience' onClick={()=> setActiveNav('experience')} className={activeNav === 'experience' ? 'active' : ''}><Experience/></a>
      <a href='#services' onClick={()=> setActiveNav('services')} className={activeNav === 'services' ? 'active' : ''}><Services/></a>
      <a href='#portfolio' onClick={()=> setActiveNav('portfolio')} className={activeNav === 'portfolio' ? 'active' : ''}><Portfolio/></a>
      <a href='#testimonials' onClick={()=> setActiveNav('testimonials')} className={activeNav === 'testimonials' ? 'active' : ''}><Testimonials/></a>
      <a href='#contact' onClick={()=> setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}><Contact/></a>
    </NavSection>
  )
}

export default Nav