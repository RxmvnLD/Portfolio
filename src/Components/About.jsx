import React from "react";
import NumberedHeading from "./NumberedHeading";
import foto from "../assets/foto.jpg";

const About = () => {
  return (
    <>
      <section
        className="relative px-2 mb-20 text-sm -top-18 lg:-top-20 xl:text-lg md:scroll-mt-40 scroll-mt-24"
        id="about-me"
      >
        <NumberedHeading
          number="1"
          heading="Acerca de mi"
          sectionId="about-me"
        />
        <div className="flex flex-col items-center gap-10 md:mt-0 md:flex-row">
          <div>
            <p>
              Hola! Mi nombre es Román y estoy a punto de graduarme como{" "}
              <b className="text-purple-500">Ing. Mecatrónico</b>. Mi interés
              por el desarrollo web empezó en{" "}
              <b className="text-purple-500">2020</b> pero no fue hasta finales
              de <b className="text-purple-500">2021</b> cuando empecé a
              estudiar de manera consistente.
            </p>
            <br />
            <p>
              La lógica matemática desarrollada en la universidad me facilitó
              demasiado el proceso sin embargo solo escribo código front end,
              por lo que en los siguientes meses quiero estudiar{" "}
              <b className="text-purple-500">NodeJs</b> para aprovechar el
              conocimiento que he adquirido sobre{" "}
              <b className="text-purple-500">JavaScript</b> {"<3"}.
            </p>
          </div>

          <img
            src={foto}
            alt="Thats me!"
            className="w-48 border-4 border-teal-400 rounded-full md:w-80"
          />
        </div>
      </section>
    </>
  );
};

export default About;
