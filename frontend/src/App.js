import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Adopt from "./pages/adopt";
import Products from "./pages/products";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
<<<<<<< Updated upstream
import AdoptFrom from "./components/AdoptFrom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
=======
import AdoptForm from "./components/AdoptForm";
//import { useState } from "react";
//import Alert from "./components/Alert";
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/adoptForm" element={<AdoptForm />} />
      </Routes>
    <ToastContainer />
    </div>
  );
}

export default App;
