import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./DogInfoStyles.css";

function DogInfo() {
  const [dogBreed, setDogBreed] = useState("");
  const [dogFact, setDogFact] = useState([]);
  const [fetchCompleted, setFetchCompleted] = useState(false);

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs",
      params: {
        name: dogBreed,
      },
      headers: {
        "X-RapidAPI-Key": "d3f282f78amshbcfc2750a9c117ep172ec3jsnbaed48de5d76",
        "X-RapidAPI-Host": "dogs-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setDogFact(response.data);
      setFetchCompleted(true);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Error fetching dog fact.");
      setFetchCompleted(true);
    }
  };

  return (
    <>
      <div>
        <input
          className="dog_input"
          type="text"
          placeholder="Enter dog breed"
          value={dogBreed}
          onChange={(e) => setDogBreed(e.target.value)}
        />
        <button className="dog_button" onClick={fetchData}>
          Get Info
        </button>
        {fetchCompleted && dogFact.length === 0 && (
          <div>No results found for the specified dog breed.</div>
        )}
        {fetchCompleted && dogFact.length > 0 && (
          <div>
            {dogFact.map((fact, index) => (
              <div key={index}>
                {fact.image_link && (
                  <div className="dog-imgbox">
                    <div className="dog-image">
                      <img src={fact.image_link} alt={fact.name} />
                    </div>
                  </div>
                )}
                <ul>
                  <li className="fact-item">
                    <strong>{formatKey("name")}:</strong> {fact.name}
                  </li>
                  {Object.entries(fact).map(([key, value]) => {
                    if (key === "image_link" || key === "name" || key === "min_life_expectancy" || key === "max_height_male" || key === "max_height_female" || key === "max_weight_male" || key === "max_weight_female" || key === "min_height_male" || key === "min_weight_male" || key === "min_weight_female" || key === "min_height_female") return null; // Skip rendering excluded keys
                    return (
                      <li key={key} className="fact-item">
                        <strong>{formatKey(key)}:</strong>{" "}
                        {typeof value === "object" ? JSON.stringify(value) : value}
                      </li>
                    );
                  })}

                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

// Helper function to format the key
function formatKey(key) {
  switch (key) {
    case "good_with_children":
      return "Good With Children";
    case "good_with_other_dogs":
      return "Good With Other Dogs";
    case "shedding":
      return "Shedding";
    case "grooming":
      return "Grooming";
    case "drooling":
      return "Drooling";
    case "coat_length":
      return "Coat Length";
    case "good_with_strangers":
      return "Good With Strangers";
    case "playfulness":
      return "Playfulness";
    case "protectiveness":
      return "Protectiveness";
    case "trainability":
      return "Trainability";
    case "energy":
      return "Energy";
    case "barking":
      return "Barking";
    case "max_life_expectancy":
      return "Max Life Expectancy";
    case "name":
      return "Name";
    default:
      return null; // Skip rendering the excluded keys
  }
}


export default DogInfo;
