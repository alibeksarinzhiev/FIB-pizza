import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import axios from "axios";
import './single.scss'
import holopen from './image/holopen.png'

const Single = () => {
    const [onePizza,setOnePizza] = useState({})
    const id = useLocation().pathname.at(-1)

    useEffect(()=>{
        axios(`http://localhost:8080/products_pizza/${id}`)
            .then(({data})=>setOnePizza(data))
    },[])
    return (
        <div className='pizzass'>
            <div className='container'>
                <div className='pizzass__center'>
                    <img src={'../'+onePizza.image} alt=""/>
                    <div className='pizzass__right'>
                        <h2>{onePizza.title}</h2>
                        <h4>25 см, традиционное тесто, 360 г
                        </h4>
                        <p>Моцарелла, соус альфредо</p>
                        <div className='pizzass__size'>
                            <button>Маленькая</button>
                            <button>Средняя</button>
                            <button>Большая</button>
                        </div>
                        <div className='pizzass__list'>
                            <button>Традиционное</button>
                            <button>Тонкое</button>
                        </div>
                        <div className='pizzass__garnir'>
                            <div className='pizzass__souse'>
                                <img src={holopen} alt=""/>
                                <h3>Острый холопенью</h3>
                                <h4>от 120 сом</h4>
                            </div>
                            <div className='pizzass__souse'>
                                <img src={holopen} alt=""/>
                                <h3>Острый холопенью</h3>
                                <h4>от 120 сом</h4>
                            </div>
                            <div className='pizzass__souse'>
                                <img src={holopen} alt=""/>
                                <h3>Острый холопенью</h3>
                                <h4>от 120 сом</h4>
                            </div>
                        </div>
                        <button>
                            Добавить в корзину 1 048 ₽
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Single;