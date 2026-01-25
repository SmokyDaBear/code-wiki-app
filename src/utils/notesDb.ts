import type { TDraggableComponent } from "../Components/CustomNotes/note-builder-types";

export interface NoteMetadata {
  id: string;
  title: string;
  section: string;
  createdAt: number;
  updatedAt: number;
  preview: string; // First 100 chars of content
}

export interface StoredNote {
  id: string;
  title: string;
  section: string;
  content: TDraggableComponent[];
  createdAt: number;
  updatedAt: number;
}

const DB_NAME = "notes-app";
const STORE_NAME = "notes";
const DB_VERSION = 1;

/**
 * Initialize or get the IndexedDB database
 */
function openDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };
  });
}

/**
 * Save a note to IndexedDB
 */
export async function saveNote(
  id: string,
  title: string,
  section: string,
  content: TDraggableComponent[],
): Promise<StoredNote> {
  const db = await openDatabase();
  const now = Date.now();

  const note: StoredNote = {
    id,
    title,
    section,
    content,
    createdAt: now,
    updatedAt: now,
  };

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    // Check if note exists to preserve createdAt
    const getRequest = store.get(id);
    getRequest.onsuccess = () => {
      const existing = getRequest.result;
      if (existing) {
        note.createdAt = existing.createdAt;
      }

      const putRequest = store.put(note);
      putRequest.onsuccess = () => resolve(note);
      putRequest.onerror = () => reject(putRequest.error);
    };
    getRequest.onerror = () => reject(getRequest.error);
  });
}

/**
 * Load a note from IndexedDB
 */
export async function loadNote(id: string): Promise<StoredNote | null> {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(id);

    request.onsuccess = () => {
      resolve(request.result || null);
    };
    request.onerror = () => reject(request.error);
  });
}

/**
 * Get all notes (just metadata for listing)
 */
export async function getAllNotes(): Promise<NoteMetadata[]> {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();

    request.onsuccess = () => {
      const notes: StoredNote[] = request.result;
      const metadata: NoteMetadata[] = notes.map((note) => ({
        id: note.id,
        title: note.title,
        section: note.section || "Unsorted",
        createdAt: note.createdAt,
        updatedAt: note.updatedAt,
        preview: generatePreview(note.content),
      }));
      resolve(metadata.sort((a, b) => b.updatedAt - a.updatedAt));
    };
    request.onerror = () => reject(request.error);
  });
}

/**
 * Delete a note from IndexedDB
 */
export async function deleteNote(id: string): Promise<void> {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(id);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

/**
 * Generate a preview string from note content
 */
function generatePreview(content: TDraggableComponent[]): string {
  const textParts: string[] = [];

  const extractText = (elements: TDraggableComponent[]): void => {
    for (const el of elements) {
      if (el.textContent && textParts.join("").length < 100) {
        textParts.push(el.textContent);
      }
      if (el.children && el.children.length > 0) {
        extractText(el.children);
      }
      if (textParts.join("").length >= 100) break;
    }
  };

  extractText(content);
  return (
    textParts.join(" ").substring(0, 100) +
    (textParts.length > 100 ? "..." : "")
  );
}

/**
 * Generate a random ID for new notes
 */
export function generateNoteId(): string {
  return `note_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Clear all notes from database (for testing/cleanup)
 */
export async function clearAllNotes(): Promise<void> {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.clear();

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
  });
}

/**
 * Get all unique sections from saved notes
 */
export async function getAllSections(): Promise<string[]> {
  const notes = await getAllNotes();
  const sections = new Set<string>();
  notes.forEach((note) => sections.add(note.section));
  return Array.from(sections).sort();
}

/**
 * Search custom notes by title and content
 */
export async function searchCustomNotes(
  query: string,
): Promise<NoteMetadata[]> {
  const allNotes = await getAllNotes();
  const lowerQuery = query.toLowerCase();

  return allNotes.filter((note) => {
    const titleMatch = note.title.toLowerCase().includes(lowerQuery);
    const previewMatch = note.preview.toLowerCase().includes(lowerQuery);
    return titleMatch || previewMatch;
  });
}

/**
 * Get notes by section
 */
export async function getNotesBySection(
  section: string,
): Promise<NoteMetadata[]> {
  const allNotes = await getAllNotes();
  return allNotes.filter((note) => note.section === section);
}
