// All Links
import {
  getNotesBySection,
  getAvailableSections,
  getDisplayName,
} from "./notes";

import { NoteSections } from "./sectionsIndex";
// Define types for navigation links
export type NavLink = {
  text: string;
  href?: string;
  children?: NavLink[];
  icon?: string; // optional icon path (image)
  emojiIcon?: string; // optional emoji icon
};

// Generate dynamic links based on available sections and notes
export const generateSectionLinks = (): NavLink[] => {
  const availableSections = getAvailableSections();
  const sectionLinks: NavLink[] = [];

  // Add home button at the top
  sectionLinks.push({
    text: "Home",
    href: "home.md",
    emojiIcon: "🏠", // keep emoji for home (not part of NoteSections)
  });

  availableSections.forEach((section) => {
    const sectionKey = section.toLowerCase() as keyof typeof NoteSections;
    const sectionInfo = NoteSections[sectionKey];
    const notesInSection = getNotesBySection(section);

    if (notesInSection.length > 0) {
      // Create section with its notes as children
      const children = notesInSection.map((filename) => ({
        text: formatNoteTitle(filename),
        href: filename,
      }));
      let icon = null;
      // Fallback for sections not defined in NoteSections
      try {
        icon = "icon" in sectionInfo ? sectionInfo.icon : null;
      } catch {
        icon = null;
      }
      const name =
        sectionInfo?.name || section.charAt(0).toUpperCase() + section.slice(1);
      const sectionLink: NavLink = {
        text: name,
        children: children,
      };
      if (icon) {
        sectionLink.icon = icon;
      }
      if (!icon)
        try {
          sectionLink.emojiIcon =
            "emojiIcon" in sectionInfo ? sectionInfo.emojiIcon : "📄";
        } catch {
          sectionLink.emojiIcon = "📁";
        }
      sectionLinks.push(sectionLink);
    }
  });

  return sectionLinks;
};

// Helper function to format note filenames into readable titles
const formatNoteTitle = (filename: string): string => {
  return getDisplayName(filename)
    .replace(".md", "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l: string) => l.toUpperCase());
};
// Dynamic Left Navigation Links
export const leftLinks = generateSectionLinks();
