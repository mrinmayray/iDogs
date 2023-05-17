import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import productsimg from "../assets/Products.jpg";
import Footer from "../components/Footer";

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
    </>
  );
}

export default Products;
