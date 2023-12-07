import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {JS} from "json-server/lib/cli/utils/is";

export const CustomContext = createContext();

export const Context = (props)=>{

    const [name,setName] = useState('alibek1243346')
    const [pizza,setPizza] = useState([])
    const [beverages,setBeverages] = useState([])
    const [basket,setBasket] = useState([])
    const [snacks,setSnacks] = useState([])
    const [dessert,setDessert] = useState([])
    const [combo,setCombo] = useState([])

    const addBasket = (id)=>{
        console.log('товар добавлен в корзину c id номером' + id)
        const find = pizza.find (el =>el.id === id)
        setBasket([...basket,find])
        console.log(basket)
    }
    useEffect(()=>{
        axios('http://localhost:8080/products_pizza')
            .then(({data})=>setPizza(data.filter((el)=>{
                return el.category === 'pizza'
            })))
    },[])


    const addBeverages = (id)=>{
        console.log('товар добавлен в корзину c id номером' + id)
        const find = beverages.find (el =>el.id === id)
        setBasket([...basket,find])
        console.log(basket)
    }
    useEffect(()=>{
        axios('http://localhost:8080/products_pizza')
            .then(({data})=>setBeverages(data.filter((el)=>{
                return el.category === 'beverages'
            })))
    },[])


    const addSnacks = (id)=>{
        console.log('товар добавлен в корзину c id номером' + id)
        const find = snacks.find (el =>el.id === id)
        setBasket([...basket,find])
        console.log(basket)
    }
    useEffect(()=>{
        axios('http://localhost:8080/products_pizza')
            .then(({data})=>setSnacks(data.filter((el)=>{
                return el.category === 'snacks'
            })))
    },[])


    const addDessert = (id)=>{
        console.log('товар добавлен в корзину c id номером' + id)
        const find = dessert.find (el =>el.id === id)
        setBasket([...basket,find])
        console.log(basket)
    }
    useEffect(()=>{
        axios('http://localhost:8080/products_pizza')
            .then(({data})=>setDessert(data.filter((el)=>{
                return el.category === 'dessert'
            })))
    },[])


    const addCombo= (id)=>{
        console.log('товар добавлен в корзину c id номером' + id)
        const find = combo.find (el =>el.id === id)
        setBasket([...basket,find])
        console.log(basket)
    }
    useEffect(()=>{
        axios('http://localhost:8080/products_pizza')
            .then(({data})=>setCombo(data.filter((el)=>{
                return el.category === 'combo'
            })))
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
        beverages,
        setBeverages,
        snacks,
        setSnacks,
        dessert,
        setDessert,
        combo,
        setCombo,
        logOut,
        addBasket,
        addBeverages,
        addSnacks,
        addDessert,
        addCombo,
        basket
    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>

}