import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AdoptRegisterRoute } from "../utils/AllRoutes";
import "./AdoptFormStyles.css";
import Navbar from "./Navbar";
import Hero from "../components/Hero";
import addpetimg from "../assets/AddPet.jpg";
import Footer from "./Footer";

function AdoptForm() {
  const [doggender, setGen] = useState("male");
  const [dogname, setDogName] = useState();
  const [dogbreed, setDogbreed] = useState();
  const [dogage, setDogAge] = useState();
  const [owner, setOwner] = useState();
  const [contact, setContact] = useState();
  const [dogpic, setdogPic] = useState();
  const navigate = useNavigate();
  const dogGenger = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
  ];

  const toastOption = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    height: 10,
    width: 10,
    draggable: true,
    theme: "dark",
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(doggender, dogname, dogbreed, dogage, owner, contact, dogpic);
    const { data } = await axios.post(AdoptRegisterRoute, {
      doggender,
      dogname,
      dogbreed,
      dogage,
      owner,
      contact,
      dogpic,
    });
    if (data.status === false) {
      toast.error(data.msg, toastOption);
    }
    if (data.status === true) {
      localStorage.setItem("chat-app-user", JSON.stringify(data.user));
      toast.success("Pet listed Sucessfully", toastOption);
      navigate("/adopt");
    }
  };

  const postProfile = (pics) => {
    if (pics === undefined) {
      toast.warning("Please Select an Image", toastOption);
      return;
    }
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chatapp");
      data.append("cloud_name", "dvfxrdr5m");
      fetch("https://api.cloudinary.com/v1_1/dvfxrdr5m/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setdogPic(data.url.toString());
          toast.success("Succesfully Uploaded", toastOption);
          console.log(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.warning("Please Select an Image");
      return;
    }
  };

  return (
    <>
      <Navbar />
      <Hero cname="hero" heroimg={addpetimg} btnclass="hide" />
      <AdoptFromContainer>
        <div className="body">
          <input
            type="checkbox"
            id="chk"
            className="login-input1"
            aria-hidden="true"
          />
          <div className="signup1">
            <form onSubmit={(event) => handleSubmit(event)}>
              <label htmlFor="chk" className="login-label1" aria-hidden="true">
                Adopt Form
              </label>
              <input
                type="text"
                className="login-input1"
                name="txt"
                placeholder="Dog Name"
                onChange={(e) => setDogName(e.target.value)}
                required
              />
              <input
                type="text"
                className="login-input1"
                name="bread"
                placeholder="Enter Dog Breed"
                onChange={(e) => setDogbreed(e.target.value)}
                required
              />
              <select
                className="gender-input"
                onChange={(e) => setGen(e.target.value)}
              >
                {dogGenger.map((gender, i) => (
                  <option key={i} value={gender.value}>
                    {gender.label}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="dogage"
                className="login-input1"
                placeholder="Dog Age in Months"
                onChange={(e) => setDogAge(e.target.value)}
              />
              <input
                type="text"
                name="dogOwner"
                className="login-input1"
                placeholder="Owner Name"
                onChange={(e) => setOwner(e.target.value)}
              />
              <input
                type="number"
                name="ownerContact"
                className="login-input1"
                placeholder="Contact Number"
                maxLength={10}
                minLength={10}
                onChange={(e) => setContact(e.target.value)}
              />
              <div className="dogProfile">
                <input
                  type="file"
                  className="file"
                  id="file"
                  name={dogpic}
                  placeholder="Contact Number"
                  onChange={(e) => postProfile(e.target.files[0])}
                />
                <label htmlFor="file">
                  {/* Upload Profile pic */}
                  <p className="file-name">{dogpic}</p>
                </label>
              </div>

              <button type="submit" className="signup1-button">
                Add Pet
              </button>
            </form>
          </div>
        </div>
      </AdoptFromContainer>
      <Footer />
      <ToastContainer />
    </>
  );
}
const AdoptFromContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export default AdoptForm;
