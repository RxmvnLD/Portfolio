/*THIS COMPONENT REQUIRES TAILWIND CSS & REACT-ICONS*/

import React, { useState } from "react";
import { VscClose } from "react-icons/vsc";
import { BiMenu } from "react-icons/bi";
import tw from "twin.macro";

const Navbar = () => {
  const links = [
    { text: "<Acerca de mi/>", link: "#" },
    { text: "<Educación/>", link: "#" },
    { text: "<Skills/>", link: "#" },
    { text: "<Proyectos/>", link: "#" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="sticky top-0 z-10 w-full">
        <ResponsiveNavbar>
          <div className="flex items-center text-2xl text-white cursor-pointer">
            RxmvnLD
          </div>

          <button
            className="absolute inline-flex items-center p-2 ml-3 text-3xl text-white rounded-lg md:hidden focus:outline-none right-8 top-2 focus:ring-2 focus:ring-gray-200 "
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <div>
              {isOpen ? (
                <VscClose className="text-white" />
              ) : (
                <BiMenu className="text-white" />
              )}
            </div>
          </button>

          <ul
            className={`md:flex md:items-center md:pb-0 md:static w-full md:w-auto md:pl-0 hidden`}
          >
            {links.map((el, index) => (
              <li index={index} className=" md:ml-8 md:my-0">
                <a
                  href={el.link}
                  className="font-mono text-lg text-white hover:text-gray-400"
                >
                  {el.text}
                </a>
              </li>
            ))}
          </ul>
        </ResponsiveNavbar>
      </div>
      <ul
        className={`md:hidden pb-12 fixed bg-gray-600 z-5 left-0 w-full pl-9 transition-all duration-300 ease-in ${
          isOpen ? "top-16 " : "top-[-520px]"
        }`}
      >
        {links.map((el, index) => (
          <li index={index} className="text-xl my-7">
            <a
              href={el.link}
              className="font-mono text-white hover:text-gray-400"
            >
              {el.text}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

const ResponsiveNavbar = tw.nav`
items-center
justify-between
py-4
md:py-6
bg-gray-800
md:flex
md:px-10
px-7
`;

export default Navbar;
