import { useState, useEffect } from "react";
import { leftLinks } from "../data/data";
import { NoteSections, type NoteSection } from "../data/sectionsIndex";
import { SearchBar } from "./SearchBar";
import "../styles/left-nav.css";

export function LeftNav({
  setCurrentNote,
  currentSection,
  currentNoteName,
  onSearch,
  onClearSearch,
  isMobile,
  rightSidebarContent,
}: {
  setCurrentNote: (note: string) => void;
  currentSection: string | null;
  currentNoteName?: string;
  onSearch?: (query: string) => void;
  onClearSearch?: () => void;
  isMobile?: boolean;
  rightSidebarContent?: React.ReactNode;
}) {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileView, setMobileView] = useState<"chapters" | "page">("chapters");

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

  const handleSearch = (query: string) => {
    onSearch?.(query);
  };

  const handleClearSearch = () => {
    onClearSearch?.();
  };

  return (
    <div className="left-nav">
      {isMobile && rightSidebarContent && (
        <div className="mobile-nav-toggle">
          <button
            className={`mobile-nav-btn ${
              mobileView === "chapters" ? "active" : ""
            }`}
            onClick={() => setMobileView("chapters")}
          >
            All Chapters
          </button>
          <button
            className={`mobile-nav-btn ${
              mobileView === "page" ? "active" : ""
            }`}
            onClick={() => setMobileView("page")}
          >
            On this page
          </button>
        </div>
      )}

      {(!isMobile || mobileView === "chapters") && (
        <>
          <SearchBar
            onSearch={handleSearch}
            onClear={handleClearSearch}
            placeholder="Search all notes..."
          />

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
                    <span className="section-arrow">
                      {isActive ? "▼" : "▶"}
                    </span>
                    {link.icon &&
                    typeof link.icon === "string" &&
                    /\.(png|jpg|jpeg|svg)$/i.test(link.icon) ? (
                      <img
                        src={link.icon}
                        alt={`${link.text} icon`}
                        className="section-icon-img"
                      />
                    ) : link.icon ? (
                      <span className="emoji-icon">{link.icon}</span>
                    ) : null}
                    <span>{link.text}</span>
                  </div>
                  <div
                    className={`dropdown-children ${
                      isActive ? "expanded" : "collapsed"
                    }`}
                  >
                    {link.children.map((child, cIndex) => (
                      <p
                        className={`child-link ${
                          currentNoteName === child.href ? "active" : ""
                        }`}
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
                  className={`parent-link ${
                    currentNoteName === link.href ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => link.href && setCurrentNote(link.href)}
                >
                  {link.icon &&
                  typeof link.icon === "string" &&
                  /\.(png|jpg|jpeg|svg)$/i.test(link.icon) ? (
                    <img
                      src={link.icon}
                      alt={`${link.text} icon`}
                      className="section-icon-img"
                    />
                  ) : link.icon ? (
                    <span className="emoji-icon">{link.icon}</span>
                  ) : null}
                  <span>{link.text}</span>
                </div>
              );
            }
          })}
        </>
      )}

      {isMobile && mobileView === "page" && rightSidebarContent && (
        <div className="mobile-page-overview">{rightSidebarContent}</div>
      )}
    </div>
  );
}
