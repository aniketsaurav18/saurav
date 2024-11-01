import React, { ReactNode } from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiExpress,
  SiCplusplus,
  SiAmazonwebservices,
  SiApachekafka,
  SiRabbitmq,
  SiNodedotjs,
} from "react-icons/si";

export type TechStackType = {
  skill: string;
  icon: ReactNode;
};

export const TechStack: TechStackType[] = [
  {
    skill: "React",
    icon: React.createElement(SiReact, { size: 14 }),
  },
  {
    skill: "Javascript",
    icon: React.createElement(SiJavascript, { size: 14 }),
  },
  {
    skill: "Typescript",
    icon: React.createElement(SiTypescript, { size: 14 }),
  },
  {
    skill: "NodeJS",
    icon: React.createElement(SiNodedotjs, { size: 14 }),
  },
  {
    skill: "Express",
    icon: React.createElement(SiExpress, { size: 14 }),
  },
  {
    skill: "PostgreSQL",
    icon: React.createElement(SiPostgresql, { size: 14 }),
  },
  {
    skill: "MongoDB",
    icon: React.createElement(SiMongodb, { size: 14 }),
  },
  {
    skill: "Docker",
    icon: React.createElement(SiDocker, { size: 14 }),
  },
  {
    skill: "C++",
    icon: React.createElement(SiCplusplus, { size: 14 }),
  },
  {
    skill: "AWS",
    icon: React.createElement(SiAmazonwebservices, { size: 14 }),
  },
  {
    skill: "Kafka",
    icon: React.createElement(SiApachekafka, { size: 14 }),
  },
  {
    skill: "RabbitMQ",
    icon: React.createElement(SiRabbitmq, { size: 14 }),
  },
];
