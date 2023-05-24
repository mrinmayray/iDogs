import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import discoverimg from "../assets/Discover.jpg";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DogInfo from "../components/DogInfo";

function Discover() {
  return (
    <>
      <Navbar />
      <Hero
        cname="hero-mid"
        heroimg={discoverimg}
        title="Things To Know!"
        text="Everything You Need To Know About Your Pet."
        btnclass="hide"
      />
      <DogInfo />
      <Footer />
    </>
  );
}

export default Discover;
