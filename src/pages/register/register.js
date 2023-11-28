import React from 'react';
import './register.scss'
import Exet from "../login/image/Close.png";

const Register = () => {
    return (
        <div className='register container'>
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
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Surname'/>
                    <input type="text" placeholder='Phone or @mail'/>
                    <input type="text" placeholder='Password'/>
                    <input type="text" placeholder='Repeat password'/>
                </div>
            </div>
            <div className="register__regist">
                <button>Регистрация</button>
                <button>Вход</button>
                <p>Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</p>
            </div>
        </div>
    );
};

export default Register;