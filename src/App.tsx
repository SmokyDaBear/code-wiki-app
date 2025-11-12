import { useEffect, useState, useCallback } from "react";
import "./App.css";
import { SpinLoader } from "./Components/SpinLoader";
import { LeftNav } from "./Components/LeftNav";
import { RightSidebar } from "./Components/RightSidebar";
import { MarkdownRenderer } from "./Components/MarkdownRenderer";
import { NextLessonButton } from "./Components/NextLessonButton";
import {
  retrieveNoteHTML,
  getNoteSection,
  NoteSections,
  type NoteSection,
  getDisplayName,
} from "./data/notes";

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
            <span className="current-note">
              {getDisplayName(currentNoteName)}
            </span>
          </div>

          {currentNote === null && <SpinLoader />}
          {currentNote !== null && (
            <div className="markdown-content">
              <MarkdownRenderer
                content={currentNote}
                styleUpNextSections={styleUpNextSections}
                loadNote={loadNote}
              />
              <NextLessonButton
                currentFilename={currentNoteName}
                onLoadNote={loadNote}
              />
            </div>
          )}
        </div>
        <div className="right-nav">
          <RightSidebar
            currentNote={currentNote}
            currentNoteName={currentNoteName}
            onLoadNote={loadNote}
          />
        </div>
      </div>
    </>
  );
}

export default App;
