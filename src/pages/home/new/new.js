import React from 'react';
import './new.scss'
import NweCard from "./newCard/nweCard";


const New = () => {
    return (
        <section className='new'>
            <div className="container">
                <h2>Новинки</h2>
                    <div className="new__box">
                        <NweCard/>
                        <NweCard/>
                        <NweCard/>
                        <NweCard/>
                    </div>
            </div>
        </section>
    );
};

export default New;