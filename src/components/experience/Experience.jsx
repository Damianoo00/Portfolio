import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import content from "./content.json";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What SKills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {content.EN.categories.map(({ title, skills, index }) => (
          <div className="exprience__frontend" key={index}>
            <h3>{title}</h3>
            <div className="experience__content">
              {skills.map(({ skill, level, index }) => (
                <article className="experience__details" key={index}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill}</h4>
                    <small className="text-light">{level}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
