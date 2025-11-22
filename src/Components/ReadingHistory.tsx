import type { UserPreferences } from "../utils/userPreferences";
import { getCleanTitle, getNoteSection } from "../data/notes";
import { NoteSections } from "../data/sectionsIndex";
import "../styles/modals.css";

interface ReadingHistoryProps {
  isOpen: boolean;
  preferences: UserPreferences;
  onClose: () => void;
  onSelectNote: (filename: string) => void;
}

export function ReadingHistory({
  isOpen,
  preferences,
  onClose,
  onSelectNote,
}: ReadingHistoryProps) {
  if (!isOpen) return null;

  const handleSelectNote = (filename: string) => {
    onSelectNote(filename);
    onClose();
  };

  const getSectionInfo = (filename: string) => {
    const section = getNoteSection(filename);
    if (!section) return { name: "General", icon: "📄" };

    if (filename === "home.md") {
      return { name: "Home", icon: "🏠" };
    }

    return NoteSections[section] || { name: section, icon: "📄" };
  };

  return (
    <div className="history-modal-overlay" onClick={onClose}>
      <div className="history-modal" onClick={(e) => e.stopPropagation()}>
        <div className="history-modal-header">
          <h3>📚 Reading History</h3>
          <button
            onClick={onClose}
            className="history-modal-close"
            aria-label="Close history"
          >
            ✕
          </button>
        </div>

        <div className="history-modal-content">
          {preferences.visitedNotes.length === 0 ? (
            <div className="history-empty">
              <div className="history-empty-icon">📖</div>
              <div className="history-empty-title">No reading history yet</div>
              <div className="history-empty-desc">
                Start exploring the notes to build your reading history!
              </div>
            </div>
          ) : (
            <>
              <div className="history-info">
                You've visited {preferences.visitedNotes.length}
                {preferences.visitedNotes.length === 1
                  ? " note"
                  : " notes"}{" "}
                recently
              </div>

              <div className="history-list">
                {preferences.visitedNotes.map((filename, index) => {
                  const sectionInfo = getSectionInfo(filename);
                  const title = getCleanTitle(filename);

                  return (
                    <div
                      key={`${filename}-${index}`}
                      className="history-item"
                      onClick={() => handleSelectNote(filename)}
                    >
                      <div className="history-item-main">
                        <div className="history-item-header">
                          <span className="history-item-icon">
                            {typeof sectionInfo.icon === "string" && /\.(png|jpg|jpeg|svg)$/i.test(sectionInfo.icon) ? (
                              <img
                                src={sectionInfo.icon}
                                alt={`${sectionInfo.name} icon`}
                                className="section-icon-img"
                              />
                            ) : (
                              sectionInfo.icon
                            )}
                          </span>
                          <span className="history-item-title">{title}</span>
                        </div>
                        <div className="history-item-meta">
                          <span className="history-item-section">
                            {sectionInfo.name}
                          </span>
                          <span className="history-item-position">
                            #{index + 1}
                          </span>
                        </div>
                      </div>
                      <div className="history-item-arrow">→</div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
