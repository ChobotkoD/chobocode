import React from 'react'
import { ServicesSection, ServicesArticles, ServicesArticle } from './services'

const Services = () => {
  return (
    <ServicesSection id='services' className='container'>
      <h5>What I can offer to you</h5>
      <h2>Services</h2>
      <ServicesArticles>
        
        <ServicesArticle>
          <div>UI/UX Design</div>
          <ul>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
          </ul>
        </ServicesArticle>
        <ServicesArticle>
        <div>Web Development</div>
          <ul>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
          </ul>
        </ServicesArticle>
        <ServicesArticle>
        <div>Content Creation</div>
          <ul>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
          </ul>
        </ServicesArticle>
        
      </ServicesArticles>
    </ServicesSection>
  )
}

export default Services