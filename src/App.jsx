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

function App() {
  
  return (
    <>
     <BrowserRouter>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/*" element={<Shop />} />
      </Routes>
      <Footer/>
      <FooterLast/>
    </BrowserRouter>
    </>
  )
}

export default App
