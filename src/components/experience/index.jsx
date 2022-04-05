import React from 'react'
import { ExperienceArticles, ExperienceBackend, ExperienceFrontend, ExperienceInfo, ExperienceSection, ExperienceIcon } from './experience'

const Experience = () => {
  return (
    <ExperienceSection id='experience' className='container'>
      <h2>What Skills I Have</h2>
      <h5>My Experience</h5>
      <ExperienceInfo>
        <ExperienceFrontend>
          <h3>Frontend Development</h3>
          <ExperienceArticles>
            <article>
              <div>
                <ExperienceIcon/>
                <h6>HTML</h6>
              </div>  
              <h5>Experienced</h5>
            </article>
            <article>
              <div>
                <ExperienceIcon/>
                <h6>HTML</h6>
              </div>  
              <h5>Experienced</h5>
            </article>
            <article>
              <div>
                <ExperienceIcon/>
                <h6>HTML</h6>
              </div>  
              <h5>Experienced</h5>
            </article>
            <article>
              <div>
                <ExperienceIcon/>
                <h6>HTML</h6>
              </div>  
              <h5>Experienced</h5>
            </article>
            <article>
              <div>
                <ExperienceIcon/>
                <h6>HTML</h6>
              </div>  
              <h5>Experienced</h5>
            </article>
            <article>
              <div>
                <ExperienceIcon/>
                <h6>HTML</h6>
              </div>  
              <h5>Experienced</h5>
            </article>
          </ExperienceArticles>
        </ExperienceFrontend>
        <ExperienceBackend>
          <h3>Backend Development</h3>
          <ExperienceArticles>
          <article>
              <div>
                <ExperienceIcon/>
                <h6>HTML</h6>
              </div>  
              <h5>Experienced</h5>
            </article>
            <article>
              <div>
                <ExperienceIcon/>
                <h6>HTML</h6>
              </div>  
              <h5>Experienced</h5>
            </article>
            <article>
              <div>
                <ExperienceIcon/>
                <h6>HTML</h6>
              </div>  
              <h5>Experienced</h5>
            </article>
            <article>
              <div>
                <ExperienceIcon/>
                <h6>HTML</h6>
              </div>  
              <h5>Experienced</h5>
            </article>
            <article>
              <div>
                <ExperienceIcon/>
                <h6>HTML</h6>
              </div>  
              <h5>Experienced</h5>
            </article>
            <article>
              <div>
                <ExperienceIcon/>
                <h6>HTML</h6>
              </div>  
              <h5>Experienced</h5>
            </article>
          </ExperienceArticles>
        </ExperienceBackend>
      </ExperienceInfo>
    </ExperienceSection>
  )
}

export default Experience