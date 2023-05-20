import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import productsimg from "../assets/Products.jpg";
import Footer from "../components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Products() {
  return (
    <>
      <Navbar />
      <Hero
        cname="hero-mid"
        heroimg={productsimg}
        title="Anything you need!"
        btnclass="hide"
      />
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default Products;
