// User preferences and local storage utilities
export interface UserPreferences {
  username?: string;
  theme: "system" | "light" | "dark";
  allowsStorage: boolean;
  visitedNotes: string[];
  firstVisit: boolean;
}

const STORAGE_KEY = "notes-app-preferences";
const STORAGE_PERMISSION_KEY = "notes-app-storage-allowed";

// Check if user has visited before and has storage permission
export const hasStoragePermission = (): boolean => {
  try {
    return localStorage.getItem(STORAGE_PERMISSION_KEY) === "true";
  } catch {
    return false;
  }
};

export const clearVisitedNotes = (): void => {
  if (!hasStoragePermission()) {
    return;
  }

  try {
    const preferences = getUserPreferences();
    preferences.visitedNotes = [];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch {
    // Ignore if localStorage is not available
  }
};

// Check if this is user's first visit
export const isFirstVisit = (): boolean => {
  try {
    return !localStorage.getItem("notes-app-visited");
  } catch {
    return true;
  }
};

// Mark that user has visited
export const markAsVisited = (): void => {
  try {
    localStorage.setItem("notes-app-visited", "true");
  } catch {
    // Ignore if localStorage is not available
  }
};

// Set storage permission
export const setStoragePermission = (allowed: boolean): void => {
  try {
    if (allowed) {
      localStorage.setItem(STORAGE_PERMISSION_KEY, "true");
    } else {
      localStorage.removeItem(STORAGE_PERMISSION_KEY);
    }
  } catch {
    // Ignore if localStorage is not available
  }
};

// Get user preferences
export const getUserPreferences = (): UserPreferences => {
  const defaultPrefs: UserPreferences = {
    theme: "system",
    allowsStorage: false,
    visitedNotes: [],
    firstVisit: true,
  };

  if (!hasStoragePermission()) {
    return defaultPrefs;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...defaultPrefs, ...parsed };
    }
  } catch {
    // If parsing fails, return defaults
  }

  return defaultPrefs;
};

// Save user preferences
export const saveUserPreferences = (
  preferences: Partial<UserPreferences>
): void => {
  if (!hasStoragePermission()) {
    return;
  }

  try {
    const current = getUserPreferences();
    const updated = { ...current, ...preferences };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // Ignore if localStorage is not available
  }
};

// Add visited note
export const addVisitedNote = (noteName: string): void => {
  if (!hasStoragePermission()) {
    return;
  }

  const preferences = getUserPreferences();
  const visitedNotes = preferences.visitedNotes || [];

  // Remove if already exists to move to front
  const filtered = visitedNotes.filter((note) => note !== noteName);

  // Add to front, keep only last 20
  const updated = [noteName, ...filtered].slice(0, 20);

  saveUserPreferences({ visitedNotes: updated });
};

// Clear all user data
export const clearAllUserData = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_PERMISSION_KEY);
    localStorage.removeItem("notes-app-visited");
  } catch {
    // Ignore if localStorage is not available
  }
};

// Get system theme preference
export const getSystemTheme = (): "light" | "dark" => {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
};

// Apply theme to document
export const applyTheme = (theme: "system" | "light" | "dark"): void => {
  const root = document.documentElement;

  let actualTheme: "light" | "dark";
  if (theme === "system") {
    actualTheme = getSystemTheme();
  } else {
    actualTheme = theme;
  }

  root.setAttribute("data-theme", actualTheme);

  // Also set a class for CSS targeting
  root.classList.remove("theme-light", "theme-dark");
  root.classList.add(`theme-${actualTheme}`);
};

// Listen for system theme changes
export const watchSystemTheme = (
  callback: (theme: "light" | "dark") => void
): (() => void) => {
  if (typeof window === "undefined" || !window.matchMedia) {
    return () => {}; // Return empty cleanup function
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handler = (e: MediaQueryListEvent) => {
    callback(e.matches ? "dark" : "light");
  };

  mediaQuery.addEventListener("change", handler);

  // Return cleanup function
  return () => mediaQuery.removeEventListener("change", handler);
};
