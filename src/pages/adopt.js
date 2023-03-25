import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import adoptimg from "../assets/Adopt.jpg";
import Footer from "../components/Footer";

function Adopt() {
  return (
    <>
      <Navbar />
      <Hero
        cname="hero-mid"
        heroimg={adoptimg}
        title="Woof! Woof!"
        btnclass="hide"
      />
      <Footer />
    </>
  );
}

export default Adopt;
