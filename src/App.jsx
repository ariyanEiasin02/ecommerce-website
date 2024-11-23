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
    </BrowserRouter>
    </>
  )
}

export default App
