import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";

const AdminAdd = () => {

    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    const addProduct = (data)=>{
        axios.post('http://localhost:8080/products_pizza',data)
            .then((res)=>console.log(res))
    }
    return (
        <section>
            <div className="container">
                <form onSubmit={handleSubmit(addProduct)}>
                <input {...register('id')} type="text"/>
                <input {...register('title')} type="text"/>
                <input {...register('description')} type="text"/>
                <input {...register('image')} type="text"/>
                <input {...register('price')} type="text"/>
                <input {...register('new')} type="text"/>
                <input {...register('category')} type="text"/>
                <input {...register('quantity')} type="text"/>
                <input {...register('sm')} type="text"/>
                <input {...register('size')} type="text"/>
                    <button>ADD</button>
                </form>
            </div>
        </section>
    );
};

export default AdminAdd;