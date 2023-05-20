import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../components/HeroStyles.css";
import axios from "axios";
import adoptimg from "../assets/Adopt.jpg";
import Footer from "../components/Footer";
import "../components/adoptList.css";
import { AdoptListRoute } from "../utils/AllRoutes";
import { useState, useEffect } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Adopt() {
  const [adopts, setAdopts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get(AdoptListRoute);
        setAdopts(data.data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <Hero
        cname="hero"
        heroimg={adoptimg}
        title="Someone New In Life!"
        text="Find Your First Companion Here."
        buttontext="Add Pet"
        url="/adoptForm"
        btnclass="show"
      />
      <div className="shell">
        <div className="container">
          <div className="row">
            {adopts.map((adopt, i) => {
              return (
                <div className="col-md-3">
                  <div className="wsk-cp-product">
                    <div className="wsk-cp-img">
                      <img
                        key={i}
                        src={adopt.dogpic}
                        alt="Product"
                        className="img-responsive"
                      />
                    </div>
                    <div className="wsk-cp-text">
                      <div className="category">
                        <span>{adopt.dogname}</span>
                      </div>
                      <div className="title-product">
                        <div className="details">
                          <div className="data">
                            <i className="fa-solid fa-user"></i>
                          </div>
                          <div className="data">{adopt.owner}</div>
                          <br></br>
                        </div>
                      </div>
                      <div className="title-product">
                        <div className="details">
                          <div className="data">
                            <i className="fa-solid fa-dog"></i>
                          </div>
                          <div className="data">{adopt.dogbreed}</div>
                          <br></br>
                        </div>
                        <div className="details">
                          <div className="data">
                            <h3>Age</h3>
                          </div>
                          <div className="data">{adopt.dogage}</div>
                          <br></br>
                        </div>
                      </div>
                      <div className="card-footer">
                        <div className="details">
                          <div className="data">
                            <i className="fa-solid fa-phone"></i>
                          </div>
                          <div className="data">{adopt.contact}</div>
                          <br></br>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default Adopt;
