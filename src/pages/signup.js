import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import signupimg from "../assets/SignUp.jpg";
import Footer from "../components/Footer";
import LogInForm from "../components/LogInForm";

function SignUp() {
  return (
    <>
      <Navbar />
      <Hero cname="hero" heroimg={signupimg} btnclass="hide" />
      <LogInForm />
      <Footer />
    </>
  );
}

export default SignUp;
