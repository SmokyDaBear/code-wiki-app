import { useState, useEffect } from "react";
import { leftLinks } from "../data/data";
import { NoteSections, type NoteSection } from "../data/sectionsIndex";
import { SearchBar } from "./SearchBar";
import { getAllNotes, type NoteMetadata } from "../utils/notesDb";
import "../styles/left-nav.css";

export function LeftNav({
  setCurrentNote,
  currentSection,
  currentNoteName,
  onSearch,
  onClearSearch,
  rightSidebarContent,
}: {
  setCurrentNote: (note: string) => void;
  currentSection: string | null;
  currentNoteName?: string;
  onSearch?: (query: string) => void;
  onClearSearch?: () => void;
  rightSidebarContent?: React.ReactNode;
}) {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [selectedView, setselectedView] = useState<"chapters" | "page">(
    "chapters"
  );
  const [customNoteSections, setCustomNoteSections] = useState<
    Record<string, NoteMetadata[]>
  >({});

  // Load custom notes
  useEffect(() => {
    const loadCustomNotes = async () => {
      try {
        const notes = await getAllNotes();

        // Group notes by section
        const grouped: Record<string, NoteMetadata[]> = {};
        notes.forEach((note) => {
          if (!grouped[note.section]) {
            grouped[note.section] = [];
          }
          grouped[note.section].push(note);
        });
        setCustomNoteSections(grouped);
      } catch (error) {
        console.error("Failed to load custom notes:", error);
      }
    };

    loadCustomNotes();
  }, []);

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
      <div className="mobile-nav-toggle">
        <button
          className={`mobile-nav-btn ${selectedView === "chapters" ? "active" : ""
            }`}
          onClick={() => setselectedView("chapters")}
        >
          All Chapters
        </button>
        <button
          className={`mobile-nav-btn ${selectedView === "page" ? "active" : ""
            }`}
          onClick={() => setselectedView("page")}
        >
          On this page
        </button>
      </div>

      {selectedView === "chapters" && (
        <>
          <SearchBar
            onSearch={handleSearch}
            onClear={handleClearSearch}
            placeholder="Search all notes..."
          />
          <div
            className={`dropdown-parent ${activeDropdown === 0 ? "active" : ""
              }`}
          >
            <div className="dropdown-title" onClick={() => toggleDropdown(0)}>
              <span className="section-arrow">
                {activeDropdown === 0 ? "▼" : "▶"}
                <span className="emoji-icon">📒</span>
              </span>
              <span>My Notes</span>
            </div>
            <div
              className={`dropdown-children ${activeDropdown === 0 ? "expanded" : "collapsed"
                }`}
            >
              <div
                className="child-link new-note-link"
                onClick={() => setCurrentNote("new-note")}
              >
                + New Note
              </div>
              {Object.keys(customNoteSections).length > 0 && (
                <>
                  {Object.entries(customNoteSections)
                    .sort(([a], [b]) => a.localeCompare(b))
                    .map(([sectionName, notes]) => (
                      <div key={sectionName} className="note-section">
                        <div className="note-section-title">{sectionName}</div>
                        {notes.map((note) => (
                          <div
                            key={note.id}
                            className={`child-link custom-note-link ${currentNoteName === `custom:${note.id}`
                                ? "active"
                                : ""
                              }`}
                            onClick={() => setCurrentNote(`custom:${note.id}`)}
                          >
                            {note.title}
                          </div>
                        ))}
                      </div>
                    ))}
                </>
              )}
            </div>
          </div>

          {leftLinks.map((link, index) => {
            if (link.children) {
              const isActive = activeDropdown === index + 1;
              return (
                <div
                  className={`dropdown-parent ${isActive ? "active" : ""}`}
                  key={index + 1}
                >
                  <div
                    className="dropdown-title"
                    onClick={() => toggleDropdown(index + 1)}
                  >
                    <span className="section-arrow">
                      {isActive ? "▼" : "▶"}
                    </span>
                    {link.icon && (
                      <img
                        src={link.icon}
                        alt={`${link.text} icon`}
                        className="section-icon-img"
                      />
                    )}
                    {!link.icon && link.emojiIcon && (
                      <span className="emoji-icon">{link.emojiIcon}</span>
                    )}
                    {!link.icon && !link.emojiIcon && (
                      <div style={{ marginLeft: "20px" }}></div>
                    )}
                    <span>{link.text}</span>
                  </div>
                  <div
                    className={`dropdown-children ${isActive ? "expanded" : "collapsed"
                      }`}
                  >
                    {link.children.map((child, cIndex) => (
                      <p
                        className={`child-link ${currentNoteName === child.href ? "active" : ""
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
                  className={`parent-link ${currentNoteName === link.href ? "active" : ""
                    }`}
                  key={index}
                  onClick={() => link.href && setCurrentNote(link.href)}
                >
                  {link.icon && (
                    <img
                      src={link.icon}
                      alt={`${link.text} icon`}
                      className="section-icon-img"
                    />
                  )}
                  {!link.icon && link.emojiIcon && (
                    <span className="emoji-icon">{link.emojiIcon} </span>
                  )}
                  <span>{link.text}</span>
                </div>
              );
            }
          })}
        </>
      )}

      {selectedView === "page" && rightSidebarContent && (
        <div className="mobile-page-overview">{rightSidebarContent}</div>
      )}
    </div>
  );
}
