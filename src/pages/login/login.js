import React, {useContext, useState} from 'react';
import Exet from './image/Close.png'
import './login.scss'
import {Link} from "react-router-dom";
import {CustomContext} from "../../Context";
import {useForm} from "react-hook-form";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";



const Login = () => {
    const navigate = useNavigate()
    const [statusp,setStatusp] = useState(false)

    const changeStatus = ()=>{
        setStatusp(!statusp)
    }

    const {login,user,setUser} = useContext(CustomContext)
    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    const loginUser = (data)=>{
        axios.post('http://localhost:8080/login',data )
            .then((res)=>{
                localStorage.setItem('user',JSON.stringify(res.data.user))
               setUser(res.data.user)
            })
        navigate('/')

    }



    return (
        <div className='login container'>
            <div className="login__top">
                <h2>Вход на сайт</h2>
                <Link to='/'>
                    <img src={Exet} alt=""/>
                </Link>
            </div>
            <form onSubmit={handleSubmit(loginUser)}>


            <div className="login__center">
                <div className="login__text">
                    <p>Введите номер телефона или @mail</p>
                    <p>Введите пороль</p>
                </div>
                <div className="login__input">
                    <input {...register('email')} type="text" placeholder='Phone or @mail'/>
                    <div className="login__password">
                        <input {...register('password')} type={statusp?"text":'password'} placeholder='Password'/>
                        {statusp?
                            <FaEyeSlash onClick={()=>changeStatus()} />:
                            <FaEye onClick={()=>changeStatus()}/>
                        }
                    </div>

                </div>
            </div>
            <div className="login__vhod">
                <button>Войти</button>
                <Link to='/register'>
                    <button>Регестрация</button>
                </Link>
                <p>Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</p>
            </div>
            </form>
         
        </div>
    );
};

export default Login;