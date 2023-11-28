import React from 'react';
import logoPizza from "../../image/image 8 (1).png";

const NweCard = () => {
    return (
        <div className="new__card">
            <img src={logoPizza} alt=""/>
            <div className="new__info">
                <h3>Карбонара</h3>
                <p>от 120 ₽</p>
            </div>
        </div>
    );
};

export default NweCard;