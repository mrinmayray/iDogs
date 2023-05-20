import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import signupimg from "../assets/SignUp.jpg";
import Footer from "../components/Footer";
import LogInForm from "../components/LogInForm";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  return (
    <>
      <Navbar />
      <Hero cname="hero" heroimg={signupimg} btnclass="hide" />
      <LogInForm />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default SignUp;
