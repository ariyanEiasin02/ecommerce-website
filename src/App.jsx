import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FooterLast from './components/FooterLast/FooterLast';
import ShopGrid from './pages/ShopGrid/ShopGrid';
import ShopList from './pages/ShopList/ShopList';
import ErrorPages from './pages/ErrorPages/ErrorPages';
import Contact from './pages/Contact/Contact';
import LoginPages from './pages/LoginPages/LoginPages';
import RegistrationPages from './pages/RegistrationPages/RegistrationPages';
import ForgotPages from './pages/ForgotPages/ForgotPages';
import FaqPages from './pages/FaqPages/FaqPages';
import CheckOutPages from './pages/CheckOutPages/CheckOutPages';
import OderCompeletPages from './pages/OderCompeletPages/OderCompeletPages';
import BlogPages from './pages/BlogPages/BlogPages';
import SimpleBlogPages from './pages/SimpleBlogPages/SimpleBlogPages';

function App() {
  
  return (
    <>
     <BrowserRouter>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginPages/>} />
        <Route path="/Registration" element={<RegistrationPages/>} />
        <Route path="/ForgotPassword" element={<ForgotPages/>} />
        <Route path="/Home/Blog" element={<BlogPages/>} />
        <Route path="/Home/Blog/Simple" element={<SimpleBlogPages/>} />
        <Route path="/Home/shop/*" element={<Shop />} />
        <Route path="/Home/ShopGrid*" element={<ShopGrid />} />
        <Route path="/Home/ShopList/:id*" element={<ShopList />} />
        <Route path="/Home/CheckOut/:id*" element={<CheckOutPages/>} />
        <Route path="/Home/OderCompelet/*" element={<OderCompeletPages/>} />
        <Route path="/Home/Contact*" element={<Contact />} />
        <Route path="/Home/Faq*" element={<FaqPages/>} />
        <Route path="*" element={<ErrorPages/>} />
      </Routes>
      <Footer/>
      <FooterLast/>
    </BrowserRouter>
    </>
  )
}

export default App
