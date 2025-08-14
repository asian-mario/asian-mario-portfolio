import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience & Achievements" icon={<MdWork />} />
        <ResumeCard
          badge="2025"
          title="HCKL"
          subTitle="Founder of HCKL"
          des="Founded HCKL which is a non-profit organization funded by HCB to garner interest in the technological field for students across Malaysia through events."
        />
        <ResumeCard
          badge="2025"
          title="EnQuest"
          subTitle="HCA Data Engineer Intern"
          des="Specializing in data extraction and analaysis automation in modern HCA systems."
        />
        <ResumeCard
          badge="2025"
          title="BPhO Silver"
          subTitle="British Physics Olympiad"
          des="A national-level British Physics Olympiad Competition where I placed Silver."
        />
        <ResumeCard
          badge="2025"
          title="USACO Silver"
          subTitle="USA Computing Olympiad"
          des="A national informatics competition where I am ranked Silver in the USA, achieving 1000/1000 points in the Bronze round."
        />
        <ResumeCard
          badge="2023-2025"
          title="MCC Gold"
          subTitle="Malaysian Computing Challenge"
          des="A national informatics competition where I placed Gold."
        />
        <ResumeCard
          badge="2024"
          title="KL-CC Gold"
          subTitle="Kuala Lumpur Coding Cup"
          des="A regional-level school competition where my team achieved the highest points in the whole competition, beating sixteem teams."
        />
        <ResumeCard
          badge="2023-2024"
          title="UKM Mentor"
          subTitle="National Univeristy of Malaysia"
          des="Mentored a coding team hosted by UKM for CNC2024, previously a mentor of the winning team in CNC2023."
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
          des="Graduated July 2024 with 8 A* with 10 subjects in total, additionally graduated with an Attainment Award in D.T and CS"
        />
      </div>
    </div>
  );
};

export default Education;
