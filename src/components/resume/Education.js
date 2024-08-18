import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="Present"
          title="UKM Mentor"
          subTitle="National Univeristy of Malaysia"
          des="Currently mentoring a coding team hosted by UKM for CNC2024, previously a mentor of the winning team in CNC2023."
        />
        <ResumeCard
          badge="Present"
          title="ByteBend Studios"
          subTitle="3D Modelling Firm"
          des="A 3D Hardsurface Modelling Firm which serves small-time Game Studios on a per-contract basis."
        />
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="Present"
          title="Alice Smith School"
          subTitle="A-Level"
          des="Currently studying A-Level's : Computer Science, Physics, Mathematics, EPQ"
        />
        <ResumeCard
          badge="2022-2024"
          title="Alice Smith School"
          subTitle="IGCSE"
          des="Graduated July 2024 with 7 A* with 10 subjects in total, additionally graduated with an Attainment Award in D.T and CS"
        />
      </div>
    </div>
  );
};

export default Education;
