import React, {useContext, useState} from 'react';
import Swiper from "./swiper/swiper";
import New from "./new/new";
import Pizza from "./pizza/pizza";
import {CustomContext} from "../../Context";

const Home = () => {
    const {name} = useContext(CustomContext)
    return (
        <>
            <h2>{name}</h2>
            <Swiper/>
            <New/>
            <Pizza/>
        </>
    );
};

export default Home;