import React from 'react';
import logo from '../../assets/Rectangle 76 (1).png'
import viber from '../../assets/image 17.png'
import skype from '../../assets/image 18.png'
import messanger from '../../assets/image 19.png'
import telegram from '../../assets/image 20.png'
import facebook from '../../assets/image 21.png'
import vk from '../../assets/image 22.png'
import './footer.scss'


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__top">
                    <div className="footer__left">
                        <img src={logo} alt=""/>
                        <div className="footer__text">
                            <p>Калорийность и состав</p>
                            <p>Правовая информация</p>
                            <p>Мы в соцсетях</p>
                        </div>
                        <div className="footer__info">
                            <ul>
                                <li>YouTube</li>
                                <li>Instagram</li>
                            </ul>
                            <ul>
                                <li>Facebook</li>
                                <li>ВКонтакте</li>
                            </ul>
                            <ul>
                                <li>Москва ул. Проспект </li>
                                <li>Вернадского 86В</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__right">
                        <h3>Остались вопросы? А мы всегда на связи:</h3>
                        <div className="footer__icons">
                            <div className="footer__icon">
                                <img src={viber} alt=""/>
                            </div>
                            <div className="footer__icon">
                                <img src={skype} alt=""/>
                            </div>
                            <div className="footer__icon">
                                <img src={messanger} alt=""/>
                            </div>
                            <div className="footer__icon">
                                <img src={telegram} alt=""/>
                            </div>
                        </div>
                        <div className="footer__icons">
                            <div className="footer__icon">
                                <img src={facebook} alt=""/>
                            </div>
                            <div className="footer__icon">
                                <img src={vk} alt=""/>
                            </div>
                            <button>Написать нам</button>
                        </div>
                        <h2>8 499 391-84-49</h2>
                    </div>
                </div>
                <div className="footer__bottom"></div>
            </div>
        </footer>
    );
};

export default Footer;