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
        className="relative px-2 mb-20 text-sm -top-18 lg:-top-20 xl:text-lg lg:scroll-mt-36 scroll-mt-24"
        id="projects"
      >
        <NumberedHeading number={4} heading="Proyectos" />
        <p>
          Las APIs de los proyectos donde utilicé AJAX (con Axios) fueron
          provistas por alumnos de la especialidad de back-end de{" "}
          <a
            href="https://www.tzuzulcode.com/bootcamps"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <u className="hover:text-teal-400">Tzuzulcode</u>,{" "}
          </a>{" "}
          sin embargo se dieron de baja una vez terminaron las fechas de
          entrega.
          <br /> Utilicé el servicio de Atlas que nos ofrece{" "}
          <a
            href="https://www.mongodb.com/es/cloud/atlas/efficiency"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            {" "}
            <u>MongoDB</u>{" "}
          </a>{" "}
          para lanzar <b className="text-purple-500">mis bases de datos</b> y{" "}
          <a
            href="https://www.cloud.google.com/appengine"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            {" "}
            <u>App Engine</u>{" "}
          </a>{" "}
          para <b className="text-purple-500">deployar la API</b>. <br />
          Finalmente subí las aplicaciones a la web con
          <a
            href="https://firebase.google.com/products/hosting"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400"
          >
            {" "}
            <u>Firebase</u>
          </a>
          .
        </p>

        <ul className="flex flex-col gap-10 mt-10 lg:gap-20">
          <Project
            title="DevJobs"
            description={
              <>
                <p>
                  DevJobs es una plataforma que simula una bolsa de trabajo,
                  puedes registarte como aplicante y empleador para buscar o
                  publicar vacantes dependiendo tu tipo de usuario.
                </p>
                <p className="mt-2 text-sm text-right text-red-600 ">
                  *Mobile design in progress.
                </p>
              </>
            }
            image={devjobs}
            tags={["React", "AJAX", "API-REST", "TailwindCSS"]}
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
              <>
                <p>
                  En este comercio electrónico puse en práctica el uso de
                  funciones reductoras con el hook useReducer sentando buenas
                  bases para estudiar <b className="text-purple-500">Redux</b> y{" "}
                  <b className="text-purple-500">Redux toolkit</b>. Cuenta con
                  una implementación de Stripe para procesar los pagos y todos
                  los datos se manejan mediante una API-REST.
                </p>
                <p className="mt-2 text-sm text-right text-red-600 ">
                  *Web and mobile design in progress.
                </p>
              </>
            }
            image={ecommerce}
            tags={["Axios", "twin.macro", "Stripe", "Reducers"]}
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
                En mi portafolio puedes ver una lista de mis proyectos y skills,
                así como{" "}
                <a href="mailto:roman09071999@gmail.com">
                  <u className="hover:text-teal-400">
                    ponerte en contacto conmigo
                  </u>
                </a>
                !
              </p>
            }
            image={portfolio}
            tags={["React", "TailwindCSS", "Git", "Firebase"]}
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
      <li className="lg:grid lg:grid-cols-8 lg:rows-1">
        <div
          className={`relative flex flex-col gap-5 lg:gap-10 lg:z-10 lg:col-span-4 lg:row-start-1 ${
            orientation === "left"
              ? "lg:col-start-1"
              : "lg:col-start-4 lg:col-end-9 lg:items-end "
          }`}
        >
          <h2 className="text-xl font-bold text-purple-500">{title}</h2>
          <div className="w-full bg-[#112240]  rounded-lg p-5 lg:p-2 text-base shadow-lg shadow-[#112240] ">
            {description}
          </div>
          <div className="flex flex-row gap-2 font-mono text-sm md:text-base lg:bg-[#112240] w-max max-w-screen-sm px-2 py-1 rounded-lg lg:shadow-lg lg:shadow-[#112240]">
            {tags.map((tag) => (
              <span>#{tag}</span>
            ))}
          </div>
          <div
            className={`flex flex-row  w-full gap-4 text-2xl ${
              orientation === "left" ? "lg:justify-start" : "lg:justify-end"
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
