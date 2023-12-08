import React, {useContext, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import axios from "axios";
import './single.scss'
import holopen from './image/holopen.png'
import {CustomContext} from "../../Context";

const Single = () => {
    const {addBasket} = useContext(CustomContext)
    const [onePizza,setOnePizza] = useState({})
    const id = useLocation().pathname.split('/').at(-1)
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
                        <h4>{onePizza.description}
                        </h4>
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
                        <button onClick={()=>addBasket(onePizza.id)}>
                            Добавить в корзину {onePizza.price} сом
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Single;