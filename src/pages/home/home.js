import React, {useContext, useState} from 'react';
import Swiper from "./swiper/swiper";
import New from "./new/new";
import Pizza from "./pizza/pizza";
import {CustomContext} from "../../Context";

const Home = () => {
    return (
        <>
            <Swiper/>
            <New/>
            <Pizza/>
        </>
    );
};

export default Home;