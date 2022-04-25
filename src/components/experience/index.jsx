import React, {useState, useContext,useEffect } from 'react'
import { ExperienceArticles, ExperienceBackend, ExperienceDesign, ExperienceFrontend, ExperienceInfo, ExperienceSection, AsideDesign, AsideFirstDesign, AsideSecondDesign, AsideThirdDesign, AsideZeroDesign, PPP, AsideZeroDesignTitle} from './experience'

import {SiCss3, SiHtml5, SiReact, SiTypescript, SiNextdotjs, SiNodedotjs, SiMongodb, SiFigma} from 'react-icons/si'
import {DiJavascript1} from 'react-icons/di'

import offset from '../../helpers'
import { Context } from '../../App'


const Experience = () => {
  const [flip, setFlip] = useState(false)
  const [aside, setAside] = useState(false)
  const value = useContext(Context)
  
  useEffect(()=> {
    window.addEventListener('scroll', activateAside);
    const item = document.querySelector('#experienceAside')
    const itemHeight = item.offsetHeight;
    const itemOffsetHeight = offset(item).top;
   
    // console.log('offsetheight height of item', itemHeight)
    // console.log('from top to item distance', itemOffsetHeight);
    // console.log('window display height', window.innerHeight);
    // console.log('scroll from top', window.scrollY);

    function activateAside(){
      let animItemPoint = window.innerHeight - itemHeight;
      
      if(window.scrollY > (itemOffsetHeight - animItemPoint)){
        setAside(true)
        window.removeEventListener('scroll', activateAside);
        }  
    }
  },[])

  const flipp = () => {
    setFlip(prev => !prev)
  }
    
  return (
    <ExperienceSection id='experience' className='container anim-items'>
      <h5>{ value ? 'Які Вміння Я Маю' : 'What Skills I Have'}</h5>
      <h2>{ value ? 'Мій Досвід' : 'My Experience'}</h2>
      <ExperienceInfo>
        <ExperienceFrontend>
          <h3>Frontend Development</h3>
          <ExperienceArticles>
            <article>
              <div>
                <SiHtml5 className='ExperienceIcons'/>
                <h6>HTML</h6>
              </div>  
              <h5>{ value ? 'Досвідчений' : 'Experienced'}</h5>
            </article>
            <article>
              <div>
                <SiCss3 className='ExperienceIcons'/>
                <h6>CSS</h6>
              </div>  
              <h5>{ value ? 'Досвідчений' : 'Experienced'}</h5>
            </article>
            <article>
              <div>
                <DiJavascript1 className='ExperienceIcons'/>
                <h6>JS</h6>
              </div>  
              <h5>{ value ? 'Досвідчений' : 'Experienced'}</h5>
            </article>
            <article>
              <div>
                <SiReact className='ExperienceIcons'/>
                <h6>REACT</h6>
              </div>  
              <h5>{ value ? 'Середній рівень' : 'Intermediate'}</h5>
            </article>
            <article>
              <div>
                <SiTypescript className='ExperienceIcons'/>
                <h6>TYPESCRIPT</h6>
              </div>  
              <h5>{ value ? 'Базові' : 'Basic'}</h5>
            </article>
            <article>
              <div>
                <SiNextdotjs className='ExperienceIcons'/>
                <h6>NEXTJS</h6>
              </div>  
              <h5>{ value ? 'Середній рівень' : 'Intermediate'}</h5>
            </article>
          </ExperienceArticles>
        </ExperienceFrontend>
        <ExperienceBackend>
          <h3>Backend Development</h3>
          <ExperienceArticles>
          <article>
              <div>
                <SiNodedotjs className='ExperienceIcons'/>
                <h6>NODEJS</h6>
              </div>  
              <h5>{ value ? 'Базові' : 'Basic'}</h5>
            </article>
            <article>
              <div>
                <SiMongodb className='ExperienceIcons'/>
                <h6>MONGODB</h6>
              </div>  
              <h5>{ value ? 'Базові' : 'Basic'}</h5>
            </article>
            
          </ExperienceArticles>
        </ExperienceBackend>
        <ExperienceDesign>
          <h3>Design</h3>
          <ExperienceArticles>
            <article>
              <div>
                <SiFigma className='ExperienceIcons'/>
                <h6>FIGMA</h6>
              </div>  
              <h5>{ value ? 'Середній рівень' : 'Intermediate'}</h5>
            </article>
          </ExperienceArticles>
        </ExperienceDesign>
      </ExperienceInfo>
      <AsideDesign id='experienceAside'>   
        <AsideZeroDesign  >
           <AsideZeroDesignTitle value={aside} onClick={flipp} vl={flip}>
             Hello World!
           </AsideZeroDesignTitle>
        </AsideZeroDesign>
        <AsideFirstDesign value={aside}>
          <div>
            <code>
              <h6>HTML</h6>
              <p className='firstp1'>
              <span className='first1'>{'<h3 ' }</span>
              <span className='first2'>{'class'}</span>
              <span className='first3'>{'='}</span>
              <span className='first4'>{"grt"}</span>
              <span className='first5'>{">"}</span>
              <span className='first6'>{"Hello World!"}</span>
              <span className='first5'>{"</div>"}</span>
              </p>
            </code>
          </div>
        </AsideFirstDesign>
        <AsideSecondDesign value={aside}>
          <div>
            <code>
              <h6>CSS</h6>
              <p className='secondp1'>
              <span className='second1'>{'.grt' }</span>
              <span className='second2'>{'{' }</span>
              </p>
              <p className='secondp2'>
                <span className='second3'>{'color'}</span>
                <span className='first6'>{':'}</span>
                <span className='second4'>{'#00f9f9'}</span>
                <span className='first6'>{';'}</span>
              </p>
              <p className='secondp3'>
                <span className='second5'>{'transform'}</span>
                <span className='second8'>{':'}</span>
                <span className='second6'>{'translateX'}</span>
                <span className='second8'>{'( '}</span>
                <span className='second8'>{'10'}</span>
                <span className='second7'>{'rem'}</span>
                <span className='second8'>{' );'}</span>
              </p>
              <p className='secondp4'>
                <span className='second9'>{'}'}</span>  
              </p>
            </code>
          </div>
        </AsideSecondDesign>
        <AsideThirdDesign value={aside}>
          <div>
            <code>
              <h6>JS</h6>
              <p className='thirdp1'>
                <span className='third1'>{'const ' }</span>
                <span className='third2'>{'TITLE ' }</span>
                <span className='third3'>{'= ' }</span>
                <span className='third4'>{'document.' }</span>
                <span className='third5'>{'querySelector' }</span>
                <span className='third6'>{'(' }</span>
                <span className='third7'>{'\'.grt\'' }</span>
                <span className='third8'>{');' }</span>
              </p>
              <p className='thirdp2'>
                <span className='third2'>{'TITLE.'}</span>
                <span className='third5'>{'addEventListener'}</span>
                <span className='third2'>{'('}</span>
                <span className='third7'>{'\'click\''}</span>
                <span className='third2'>{', '}</span>
                <span className='third9'>{'MAKEMAGIC'}</span>
                <span className='third2'>{');'}</span>
              </p>
            </code>
          </div>
        </AsideThirdDesign>
      </AsideDesign>
    </ExperienceSection>
  )
}

export default Experience