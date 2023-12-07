import React, {useContext, useEffect, useState} from 'react';
import './dessert.scss'
import {Link} from "react-router-dom";
import {CustomContext} from "../../../Context";

const Dessert = () => {
    const {dessert,addDessert} = useContext(CustomContext)

    return (
        <section className='dessert'>
            <div className="container">
                <h2>Дисерты</h2>
                <div className="dessert__all">
                    {dessert.map((el)=>(
                        <div className="dessert__one">
                            <div className="dessert__top">
                                <Link to={`/single/${el.id}`}>
                                    <img src={el.image} alt=""/>
                                </Link>

                                <h3>{el.title}</h3>
                                <p>{el.description}</p>
                            </div>
                            <div className="dessert__bottom">
                                <h4>{el.price} сом</h4>
                                <button onClick={()=>addDessert(el.id)}>В корзину</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Dessert;