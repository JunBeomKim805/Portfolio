import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utils/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/junbeom-kim-0323941a0/"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a
                target="_blank"
                href="https://github.com/JunBeomKim805?tab=repositories"
              >
                <i className="fa fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I am <span className="highlighted-text">Junbeom Kim</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Frontend Dev",
                    1500,
                    "Backend Dev",
                    1500,
                    "Full Stack Dev",
                    1500,
                    "Mern Stack Dev",
                    1500,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Building applications with front and back end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn "
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a target="_blank" href="resume.pdf" download="JunbeomKim.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
