import React from 'react'
import { TestimonialsArticle, TestimonialsSection } from './testimonials'
import PUPPY_IMG from '../../assets/puppy.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
 
const Testimonials = () => {
  return (
    <TestimonialsSection className='container'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      // className='mySwiper'
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <TestimonialsArticle>
        <div><img src={PUPPY_IMG} alt="ava_testimonials" /></div>
        <h3>Franko1</h3>
        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem earum it amet consectetur adipisicing elit. Exercitationem earuit amet consectetur adipisicing elit. Exercitationem earuit amet consectetur adipisicing elit. Exercitationem earu veritatis, illum autem perferendis dis</small>
        </TestimonialsArticle> 
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsArticle>
        <div><img src={PUPPY_IMG} alt="ava_testimonials" /></div>
        <h3>Franko2</h3>
        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem earum it amet consectetur adipisicing elit. Exercitationem earuit amet consectetur adipisicing elit. Exercitationem earuit amet consectetur adipisicing elit. Exercitationem earu veritatis, illum autem perferendis dis</small>
        </TestimonialsArticle> 
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsArticle>
        <div><img src={PUPPY_IMG} alt="ava_testimonials" /></div>
        <h3>Franko3</h3>
        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem earum it amet consectetur adipisicing elit. Exercitationem earuit amet consectetur adipisicing elit. Exercitationem earuit amet consectetur adipisicing elit. Exercitationem earu veritatis, illum autem perferendis dis</small>
        </TestimonialsArticle> 
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsArticle>
        <div><img src={PUPPY_IMG} alt="ava_testimonials" /></div>
        <h3>Franko4</h3>
        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem earum it amet consectetur adipisicing elit. Exercitationem earuit amet consectetur adipisicing elit. Exercitationem earuit amet consectetur adipisicing elit. Exercitationem earu veritatis, illum autem perferendis dis</small>
        </TestimonialsArticle> </SwiperSlide>
      </Swiper>
    </TestimonialsSection>
  )
}

export default Testimonials