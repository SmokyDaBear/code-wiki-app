// Define note sections and their display names
export const NoteSections = {
  sql: { name: "SQL", icon: "🗃️" },
  html: { name: "HTML", icon: "🌐" },
  css: { name: "CSS", icon: "🎨" },
  javascript: { name: "JavaScript", icon: "⚡" },
  typescript: { name: "TypeScript", icon: "📘" },
  git: { name: "Git", icon: "🔧" },
  c: { name: "C", icon: "💻" },
  cpp: { name: "C++", icon: "💻" },
} as const;

export type NoteSection = keyof typeof NoteSections;
