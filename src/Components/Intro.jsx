import React from "react";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <section
      className="relative flex flex-col justify-center min-h-screen px-2 -top-10 xl:-top-40 xl:scroll-mt-64 scroll-mt-10"
      id="welcome"
    >
      <p className="font-mono text-teal-300 ">Hola, mi nombre es:</p>
      <h2 className="font-sans text-4xl font-bold text-purple-500 sm:text-2xl xl:text-7xl">
        Román Lemus
      </h2>
      <div className="text-xl font-semibold text-gray-300 xl:text-5xl">
        <Typewriter
          options={{ loop: true, delay: 50 }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Y soy front-end developer.")
              .pauseFor(1500)
              .deleteAll()
              .pauseFor(800)
              .start();
          }}
        />
      </div>
      <p className="my-6 text-sm xl:my-10 xl:text-lg xl:w-3/4">
        Bienvenido! Soy un entusiasta de la tecnología e informática, me encanta
        aprender y compartir conocimiento relacionado, así como enfrentarme a
        retos en equipo. Actualmente estoy enfocado en seguir practicando y
        aprender ReactJS a profundidad.
      </p>
      <button className="px-5 py-1 font-mono text-lg font-semibold text-purple-500 border-2 border-purple-600 rounded-md w-max xl:px-8 xl:py-2">
        <a href="mailto:roman09071999@gmail.com">Trabajemos juntos!</a>
      </button>
    </section>
  );
};

export default Intro;
