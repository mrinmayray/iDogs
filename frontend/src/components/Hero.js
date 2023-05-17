import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div className={props.cname}>
        <img alt="heroimg" src={props.heroimg} />

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnclass}>
            {props.buttontext}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
