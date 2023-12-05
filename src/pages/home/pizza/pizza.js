import React, {useContext, useEffect, useState} from 'react';
import './pizza.scss'
import {Link} from "react-router-dom";
import {CustomContext} from "../../../Context";

const Pizza = () => {
    const {pizza,addBasket} = useContext(CustomContext)


    return (
        <section className='pizza'>
            <div className="container">
                <h2>Пицца</h2>
                <div className="pizza__all">
                    {pizza.map((el)=>(
                        <div className="pizza__one">
                            <div className="pizza__top">
                                <Link to={`/single/${el.id}`}>
                                    <img src={el.image} alt=""/>
                                </Link>

                            <h3>{el.title}</h3>
                            <p>{el.description}</p>
                            </div>
                            <div className="pizza__bottom">
                                <h4>{el.price} сом</h4>
                                <button onClick={()=>addBasket(el.id)}>В корзину</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Pizza;