import React from 'react';
import Exet from './image/Close.png'
import './login.scss'
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className='login container'>
            <div className="login__top">
                <h2>Вход на сайт</h2>
                <Link to='/'>
                    <img src={Exet} alt=""/>
                </Link>
            </div>
            <div className="login__center">
                <div className="login__text">
                    <p>Введите номер телефона или @mail</p>
                    <p>Введите пороль</p>
                </div>
                <div className="login__input">
                    <input type="text" placeholder='Phone or @mail'/>
                    <input type="text" placeholder='Password'/>
                </div>
            </div>
            <div className="login__vhod">
                <button>Войти</button>
                <Link to='/register'>
                    <button>Регестрация</button>
                </Link>
                <p>Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</p>
            </div>
         
        </div>
    );
};

export default Login;