import React from 'react'
import { PortfolioExample, PortfolioExamples, PortfolioSection } from './portfolio'

import EXAMPLE_WORK from '../../assets/portfolio.png'

const Portfolio = () => {
  return (
    <PortfolioSection id='portfolio' className='container'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <PortfolioExamples>
        <PortfolioExample>
          <div><img src={EXAMPLE_WORK} alt="my_work" /></div>
          <h3>Landing Page Terarrium</h3>
        </PortfolioExample>
        <PortfolioExample>
          <div><img src={EXAMPLE_WORK} alt="my_work" /></div>
          <h3>Landing Page Terarrium</h3>
        </PortfolioExample>
        <PortfolioExample>
          <div><img src={EXAMPLE_WORK} alt="my_work" /></div>
          <h3>Landing Page Terarrium</h3>
        </PortfolioExample>
        
      </PortfolioExamples>
    </PortfolioSection>
  )
}

export default Portfolio