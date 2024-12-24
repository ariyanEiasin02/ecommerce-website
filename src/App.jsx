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

function App() {
  
  return (
    <>
     <BrowserRouter>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home/shop/*" element={<Shop />} />
        <Route path="/Home/ShopGrid*" element={<ShopGrid />} />
        <Route path="/Home/ShopList/:id*" element={<ShopList />} />
        <Route path="/Home/Contact*" element={<Contact />} />
        <Route path="*" element={<ErrorPages/>} />
      </Routes>
      <Footer/>
      <FooterLast/>
    </BrowserRouter>
    </>
  )
}

export default App
