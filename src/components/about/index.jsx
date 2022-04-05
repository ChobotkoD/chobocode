import React from 'react'
import {AboutSection, AboutInfo, AboutImage, AboutInformation, ExperienceIcon, ClientsIcon, ProjectsIcon } from './about'
import ABOUT_IMG from '../../assets/about-img.jpg'


const About = () => {
  return (
    <AboutSection id='about' className='container'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
        <AboutInfo>
          <AboutImage>
            <div>
              <img src={ABOUT_IMG} alt='about-me'/>
            </div>
          </AboutImage>
          <AboutInformation>
            <div className='AboutInformationArticles'>
              <article><ExperienceIcon/><h4>Experience</h4><p>3+ Years Working</p></article>
              <article><ClientsIcon/><h4>Clients</h4><p>300+ WorldWide</p></article>
              <article><ProjectsIcon/><h4>Projects</h4><p>80+ completed</p></article>
            </div>
            <p className='AboutInformationText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus suscipit, veniam eligendi sint ratione sit debitis facere pariatur reiciendis vitae deserunt deleniti numquam mollitia sed obcaecati accusamus? Laboriosam, perspiciatis minima.</p>
            <a href='#contact' className='btn btn-primary'>
              Lets Talk
            </a>
          </AboutInformation>
        </AboutInfo>
    </AboutSection>
  )
}

export default About