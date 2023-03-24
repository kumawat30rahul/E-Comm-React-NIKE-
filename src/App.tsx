import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
// import Footer from "./components/Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/Header/Header";
import ProductDetails from './components/ProductDetails/ProductDetails'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productDetail/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
