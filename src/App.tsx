import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
// import Footer from "./components/Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/Header/Header";


function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
