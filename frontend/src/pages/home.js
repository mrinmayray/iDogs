import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import homeimg from "../assets/Home.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cname="hero"
        heroimg={homeimg}
        title="Someone New In Life!"
        text="Find Your First Companion Here."
        buttontext="Find Now"
        url="/"
        btnclass="show"
      />
      <Destination />
      <Trip />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default Home;
