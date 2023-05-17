import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Adopt from "./pages/adopt";
import Products from "./pages/products";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import AdoptFrom from "./components/AdoptFrom";
//import { useState } from "react";
//import Alert from "./components/Alert";

function App() {
  /*const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }*/
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<Adopt />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/adoptFrom" element={<AdoptFrom/>}/>
      </Routes>
    </div>
  );
}

export default App;
