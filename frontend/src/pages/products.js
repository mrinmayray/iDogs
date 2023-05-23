import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import productsimg from "../assets/Products.jpg";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DogInfo from "../components/DogInfo";

function Products() {
  return (
    <>
      <Navbar />
      <Hero
        cname="hero-mid"
        heroimg={productsimg}
        title="Things To Know!"
        text="Everything You Need To Know About Your Pet."
        btnclass="hide"
      />
      <DogInfo />
      <Footer />
    </>
  );
}

export default Products;
