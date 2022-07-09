import React from "react";
import NumberedHeading from "./NumberedHeading";

const Projects = () => {
  return (
    <>
      <section
        className="relative mb-20 text-sm -top-18 lg:-top-20 xl:text-lg md:scroll-mt-40 scroll-mt-24"
        id="projects"
      >
        <NumberedHeading number={4} heading="Proyectos" />
      </section>
    </>
  );
};

export default Projects;
