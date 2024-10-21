import React, { ReactNode } from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiDocker,
} from "react-icons/si";

type TechStackType = {
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
];
