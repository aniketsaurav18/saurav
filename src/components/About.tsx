import { FaGithub } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <main className="flex flex-col">
      <p>Hi </p>
      <p>
        Hello! I am Saurav Sharma, a software engineer passionate about creating
        impactful solutions through code. With a solid foundation in full-stack
        development and expertise in modern technologies, I specialize in
        building efficient, scalable applications. Whether it is developing web
        applications, crafting seamless user interfaces, or optimizing
        performance, I thrive on solving complex problems. This portfolio
        showcases my journey, projects, and the skills I have honed along the
        way. Let us build something amazing together!
      </p>
      <div className="my-4">
        <h3 className="text-[20px]">Let&#39;s Connect</h3>
        <div className="flex flex-row gap-2 text-2xl">
          <a href="https://github.com/aniketsaurav18">
            <FaGithub />
          </a>
          <a href="https://github.com/aniketsaurav18">
            <FaSquareTwitter />
          </a>
        </div>
      </div>
    </main>
  );
};

export default About;
