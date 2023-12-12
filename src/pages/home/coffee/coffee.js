import React, {useContext, useEffect, useState} from 'react';
import './coffee.scss'
import {Link} from "react-router-dom";
import {CustomContext} from "../../../Context";


const Coffee = () => {
    const {coffee,addCoffee}= useContext(CustomContext)


    return (
        <section className='coffee'>
            <div className="container">
                <h2>Закуски</h2>
                <div className="coffee__all">
                    {coffee.map((el)=>(
                        <div className="coffee__one">
                            <div className="coffee__top">
                                <Link to={`/single/${el.id}`}>
                                    <img src={el.image} alt=""/>
                                </Link>

                                <h3>{el.title}</h3>
                                <p>{el.description}</p>
                            </div>
                            <div className="coffee__bottom">
                                <h4>{el.price} сом</h4>
                                <button onClick={()=>addCoffee(el.id)}>В корзину</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>

    );
};

export default Coffee;