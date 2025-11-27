import type { SearchResult } from "../data/notes";
import "../styles/search.css";

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  isLoading?: boolean;
  onSelectNote: (filename: string) => void;
  onClose: () => void;
}

export function SearchResults({
  results,
  query,
  isLoading = false,
  onSelectNote,
  onClose,
}: SearchResultsProps) {
  const handleSelectNote = (filename: string) => {
    onSelectNote(filename);
    onClose();
  };

  if (!query.trim()) return null;

  return (
    <div className="search-results-overlay" onClick={onClose}>
      <div
        className="search-results-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="search-results-header">
          <h3>Search Results</h3>
          <button
            onClick={onClose}
            className="search-results-close"
            aria-label="Close search results"
          >
            ✕
          </button>
        </div>

        {isLoading ? (
          <div className="search-loading">
            <div className="search-spinner"></div>
            <span>Searching...</span>
          </div>
        ) : (
          <>
            <div className="search-results-info">
              {results.length === 0 ? (
                <span>No results found for "{query}"</span>
              ) : (
                <span>
                  Found {results.length}{" "}
                  {results.length === 1 ? "result" : "results"} for "{query}"
                </span>
              )}
            </div>

            <div className="search-results-list">
              {results.map((result, index) => (
                <div
                  key={`${result.filename}-${index}`}
                  className="search-result-card"
                  onClick={() => handleSelectNote(result.filename)}
                >
                  <div className="search-result-header">
                    <div className="search-result-title">
                      <span className="search-result-icon">
                        {result.sectionIcon && (
                          <img
                            src={result.sectionIcon}
                            alt={`${result.section} icon`}
                            className="section-icon-img"
                          />
                        )}
                        {!result.sectionIcon && result.sectionEmojiIcon && (
                          <span className="emoji-icon">
                            {result.sectionEmojiIcon}
                          </span>
                        )}
                        {!result.sectionIcon && !result.sectionEmojiIcon && (
                          <div style={{ width: "20px" }}>💻</div>
                        )}
                      </span>
                      <span className="search-result-name">{result.title}</span>
                    </div>
                    <div className="search-result-meta">
                      <span className="search-result-section">
                        {result.section}
                      </span>
                      <span className="search-result-count">
                        {result.totalMatches}{" "}
                        {result.totalMatches === 1 ? "match" : "matches"}
                      </span>
                    </div>
                  </div>

                  <div className="search-result-matches">
                    {result.matches.map((match, matchIndex) => (
                      <div key={matchIndex} className="search-result-match">
                        <div className="search-result-line-number">
                          Line {match.lineNumber}
                        </div>
                        <div
                          className="search-result-context"
                          dangerouslySetInnerHTML={{
                            __html: match.highlightedText,
                          }}
                        />
                      </div>
                    ))}
                    {result.totalMatches > result.matches.length && (
                      <div className="search-result-more">
                        +{result.totalMatches - result.matches.length} more{" "}
                        {result.totalMatches - result.matches.length === 1
                          ? "match"
                          : "matches"}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
