import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar1.jpg'

import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVT1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius cupiditate quia, eaque ea reiciendis impedit asperiores nesciunt tempore illo, nam id reprehenderit hic illum eligendi, maiores fugit odio possimus!'
    },
    {
        avatar: AVT2,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius cupiditate quia, eaque ea reiciendis impedit asperiores nesciunt tempore illo, nam id reprehenderit hic illum eligendi, maiores fugit odio possimus!'
    },
    {
        avatar: AVT3,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius cupiditate quia, eaque ea reiciendis impedit asperiores nesciunt tempore illo, nam id reprehenderit hic illum eligendi, maiores fugit odio possimus!'
    },
    {
        avatar: AVT4,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius cupiditate quia, eaque ea reiciendis impedit asperiores nesciunt tempore illo, nam id reprehenderit hic illum eligendi, maiores fugit odio possimus!'
    }
]


const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                  modules={[Pagination]}
                  spaceBetween={40}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}>
                {
                    data.map(({avatar, name, review}, index)=> {
                        return (
                    <SwiperSlide key={index} className="testimonial">
                        <div className="client__avatar">
                            <img src={avatar}/>
                        </div>
                        <h5 className="client__name">{name}</h5>
                        <small className="client__review">{review}</small>
                </SwiperSlide>
                        )
                    })
                }

            </Swiper>
                {/* you can also use below */}
                {/* <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVT1} alt="Avatar One"/>
                    </div>
                        <h5 className="client__name">Ernest Achiever</h5>
                        <small className="client__review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius cupiditate quia, eaque ea reiciendis impedit asperiores nesciunt tempore illo, nam id reprehenderit hic illum eligendi, maiores fugit odio possimus!
                        </small>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVT2} alt="Avatar One"/>
                    </div>
                        <h5 className="client__name">Ernest Achiever</h5>
                        <small className="client__review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius cupiditate quia, eaque ea reiciendis impedit asperiores nesciunt tempore illo, nam id reprehenderit hic illum eligendi, maiores fugit odio possimus!
                        </small>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVT3} alt="Avatar One"/>
                    </div>
                        <h5 className="client__name">Ernest Achiever</h5>
                        <small className="client__review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius cupiditate quia, eaque ea reiciendis impedit asperiores nesciunt tempore illo, nam id reprehenderit hic illum eligendi, maiores fugit odio possimus!
                        </small>
                </article>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={AVT4} alt="Avatar One"/>
                    </div>
                        <h5 className="client__name">Ernest Achiever</h5>
                        <small className="client__review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eius cupiditate quia, eaque ea reiciendis impedit asperiores nesciunt tempore illo, nam id reprehenderit hic illum eligendi, maiores fugit odio possimus!
                        </small>
                </article> */}

            
        </section>
    )
}

export default Testimonials
