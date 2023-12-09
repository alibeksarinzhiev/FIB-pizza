import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const CustomContext = createContext();

export const Context = (props)=>{
    const [product,setProduct] = useState([])
    const [pizza,setPizza] = useState([])
    const [beverages,setBeverages] = useState([])
    const [basket,setBasket] = useState([])
    const [snacks,setSnacks] = useState([])
    const [dessert,setDessert] = useState([])
    const [combo,setCombo] = useState([])
    const [user,setUser]= useState({email:''})



    useEffect(()=>{
        axios('http://localhost:8080/products_pizza')
            .then(({data})=>setProduct(data))
    },[])




    const plusOne = (id)=>{
        const find = pizza.find (el =>el.id === id)
        setBasket(basket.map((el)=>{
            if (el.id === id){
                if (el.quantity === 30){
                    el.quantity = 'max'
                    return el
                }
                else if (el.quantity === 'max'){
                    return el
                }
                else if (el.quantity === 'min'){
                    el.quantity = 1
                    return el
                }
                return {...el,quantity:el.quantity+ +1}
            }
            return el
        }))

    }

    const minusOne = (id)=>{
        const find = pizza.find (el =>el.id === id)
        setBasket(basket.map((el)=>{
            if (el.id === id){
                if (el.quantity === 1){
                    el.quantity = 'min'
                    return el
                }
                else if (el.quantity === 'min'){
                    return el
                }
                else if (el.quantity === 'max'){
                    el.quantity = 30
                    return el
                }
                return {...el,quantity:el.quantity - 1}
            }
            return el
        }))

    }

    const addBasket = (id)=>{
        const find = product.find (el =>el.id === id)
        const localUser = JSON.parse(localStorage.getItem('user'))

        if (user.email.length<1){
            alert('сначало войдите в аккаунт чтобы добавлять в корзину')
        }else {
            setBasket( [...basket,find])

        }


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


    const deleteObject = (id)=>{
        console.log('найдено' + id)
        const find = combo.find (el =>el.id === id)
        setBasket(basket.filter((el)=>{
            if (el.id !== id){
                return [...basket,el.id !== find]
            }
        }))
        console.log('удален объект с id ' + id)
    }


    const logOut = ()=>{
        console.log(user)
        setUser({email:''})
        localStorage.removeItem('user')

    }
    useEffect(()=>{
        if (JSON.parse(localStorage.getItem('user')) !==null)
setUser(JSON.parse(localStorage.getItem('user')))
    },[])

    const login=(data)=>{
        console.log(data)
    }

    const value = {
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
        basket,
        plusOne,
        minusOne,
        deleteObject,
        login
    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>

}