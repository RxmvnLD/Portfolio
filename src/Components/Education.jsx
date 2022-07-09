import React from "react";
import NumberedHeading from "./NumberedHeading";
import fcc from "../assets/education/fcc.png";
import itmorelia from "../assets/education/Itmorelia.png";
import tzuzulcode from "../assets/education/tzuzulcode.png";
import kEnAi from "../assets/education/kEnAi.svg";
const Education = () => {
  return (
    <>
      <section
        className="relative mb-20 text-sm -top-18 lg:-top-20 xl:text-lg md:scroll-mt-40 scroll-mt-24"
        id="education"
      >
        <NumberedHeading number="2" heading="Educación" sectionId="education" />

        <ol className="relative border-l border-teal-400">
          <TimelineItem
            date="2018-2023 (actual)"
            title="Ing. Mecatrónica"
            text={
              <p className="w-auto mb-4">
                Estoy cursando mi último semestre de materias en el Tecnológico
                nacional de México campus Morelia, faltándome únicamente las
                prácticas profesionales para culminar la carrera. Éstas últimas
                las quiero realizar en una empresa dedicada al desarrollo de
                software.
              </p>
            }
            logo={itmorelia}
          />
          <TimelineItem
            date="2022 (actual)"
            title="Bootcamp Tzuzulcode"
            text={
              <p className="w-auto mb-4">
                En Abril del año en curso inicié el Bootcamp Tzuzulcode en la
                especialidad de React, mismo que complemento a la par con cursos
                y documentación de la librería. En estos meses he aprendido las
                bases de ReactJS y he desarrollado un par de proyectos.
              </p>
            }
            logo={tzuzulcode}
          />
          <TimelineItem
            date="2021"
            title="Curso de Javascript"
            text={
              <p className="w-auto mb-4">
                El año pasado estudié con los cursos de Jon, tiene una
                iniciativa súper interesante y completamente gratuita llamada{" "}
                <a
                  href="https://aprendejavascript.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400"
                >
                  <u>Aprende Javascript</u>
                </a>{" "}
                en la cual parte desde las bases del lenguaje y culmina con una
                introducción a la programación reactiva pasando por temas como
                ES6/ESNext, AJAX, etc...
              </p>
            }
            logo={kEnAi}
          />
          <TimelineItem
            date="2020"
            title="Web basis"
            text={
              <p className="w-auto mb-4">
                Aprendí las bases de HTML y CSS3 con el curso "Responsive Web
                Design" en{" "}
                <a
                  href="https://www.freecodecamp.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400"
                >
                  <u>freeCodeCamp,</u>
                </a>{" "}
                otra página con bastantes cursos de programación los cuales son
                gratuitos y abarcan distintas áreas del desarrollo de software.
              </p>
            }
            logo={fcc}
          />
        </ol>
      </section>
    </>
  );
};

const TimelineItem = ({ date, title, text, logo }) => {
  return (
    <>
      <div className="flex flex-row items-center gap-10 ">
        <li className="w-auto m-auto mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-teal-400 rounded-full mt-1.5 -left-1.5" />
          <span className="inline-flex items-center mb-2">
            <div>
              <time className="mb-1 font-normal leading-none ">{date}</time>
              <h3 className="font-bold text-purple-500">{title}</h3>
            </div>
            <img src={logo} alt="1" className="inline w-10 ml-10 md:hidden" />
          </span>
          {text}
        </li>
        <div>
          <img src={logo} alt="1" className="hidden md:inline md:w-40" />
        </div>
      </div>
    </>
  );
};

export default Education;
