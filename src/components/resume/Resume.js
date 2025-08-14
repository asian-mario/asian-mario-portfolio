import React from "react";
import Title from "../home/Title";
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  return (
    <section id="resume">
      <Title title="My" subTitle="Skills" />
      <Skills />
      <Title title="My" subTitle="Resume" />
      <Education />
    </section>
  );
};

export default Resume;
