import React, {useContext} from 'react';
import './swiper.scss'
import SwiperSlider from "./swiperSlide/swiperSlider";
import {CustomContext} from "../../../Context";



const Swiper = () => {
    const {name} = useContext(CustomContext)
    return (
        <section className='swiper'>
            <div className="container">
                <h2>{name}</h2>
            <SwiperSlider/>
            </div>
        </section>
    );
};

export default Swiper;