import React, {useContext} from 'react'
import {AboutSection, AboutInfo, AboutImage, AboutInformation, ExperienceIcon, ClientsIcon, ProjectsIcon } from './about'
import IPHONE_IMG from '../../assets/iphone.jpg'


import { Context } from '../../App'

const About = () => {
  const value = useContext(Context);

  return (
    <AboutSection id='about' className='container anim-items'>
      <h5>{value ? 'Інформація' : 'Get To Know'}</h5>
      <h2>{value ? 'Що Треба Знати' : 'About Me'}</h2>
        <AboutInfo>
          <AboutImage>
            <div>
              <img src={IPHONE_IMG} alt='about-me'/>
            </div>
            
          </AboutImage>
          <AboutInformation>
            <div className='AboutInformationArticles'>
              <article><ExperienceIcon/><h4>{value ? 'Досвід' : 'Experience'}</h4><p>{value ? '2+ Роки досвіду' : '2+ Years Working'}</p></article>
              <article><ClientsIcon/><h4>{value ? 'Клієнти' : 'Clients'}</h4><p>{value ? 'З України та Європи' : 'From Ukraine & Europe'}</p></article>
              <article><ProjectsIcon/><h4>{value ? 'Проекти' : 'Projects'}</h4><p>{value ? '12+ завершених' : '12+ completed'}</p></article>
            </div>
            <p className='AboutInformationText'>
              { value ? 'Захоплений технологіями та веб-програмуванням. Створюю програми під ваші потреби продажів в інтернеті, реклами, портфолію та ін. Створюю дизайни для ваших ідей та допомагаю доповнити вже існуючі. Залишились питання? Сміливо пишіть.' : 'Passionate about technology and web programming. I create applications for you online sales needs, advertising, portfolio, etc. I create designs for your ideas and help to complement the existing ones. Do you have any questions? Feel free to write.'}
            </p>
            <button  onClick={()=> document.getElementById('ContactFormName').focus()}  className='btn btn-primary'>
            { value ? 'Зв\'язатися' : 'Lets Talk'}
            </button>

          </AboutInformation>
        </AboutInfo>
    </AboutSection>
  )
}

export default About