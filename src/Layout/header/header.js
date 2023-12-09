import React, {useContext} from 'react';
import './header.scss'
import logo from '../../assets/Rectangle 76 (1).png'
import {Link} from "react-router-dom";
import { CiUser } from "react-icons/ci";
import {CustomContext} from "../../Context";


const Header = () => {
    const {user,logOut,basket} = useContext(CustomContext)
    return (
        <header className='header'>
            <div className="container">
                <div className="header__top">
                    <div className="header__icon">
                        <Link to='/'>
                            <img src={logo} alt=""/>
                        </Link>
                        <div className="header__info">
                            <h2>Доставка пасты <span className='header__moscow'>Москва</span></h2>
                            <ul>
                                <li className='header__info__food'>Яндекс еда <span className='header__rating'>4.8</span></li>
                                <li className='header__info__delivery'>Время доставки <span className='header__time'>от 31 мин</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="header__tel">
                        <button>Заказать звонок</button>
                        <h2>8 499 391-84-49</h2>
                    </div>
                </div>
                <div className="header__bottom">
                    <ul>
                        <Link to=''>Пицца</Link>
                        <li>Паста</li>
                        <li> Супы </li>
                        <li>  Салаты  </li>
                        <Link to='/beverages'>Напитки</Link>
                        <Link to='/dessert'> Десерты </Link>
                        <Link to='/snacks'> Закуски </Link>
                        <li>Антипасти </li>
                        <Link to='/action'>Акции</Link>
                        <Link to='/combo'> Комбо </Link>
                        <li>Контакты</li>
                    </ul>
                    {user.email.length?
                        <div>
                            <CiUser className='header__acc'/>
                            {user.name}
                            <button onClick={()=>logOut()}>Выйти</button>
                        </div>
                       : <Link to='/login'>
                        <p>Войти</p>
                        </Link> }

        <Link to='/cart'>
            <button>Корзина {basket.length}</button>

        </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;