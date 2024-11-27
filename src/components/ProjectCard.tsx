import { Github, BookOpen, Globe } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string[];
  techStack: string[];
  liveLink: string | undefined;
  githubLink: string;
  blogLink: string | undefined;
}

const ExternalLinkIcon = ({
  liveLink,
  githubLink,
  blogLink,
}: {
  liveLink?: string;
  githubLink: string;
  blogLink?: string;
}) => {
  return (
    <div className="flex space-x-2">
      {liveLink && (
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm px-2 py-1 h-6 border border-gray-300 text-gray-900 hover:bg-gray-200 dark:border-gray-500 dark:text-gray-200 dark:hover:bg-zinc-700 rounded-sm transition-all"
        >
          <Globe className="h-3 w-3 mr-1" />
          Live
        </a>
      )}
      {blogLink && (
        <a
          href={blogLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm px-2 py-1 h-6 border border-gray-300 text-gray-900 hover:bg-gray-200 dark:border-gray-500 dark:text-gray-200 dark:hover:bg-zinc-700 rounded-sm transition-all"
        >
          <BookOpen className="h-3 w-3 mr-1" />
          Blog
        </a>
      )}
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm px-2 py-1 h-6 border border-gray-300 text-gray-900 hover:bg-gray-200 dark:border-gray-500 dark:text-gray-200 dark:hover:bg-zinc-700 rounded-sm transition-all"
      >
        <Github className="h-3 w-3 mr-1" />
        Code
      </a>
    </div>
  );
};

export const ProjectCard2 = ({
  title,
  description,
  techStack,
  liveLink,
  githubLink,
  blogLink,
}: ProjectCardProps) => {
  return (
    <div className="relative bg-white border border-gray-300 dark:bg-[#222222] dark:border-zinc-700 rounded-lg overflow-hidden group hover:border-gray-400 dark:hover:border-zinc-600 transition-colors">
      <div className="p-4">
        <div className="flex sm:items-center items-start sm:justify-between sm:flex-row flex-col sm:mb-4 mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">
            {title}
          </h3>
          <div className="sm:block hidden">
            <ExternalLinkIcon
              liveLink={liveLink}
              githubLink={githubLink}
              blogLink={blogLink}
            />
          </div>
        </div>
        <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-200 list-disc list-inside sm:mb-4 mb-2">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1 sm:mb-0 mb-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="sm:hidden block my-2">
          <ExternalLinkIcon
            liveLink={liveLink}
            githubLink={githubLink}
            blogLink={blogLink}
          />
        </div>
      </div>
    </div>
  );
};

// old ProjectCard, not used in the project

// export function ProjectCard({
//   logo,
//   title,
//   description,
//   techStack,
//   liveLink,
//   githubLink,
//   blogLink,
// }: ProjectCardProps) {
//   return (
//     <div className="w-full max-w-5xl mx-auto text-white px-4 py-2 rounded-lg shadow-md bg-[#222222] cursor-pointer">
//       <div className="flex flex-col gap-2">
//         <div className="flex flex-row gap-2 sm:gap-6">
//           {/* <div className="w-[15%] sm:w-[10%] flex-shrink-0">
//             <div className="relative w-full pt-[100%] bg-white">
//               <img
//                 src={logo}
//                 alt={`${title} logo`}
//                 className="absolute top-0 left-0 rounded-lg w-full object-cover"
//               />
//             </div>
//           </div> */}

//           <div className="w-full sm:w-[90%]">
//             <h3 className="sm:text-lg text-sm font-bold text-gray-100">
//               {title}
//             </h3>
//             <ul className="list-disc list-inside space-y-1">
//               {description.map((item, index) => (
//                 <li
//                   key={index}
//                   className="text-sm text-gray-200 font-medium flex"
//                 >
//                   <span className="flex-shrink-0 mr-2">•</span>
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         <div className="flex flex-wrap gap-2">
//           {techStack.map((tech, index) => (
//             <span
//               key={index}
//               className="text-xs font-normal px-2 py-1 bg-gray-700/30 text-gray-200 rounded-sm hover:bg-gray-700/50 transition-colors"
//             >
//               {tech}
//             </span>
//           ))}
//         </div>
//         <div className="flex flex-col gap-4 w-full">
//           <div className="flex flex-wrap gap-2 justify-end">
//             {liveLink && (
//               <a
//                 href={liveLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center text-sm px-2 py-1 h-6 border border-gray-600 text-gray-100 hover:bg-gray-700 rounded-sm transition-all"
//               >
//                 <ExternalLink className="w-3 h-3 mr-1" />
//                 <span>Live</span>
//               </a>
//             )}
//             <a
//               href={githubLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center text-sm px-2 py-1 h-6 border border-gray-600 text-gray-100 hover:bg-gray-700 rounded-sm transition-all"
//             >
//               <Github className="w-3 h-3 mr-1" />
//               <span>GitHub</span>
//             </a>
//             {blogLink && (
//               <a
//                 href={blogLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center text-sm px-2 py-1 h-6 border border-gray-600 text-gray-100 hover:bg-gray-700 rounded-sm transition-all"
//               >
//                 <BookOpen className="w-3 h-3 mr-1" />
//                 <span>Blog</span>
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
