import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <main className="flex flex-col text-gray-800 dark:text-white">
      <p className="text-3xl font-bold">Hi, I am Saurav &#128075;</p>
      <ul className="my-2 text-base font-medium space-y-1">
        <li className="flex items-start">
          <span className="mr-2 flex-shrink-0">📍</span>
          <span>Jharkhand, India 🇮🇳</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 flex-shrink-0">🎓</span>
          <span>
            Got a degree in Biotechnology, Building web-apps for passion.
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 flex-shrink-0">🛠️</span>
          <span>Mainly work on React, NodeJS, and Typescript.</span>
        </li>
      </ul>
      <div className="my-4">
        <h1 className="font-bold text-xl my-2">Let&#39;s Connect</h1>
        <div className="flex flex-row gap-4 text-2xl">
          <a
            href="https://github.com/aniketsaurav18"
            className="hover:text-gray-600 dark:hover:text-gray-300"
            aria-label="GitHub"
          >
            <LuGithub size={25} />
          </a>
          <a
            href="https://twitter.com/aniketsauravv"
            className="hover:text-blue-500 dark:hover:text-blue-400"
            aria-label="Twitter"
          >
            <FaXTwitter size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/saurav-s-94328110a/"
            className="hover:text-blue-600 dark:hover:text-blue-400"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={25} />
          </a>
          <a
            href="mailto:aniketsaurav18@gmail.com"
            className="hover:text-red-500 dark:hover:text-red-400"
            aria-label="Mail"
          >
            <LuMail size={25} />
          </a>
        </div>
      </div>
    </main>
  );
};

export default About;
