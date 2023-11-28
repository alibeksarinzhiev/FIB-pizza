import React from 'react';
import swiper1 from "../../image/image 31 (2).png";
import swiper2 from "../../image/image 5 (2).png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


import 'swiper/css'
import './swiperSlider.scss'


const SwiperSlider = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={2}
            loop={true}
            navigation={true}
            modules={[Navigation]}
        >
            <SwiperSlide>
                <img src={swiper1} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={swiper2} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={swiper1} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={swiper2} alt=""/>
            </SwiperSlide>

        </Swiper>
    );
};

export default SwiperSlider;