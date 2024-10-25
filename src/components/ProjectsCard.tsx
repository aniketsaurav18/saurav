import { LuGithub, LuLink } from "react-icons/lu";
import { Projects } from "@/lib/Projects"; // Ensure that this path matches your project structure

type ProjectCardProps = Projects;

const ProjectsCard = ({
  projectName,
  projectDescription,
  projectGithubLink,
  projectLiveLink,
  projectTech,
  projectBlogLink,
  projectLogo,
}: ProjectCardProps) => {
  return (
    <div className="bg-zinc-200/50 dark:bg-[#1E1C1C] cursor-pointer p-3 rounded-lg my-2">
      <div className="flex flex-col items-center">
        <div className="flex items-center h-full w-full gap-3 ">
          <img src={projectLogo} className="h-14 w-14" alt={`${projectName} logo`} />
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className="font-semibold lg:text-xl text-base leading-none">
                  {projectName}
                </h1>
                {/* <Status status={status} /> */}
              </div>
              <div className="flex items-center gap-3">
                {projectBlogLink && (
                  <a
                    href={projectBlogLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Project Blog"
                    className="cursor-pointer"
                  >
                    Read More
                  </a>
                )}
                {projectLiveLink && (
                  <a
                    href={projectLiveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Project Link"
                    className="text-blue-600"
                  >
                    <LuLink size={18} />
                  </a>
                )}
                {projectGithubLink && (
                  <a
                    href={projectGithubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <LuGithub size={18} />
                  </a>
                )}
              </div>
            </div>
            <p className="lg:text-sm text-sm">
              {projectDescription}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-xs mt-2 w-full flex-wrap">
          {projectTech.map((tech, index) => (
            <span
              key={index}
              className="dark:bg-zinc-700 bg-zinc-300 rounded-sm px-1 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
