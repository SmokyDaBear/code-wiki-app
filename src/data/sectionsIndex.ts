import cIcon from "../assets/code-icons/c-icon.png";
import cppIcon from "../assets/code-icons/c-pp-icon.png";
import cssIcon from "../assets/code-icons/css-icon.png";
import gitIcon from "../assets/code-icons/git-icon.png";
import htmlIcon from "../assets/code-icons/html-icon.png";
import jsIcon from "../assets/code-icons/js-icon.png";
import sqlIcon from "../assets/code-icons/sql-icon.png";
import tsIcon from "../assets/code-icons/ts-icon.png";
import reactIcon from "../assets/code-icons/react-icon.png";
import javaIcon from "../assets/code-icons/java-icon.png";

export const CodeLogos = {
  sql: sqlIcon,
  html: htmlIcon,
  css: cssIcon,
  javascript: jsIcon,
  typescript: tsIcon,
  git: gitIcon,
  c: cIcon,
  cpp: cppIcon,
  react: reactIcon,
  java: javaIcon,
};

// Define note sections and their display names
export const NoteSections = {
  sql: { name: "SQL", icon: CodeLogos.sql },
  html: { name: "HTML", icon: CodeLogos.html },
  css: { name: "CSS", icon: CodeLogos.css },
  javascript: { name: "JavaScript", icon: CodeLogos.javascript },
  typescript: { name: "TypeScript", icon: CodeLogos.typescript },
  git: { name: "Git", icon: CodeLogos.git },
  c: { name: "C", icon: CodeLogos.c },
  cpp: { name: "C++", icon: CodeLogos.cpp },
  react: { name: "React", icon: CodeLogos.react },
  java: { name: "Java", icon: CodeLogos.java },
} as const;

export type NoteSection = keyof typeof NoteSections;
