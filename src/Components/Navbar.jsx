/*THIS COMPONENT REQUIRES TAILWIND CSS & REACT-ICONS*/

import React, { useState } from "react";
import { VscClose } from "react-icons/vsc";
import { BiMenu } from "react-icons/bi";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { GrTwitter } from "react-icons/gr";
import { AiOutlineLinkedin } from "react-icons/ai";
import tw from "twin.macro";

const Navbar = () => {
  const links = [
    { text: "<Acerca de mi/>", link: "#about-me" },
    { text: "<Educación/>", link: "#education" },
    { text: "<Skills/>", link: "#skills" },
    { text: "<Proyectos/>", link: "#projects" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MainContainer>
        <ResponsiveNavbar>
          <a href="#welcome">
            <NavTitle>RxmvnLD</NavTitle>
          </a>
          <MenuBtn
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <div>{isOpen ? <VscClose /> : <BiMenu />}</div>
          </MenuBtn>

          <ul
            className={`md:flex md:items-center md:pb-0 md:static w-full md:w-auto md:pl-0 hidden`}
          >
            {links.map((el, index) => (
              <li index={index} className=" md:ml-8 md:my-0">
                <a
                  href={el.link}
                  className="font-mono text-base hover:text-purple-500"
                >
                  {el.text}
                </a>
              </li>
            ))}
          </ul>
        </ResponsiveNavbar>
      </MainContainer>

      <ul
        className={`md:hidden w-screen pb-12 fixed bg-gradient-to-b from-[#102445] to-[#122a52] z-40  pl-9 transition-all duration-300 ease-in ${
          isOpen ? "top-16 " : "top-[-550px]"
        }`}
      >
        {links.map((el, index) => (
          <MenuLi index={index}>
            <MenuLink href={el.link}>{el.text}</MenuLink>
          </MenuLi>
        ))}
        <IconsContainer>
          <MenuLi>
            <MenuLink
              href="https://github.com/RxmvnLD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row items-center gap-2">
                <FiGithub className="text-2xl" />

                {"<Github/>"}
              </div>
            </MenuLink>
          </MenuLi>
          <MenuLi>
            <MenuLink
              href="https://www.linkedin.com/in/roman-l-a72953109/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row items-center gap-2">
                <AiOutlineLinkedin className="text-2xl" /> {"<LinkedIn/>"}
              </div>
            </MenuLink>
          </MenuLi>

          <MenuLi>
            <MenuLink
              href="https://twitter.com/RxmvnLD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row items-center gap-2">
                <GrTwitter /> {"<Twitter/>"}
              </div>
            </MenuLink>
          </MenuLi>

          <MenuLi>
            <MenuLink
              href="https://www.instagram.com/rom.e.m.e/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-row items-center gap-2">
                <FiInstagram /> {"<Instagram/>"}
              </div>
            </MenuLink>
          </MenuLi>
        </IconsContainer>
      </ul>
    </>
  );
};
const MainContainer = tw.div`
sticky top-0 z-50 w-full
`;

const ResponsiveNavbar = tw.nav`
items-center justify-between py-4 md:py-6 bg-[#0c1c35] md:flex md:px-10 px-7 shadow-xl w-full
`;

const NavTitle = tw.h1`
flex items-center text-2xl cursor-pointer font-semibold hover:text-purple-500 
`;

const MenuBtn = tw.button`
absolute inline-flex items-center p-2 ml-3 text-3xl  rounded-lg md:hidden focus:outline-none right-8 top-2 focus:ring-2 focus:ring-purple-400
`;

const MenuLi = tw.li`
text-lg my-7
`;

const MenuLink = tw.a`
font-mono hover:text-purple-500
`;
const IconsContainer = tw.div`
mt-24
`;

export default Navbar;
