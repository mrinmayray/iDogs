import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Adopt from "./pages/adopt";
import Discover from "./pages/discover";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdoptForm from "./components/AdoptForm";
//import { useState } from "react";
//import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/adoptForm" element={<AdoptForm />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
