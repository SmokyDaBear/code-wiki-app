// Vite's glob import - automatically imports all .md files at build time from all sections
const notesModules = import.meta.glob("../notes/**/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

// Create maps for each section
const sectionNotesMap: Record<string, Record<string, string>> = {};
const allNotesMap: Record<string, { content: string; section: string }> = {};

// Process all notes and organize by section
Object.entries(notesModules).forEach(([path, content]) => {
  const pathParts = path.split("/");
  const filename = pathParts[pathParts.length - 1] || "";

  // Handle home page (directly in notes folder)
  if (pathParts.length === 3 && filename === "home.md") {
    allNotesMap[filename] = { content, section: "home" };
    return;
  }

  // Handle section files (in subfolders)
  if (pathParts.length > 3) {
    const section = pathParts[pathParts.length - 2]; // Get folder name (sql, html, css, etc.)

    // Initialize section if it doesn't exist
    if (!sectionNotesMap[section]) {
      sectionNotesMap[section] = {};
    }

    // Add to section-specific map
    sectionNotesMap[section][filename] = content;

    // Add to global map with section info
    allNotesMap[filename] = { content, section };
  }
});

// Define note sections and their display names
export const NoteSections = {
  sql: { name: "SQL", icon: "🗃️" },
  html: { name: "HTML", icon: "🌐" },
  css: { name: "CSS", icon: "🎨" },
  javascript: { name: "JavaScript", icon: "⚡" },
  typescript: { name: "TypeScript", icon: "📘" },
} as const;

export type NoteSection = keyof typeof NoteSections;

// Legacy Notes object for SQL (for backward compatibility)
export const Notes = {
  home: "sql-index.md",
  getStarted: "get-started.md",
  settingUp: "setting-up.md",
  tables: "tables.md",
  advancedManipulatingData: "advanced-manipulating-data.md",
  constraints: "constraints.md",
  dataTypes: "data-types.md",
  basicManipulatingData: "manipulating-data.md",
  dataStructures: "dataStructures.md",
  introToData: "introToData.md",
  manipulatingStrings: "manipulatingStrings.md",
  workingWithNumbers: "workingWithNumbers.md",
};

// Get all available notes
export const getAllNotes = (): string[] => {
  return Object.keys(allNotesMap);
};

// Utility function to remove number prefix from filename for display
export const getDisplayName = (filename: string): string => {
  return filename.replace(/^\d{2}-/, "");
};

// Utility function to get clean title from filename
export const getCleanTitle = (filename: string): string => {
  return getDisplayName(filename)
    .replace(".md", "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
};

// Get notes by section (sorted by number prefix)
export const getNotesBySection = (section: NoteSection): string[] => {
  const notes = Object.keys(sectionNotesMap[section] || {});
  // Sort by number prefix, then alphabetically
  return notes.sort((a, b) => {
    const aNum = parseInt(a.match(/^\d+/)?.[0] || "999");
    const bNum = parseInt(b.match(/^\d+/)?.[0] || "999");
    if (aNum !== bNum) return aNum - bNum;
    return a.localeCompare(b);
  });
};

// Get all sections that have notes
export const getAvailableSections = (): NoteSection[] => {
  return Object.keys(sectionNotesMap) as NoteSection[];
};

// Get section for a specific note
export const getNoteSection = (filename: string): NoteSection | null => {
  const noteInfo = allNotesMap[filename];
  return noteInfo ? (noteInfo.section as NoteSection) : null;
};

// Get the next lesson in sequence based on number prefix
export const getNextLesson = (
  currentFilename: string
): { filename: string; title: string } | null => {
  const section = getNoteSection(currentFilename);
  if (!section) return null;

  const sectionNotes = getNotesBySection(section);
  const currentIndex = sectionNotes.indexOf(currentFilename);

  if (currentIndex === -1 || currentIndex >= sectionNotes.length - 1) {
    return null; // Current note not found or it's the last lesson
  }

  const nextFilename = sectionNotes[currentIndex + 1];
  const nextTitle = getCleanTitle(nextFilename);

  return {
    filename: nextFilename,
    title: nextTitle,
  };
};

// Synchronous retrieval - no async/await needed!
export const retrieveNoteHTML = (noteFilename: string): string => {
  // Handle both old and new path formats
  const filename = noteFilename
    .replace(/^\/notes\/[^/]+\//, "")
    .replace(/^\/notes\//, "");

  const noteInfo = allNotesMap[filename];
  if (!noteInfo) {
    const available = Object.keys(allNotesMap).join(", ");
    throw new Error(`Note not found: ${filename}. Available: ${available}`);
  }

  console.log("Retrieved note:", filename, "from section:", noteInfo.section);
  return noteInfo.content;
};
