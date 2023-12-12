import React from 'react';
import {useForm} from "react-hook-form";
import axios from "axios";
import './adminAdd.scss'

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
        <section className='adminAdd'>
            <div className="container">
                <h2>
                    Добавление товаров
                </h2>
                <form className='adminAdd__filling' onSubmit={handleSubmit(addProduct)}>
                    <div className="adminAdd__dop">
                            <div className="adminAdd__input">
                                <p>Введите id товара</p>
                                <input {...register('id')} placeholder='id' type="text"/>
                            </div>
                            <div className="adminAdd__input">
                                <p>Введите название</p>
                                <input {...register('title')} placeholder='title' type="text"/>
                            </div>
                            <div className="adminAdd__input">
                                <p>Введите описание товара</p>
                                <input {...register('description')} placeholder='description' type="text"/>
                            </div>
                            <div className="adminAdd__input">
                                <p>Напишите true если товар новинка или false если не попадает под эту категорию</p>
                                <input {...register('new')} placeholder='new' type="text"/>
                            </div>
                            <div className="adminAdd__input">
                                <p>Введите на английском категории товара</p>
                                <input {...register('category')} placeholder='category' type="text"/>
                            </div>
                            <div className="adminAdd__input">
                                <p>Введите ссылку на фото товара</p>
                                <input {...register('image')} placeholder='image URL' type="text"/>
                            </div>
                            <div className="adminAdd__input">
                                <p>Введите количество товара в цифрах</p>
                                <input {...register('quantity')} placeholder='quantity' type="text"/>
                            </div>
                            <div className="adminAdd__input">
                                <p>Введите цену</p>
                                <input {...register('price')} placeholder='price' type="text"/>
                            </div>
                            <div className="adminAdd__input">
                                <p>Введите через ' , ' диаметр  пиццы</p>
                                <input {...register('sm')} placeholder='sm' type="text"/>
                            </div>
                            <div className="adminAdd__input">
                                <p>Введите через ' , ' граммы пиццы</p>
                                <input {...register('size')} placeholder='size' type="text"/>
                            </div>
                    </div>
                    <div className="adminAdd__button">
                        <button>Добавить товар</button>
                    </div>
                    </form>

            </div>
        </section>
    );
};

export default AdminAdd;