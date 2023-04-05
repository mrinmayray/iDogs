import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import contactimg from "../assets/Contact.jpg";


function Adopt() {
  return (
    <div className="row">
      <Navbar />
      <Hero
        cname="hero-mid"
        heroimg={contactimg}
        title="Adopt"
        btnclass="hide"
      />
      <Footer />
    </div>
  );
}
export default Adopt;
