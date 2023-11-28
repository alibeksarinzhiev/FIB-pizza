import React from 'react';
import Exet from './image/Close.png'
import './login.scss'

const Login = () => {
    return (
        <div className='login container'>
            <div className="login__top">
                <h2>Вход на сайт</h2>
                <img src={Exet} alt=""/>
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
                <p>Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</p>
            </div>
         
        </div>
    );
};

export default Login;