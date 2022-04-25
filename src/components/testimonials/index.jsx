import React, { useContext } from 'react'
import { Context } from '../../App'
import { TestimonialsArticle, TestimonialsSection } from './testimonials'

import ANNA from '../../assets/testimonials/anna.jpg'
import ANTON from '../../assets/testimonials/anton.jpg'
import ALEXANDRA from '../../assets/testimonials/alexandra.jpg'
import SERGEY from '../../assets/testimonials/sergey.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
 
const Testimonials = () => {
  const value = useContext(Context)
  return (
    <TestimonialsSection id='testimonials' className='container anim-items'>
      <h5>{ value ? 'Що кажуть кліенти' : 'Review from clients'}</h5>
      <h2>{ value ? 'Коментарі' : 'Testimonials'}</h2>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      // className='mySwiper'
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <TestimonialsArticle>
        <div><img src={ANNA} alt="ava_testimonials" /></div>
        <h3>Anna B.</h3>
        <small>Была задача по небольшому лендингу для риэлторов. Исходя из желаний и видения нам предложили варианты дизайна, согласовали некоторые моменты по функционалу. Работой довольны на 100%. Будем рекомендовать!<br/></small>
        </TestimonialsArticle> 
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsArticle>
        <div><img src={ANTON} alt="ava_testimonials" /></div>
        <h3>Anton</h3>
        <small>Начали сотрудничать относительно недавно, подходом к работе удолетворены, нареканий нет.</small>
        </TestimonialsArticle> 
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsArticle>
        <div><img src={ALEXANDRA} alt="ava_testimonials" /></div>
        <h3>Sasha K.</h3>
        <small>Вже не вперше звертаюся для доопрацювання, корекції існуючого сайту. Все добре!</small>
        </TestimonialsArticle> 
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsArticle>
        <div><img src={SERGEY} alt="ava_testimonials" /></div>
        <h3>Sergey U.</h3>
        <small>Был заказ на дизайн и разработку. Бюро очень внимательно отнеслось к деталям на моменте согласования ТЗ. Впечатления остались хорошие, в дальнейшем будем обращаться! </small>
        </TestimonialsArticle> 
      </SwiperSlide>
      </Swiper>
    </TestimonialsSection>
  )
}

export default Testimonials