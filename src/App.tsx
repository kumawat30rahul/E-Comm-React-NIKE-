import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
// import Footer from "./components/Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/Header/Header";
import ProductDetails from './components/ProductDetails/ProductDetails'
import Signup from "./components/Account/Signup";
import Login from "./components/Account/Login";
import Cart from "./components/Cart&Wishist/Cart";
import Fav from "./components/Cart&Wishist/Fav";
import Shop from "./components/Shop/Shop";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productDetail/:id" element={<ProductDetails />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/shop/:category" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
