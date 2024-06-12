import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Ray Lu',
    review: 'I worked with John for 2 years+ working towards one goal, to learn Software Engineering with out any distractions. Working together with John we went over computer science theory and programmed in many languages. We focused more on C++ aiding me in my college courses. Once I decided to join a full stack bootcamp John was able to pivot to assist me through out my bootcamp ensuring my success.'
  },
  {
    avatar: AVTR2,
    name: 'Andy Chan',
    review: 'I am currently a Full Stack Student at Flat Iron and I am working with John to ensure that I understand the theory that is being taught. Working with John has taught me the principles of programming to be able to advance in my learning journey with confidence. The mentorship program with John has taught me that anything is possible with the right mindset and a cup of coffee!'
  },
  {
    avatar: AVTR3,
    name: 'Simon Wong',
    review: 'As a part time DJ, Tech engineer, and college student I was struggling managing my time at my internship. Working with John we dove into the fundamentals of programming to help me through out my internship. We worked on the fundamentals of algorithms and data structures. Working with John secured me a full time position as a Java Data Analyst.'
  },
  {
    avatar: AVTR4,
    name: 'Dylan ',
    review: 'We worked together as coworkers, John was the companys go-to-engineer. Working with John was enjoyable and easy. We quickly bonded over our love for NYC fashion and eventually developed a more professional relationship. I hired John as a Web 3 developer to only then bring John on as our CTO for our start up company. John brings a freshing new vision on web 3 and is able to add on to the team with more than just code. '
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients and Students</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={70}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials