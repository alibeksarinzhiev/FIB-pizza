import React from 'react';
import {Route,Routes} from "react-router-dom";
import Layout from "./Layout/layout";
import Home from "./pages/home/home";
import Action from "./pages/action/action";
import Cart from "./pages/cart/cart";
import Contact from "./pages/contact/contact";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Single from "./pages/single/single";
import './app.scss'
import Beverages from "./pages/home/beverages/beverages";
import Dessert from "./pages/home/dessert/dessert";
import Combo from "./pages/home/combo/combo";
import Snacks from "./pages/home/snacks/snacks";

const App = () => {
    return (
        <>
            <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={''} element={<Home/>}/>
                <Route path={'action'} element={<Action/>}/>
                <Route path={'cart'} element={<Cart/>}/>
                <Route path={'contact'} element={<Contact/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={'register'} element={<Register/>}/>
                <Route path={'single/:id'} element={<Single/>}/>
                <Route path={'beverages'} element={<Beverages/>}/>
                <Route path={'dessert'} element={<Dessert/>}/>
                <Route path={'combo'} element={<Combo/>}/>
                <Route path={'snacks'} element={<Snacks/>}/>
            </Route>
            </Routes>
        </>
    );
};

export default App;