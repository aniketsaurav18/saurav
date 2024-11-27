import { TechStack } from "@/lib/TechStack";

const TechStackComponent = () => {
  return (
    <div className="w-full my-4 text-gray-900 dark:text-white">
      <h1 className="font-bold text-xl">My Tech Stack 🛠️</h1>
      <div className="skills flex flex-wrap gap-1.5 mt-3">
        {TechStack.map((skill) => (
          <div
            key={skill.skill}
            className="cursor-pointer transition-all duration-200 
             bg-gray-200 text-gray-900 dark:bg-zinc-800 dark:text-white flex items-center justify-center gap-1 py-0.5 px-1.5 rounded-md text-sm hover:bg-gray-300 dark:hover:bg-zinc-700"
          >
            {skill.icon}
            <p className="tracking-tight leading-normal">{skill.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackComponent;
