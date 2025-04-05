import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
  bannerImg,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <a href="https://github.com/asian-mario/ROUGE2" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="ROUGE2"
            category="Projects" 
            image={workImgThree}
          />
          </a>
          <ProjectsCard
            title="OSVI"
            category="Projects"
            image={workImgOne}
          />
          <a href="https://asian-mario.github.io/" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="asian-mario"
            category="Blog Website"
            image={workImgFive}
          />
          </a>
          <ProjectsCard
            title="PathGen"
            category="AI-Powered Pathogen Identification"
            image={workImgSeven}
          />
        </div>
        <div className="px-6">
          <a href="https://github.com/asian-mario/EasyOps" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="EasyOps"
            category="Projects"
            image={workImgTwo}
          />
          </a>
          <a href="https://github.com/asian-mario/SFR-ESP32S" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="SFR-ESP32"
            category="Systems Engineering"
            image={workImgFour}
          />
          </a>
          <a href="https://www.artstation.com/asianmario" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="ByteBend Studios"
            category="Artstation"
            image={workImgSix}
          />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
