import About from "@/components/About";
import ProjectsCard from "@/components/ProjectsCard";

export default function Home() {
  return (
    <>
      <About />
      <div className="text-xl">Projects</div>
      <ProjectsCard />
    </>
  );
}
