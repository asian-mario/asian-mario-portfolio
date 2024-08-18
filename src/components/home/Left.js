import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { FiMail, FiSend } from "react-icons/fi";
import CV from "../../assets/Rangga.pdf";
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Graphics Developer", "3D Modeller", "Competetive Programmer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Rangga Gunarto</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2" >
          <a href="https://github.com/asian-mario" target="_blank" rel="noopener noreferrer">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaGithub/>   
            </span>
          </a>
          <a href="https://www.linkedin.com/in/dinurangga-gunarto-a4898a215/" target="_blank" rel="noopener noreferrer">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaLinkedin />
            </span>
          </a>
          <a href="mailto:ranggagunarto@gmail.com?subject=Hello%20There&body=I%20would%20like%20to%20inquire%20about%20your%20services.">
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiMail />
            </span>
            </a>
          </div>
        </div>
        <div className="flex h-14">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>
          <button onclick="window.location.href='mailto:ranggagunarto@gmail.com?subject=Hello&body=I%20am%20interested%20in%20your%20services.';" className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300" >
            Contact me <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
