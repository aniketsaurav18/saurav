export type Projects = {
  projectName: string;
  projectDescription: string[];
  projectLogo: string;
  projectTech: string[];
  projectGithubLink: string;
  projectLiveLink?: string; // Optional if some projects don't have live links
  projectBlogLink?: string; // Optional if some projects don't have article links
};

export const MyProjects: Projects[] = [
  {
    projectName: "Chess",
    projectDescription: [
      "An online multiplayer Chess game website with local chess engine support.",
      "Play with Stockfish engine. Without Internet.",
    ],
    projectLogo: "/chess-project-logo.jpg",
    projectTech: [
      "Typescript",
      "WebSocket",
      "Wasm",
      "React",
      "Express",
      "PostgreSQL",
      "kafka",
    ],
    projectGithubLink: "https://github.com/aniketsaurav18/chess",
    projectLiveLink: "https://chess.aniketsaurav.com",
    projectBlogLink: "https://aniketsaurav.com/blog/chess",
  },
  {
    projectName: "Code Execution Engine",
    projectDescription: [
      "A robust code execution engine using docker.",
      "Supports multiple languages.",
    ],
    projectLogo: "/assets/code-execution-engine-logo.png",
    projectTech: [
      "Typescript",
      "Docker",
      "React",
      "Express",
      "RabbitMQ",
      "Redis",
    ],
    projectGithubLink:
      "https://github.com/aniketsaurav18/code-execution-engine",
    projectLiveLink: "https://chess.aniketsaurav.com",
    projectBlogLink: "https://aniketsaurav.com/blog/chess",
  },
];
