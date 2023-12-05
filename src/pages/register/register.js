import React, {useContext, useState} from 'react';
import './register.scss'
import Exet from "../login/image/Close.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import {CustomContext} from "../../Context";
import {useNavigate} from 'react-router-dom'

import {Link} from "react-router-dom";


const Register = () => {
    const navigate = useNavigate()
    const [statusp,setStatusp] = useState(false)
    const {user,setUser} = useContext(CustomContext)

    const changeStatus = ()=>{
        setStatusp(!statusp)
    }

    const registerUser = (e)=>{
        e.preventDefault()

        let newUser = {
            name:e.target[0].value,
            surname:e.target[1].value,
            email:e.target[2].value,
            password:e.target[3].value
        }

        axios.post('http://localhost:8080/register',newUser )
            .then(({data})=>{
                setUser({
                    token:data.accessToken,
                    ...data.user
                })
                localStorage.setItem('user',JSON.stringify({
                    token:data.accessToken,
                    ...data.user
                }))
            })
        navigate('/')

    }

    return (
        <div className='register container'>
            <form onSubmit={(e)=>registerUser(e)}>
            <div className="register__top">
                <h2>Регистрация на сайт</h2>
                <img src={Exet} alt=""/>
            </div>
            <div className="register__center">
                <div className="register__text">
                    <p>Введите имя</p>
                    <p>Введите фамилию</p>
                    <p>Введите номер телефона или @mail</p>
                    <p>Введите пороль</p>
                    <p>Повторите пороль</p>
                </div>
                <div className="register__input">
                    <label htmlFor="">
                        <input type="text" placeholder='Name'/>

                    </label>
                    <label htmlFor="">
                        <input type="text" placeholder='Surname'/>
                    </label>
                    <label htmlFor="">
                        <input type="email" placeholder='Phone or @mail'/>
                    </label>
                    <label htmlFor="">
                        <input type={statusp?"text":'password'} placeholder='Password'/>
                        {statusp?
                            <FaEyeSlash onClick={()=>changeStatus()} />:
                            <FaEye onClick={()=>changeStatus()}/>
                        }
                    </label>
                    <label htmlFor="">
                        <input type="password" placeholder='Repeat password'/>
                        <FaEye/>
                        <FaEyeSlash />
                    </label>



                </div>
            </div>
                <div className="register__regist">
                    <button>Регистрация</button>
                    <Link to='/login'>
                        <button>Вход</button>
                    </Link>
                    <p>Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</p>
                </div>
            </form>
        </div>

    );
};

export default Register;