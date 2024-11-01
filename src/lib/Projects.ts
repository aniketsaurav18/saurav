export type Projects = {
  projectName: string;
  projectDescription: string;
  projectLogo: string;
  projectTech: string[];
  projectGithubLink: string;
  projectLiveLink?: string; // Optional if some projects don't have live links
  projectBlogLink?: string; // Optional if some projects don't have article links
};

export const MyProjects: Projects[] = [
  {
    projectName: "Code Execution Engine",
    projectDescription: "A robust code execution engine using docker.",
    projectLogo: "/vite.svg",
    projectTech: ["Typescript", "Docker", "React", "Express"],
    projectGithubLink:
      "https://github.com/aniketsaurav18/code-execution-engine",
    projectBlogLink: "https://example.com/",
    projectLiveLink: "https://example.com/",
  },
  {
    projectName: "Chess",
    projectDescription:
      "An online multiplayer Chess game website with local chess engine support.",
    projectLogo: "/chess-project-logo.jpg",
    projectTech: [
      "Typescript",
      "WebSocket",
      "Wasm",
      "React",
      "Express",
      "PostgreSQL",
    ],
    projectGithubLink: "https://github.com/aniketsaurav18/chess",
    projectBlogLink: "https://example.com/",
    projectLiveLink: "https://example.com/",
  },
];
