import React, {useEffect, useState} from 'react';
import './snacks.scss'
import {Link} from "react-router-dom";
import axios from "axios";

const Snacks = () => {
    const [snacks,setSnacks]=useState([])

    useEffect(()=>{
        axios('http://localhost:8080/products_snacks')
            .then(({data})=>setSnacks(data))
    },[])

    return (
        <section className='snacks'>
            <div className="container">
                <h2>Закуски</h2>
                <div className="snacks__all">
                    {snacks.map((el)=>(
                        <div className="snacks__one">
                            <div className="snacks__top">
                                <Link to={`/single/${el.id}`}>
                                    <img src={el.image} alt=""/>
                                </Link>

                                <h3>{el.title}</h3>
                                <p>{el.description}</p>
                            </div>
                            <div className="snacks__bottom">
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

export default Snacks;