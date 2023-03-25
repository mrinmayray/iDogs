import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import homeimg from "../assets/Home.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

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
        url="https://www.youtube.com/@ShoTVchannel"
        btnclass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
