import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Adopt from "./pages/adopt";
import Products from "./pages/products";
import Contact from "./pages/contact";
import SignUp from "./pages/signup";
import AdoptFrom from "./components/AdoptFrom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
    <ToastContainer />
    </div>
  );
}

export default App;
