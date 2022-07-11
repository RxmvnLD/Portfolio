import React from "react";
import NumberedHeading from "./NumberedHeading";
import devjobs from "../assets/projects/devjobs.jpg";
import portfolio from "../assets/projects/portfolio.jpg";
import ecommerce from "../assets/projects/ecommerce.jpg";
import { BiLinkExternal } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <>
      <section
        className="relative mb-20 text-sm -top-18 lg:-top-20 xl:text-lg lg:scroll-mt-80 scroll-mt-24"
        id="projects"
      >
        <NumberedHeading number={4} heading="Proyectos" />
        <ul className="flex flex-col gap-10 lg:gap-20">
          <Project
            title="DevJobs"
            description={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, alias, magnam quidem consequuntur error vitae dolor,
                iure aspernatur laboriosam earum placeat. Reiciendis, numquam
                commodi. Neque eligendi accusamus omnis eum ea!
              </p>
            }
            image={devjobs}
            tags={["React", "AJAX", "API-REST", "twin.macro"]}
            externalLinks={{
              deploy: true,
              link: "https://jobsearch-react-app.web.app",
              github: "https://github.com/RxmvnLD/Job-seach-app-Tzuzulcode",
            }}
            orientation="left"
          />
          <Project
            title="React e-commerce"
            description={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, alias, magnam quidem consequuntur error vitae dolor,
                iure aspernatur laboriosam earum placeat. Reiciendis, numquam
                commodi. Neque eligendi accusamus omnis eum ea!
              </p>
            }
            image={ecommerce}
            tags={["React", "Axios", "TailwindCSS", "Stripe", "Reducers"]}
            externalLinks={{
              deploy: false,
              link: "",
              github: "https://github.com/RxmvnLD/React-ecommerce",
            }}
            orientation="right"
          />
          <Project
            title="Web Portfolio"
            description={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, alias, magnam quidem consequuntur error vitae dolor,
                iure aspernatur laboriosam earum placeat. Reiciendis, numquam
                commodi. Neque eligendi accusamus omnis eum ea!
              </p>
            }
            image={portfolio}
            tags={["React", "TailwindCSS", "Git"]}
            externalLinks={{
              deploy: true,
              link: "https://rxmvmld.web.app",
              github: "https://github.com/RxmvnLD/Portfolio",
            }}
            orientation="left"
          />
        </ul>
      </section>
    </>
  );
};

const Project = ({
  title,
  description,
  image,
  tags,
  externalLinks,
  orientation,
}) => {
  return (
    <>
      <li className="grid lg:grid-cols-8 lg:rows-1">
        <div
          className={`relative flex flex-col gap-5 lg:gap-10 lg:z-10 lg:col-span-4 justify-center lg:row-start-1 ${
            orientation === "left"
              ? "lg:col-start-1"
              : "lg:col-start-4 lg:text-right lg:items-end "
          }`}
        >
          <h2 className="text-xl font-bold text-purple-500">{title}</h2>
          <div className="w-full bg-[#112240] rounded-lg p-2 text-base shadow-lg shadow-[#112240] ">
            {description}
          </div>
          <div className="flex flex-row gap-2 font-mono text-sm md:text-base">
            {tags.map((tag) => (
              <span>#{tag}</span>
            ))}
          </div>
          <div
            className={`flex flex-row  w-full gap-4 text-2xl ${
              orientation === "left" ? "lg:justify-start" : "lg:justify-end "
            }`}
          >
            <a
              href={externalLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              <FiGithub />
            </a>
            {externalLinks.deploy ? (
              <a
                href={externalLinks.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400"
              >
                <BiLinkExternal />
              </a>
            ) : null}
          </div>
        </div>

        <a
          href={
            externalLinks.deploy ? externalLinks.link : externalLinks.github
          }
          target="_blank"
          rel="noopener noreferrer"
          className={`relative lg:h-full lg:col-span-5  ${
            orientation === "left" ? "lg:col-start-4" : "lg:col-start-1"
          } lg:row-start-1 lg:w-full`}
        >
          <img src={image} alt="title" className="hidden rounded-md lg:block" />
        </a>
      </li>
    </>
  );
};

export default Projects;
