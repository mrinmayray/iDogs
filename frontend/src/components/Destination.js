import "./DestinationStyles.css";
import Labrador1 from "../assets/lr1.jpg";
import Labrador2 from "../assets/lr2.jpg";
import Golden1 from "../assets/gr1.jpg";
import Golden2 from "../assets/gr2.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Companions</h1>
      <p>What would you like.</p>

      <DestinationData
        className="first-des"
        heading="Labrador Retriever"
        text="This medium-sized breed is a favourite of many dog lovers thanks to
            their family-friendly disposition, trusting nature and high level of
            intelligence. Their remarkable ability to seek and detect has made
            them the dog of choice for the visually impaired, hunters and
            various branches of the military."
        img1={Labrador1}
        img2={Labrador2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Golden Retriever"
        text="Much like the Labrador Retriever, the Golden Retriever is renowned for its friendly nature, smarts and abilities as a work dog. Often used as a guide dog, the Golden Retriever’s loyal and playful disposition make them a popular pick for families with small children."
        img1={Golden2}
        img2={Golden1}
      />
    </div>
  );
};

export default Destination;
