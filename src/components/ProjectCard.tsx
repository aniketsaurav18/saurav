import { ExternalLink, Github, BookOpen } from "lucide-react";

interface ProjectCardProps {
  logo: string;
  title: string;
  description: string[];
  techStack: string[];
  liveLink: string | undefined;
  githubLink: string;
  blogLink: string | undefined;
}

export default function ProjectCard({
  logo,
  title,
  description,
  techStack,
  liveLink,
  githubLink,
  blogLink,
}: ProjectCardProps) {
  return (
    <div className="w-full max-w-5xl mx-auto text-white px-4 py-2 rounded-lg shadow-md bg-zinc-200/50 dark:bg-[#222222] cursor-pointer">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 sm:gap-6">
          <div className="w-[15%] sm:w-[10%] flex-shrink-0">
            <div className="relative w-full pt-[100%] bg-white">
              <img
                src={logo}
                alt={`${title} logo`}
                className="absolute top-0 left-0 rounded-lg w-full object-cover"
              />
            </div>
          </div>

          <div className="w-full sm:w-[90%]">
            <h3 className="sm:text-lg text-sm font-bold text-gray-100">
              {title}
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {description.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-200 font-medium flex"
                >
                  <span className="flex-shrink-0 mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-normal px-2 py-1 bg-gray-700/30 text-gray-200 rounded-sm hover:bg-gray-700/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-wrap gap-2 justify-end">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm px-2 py-1 h-6 border border-gray-600 text-gray-100 hover:bg-gray-700 rounded-sm transition-all"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                <span>Live</span>
              </a>
            )}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm px-2 py-1 h-6 border border-gray-600 text-gray-100 hover:bg-gray-700 rounded-sm transition-all"
            >
              <Github className="w-3 h-3 mr-1" />
              <span>GitHub</span>
            </a>
            <a
              href={blogLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm px-2 py-1 h-6 border border-gray-600 text-gray-100 hover:bg-gray-700 rounded-sm transition-all"
            >
              <BookOpen className="w-3 h-3 mr-1" />
              <span>Blog</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
