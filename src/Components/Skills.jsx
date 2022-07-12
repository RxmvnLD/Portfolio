import React from "react";
import NumberedHeading from "./NumberedHeading";
import { BiLinkExternal } from "react-icons/bi";
import firebase from "../assets/skills/firebase.png";
import git from "../assets/skills/git.png";
import github from "../assets/skills/github.png";
import npm from "../assets/skills/npm.png";
import react from "../assets/skills/react.png";
import router from "../assets/skills/router.png";
import stripe from "../assets/skills/stripe.png";
import tailwind from "../assets/skills/tailwind.png";
import translate from "../assets/skills/translate.png";
import twin from "../assets/skills/twin.png";

const Skill = ({ logo, title, text, link, logoSize }) => {
  console.log(title, logoSize);
  return (
    <>
      <div className=" mt-5 bg-[#112240] h-60 w-60 md:h-60 md:w-58 rounded-md hover:shadow-lg md:hover:-mt-5 transition-all duration-500 ease-in-out  hover:shadow-teal-400 ">
        <div className="flex flex-row items-center justify-between mx-5 mt-5">
          {" "}
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={logo}
              alt="logo"
              className={`${
                logoSize === undefined ? "w-10" : `w-${logoSize.toString()}`
              }`}
            />{" "}
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <BiLinkExternal className="text-xl cursor-pointer hover:text-teal-400" />
          </a>
        </div>
        <div className="mx-5 mt-2">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <h2 className="font-bold text-purple-500">{title}</h2>
          </a>
          <div className="text-sm">{text}</div>
        </div>
      </div>
    </>
  );
};
const Skills = () => {
  return (
    <>
      <section
        className="relative w-full max-w-full px-2 mb-20 text-sm -top-18 lg:-top-20 xl:text-lg md:scroll-mt-40 scroll-mt-24"
        id="skills"
      >
        <NumberedHeading number={3} heading="Skills" />
        <p className="pb-2 mb-2">
          Estas son algunas tecnologías, librerías y/o habilidades que utilizo
          con frecuencia al desarrollar mis proyectos.
        </p>
        <div className="grid justify-center w-full max-w-full gap-10 mt-5 md:grid-cols-2 xl:grid-cols-4">
          <Skill
            logo={translate}
            title="Idioma inglés"
            text={
              <p>
                Tengo un nivel{" "}
                <span className="font-semibold text-purple-400">
                  intermedio/avanzado
                </span>{" "}
                en el lenguaje y esto me permite consumir contenido sobre
                desarrollo sin importar el idioma.
              </p>
            }
          />
          <Skill
            logo={react}
            link="https://es.reactjs.org"
            title="React JS"
            text={
              <p>
                Utilizo hooks para el manejo de estado (useState y useEffect) y
                contexto (useContext). Estoy practicando con Reducers en
                aplicaciones cuyo estado se vuelve más complejo.
              </p>
            }
          />
          <Skill
            logo={git}
            link="https://git-scm.com"
            title="Git"
            text={
              <p>
                A pesar de trabajar solo, utilizo el control de versiones para
                tener un workflow más organizado.
              </p>
            }
          />
          <Skill
            logo={github}
            link="https://github.com"
            title="GitHub"
            text={
              <p>
                He escrito mucho código desde que empecé a estudiar pero en mi
                repositorio únicamente se encuentran mis proyectos más
                recientes.
              </p>
            }
          />
          <Skill
            logo={firebase}
            link="https://firebase.google.com"
            title="Google Firebase"
            text={
              <p>
                Uso el servicio de hosting para deployar mis aplicaciones pero
                me interesa estudiar otros productos de{" "}
                <a
                  href="https://cloud.google.com/products/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400"
                >
                  <u>Google Cloud Platform</u>
                </a>
                .
              </p>
            }
          />
          <Skill
            logo={npm}
            link="https://www.npmjs.com"
            title="NPM"
            text={
              <p>
                Empecé trabajando con NPM y actualmente estoy probando{" "}
                <a
                  href="https://cloud.google.com/products/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400"
                >
                  <u>yarn</u>
                </a>{" "}
                para ver sus beneficios.
              </p>
            }
          />

          <Skill
            logo={router}
            link="https://reactrouter.com"
            title="React Router"
            text={
              <p>
                Si una aplicacion requiere manejo de rutas implemento la
                librería más popular para ello.
              </p>
            }
          />

          <Skill
            logo={tailwind}
            link="https://tailwindcss.com"
            title="Tailwind CSS"
            text={
              <p>
                Decidí empezar a practicar Tailwind CSS con React y de momento
                me siento cómodo trabajando los estilos con este framework.
              </p>
            }
          />
          <Skill
            logo={twin}
            link="https://www.npmjs.com/package/twin.macro"
            title="twin.macro"
            logoSize={20}
            text={
              <p>
                Esta librería combina los{" "}
                <a
                  href="https://styled-components.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-400"
                >
                  <u>styled components</u>
                </a>{" "}
                con Tailwind para tener una estructura de CSS reutilizable y
                código más limpio en nuestros componentes
              </p>
            }
          />
          <Skill
            logo={stripe}
            link="https://stripe.com/mx"
            title="Stripe"
            logoSize={20}
            text={
              <p>
                Implementé una pasarela de pago muy sencilla en un e-commerce
                con React y Stripe.
              </p>
            }
          />
        </div>
      </section>
    </>
  );
};

export default Skills;
