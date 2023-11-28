import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import axios from "axios";

const Single = () => {
    const [onePizza,setOnePizza] = useState({})
    const id = useLocation().pathname.at(-1)

    useEffect(()=>{
        axios(`http://localhost:3000/products_pizza/${id}`)
            .then(({data})=>setOnePizza(data))
    },[])
    return (
        <>

            <img src={'../'+onePizza.image} alt=""/>
            <h2>{onePizza.title}</h2>
        </>
    );
};

export default Single;