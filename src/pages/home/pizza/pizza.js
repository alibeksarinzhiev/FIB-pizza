import React, {useEffect, useState} from 'react';
import './pizza.scss'
import axios from "axios";
import {Link} from "react-router-dom";

const Pizza = () => {
    const [pizza,setPizza] = useState([])

    useEffect(()=>{
        axios('http://localhost:8080/products_pizza')
            .then(({data})=>setPizza(data))
    },[])

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
                                <button>В корзину</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Pizza;