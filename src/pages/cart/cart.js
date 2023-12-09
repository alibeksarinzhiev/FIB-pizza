import React, {useContext, useState} from 'react';
import img from './image 9.png'
import close from './image 41.png'
import './cart.scss'
import {CustomContext} from "../../Context";

const Cart = () => {
    const {basket,plusOne,minusOne} = useContext(CustomContext)


    return (
        <section className='cart'>
            <div className="container">
                <h2>Корзина</h2>
                {basket.map((el,idx)=>(
                    <div className="cart__one">
                        <div className="cart__info">
                            <img src={el.image} alt=""/>
                            <div className="cart__text">x`
                                <h3>{el.title}</h3>
                                <p>{el.description}</p>
                            </div>
                        </div>
                        <div className="cart__price">

                            <h2>{el.price * el.quantity}</h2>

                        </div>
                        <div className="cart__all">
                            <div className="cart__quantity">
                                <span className='cart__minus' onClick={()=>minusOne(el.id)} >-</span>
                                <h3>{el.quantity}</h3>
                                <span className='cart__plus' onClick={()=>plusOne(el.id)}>+</span>
                            </div>
                        </div>

                        <img src={close} alt="close" />
                    </div>

                ))}
                <h2>ВСЕГО: {basket.reduce((acc,rec)=>(
                    acc + rec.quantity * rec.price
                ),0)}</h2>

            </div>
        </section>
    );
};

export default Cart;