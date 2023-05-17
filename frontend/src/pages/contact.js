import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contactimg from "../assets/Contact.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cname="hero-mid"
        heroimg={contactimg}
        title="Contact Us"
        btnclass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
