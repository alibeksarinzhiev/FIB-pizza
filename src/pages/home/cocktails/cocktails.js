import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {CustomContext} from "../../../Context";
import './cocktails.scss'


const Cocktails = () => {
    const {cocktails,addCocktails} = useContext(CustomContext)

    return (
        <section className='cocktails'>
            <div className="container">
                <h2>Коктели</h2>
                <div className="cocktails__all">
                    {cocktails.map((el)=>(
                        <div className="cocktails__one">
                            <div className="cocktails__top">
                                <Link to={`/single/${el.id}`}>
                                    <img src={el.image} alt=""/>
                                </Link>

                                <h3>{el.title}</h3>
                                <p>{el.description}</p>
                            </div>
                            <div className="cocktails__bottom">
                                <div className="cocktails__price">
                                    <h4>{el.price} сом</h4>
                                </div>
                                <button onClick={()=>addCocktails(el.id)}>В корзину</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Cocktails;