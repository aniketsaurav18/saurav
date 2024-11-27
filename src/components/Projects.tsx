import { MyProjects } from "@/lib/Projects";
import { ProjectCard2 } from "./ProjectCard";

const Projects = () => {
  return (
    <div className="w-full my-8 flex flex-col gap-2">
      <h1 className="font-bold text-xl dark:text-white text-gray-900">
        My Projects 👨🏼‍💻
      </h1>
      <div className="flex flex-col gap-2">
        {MyProjects.map((p, index) => (
          <ProjectCard2
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
};

export default Projects;
