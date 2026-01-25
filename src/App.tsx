import { useEffect, useState, useCallback } from "react";
import "./styles/header.css";
import "./styles/markdown.css";
import "./styles/responsive.css";
import { SpinLoader } from "./Components/SpinLoader";
import { LeftNav } from "./Components/LeftNav";
import { MarkdownRenderer } from "./Components/MarkdownRenderer";
import { NextLessonButton } from "./Components/NextLessonButton/NextLessonButton";
import {
  retrieveNoteHTML,
  getNoteSection,
  getDisplayName,
  searchNotes,
  type SearchResult,
} from "./data/notes";
import { NoteSections, type NoteSection } from "./data/sectionsIndex";
import { SearchResults } from "./Components/SearchResults";
import { WelcomeModal } from "./Components/WelcomeModal";
import { UserMenu } from "./Components/UserMenu";
import { ReadingHistory } from "./Components/ReadingHistory";
import {
  getUserPreferences,
  saveUserPreferences,
  addVisitedNote,
  clearAllUserData,
  setStoragePermission,
  hasStoragePermission,
  isFirstVisit,
  markAsVisited,
  applyTheme,
  watchSystemTheme,
  type UserPreferences,
} from "./utils/userPreferences";
import { applyCustomTheme } from "./utils/customTheme";
import { TableOfContents } from "./Components/TableOfContents";
import { NoteBuilder } from "./Components/CustomNotes/NoteBuilder";
import { CustomNoteViewer } from "./Components/CustomNotes/CustomNoteViewer";
import { searchCustomNotes } from "./utils/notesDb";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [currentNote, setCurrentNote] = useState<string | null>(null);
  const [currentNoteName, setCurrentNoteName] = useState<string>("home.md");
  const [noteHistory, setNoteHistory] = useState<string[]>(["home.md"]);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [menuOpen, setmenuOpen] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [userPreferences, setUserPreferences] = useState<UserPreferences>(() =>
    getUserPreferences()
  );
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  const loadDefaultNote = useCallback(() => {
    const noteHTML = retrieveNoteHTML("home.md");
    setCurrentNote(noteHTML);
    setCurrentNoteName("home.md");
    setNoteHistory(["home.md"]);
    setCurrentSection("home");
    updateURL("home.md", "home");
  }, []);

  // Initialize user preferences and check for first visit
  useEffect(() => {
    // Check if this is the first visit and we don't have storage permission
    if (isFirstVisit() && !hasStoragePermission()) {
      setShowWelcomeModal(true);
      markAsVisited();
    }

    // Apply saved theme
    applyTheme(userPreferences.theme);
    if (userPreferences.hideScrollbar) {
      document.body.classList.add("hide-scrollbar");
    } else {
      document.body.classList.remove("hide-scrollbar");
    }

    // Watch for system theme changes if user selected system theme
    if (userPreferences.theme === "system") {
      const cleanup = watchSystemTheme(() => {
        if (userPreferences.theme === "system") {
          applyTheme("system");
        }
      });
      return cleanup;
    }
  }, [userPreferences.theme, userPreferences.hideScrollbar]);

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
        toast.error(`Failed to load note from URL: ${noteFromUrl} \n${error}`);
        // Fall back to default
        loadDefaultNote();
      }
    } else if (userPreferences.visitedNotes.length > 0) {
      const lastVisitedNote =
        userPreferences.visitedNotes[userPreferences.visitedNotes.length - 1];
      try {
        const noteHTML = retrieveNoteHTML(lastVisitedNote);
        setCurrentNote(noteHTML);
        setCurrentNoteName(lastVisitedNote);
        setNoteHistory([lastVisitedNote]);

        const detectedSection = getNoteSection(lastVisitedNote);
        setCurrentSection(detectedSection);
        updateURL(lastVisitedNote, detectedSection);
      } catch (error) {
        toast.error(
          `Failed to load last visited note:
              ${lastVisitedNote}\n
              ${error}`
        );
        loadDefaultNote();
      }
    } else {
      loadDefaultNote();
    }
  }, [loadDefaultNote, userPreferences.visitedNotes]);

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
  useEffect(() => {
    const customTheme = localStorage.getItem("customTheme");
    const hasCustomTheme = customTheme !== null;
    if (hasCustomTheme) {
      const customColor = JSON.parse(customTheme) as string[];
      applyCustomTheme(customColor);
    }
  });

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
    setCurrentNote(null);

    // Add to history if it's different from current note
    if (note !== currentNoteName) {
      setNoteHistory((prev) => [...prev, note]);
      setCurrentNoteName(note);
    }
    if (note === "new-note") {
      setCurrentNote(note);
      toast.success("Creating a new custom note");
      return;
    }

    // Handle custom notes
    if (note.startsWith("custom:")) {
      setCurrentNote(note);
      setCurrentSection("custom");
      updateURL(note, "custom");
      setmenuOpen(window.matchMedia("(min-width: 768px)").matches);
      setShowSearchResults(false);
      return;
    }

    // Add to visited notes for reading history
    addVisitedNote(note);

    // Detect section and update current section
    const detectedSection = getNoteSection(note);
    setCurrentSection(detectedSection);

    // Update URL
    updateURL(note, detectedSection);

    // Close mobile menu and search results when loading a note
    setmenuOpen(window.matchMedia("(min-width: 768px)").matches);
    setShowSearchResults(false);
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
        toast.error(`Error loading note: ${note} \n${error}`);
        setCurrentNote("# Error\n\nNote not found: " + note);
      }
    }, 100);
  };

  const toggleMobileMenu = () => {
    setmenuOpen(!menuOpen);
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
        toast.error(`Error loading previous note: ${previousNote} \n${error}`);
      }
    }
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = searchNotes(query);

      // Also search custom notes
      const customResults = await searchCustomNotes(query);

      // Convert custom notes to SearchResult format
      const customSearchResults: SearchResult[] = customResults.map((note) => ({
        filename: `custom:${note.id}`,
        title: note.title,
        section: note.section,
        sectionIcon: null,
        sectionEmojiIcon: "📒",
        matches: [
          {
            context: note.preview,
            lineNumber: 0,
            highlightedText: note.preview,
          },
        ],
        totalMatches: 1,
      }));

      setSearchResults([...results, ...customSearchResults]);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setShowSearchResults(false);
  };

  const handleSelectSearchResult = (filename: string) => {
    loadNote(filename);
    setShowSearchResults(false);
  };

  const handleWelcomeComplete = (preferences: {
    allowsStorage: boolean;
    username?: string;
    theme: "system" | "light" | "dark";
  }) => {
    setStoragePermission(preferences.allowsStorage);

    if (preferences.allowsStorage) {
      const newPrefs: UserPreferences = {
        ...userPreferences,
        allowsStorage: true,
        username: preferences.username,
        theme: preferences.theme,
        firstVisit: false,
      };

      setUserPreferences(newPrefs);
      saveUserPreferences(newPrefs);
    }

    applyTheme(preferences.theme);
    setShowWelcomeModal(false);
  };

  const handleThemeChange = (theme: "system" | "light" | "dark") => {
    const newPrefs = { ...userPreferences, theme };
    setUserPreferences(newPrefs);
    saveUserPreferences({ theme });
    applyTheme(theme);
  };

  const handleClearAllData = () => {
    clearAllUserData();
    const defaultPrefs: UserPreferences = {
      theme: "system",
      allowsStorage: false,
      visitedNotes: [],
      firstVisit: true,
    };
    setUserPreferences(defaultPrefs);
    applyTheme("system");
    // Optionally reload the page to reset everything
    window.location.reload();
  };

  const handleShowHistory = () => {
    setShowHistoryModal(true);
  };

  // Get current section info for dynamic header
  const sectionInfo =
    currentSection && currentSection in NoteSections
      ? NoteSections[currentSection as NoteSection]
      : null;

  const headerTitle: React.ReactNode =
    currentSection === "home" ? (
      "Verdant Webworks Learning Hub"
    ) : sectionInfo ? (
      <span className="header-title-with-icon">
        {"icon" in sectionInfo && (
          <img
            src={sectionInfo.icon}
            alt={`${sectionInfo.name} icon`}
            className="section-icon-img"
          />
        )}
        {sectionInfo && !("icon" in sectionInfo) && "emojiIcon" in sectionInfo && (
          <span>{sectionInfo.emojiIcon}</span>
        )}{" "}
        {sectionInfo.name}
      </span>
    ) : (
      "Learning Hub"
    );
  const displayName = getDisplayName(currentNoteName);

  return (
    <>
      <Toaster position="top-center" />
      <header>
        <div className="header-container">
          <button
            className={"hamburger " + (menuOpen ? " active" : "")}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <h1>{headerTitle}</h1>
          <UserMenu
            username={userPreferences.username}
            preferences={userPreferences}
            onThemeChange={handleThemeChange}
            onClearData={handleClearAllData}
            onShowHistory={handleShowHistory}
          />
        </div>
      </header>
      <div className="body-container">
        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <LeftNav
            setCurrentNote={loadNote}
            currentSection={currentSection}
            currentNoteName={currentNoteName}
            onSearch={handleSearch}
            onClearSearch={handleClearSearch}
            rightSidebarContent={
              <TableOfContents
                currentNote={currentNote}
                currentNoteName={currentNoteName}
                onLoadNote={loadNote}
              />
            }
          />
        )}

        <div className={"center main" + (menuOpen ? " toc-open" : "")}>
          <div className="back-bar">
            {noteHistory.length > 1 && (
              <button onClick={goBack} className="back-button">
                ← Back
              </button>
            )}
            <span className="current-note">{displayName}</span>
          </div>
          {currentNote === null && <SpinLoader />}
          {currentNote !== null &&
            currentNote !== "new-note" &&
            !currentNote.startsWith("custom:") && (
              <div className="markdown-content">
                <MarkdownRenderer
                  content={currentNote}
                  displayName={displayName}
                  languageDirectory={sectionInfo?.name}
                  styleUpNextSections={styleUpNextSections}
                  loadNote={loadNote}
                />
                <NextLessonButton
                  currentFilename={currentNoteName}
                  onLoadNote={loadNote}
                />
              </div>
            )}
          {currentNote === "new-note" && <NoteBuilder />}
          {currentNote?.startsWith("custom:") && (
            <CustomNoteViewer noteId={currentNote.replace("custom:", "")} />
          )}
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <span>© 2025 Verdant Webworks</span>
          <span className="footer-separator">|</span>
          <a
            href="https://verdant-webworks.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            verdantwebworks.vercel.app
          </a>
        </div>
      </footer>

      {/* Search Results Overlay */}
      {showSearchResults && (
        <SearchResults
          results={searchResults}
          query={searchQuery}
          onSelectNote={handleSelectSearchResult}
          onClose={() => setShowSearchResults(false)}
        />
      )}

      {/* Welcome Modal for First-Time Visitors */}
      <WelcomeModal
        isOpen={showWelcomeModal}
        onComplete={handleWelcomeComplete}
      />

      {/* Reading History Modal */}
      <ReadingHistory
        isOpen={showHistoryModal}
        preferences={userPreferences}
        onClose={() => setShowHistoryModal(false)}
        onSelectNote={loadNote}
      />
    </>
  );
}

export default App;
