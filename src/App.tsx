import { useEffect, useState, useCallback } from "react";
import "./App.css";
import { SpinLoader } from "./Components/SpinLoader";
import { LeftNav } from "./Components/LeftNav";
import { RightSidebar } from "./Components/RightSidebar";
import {
  retrieveNoteHTML,
  getNoteSection,
  NoteSections,
  type NoteSection,
} from "./data/notes";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

function App() {
  const [currentNote, setCurrentNote] = useState<string | null>(null);
  const [currentNoteName, setCurrentNoteName] = useState<string>("home.md");
  const [noteHistory, setNoteHistory] = useState<string[]>(["home.md"]);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const loadDefaultNote = useCallback(() => {
    const noteHTML = retrieveNoteHTML("home.md");
    setCurrentNote(noteHTML);
    setCurrentNoteName("home.md");
    setNoteHistory(["home.md"]);
    setCurrentSection("home");
    updateURL("home.md", "home");
  }, []);

  // Initialize from URL parameters or default
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const noteFromUrl = urlParams.get("note");
    const sectionFromUrl = urlParams.get("section");

    if (noteFromUrl) {
      try {
        const noteHTML = retrieveNoteHTML(noteFromUrl);
        setCurrentNote(noteHTML);
        setCurrentNoteName(noteFromUrl);
        setNoteHistory([noteFromUrl]);

        // Set section from URL or detect from note
        const detectedSection = sectionFromUrl || getNoteSection(noteFromUrl);
        setCurrentSection(detectedSection);
        updateURL(noteFromUrl, detectedSection);
      } catch (error) {
        console.error("Failed to load note from URL:", noteFromUrl, error);
        // Fall back to default
        loadDefaultNote();
      }
    } else {
      loadDefaultNote();
    }
  }, [loadDefaultNote]);

  // Style Up Next sections after markdown content is rendered
  useEffect(() => {
    if (currentNote) {
      // Add a small delay to ensure DOM is updated after markdown rendering
      const timer = setTimeout(() => {
        styleUpNextSections();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [currentNote]);

  const updateURL = (noteName: string, section: string | null) => {
    const params = new URLSearchParams();
    params.set("note", noteName);
    if (section) {
      params.set("section", section);
    }
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({}, "", newUrl);
  };

  const loadNote = (note: string) => {
    console.log("Loading note:", note);
    setCurrentNote(null);

    // Add to history if it's different from current note
    if (note !== currentNoteName) {
      setNoteHistory((prev) => [...prev, note]);
      setCurrentNoteName(note);
    }

    // Detect section and update current section
    const detectedSection = getNoteSection(note);
    setCurrentSection(detectedSection);

    // Update URL
    updateURL(note, detectedSection);

    // Close mobile menu when loading a note
    setIsMobileMenuOpen(false);

    // Small delay to show loading state
    setTimeout(() => {
      try {
        // Synchronous call - much faster!
        const noteHTML = retrieveNoteHTML(note);
        setCurrentNote(noteHTML);

        // Scroll to top when loading new note
        const mainContent = document.querySelector(".center.main");
        if (mainContent) {
          mainContent.scrollTop = 0;
        }

        // Style "Up Next" sections after a brief delay to ensure DOM is updated
        setTimeout(() => {
          styleUpNextSections();
        }, 50);
      } catch (error) {
        console.error("Error loading note:", note, error);
        setCurrentNote("# Error\n\nNote not found: " + note);
      }
    }, 100);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const styleUpNextSections = () => {
    // Find all h3 and h4 elements that contain "Up Next" text
    const headers = document.querySelectorAll(
      ".markdown-content h3, .markdown-content h4"
    );

    headers.forEach((header) => {
      if (header.textContent && header.textContent.includes("Up Next")) {
        header.classList.add("up-next-section");
      }
    });
  };

  const goBack = () => {
    if (noteHistory.length > 1) {
      const newHistory = [...noteHistory];
      newHistory.pop(); // Remove current note
      const previousNote = newHistory[newHistory.length - 1];
      setNoteHistory(newHistory);
      setCurrentNoteName(previousNote);

      try {
        const noteHTML = retrieveNoteHTML(previousNote);
        setCurrentNote(noteHTML);

        // Scroll to top
        const mainContent = document.querySelector(".center.main");
        if (mainContent) {
          mainContent.scrollTop = 0;
        }
      } catch (error) {
        console.error("Error loading previous note:", previousNote, error);
      }
    }
  }; // Helper function to normalize filename
  const normalizeFilename = (filename: string): string => {
    // Handle common filename variations
    const normalizations: Record<string, string> = {
      "getting-started.md": "get-started.md",
      "basics.md": "sql-index.md", // Assuming basics refers to the index
    };

    return normalizations[filename] || filename;
  };

  // Custom link component for internal navigation
  const CustomLink = ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const handleClick = (e: React.MouseEvent) => {
      // Check if it's an internal markdown file link
      if (href && href.endsWith(".md")) {
        e.preventDefault();

        // Extract filename from various path formats
        let filename = href;

        // Handle relative paths like "../html/html-two.md" or "./file.md"
        if (href.includes("/")) {
          filename = href.split("/").pop() || href;
        }

        const normalizedFilename = normalizeFilename(filename);
        console.log(
          "Internal link clicked:",
          href,
          "-> extracted filename:",
          filename,
          "-> normalized:",
          normalizedFilename
        );

        try {
          loadNote(normalizedFilename);
        } catch (error) {
          console.error(`Failed to load note: ${normalizedFilename}`, error);
          // Fallback: try the original extracted filename
          try {
            loadNote(filename);
          } catch (fallbackError) {
            console.error(
              `Failed to load note with filename: ${filename}`,
              fallbackError
            );
            alert(`Note not found: ${filename}`);
          }
        }
      }
      // For external links, let them work normally
    };

    return (
      <a href={href} onClick={handleClick} className="markdown-link" {...props}>
        {children}
      </a>
    );
  };

  // Get current section info for dynamic header
  const sectionInfo =
    currentSection && currentSection in NoteSections
      ? NoteSections[currentSection as NoteSection]
      : null;

  const headerTitle =
    currentSection === "home"
      ? "📚 Programming Notes Hub"
      : sectionInfo
      ? `${sectionInfo.icon} ${sectionInfo.name} Notes`
      : "📚 Programming Notes";

  return (
    <>
      <header>
        <button
          className="hamburger-menu"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1>{headerTitle}</h1>
      </header>
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "var(--header-height)",
        }}
      >
        {/* Desktop Navigation */}
        <LeftNav setCurrentNote={loadNote} currentSection={currentSection} />

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-overlay" onClick={closeMobileMenu}>
            <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-menu-header">
                <h2>Navigation</h2>
                <button
                  className="close-mobile-menu"
                  onClick={closeMobileMenu}
                  aria-label="Close navigation menu"
                >
                  ✕
                </button>
              </div>
              <LeftNav
                setCurrentNote={loadNote}
                currentSection={currentSection}
                isMobile={true}
              />
            </div>
          </div>
        )}

        <div className="center main">
          {/* Navigation breadcrumb and back button */}
          <div className="navigation-bar">
            {noteHistory.length > 1 && (
              <button onClick={goBack} className="back-button">
                ← Back
              </button>
            )}
            <span className="current-note">{currentNoteName}</span>
          </div>

          {currentNote === null && <SpinLoader />}
          {currentNote !== null && (
            <div className="markdown-content">
              <Markdown
                remarkPlugins={[remarkGfm, remarkBreaks]}
                rehypePlugins={[rehypeHighlight, rehypeRaw]}
                components={{
                  h1: ({ children, ...props }) => {
                    const text =
                      typeof children === "string"
                        ? children
                        : children?.toString() || "";
                    const id = text
                      .toLowerCase()
                      .replace(/[^\w\s-]/g, "")
                      .replace(/\s+/g, "-");
                    return (
                      <h1 id={id} {...props}>
                        {children}
                      </h1>
                    );
                  },
                  h2: ({ children, ...props }) => {
                    const text =
                      typeof children === "string"
                        ? children
                        : children?.toString() || "";
                    const id = text
                      .toLowerCase()
                      .replace(/[^\w\s-]/g, "")
                      .replace(/\s+/g, "-");
                    return (
                      <h2 id={id} {...props}>
                        {children}
                      </h2>
                    );
                  },
                  h3: ({ children, ...props }) => {
                    const text =
                      typeof children === "string"
                        ? children
                        : children?.toString() || "";
                    const id = text
                      .toLowerCase()
                      .replace(/[^\w\s-]/g, "")
                      .replace(/\s+/g, "-");
                    return (
                      <h3 id={id} {...props}>
                        {children}
                      </h3>
                    );
                  },
                  h4: ({ children, ...props }) => {
                    const text =
                      typeof children === "string"
                        ? children
                        : children?.toString() || "";
                    const id = text
                      .toLowerCase()
                      .replace(/[^\w\s-]/g, "")
                      .replace(/\s+/g, "-");
                    return (
                      <h4 id={id} {...props}>
                        {children}
                      </h4>
                    );
                  },
                  h5: ({ children, ...props }) => {
                    const text =
                      typeof children === "string"
                        ? children
                        : children?.toString() || "";
                    const id = text
                      .toLowerCase()
                      .replace(/[^\w\s-]/g, "")
                      .replace(/\s+/g, "-");
                    return (
                      <h5 id={id} {...props}>
                        {children}
                      </h5>
                    );
                  },
                  h6: ({ children, ...props }) => {
                    const text =
                      typeof children === "string"
                        ? children
                        : children?.toString() || "";
                    const id = text
                      .toLowerCase()
                      .replace(/[^\w\s-]/g, "")
                      .replace(/\s+/g, "-");
                    return (
                      <h6 id={id} {...props}>
                        {children}
                      </h6>
                    );
                  },
                  table: ({ children, ...props }) => (
                    <table className="markdown-table" {...props}>
                      {children}
                    </table>
                  ),
                  th: ({ children, ...props }) => (
                    <th className="markdown-th" {...props}>
                      {children}
                    </th>
                  ),
                  td: ({ children, ...props }) => (
                    <td className="markdown-td" {...props}>
                      {children}
                    </td>
                  ),
                  img: ({ src, alt, ...props }) => (
                    <img
                      src={src}
                      alt={alt}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        margin: "15px 0",
                        display: "block",
                      }}
                      {...props}
                    />
                  ),
                  a: CustomLink,
                }}
              >
                {currentNote}
              </Markdown>
            </div>
          )}
        </div>
        <div className="right-nav">
          <RightSidebar
            currentNote={currentNote}
            currentNoteName={currentNoteName}
          />
        </div>
      </div>
    </>
  );
}

export default App;
