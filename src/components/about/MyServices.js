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
        icons={<AiTwotoneAppstore />}
        title="HCKL Founder"
        subTitle="Founded a non-profit organization which strives to connect students from across Malaysia, inspiring interest in the field of programming through Hackathons and events."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="FOSS"
        subTitle="Passionate in creating Free Open Source Software in a variety of fields such as: UNIX-tools, Game Engines, Blender Hardsurface Extensions etc."
      />
      <ServicesCard
        icons={<BsTrophyFill  />}
        title="MCO Competitor"
        subTitle="An MCC Gold and MCO Competitor, National Level Competitions in Malaysia."
      />
    </div>
  );
};

export default MyServices;
