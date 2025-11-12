import { useState, useEffect } from "react";
import { leftLinks } from "../data/data";
import { NoteSections, type NoteSection } from "../data/notes";

export function LeftNav({
  setCurrentNote,
  currentSection,
}: {
  setCurrentNote: (note: string) => void;
  currentSection: string | null;
  isMobile?: boolean;
}) {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  // Update active dropdown based on current section
  useEffect(() => {
    if (currentSection) {
      // Find which dropdown index corresponds to the current section
      const sectionIndex = leftLinks.findIndex((link) => {
        if (link.text && currentSection in NoteSections) {
          const sectionInfo = NoteSections[currentSection as NoteSection];
          return link.text.includes(sectionInfo.name);
        }
        return false;
      });

      if (sectionIndex !== -1) {
        setActiveDropdown(sectionIndex);
      }
    }
  }, [currentSection]);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="left-nav">
      {leftLinks.map((link, index) => {
        if (link.children) {
          const isActive = activeDropdown === index;
          return (
            <div
              className={`dropdown-parent ${isActive ? "active" : ""}`}
              key={index}
            >
              <div
                className="dropdown-title"
                onClick={() => toggleDropdown(index)}
              >
                <span className="section-arrow">{isActive ? "▼" : "▶"}</span>
                {link.text}
              </div>
              <div
                className={`dropdown-children ${
                  isActive ? "expanded" : "collapsed"
                }`}
              >
                {link.children.map((child, cIndex) => (
                  <p
                    className="child-link"
                    key={cIndex}
                    onClick={() => child.href && setCurrentNote(child.href)}
                  >
                    {child.text}
                  </p>
                ))}
              </div>
            </div>
          );
        } else {
          return (
            <div
              className="parent-link"
              key={index}
              onClick={() => link.href && setCurrentNote(link.href)}
            >
              {link.text}
            </div>
          );
        }
      })}
    </div>
  );
}
