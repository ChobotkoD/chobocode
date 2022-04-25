import React, { useContext } from 'react'
import { Context } from '../../App'
import { ServicesSection, ServicesArticles, ServicesArticle, ServicesBackground } from './services'



const Services = () => {
const value = useContext(Context)


  return (
    <ServicesBackground>
    <ServicesSection id='services' className='container anim-items'>
      <h5>{ value ? 'Що я можу вам запропонувати' : 'What I can offer to you'}</h5>
      <h2>{ value ? 'Сервіси' : 'Services'}</h2>
      <ServicesArticles>
        <ServicesArticle>
          <div>UI/UX Design</div>
          <ul>
            <li>{ value ? 'Створення дизайну з нуля.' : 'Create a design from scratch.'}</li>
            <li>{ value ? 'Готові рішення.' : 'Ready-made solutions.'}</li>
            <li>{ value ? 'Доопрацювання існуючих шаблонів.' : 'Finalization of existing templates.'}</li>
          </ul>
        </ServicesArticle>
        <ServicesArticle>
        <div>Web Development</div>
          <ul>
            <li>{ value ? 'Односторінковий сайт' : 'Landing page'}</li>
            <li>{ value ? 'Невеликі магазини.' : 'Small shops.'}</li>
            <li>{ value ? 'Доопрацювання/оптимізація існуючого коду.' : 'Refinement/optimization of the existing code.'}</li>
            <li>{ value ? 'Виправлення недоробок у існуючих проектах.' : 'Fixing bugs in existing projects.'}</li>
            <li>{ value ? 'Запуск проекту на хостингу.' : 'Launching a hosted project.'}</li>
          </ul>
        </ServicesArticle>
        <ServicesArticle>
        <div>Content Creation</div>
          <ul>
            <li>{ value ? 'Створення контенту.' : 'Content creation.'}</li>
            <li>{ value ? 'Завантаження/редагування контенту.' : 'Loading/editing content.'}</li>
            <li>{ value ? 'Оптимізація контенту для пошукової видачі' : 'Content optimization for search results'}.</li>
          </ul>
        </ServicesArticle>
      </ServicesArticles>
    </ServicesSection>
    </ServicesBackground>
  )
}

export default Services