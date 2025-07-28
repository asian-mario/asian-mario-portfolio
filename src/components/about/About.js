import React from "react";
import Title from "../home/Title";
import AboutMe from "./AboutMe";
import MyServices from "./MyServices";

const About = () => {
  return (
    <section id="about" className="w-full">
      <Title title="About" subTitle="Me" />
      <AboutMe />
      <Title title="My" subTitle="Skills" />
      <MyServices />
    </section>
  );
};

export default About;
