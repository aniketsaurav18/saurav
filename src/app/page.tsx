import About from "@/components/About";
import ProjectsCard from "@/components/ProjectsCard";
import TechStackComponent from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <About />
      <TechStackComponent />
      <div className="text-xl">Projects</div>
      <ProjectsCard />
    </>
  );
}
