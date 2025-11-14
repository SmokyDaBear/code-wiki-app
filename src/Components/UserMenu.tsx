import { useState, useRef, useEffect } from "react";
import type { UserPreferences } from "../utils/userPreferences";
import "../styles/modals.css";

interface UserMenuProps {
  username?: string;
  preferences: UserPreferences;
  onThemeChange: (theme: "system" | "light" | "dark") => void;
  onClearData: () => void;
  onShowHistory: () => void;
}

export function UserMenu({
  username,
  preferences,
  onThemeChange,
  onClearData,
  onShowHistory,
}: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClearData = () => {
    setShowClearConfirm(true);
    setIsOpen(false);
  };

  const confirmClearData = () => {
    onClearData();
    setShowClearConfirm(false);
  };

  const getThemeIcon = (theme: string) => {
    switch (theme) {
      case "light":
        return "☀️";
      case "dark":
        return "🌙";
      case "system":
        return "🖥️";
      default:
        return "🖥️";
    }
  };

  return (
    <>
      <div className="user-menu" ref={menuRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="user-menu-trigger"
          aria-label="User menu"
        >
          <div className="user-avatar">
            {username ? username.charAt(0).toUpperCase() : "👤"}
          </div>
          <span className="user-menu-arrow">{isOpen ? "▴" : "▾"}</span>
        </button>

        {isOpen && (
          <div className="user-menu-dropdown">
            {username && (
              <div className="user-menu-header">
                <div className="user-greeting">
                  Welcome back, <strong>{username}</strong>!
                </div>
              </div>
            )}

            <div className="user-menu-section">
              <div className="user-menu-label">Theme</div>
              <div className="theme-selector">
                {(["system", "light", "dark"] as const).map((theme) => (
                  <button
                    key={theme}
                    onClick={() => {
                      onThemeChange(theme);
                      setIsOpen(false);
                    }}
                    className={`theme-selector-btn ${
                      preferences.theme === theme ? "active" : ""
                    }`}
                  >
                    <span className="theme-selector-icon">
                      {getThemeIcon(theme)}
                    </span>
                    <span className="theme-selector-name">
                      {theme.charAt(0).toUpperCase() + theme.slice(1)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="user-menu-section">
              <button
                onClick={() => {
                  onShowHistory();
                  setIsOpen(false);
                }}
                className="user-menu-item"
              >
                <span className="user-menu-icon">📚</span>
                Reading History
                {preferences.visitedNotes.length > 0 && (
                  <span className="history-count">
                    {preferences.visitedNotes.length}
                  </span>
                )}
              </button>
            </div>

            <div className="user-menu-section user-menu-danger">
              <button
                onClick={handleClearData}
                className="user-menu-item danger"
              >
                <span className="user-menu-icon">🗑️</span>
                Clear All Data
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Clear Data Confirmation Modal */}
      {showClearConfirm && (
        <div className="confirm-modal-overlay">
          <div className="confirm-modal">
            <div className="confirm-modal-header">
              <h3>⚠️ Clear All Data</h3>
            </div>

            <div className="confirm-modal-content">
              <p>
                This will permanently delete all your saved preferences, reading
                history, and personal settings.
              </p>
              <p className="confirm-warning">
                <strong>
                  Once you delete your progress, this cannot be undone!
                </strong>
              </p>
            </div>

            <div className="confirm-modal-actions">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button onClick={confirmClearData} className="btn-danger">
                Yes, Delete Everything
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
