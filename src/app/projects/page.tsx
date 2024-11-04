import ProjectCard from "@/components/ProjectCard";
import { MyProjects } from "@/lib/Projects";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-x. sm:text-2xl my-2">My Projects 👨🏼‍💻</h1>
      <div className="flex flex-col gap-2">
        {MyProjects.map((p, index) => (
          <ProjectCard
            key={index}
            title={p.projectName}
            description={p.projectDescription}
            githubLink={p.projectGithubLink}
            liveLink={p.projectLiveLink}
            techStack={p.projectTech}
            blogLink={p.projectBlogLink}
            logo={p.projectLogo}
          />
        ))}
      </div>
    </div>
  );
}
