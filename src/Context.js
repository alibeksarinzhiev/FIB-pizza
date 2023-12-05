import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {JS} from "json-server/lib/cli/utils/is";

export const CustomContext = createContext();

export const Context = (props)=>{

    const [name,setName] = useState('alibek1243346')
    const [pizza,setPizza] = useState([])
    const [basket,setBasket] = useState([])

    const addBasket = (id)=>{
        console.log('товар добавлен в корзину c id номером' + id)
        const find = pizza.find (el =>el.id === id)
        setBasket([...basket,find])
        console.log(basket)
    }

    useEffect(()=>{
        axios('http://localhost:8080/products_pizza')
            .then(({data})=>setPizza(data))
    },[])


    const [user,setUser]= useState({email:''})

    const logOut = ()=>{
        console.log(user)
        setUser({email:''})
        localStorage.removeItem('user')

    }
    useEffect(()=>{
        if (JSON.parse(localStorage.getItem('user')) !==null)
setUser(JSON.parse(localStorage.getItem('user')))
    },[])

    const value = {
        name,
        pizza,
        setPizza,
        user,
        setUser,
        logOut,
        addBasket,
        basket
    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>

}