import React, { useState } from "react";
import tw from "twin.macro";
import { VscClose, VscMenu } from "react-icons/vsc";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800 border-gray-200 sm:py-3">
      <div className="container flex flex-wrap items-center justify-between sm:ml-10">
        <span className="self-center px-2 text-2xl sm:text-3xl font-semibold text-white py-2.5 whitespace-nowrap">
          RxmvnLD
        </span>
        <button
          className="inline-flex items-center p-2 ml-3 text-3xl text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 "
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

        <div
          className={`w-full sm:-mr-60 md:block md:w-auto ${
            isOpen ? "" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center font-bold md:px-5 bg-gray-300/50 sm:bg-black/0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 "
              >
                {"<About/>"}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 "
              >
                {"<Skills/>"}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 "
              >
                {"<Projects/>"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const MainContainer = tw.main`
w-20 bg-black text-white
`;

export default Navbar;
