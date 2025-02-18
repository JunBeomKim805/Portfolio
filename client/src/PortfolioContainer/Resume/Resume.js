import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span style={{ flex: 1 }}>{props.heading ? props.heading : ""}</span>
          <span style={{ flex: 1 }}>
            {props.siteLink ? (
              <a className=" link" href={props.siteLink} target="_blank">
                Link For Site
              </a>
            ) : (
              ""
            )}
          </span>
          <span style={{ flex: 1 }}>
            {props.videoLink ? (
              <a className="link" href={props.videoLink} target="_blank">
                Link For Video
              </a>
            ) : (
              ""
            )}
          </span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "HTML/CSS/SCSS", ratingPercentage: 100 },
    { skill: "Javasciprt/Typescript", ratingPercentage: 90 },
    { skill: "Mongo Db", ratingPercentage: 90 },
    { skill: "Express JS", ratingPercentage: 90 },
    { skill: "React JS", ratingPercentage: 90 },
    { skill: "Node JS", ratingPercentage: 90 },
    { skill: "Next JS", ratingPercentage: 80 },
    { skill: "C#/Asp.net", ratingPercentage: 80 },
    { skill: "Docker/Kubernetes", ratingPercentage: 80 },
    { skill: "PHP", ratingPercentage: 90 },
  ];

  const projectsDetails = [
    {
      title: "Ticketing",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A Personal Portfolio ticketing website to showcase all my details and projects at one place.",
      subHeading:
        "Technologies Used: MERN stack, Kubernetes, Docker, Typescript, Nats",
      videoLink: "https://www.loom.com/share/f05f94336d4c44a69d94eefaea11dba4",
    },
    {
      title: "Booking Tour",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A Personal Portfolio Booking tour website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: Node.js, MongoDB, Express.js",
      siteLink: "https://junbeomkimnodejsportfolio.herokuapp.com/",
      videoLink: "https://www.loom.com/share/aac015229f5c446c8b6dbec100e126a3",
    },
    {
      title: "CMS website",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "A Personal Portfolio CMS website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: PHP, SQL",
      videoLink: "https://www.loom.com/share/ff811eeed92d4d279fb89dd267c3560c",
    },
    {
      title: "Meetup Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A Personal Portfolio Meetup website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: Next.js",
      videoLink: "https://www.loom.com/share/0796c7e943854512ad499e0891580b4f",
      siteLink: "https://nextjs-alpha-ten-35.vercel.app/",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Conestoga College, Canada"}
        subHeading={"DIPLOMA OF COMPUTER PROGRAMMING"}
        fromDate={"2019"}
        toDate={"2021"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          - Develop a web page using JavaScript, Node.js, Express, EJS and
          MongoDb with the proper CSS, HTML to create a more efficient workflow
          for a retail store.It contains the following content: HTML Static
          Content-WebForm
        </span>
        <br />
        <span className="resume-description-text">
          - Develop log in and server side using C#, ASP.NET MVC, and SQL
        </span>
        <br />
        <span className="resume-description-text">
          - Server side programming using JavaScript(Form Validation), EJS,
          Express and Node.js
        </span>
        <br />
        <span className="resume-description-text">
          - Save and retrieve data to MongoDB
        </span>
        <br />
        <span className="resume-description-text">
          - Living Expense Tracker (Group project) - A living expenses
          information holder or bookkeeping application for the Android platform
          using Java.
        </span>
        <br />
        <span className="resume-description-text">
          - Taking feedback analysing incorporating appropriate changes to
          address bugs and improve program troubleshooting /testing Response web
          page
        </span>
      </div>
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Launchfire"}
          subHeading={"FRONT END DEVELOPER"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Developing and designing dynamic game promotional websites with
            animations using JavaScript, CSS, SCSS, HTML, Jquery, PHP. AWS, VM
          </span>
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Consultancy"}
          subHeading={"FRONT END DEVELOPER"}
          fromDate={"2021-07"}
          toDate={"2021-08"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Making and designing dynamic websites on front-end using JavaScript,
            CSS, HTML
          </span>
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"weDstll™ Inc."}
          subHeading={"DEVELOPER"}
          fromDate={"2021-01"}
          toDate={"2021-04"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Push Notifications - Mobile API (Back-end) and Opening to
            appropriate in app screen (front end) Personalizing the experience
            of Invite a friend - Mobile React Native connected to android studio
          </span>
        </div>
      </div>
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          siteLink={projectsDetails.siteLink}
          videoLink={projectsDetails.videoLink}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
}
