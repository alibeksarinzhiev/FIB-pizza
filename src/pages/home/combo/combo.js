import React, {useEffect,useState} from 'react';
import './combo.scss'
import {Link} from "react-router-dom";
import axios from "axios";


const Combo = () => {
    const [combo,setCombo]=useState([])

    useEffect(()=>{
        axios('http://localhost:8080/products_combo')
            .then(({data})=>setCombo(data))
    },[])


    return (
        <section className='combo'>
            <div className="container">
                <h2>Комбо</h2>
                <div className="combo__all">
                    {combo.map((el)=>(
                        <div className="combo__one">
                            <div className="combo__top">
                                <Link to={`/single/${el.id}`}>
                                    <img src={el.image} alt=""/>
                                </Link>

                                <h3>{el.title}</h3>
                                <p>{el.description}</p>
                            </div>
                            <div className="combo__bottom">
                                <div className="combo__price">
                                    <h4>{el.new_price} сом</h4>
                                    <s><h5>{el.old_price} com</h5></s>
                                </div>
                                <button>В корзину</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Combo;