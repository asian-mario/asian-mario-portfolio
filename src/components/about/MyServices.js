import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import ServicesCard from "./ServicesCard";
import { BsGrid3X2GapFill } from "react-icons/bs";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BsGrid3X2GapFill  />}
        title="Computer Engineering"
        subTitle="Experienced with a variety of platforms such as Arduino/RPI/ESP32 and experienced with creating projects with electrical components"
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="High-Performance Graphics"
        subTitle="Creating a high-performance 2D/3D Engine, currently developing a single shader batch renderer with sprite sheet and collision support."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="3D Modelling"
        subTitle="Specializing in Hardsurface 3D Modelling in order to create game-ready assets for development studios."
      />
      <ServicesCard
        icons={<BsTrophyFill  />}
        title="MCO Competitor"
        subTitle="An MCC Gold and MCO Competitor which are algorithmic programming competitions in Malaysia"
      />
    </div>
  );
};

export default MyServices;
