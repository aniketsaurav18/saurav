import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import TechStackComponent from "@/components/TechStack";

export default function Home() {
  return (
    <div>
      <About />
      <TechStackComponent />
      <Projects />
      <Education />
    </div>
  );
}
