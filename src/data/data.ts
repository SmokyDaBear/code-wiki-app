// All Links
import {
  Notes,
  NoteSections,
  getNotesBySection,
  getAvailableSections,
} from "./notes";

// Define types for navigation links
export type NavLink = {
  text: string;
  href?: string;
  children?: NavLink[];
};

// Generate dynamic links based on available sections and notes
export const generateSectionLinks = (): NavLink[] => {
  const availableSections = getAvailableSections();
  const sectionLinks: NavLink[] = [];

  // Add home button at the top
  sectionLinks.push({
    text: "🏠 Home",
    href: "home.md",
  });

  availableSections.forEach((section) => {
    const sectionInfo = NoteSections[section];
    const notesInSection = getNotesBySection(section);

    if (notesInSection.length > 0) {
      // Create section with its notes as children
      const children = notesInSection.map((filename) => ({
        text: formatNoteTitle(filename),
        href: filename,
      }));

      sectionLinks.push({
        text: `${sectionInfo.icon} ${sectionInfo.name}`,
        children: children,
      });
    }
  });

  return sectionLinks;
};

// Helper function to format note filenames into readable titles
const formatNoteTitle = (filename: string): string => {
  return filename
    .replace(".md", "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
};

// Legacy SQL Links (for backward compatibility)
export const allLinks = [
  { text: "Home 🏠", href: Notes.home }, //0
  { text: "SQL Constraints 📏", href: Notes.constraints }, //1
  {
    text: "Advanced Manipulating Data 🛠️",
    href: Notes.advancedManipulatingData,
  }, //2
  { text: "Data Types in SQL 📚", href: Notes.dataTypes }, //3
  { text: "Get Started 🚀", href: Notes.getStarted }, //4
  { text: "Manipulating Data 🛠️", href: Notes.basicManipulatingData }, //5
  { text: "Setting Up SQL Environment ⚙️", href: Notes.settingUp }, //6
  { text: "Tables in SQL 🗄️", href: Notes.tables }, //7
];

// Dynamic Left Navigation Links
export const leftLinks = generateSectionLinks();
