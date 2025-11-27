import { useState, useRef, useEffect, useCallback } from "react";
import "../styles/search.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onClear: () => void;
  placeholder?: string;
}

export function SearchBar({
  onSearch,
  onClear,
  placeholder = "Search all notes...",
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceTimerRef = useRef<number | null>(null);

  const triggerSearchDebounced = useCallback(
    (value: string) => {
      // Clear any pending timer
      if (debounceTimerRef.current !== null) {
        window.clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = null;
      }
      // Start a new 500ms timer
      debounceTimerRef.current = window.setTimeout(() => {
        onSearch(value);
        debounceTimerRef.current = null;
      }, 800);
    },
    [onSearch]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim()) {
      triggerSearchDebounced(value);
    } else {
      // Clear any pending search and propagate clear immediately
      if (debounceTimerRef.current !== null) {
        window.clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = null;
      }
      onClear();
    }
  };

  const handleClear = () => {
    setQuery("");
    onClear();
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClear();
    }
  };

  // Cleanup any pending debounce on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current !== null) {
        window.clearTimeout(debounceTimerRef.current);
        debounceTimerRef.current = null;
      }
    };
  }, []);

  // Focus search with Ctrl/Cmd + K
  useEffect(() => {
    const handleKeyboardShortcut = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyboardShortcut);
    return () =>
      document.removeEventListener("keydown", handleKeyboardShortcut);
  }, []);

  return (
    <div className={`search-bar ${isFocused ? "focused" : ""}`}>
      <div className="search-input-container">
        <span className="search-icon">🔍</span>
        <input
          id="search-input"
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="search-input"
        />
        {query && (
          <button
            onClick={handleClear}
            className="search-clear"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}
