import React, { useEffect } from "react";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description:
      "A passionate, professional and motivated programmer who have professional experience as a frontend developer and recently graduated from Conestoga College. I am well-skilled and professional in CSS, HTML, JavaScript, jQuery, C#, ASP.NET, SQL, MERN stack, also, QA testing such as Selenium. Learning new things is a joy,  and also every learning could improve my skill, so next time if the same issues happened, I would be able to solve them.",
    highlights: {
      bullets: [
        "Well-skilled on Mern stack with Docker, Kubernetes, Typescript, Ingress-nginx, Jest for Microservice application.",
        "Develop, test, and report test cases in C#, ASP.NET, Nunit, and Selenium.",
        "Professional in HTML, CSS, Scss, Javsciprt, Jquery, Php, MongoDB, Node.js, Express.js, React.js, Python, C#,Asp.net, Java(Android), Docker, Kubernetes, Typescript, Next.js",
        "Redux for State Mnanagement",
        "Profession in testing process, testing life cycle using Selenium, Mantisbt, Postman, Jest",
        "Professional using Git control.",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTSANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Hire Me
              </button>
              <a href="ehizcv.pdf" download="Ehiedu Ehizcv.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
