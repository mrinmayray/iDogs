import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/Beagle.jpg";
import Trip2 from "../assets/Yorkshire.jpg";
import Trip3 from "../assets/Poodle.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Pets</h1>
      <p>These pets recently added for adoption.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Beagle"
          text="Cute, compact and even-tempered, Beagles were originally bred as hunting dogs, thanks to their ability to sniff-out prey from great distances. Beagles are also renowned for their ability to quickly warm-up to strangers, making them less than ideal as guard dogs but great for sociable owners."
        />
        <TripData
          image={Trip2}
          heading="Yorkshire Terrier"
          text="Tiny and adorable, the Yorkshire Terrier is a popular dog for those with allergies (their coats, while not hypoallergenic, are less prone to shedding). A highly active breed of pup, Yorkshire Terriers are a relatively easy dog to train, but sometimes rambunctious and loud."
        />
        <TripData
          image={Trip3}
          heading="Poodle"
          text="Bred in medium, miniature and toy sizes, the poodle is an active, intelligent dog with a penchant for mischief. Their knack for rambunctious play is no doubt reflected in their name, as the word poodle roughly translates to the German word pudle, meaning “to splash about.”"
        />
      </div>
    </div>
  );
}

export default Trip;
