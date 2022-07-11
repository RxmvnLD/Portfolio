import React from "react";
import tw from "twin.macro";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineLinkedin } from "react-icons/ai";

const Asidebar = () => {
  return (
    <MainAside>
      <IconsContainer>
        <a
          href="https://github.com/RxmvnLD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub className=" hover:text-purple-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/roman-l-a72953109/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin className=" hover:text-purple-500" />
        </a>
        <a
          href="https://twitter.com/RxmvnLD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrTwitter className=" hover:text-purple-500" />
        </a>
        <a
          href="https://www.instagram.com/rom.e.m.e/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram className=" hover:text-purple-500" />
        </a>
        <VerticalLine />
      </IconsContainer>
    </MainAside>
  );
};

const MainAside = tw.aside`
sticky
hidden
w-20
h-full
mx-10
top-64
mt-36
md:inline
`;

const IconsContainer = tw.div`
flex flex-col items-center gap-8 my-auto text-3xl font-light
`;

const VerticalLine = tw.div`
w-0.5
h-56
mx-auto
bg-gray-300
`;
export default Asidebar;
