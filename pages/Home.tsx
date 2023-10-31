import React from "react";

function Home() {
  return (
    <div className="home-text">
      <h1>
        <u>👋 Hi, I'm Frank!</u>
      </h1>
      <p>
        I'm a junior studying computer science & engineering at the Ohio State
        University. Here are some of the technical classes I've taken:
        <ul className="class-list">
          <li>Software Components 1 & 2</li>
          <li>Discrete Structures 1 & 2</li>
          <li>Foundations of Higher Mathematics (Proofs)</li>
          <li>Low-Level Programming and Computer Organization</li>
          <li>Probability and Statistics for Engineers</li>
          <li>Engineering Mathematics</li>
          <li>Introduction to Digital Logic</li>
          <li>Linear Algebra</li>
        </ul>
      </p>

      <p>
        This past summer I interned at Fiserv, where I worked on the
        Cloud Security and Architecture Team to migrate services to a serverless
        architecture and automate data validation and cloud environment security
      </p>

      <p>
        On campus, I research with Laine Rumreich. I'm also involved in the Big
        Data Analytics Association where I work on new member initiatives and
        helped redesign and rebuild an outdated website.
      </p>

      <p>
        Outside of academics, I enjoy playing all kinds of sports, watching
        movies, and lifting. I love to try new things; currently, I'm learning
        how to cook and self teaching guitar.{" "}
      </p>

      <p>
        I love meeting new people! Please reach out through{" "}
        <a href="mailto:frank.li.865985@gmail.com" className="red-no-underline">
          email
        </a>{" "}
        or{" "}
        <a
          href="https://www.linkedin.com/in/lifrank1/"
          className="red-no-underline"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}

export default Home;
