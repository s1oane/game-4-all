import React from "react";
import { Link } from "react-router-dom";


const stats = [
  { value: "20", label: "units distributed" },
  { value: "80+", label: "students reached" }
];

const About = () => {
  const meetingImageSrc = `${process.env.PUBLIC_URL}/images/manufacturing-meeting.jpg`;

  return (
    <main id="about-page">

      <figure className="about-image-wrapper">
        <img
          className="about-image"
          src={meetingImageSrc}
          alt="Students collaborating on an accessible controller"
        />
      </figure>
      <span className="about-badge">Our mission</span>
      <h1 className="extra-big-font subheader-font green-font">
        MAKING VIDEO GAMES <br></br> ACCESSIBLE TO EVERYONE
      </h1>
      <hr />
      <p id="about-info" className="less-big-font paragraph-font blue-font">
        We partner with the Oakland Unified School District’s Special Education program to provide free,
        accessible gaming consoles. Designed and led by students Sloane Marciniak Velazco '26, Ilana Zimmerman '26, and Matthew Schneider '25 the project works with the LWHS Adaptive Tech Club to manufacture each console.
      </p>
      <section className="about-layout">
        <article className="about-card">
          <ul className="about-stats">
            {stats.map((stat) => (
              <li key={stat.label} className="about-stat">
                <span className="about-stat__value">{stat.value}</span>
                <span className="about-stat__label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
};

export default About;
