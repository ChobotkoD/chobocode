import React, { useContext } from 'react'
import { PortfolioExample, PortfolioExamples, PortfolioSection } from './portfolio'


import MOSSHILL from '../../assets/mosshill.jpg'
import TRAVEL from '../../assets/travel.jpg'
import FITNESS from '../../assets/fitness.jpg'
import { Context } from '../../App'

const Portfolio = () => {
const value = useContext(Context)

  return (
    <PortfolioSection id='portfolio' className='container anim-items'>
      <h5>{ value ? 'Недавні Роботи' : 'My Recent Work'}</h5>
      <h2>{ value ? 'Портфоліо' : 'Portfolio'}</h2>
      <PortfolioExamples>
        <PortfolioExample>
          <div><img src={FITNESS} alt="my_work" /></div>
          <h3>Fitness page</h3>
        </PortfolioExample>
        <PortfolioExample>
          <div><img src={MOSSHILL} alt="my_work" /></div>
          <h3>MossHill Terarrium Page </h3>
        </PortfolioExample>
        <PortfolioExample>
          <div><img src={TRAVEL} alt="my_work" /></div>
          <h3>Travel Landing Page</h3>
        </PortfolioExample>
        
      </PortfolioExamples>
    </PortfolioSection>
  )
}

export default Portfolio