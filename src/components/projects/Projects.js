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
        </div>
        <div className="px-6">
          <a href="https://klsmc.live/" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="KLSMC"
            category="Website"
            image={workImgFour}
          />
          </a>
          <a href="https://asian-mario.github.io/" target="_blank" rel="noopener noreferrer">
          <ProjectsCard
            title="ByteBend Studios"
            category="Artstation"
            image={workImgSix}
          />
          </a>
          <ProjectsCard
            title="./rootme"
            category="Unity Game"
            image={workImgEight}
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
