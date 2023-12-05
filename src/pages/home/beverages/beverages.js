import React, {useEffect, useState} from 'react';
import './beverages.scss'
import {Link} from "react-router-dom";
import axios from "axios";

const Beverages = () => {
    const [beverages,setBeverages] = useState([])

    useEffect(()=>{
        axios('http://localhost:8080/products_beverages')
            .then(({data})=>setBeverages(data))
    },[])

    return (
        <section className='beverages'>
            <div className="container">
                <h2>Напитки</h2>
                <div className="beverages__all">
                    {beverages.map((el)=>(
                        <div className="beverages__one">
                            <div className="beverages__top">
                                <Link to={`/single/${el.id}`}>
                                    <img src={el.image} alt=""/>
                                </Link>

                                <h3>{el.title}</h3>
                                <p>{el.description}</p>
                            </div>
                            <div className="beverages__bottom">
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

export default Beverages;