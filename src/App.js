import About from "./Components/About";
import Asidebar from "./Components/Asidebar";
import Education from "./Components/Education";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row max-w-full">
        <Asidebar />

        <main className="w-full px-6 xl:p-0 xl:mx-96 xl:text-lg z-2">
          <Intro />
          <About />
          <Education />
          <Skills />
          <Projects />
        </main>
      </div>
    </>
  );
}

export default App;
