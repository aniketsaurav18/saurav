import ProjectsCard from "./ProjectsCard";
import { MyProjects } from "@/lib/Projects";

const Projects = () => {
    return (
        <div>
            <h1 className="font-bold text-lg">My Projects</h1>
            {MyProjects.map((p, index) => (
                <ProjectsCard
                    key={index}
                    projectName={p.projectName}
                    projectDescription={p.projectDescription}
                    projectGithubLink={p.projectGithubLink}
                    projectLiveLink={p.projectLiveLink}
                    projectTech={p.projectTech}
                    projectBlogLink={p.projectBlogLink}
                    projectLogo={p.projectLogo}
                />
            ))}
        </div>
    );
};

export default Projects;
