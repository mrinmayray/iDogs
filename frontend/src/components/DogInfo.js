import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./DogInfoStyles.css";

function DogInfo() {
  const [dogBreed, setDogBreed] = useState('');
  const [dogFact, setDogFact] = useState('');

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs',
      params: {
        name: dogBreed
      },
      headers: {
        'X-RapidAPI-Key': 'd3f282f78amshbcfc2750a9c117ep172ec3jsnbaed48de5d76',
        'X-RapidAPI-Host': 'dogs-by-api-ninjas.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setDogFact(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      toast.error('Error fetching dog fact.');
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter dog breed"
          value={dogBreed}
          onChange={(e) => setDogBreed(e.target.value)}
        />
        <button className="button1" onClick={fetchData}>Fetch Dog Fact</button>
        {dogFact && (
          <div>
            <h1>{dogFact[0].name}</h1>
            {dogFact.map((fact, index) => (
              <div key={index}>
                {fact.image_link && <img src={fact.image_link} alt={fact.name} />}
                <ul>
                  {Object.entries(fact).map(([key, value]) => {
                    if (key === 'image_link') return null; // Skip rendering image_link
                    return (
                      <li key={key} className="fact-item">
                        <strong>{formatKey(key)}:</strong> {typeof value === 'object' ? JSON.stringify(value) : value}
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
    case 'good_with_children':
      return 'Good With Children';
    case 'good_with_other_dogs':
      return 'Good With Other Dogs';
    case 'shedding':
      return 'Shedding';
    case 'grooming':
      return 'Grooming';
    case 'drooling':
      return 'Drooling';
    case 'coat_length':
      return 'Coat Length';
    case 'good_with_strangers':
      return 'Good With Strangers';
    case 'playfulness':
      return 'Playfulness';
    case 'protectiveness':
      return 'Protectiveness';
    case 'trainability':
      return 'Trainability';
    case 'energy':
      return 'Energy';
    case 'barking':
      return 'Barking';
    case 'min_life_expectancy':
      return 'Min Life Expectancy';
    case 'max_life_expectancy':
      return 'Max Life Expectancy';
    case 'max_height_male':
      return 'Max Height (Male)';
    case 'max_height_female':
      return 'Max Height (Female)';
    case 'max_weight_male':
      return 'Max Weight (Male)';
    case 'max_weight_female':
      return 'Max Weight (Female)';
    case 'min_height_male':
      return 'Min Height (Male)';
    case 'min_height_female':
      return 'Min Height (Female)';
    case 'min_weight_male':
      return 'Min Weight (Male)';
    case 'min_weight_female':
      return 'Min Weight (Female)';
    case 'name':
      return 'Name';
    default:
      return key;
  }
}

export default DogInfo;
