import { useEffect, useState } from "react";
import { getDisplayName, getNextLesson } from "../data/notes";
import "../styles/toc.css";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface NoteInfo {
  wordCount: number;
  readingTime: number;
  characterCount: number;
}

export function TableOfContents({
  currentNote,
  currentNoteName,
  onLoadNote,
}: {
  currentNote: string | null;
  currentNoteName: string;
  onLoadNote?: (filename: string) => void;
}) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [noteInfo, setNoteInfo] = useState<NoteInfo | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  // Generate table of contents from markdown headers
  useEffect(() => {
    if (!currentNote) {
      setTocItems([]);
      setNoteInfo(null);
      return;
    }

    // Extract headers from markdown
    const headerRegex = /^(#{1,6})\s+(.+)$/gm;
    const headers: TocItem[] = [];
    let match;

    while ((match = headerRegex.exec(currentNote)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();

      // Skip H4 headers as they're usually code examples or tips
      if (level === 4) {
        continue;
      }

      // Create a simple ID from the text
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

      headers.push({ id, text, level });
    }

    // Add Next Lesson item if available
    if (onLoadNote) {
      const nextLesson = getNextLesson(currentNoteName);
      if (nextLesson) {
        headers.push({
          id: "next-lesson",
          text: `Next: ${nextLesson.title}`,
          level: 2, // Make it prominent like an H2
        });
      }
    }

    setTocItems(headers);

    // Calculate note statistics
    const words = currentNote
      .replace(/#{1,6}\s+/g, "") // Remove markdown headers
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Replace links with text
      .replace(/[*_`]/g, "") // Remove markdown formatting
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);

    const wordCount = words.length;
    const readingTime = Math.max(1, Math.ceil(wordCount / 200)); // Average 200 words per minute
    const characterCount = currentNote.length;

    setNoteInfo({
      wordCount,
      readingTime,
      characterCount,
    });
  }, [currentNote, currentNoteName, onLoadNote]);

  // Handle TOC link clicks
  const scrollToSection = (id: string) => {
    if (id === "next-lesson" && onLoadNote) {
      // Handle next lesson navigation
      const nextLesson = getNextLesson(currentNoteName);
      if (nextLesson) {
        onLoadNote(nextLesson.filename);
      }
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(id);
    }
  };

  // Monitor scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const headers = tocItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      // Find the currently visible header
      let currentHeader = "";
      for (const header of headers) {
        if (header.element) {
          const rect = header.element.getBoundingClientRect();
          if (rect.top <= 100) {
            currentHeader = header.id;
          }
        }
      }
      setActiveSection(currentHeader);
    };

    const mainContent = document.querySelector(".center.main");
    if (mainContent) {
      mainContent.addEventListener("scroll", handleScroll);
      return () => mainContent.removeEventListener("scroll", handleScroll);
    }
  }, [tocItems]);

  if (!currentNote) {
    return (
      <div className="right-sidebar">
        <div className="sidebar-section">
          <h3>📖 Note Info</h3>
          <p className="no-note-message">
            Select a note to see its table of contents and information.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="right-sidebar">
      {/* Note Information */}
      <div className="sidebar-section">
        <h3>📊 Note Info</h3>
        <div className="note-stats">
          <div className="stat-item">
            <span className="stat-label">📄 File:</span>
            <span className="stat-value">
              {getDisplayName(currentNoteName)}
            </span>
          </div>
          {noteInfo && (
            <>
              <div className="stat-item">
                <span className="stat-label">📝 Words:</span>
                <span className="stat-value">
                  {noteInfo.wordCount.toLocaleString()}
                </span>
              </div>
              <div className="stat-item">
                <span className="stat-label">⏱️ Read time:</span>
                <span className="stat-value">{noteInfo.readingTime} min</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">🔤 Characters:</span>
                <span className="stat-value">
                  {noteInfo.characterCount.toLocaleString()}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Table of Contents */}
      {tocItems.length > 0 && (
        <div className="sidebar-section">
          <h3>📚 Table of Contents</h3>
          <nav className="toc-nav">
            {tocItems.map((item, index) => (
              <button
                key={index}
                className={`toc-item level-${item.level} ${
                  activeSection === item.id ? "active" : ""
                } ${item.id === "next-lesson" ? "next-lesson" : ""}`}
                onClick={() => scrollToSection(item.id)}
                title={item.text}
              >
                {item.id === "next-lesson" && (
                  <span className="next-lesson-icon">🚀</span>
                )}
                {item.text}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
