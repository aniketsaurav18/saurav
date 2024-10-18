import { LuGithub, LuLink } from "react-icons/lu";

const ProjectsCard = () => {
  return (
    <div className="bg-zinc-200/50 dark:bg-zinc-900 cursor-pointer p-2 rounded-md">
      <div className="flex flex-col item-center">
        <div className="flex items-center h-full gap-3">
          <img src="/vite.svg" className="h-14 w-14" />
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className="font-semibold lg:text-xl text-base leading-none">
                  Project Name
                </h1>
                {/* <Status status={status} /> */}
              </div>
              <div className="flex items-center gap-3">
                {/* {linkURL && ( */}
                <a
                  href="/github"
                  target="_blank"
                  aria-label="Project Link"
                  className="text-blue-600"
                >
                  <LuLink size={18} />
                </a>
                {/* )} */}
                {/* {githubURL && ( */}
                <a
                  href="/github"
                  target="_blank"
                  aria-label="GitHub Repository"
                >
                  <LuGithub size={18} />
                </a>
                {/* )} */}
              </div>
            </div>
            <p className="lg:text-sm text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              incidunt, consequuntur at autem minima dolores commodi aliquid
              esse deleniti doloribus veniam cupiditate molestias? Neque commodi
              eos explicabo beatae est qui?
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-xs mt-2 w-full flex-wrap">
          {/* {skills.map((skill, index) => ( */}
          <span
            key={1}
            className="dark:bg-zinc-700 bg-zinc-300 rounded-sm px-1 py-0.5"
          >
            NodeJS
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
