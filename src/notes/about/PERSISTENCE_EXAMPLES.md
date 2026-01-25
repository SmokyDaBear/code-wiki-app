# Quick Integration Guide

## Using the Persistence Layer

### 1. Save a Note

```tsx
import { saveNote } from "../utils/notesDb";

// In your component
const handleSave = async () => {
  try {
    const noteId = "note_1234567890_abc123";
    const title = "My Note";
    const content = [...]; // TDraggableComponent[]

    await saveNote(noteId, title, content);
    console.log("Note saved!");
  } catch (error) {
    console.error("Save failed:", error);
  }
};
```

### 2. Load a Specific Note

```tsx
import { loadNote } from "../utils/notesDb";

// In your component
const handleLoad = async (noteId: string) => {
  try {
    const note = await loadNote(noteId);
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      console.log("Note loaded!");
    }
  } catch (error) {
    console.error("Load failed:", error);
  }
};
```

### 3. List All Notes

```tsx
import { getAllNotes } from "../utils/notesDb";

// In useEffect
useEffect(() => {
  const loadNotes = async () => {
    try {
      const allNotes = await getAllNotes();
      setNotesList(allNotes); // NoteMetadata[]
    } catch (error) {
      console.error("Failed to load notes:", error);
    }
  };

  loadNotes();
}, []);
```

### 4. Delete a Note

```tsx
import { deleteNote } from "../utils/notesDb";

// In your component
const handleDelete = async (noteId: string) => {
  try {
    await deleteNote(noteId);
    console.log("Note deleted!");
  } catch (error) {
    console.error("Delete failed:", error);
  }
};
```

### 5. Generate a New Note ID

```tsx
import { generateNoteId } from "../utils/notesDb";

// Create a new note
const newNoteId = generateNoteId();
// Returns: "note_1734234567890_abc123def"
```

## Integration with React Components

### Basic Usage in NoteBuilder

```tsx
import { saveNote, generateNoteId } from "../utils/notesDb";

export function NoteBuilder() {
  const [noteId, setNoteId] = useState("");
  const [title, setTitle] = useState("My Note");
  const [content, setContent] = useState<TDraggableComponent[]>([]);

  // Generate ID on mount
  useEffect(() => {
    if (!noteId) {
      setNoteId(generateNoteId());
    }
  }, []);

  // Save note
  const handleSave = async () => {
    try {
      await saveNote(noteId, title, content);
      console.log("Saved!");
    } catch (error) {
      console.error("Failed:", error);
    }
  };

  return (
    <div>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      {/* ... elements ... */}
      <button onClick={handleSave}>Save Note</button>
    </div>
  );
}
```

### Using NotesList

```tsx
import { NotesList } from "./NotesList";

export function App() {
  const [currentNoteId, setCurrentNoteId] = useState<string | null>(null);

  if (currentNoteId) {
    return (
      <div>
        <button onClick={() => setCurrentNoteId(null)}>Back to Notes</button>
        <NoteBuilder loadNoteId={currentNoteId} />
      </div>
    );
  }

  return (
    <NotesList
      onSelectNote={setCurrentNoteId}
      onCreateNew={() => setCurrentNoteId(null)}
    />
  );
}
```

## Data Structures

### TDraggableComponent (Element Tree)

```typescript
interface TDraggableComponent {
  id: string;
  type: "h1" | "h2" | "p" | "table" | /* ... */ "code";
  title: string;
  textContent: string;
  inlineCSS?: React.CSSProperties;
  children?: TDraggableComponent[];
}
```

### StoredNote (Full Note Data)

```typescript
interface StoredNote {
  id: string;
  title: string;
  content: TDraggableComponent[];
  createdAt: number;
  updatedAt: number;
}
```

### NoteMetadata (Listing Data)

```typescript
interface NoteMetadata {
  id: string;
  title: string;
  createdAt: number;
  updatedAt: number;
  preview: string; // First 100 chars of content
}
```

## Error Handling Examples

### Toast Notification Approach

```tsx
const [toast, setToast] = useState<{
  message: string;
  type: "success" | "error";
} | null>(null);

const showToast = (message: string, type: "success" | "error") => {
  setToast({ message, type });
  setTimeout(() => setToast(null), 3000);
};

const handleSave = async () => {
  try {
    await saveNote(noteId, title, content);
    showToast("Note saved successfully!", "success");
  } catch (error) {
    showToast("Failed to save note", "error");
  }
};
```

### Promise-based with Result Type

```tsx
const handleSave = async () => {
  const result = await saveNote(noteId, title, content);
  if (result) {
    setLastSaved(new Date());
  }
};
```

## Testing Patterns

### Unit Test Example

```tsx
import { saveNote, loadNote, deleteNote } from "../utils/notesDb";

describe("Notes Database", () => {
  it("should save and load a note", async () => {
    const noteId = "test_note_123";
    const testNote = {
      title: "Test",
      content: [
        /* ... */
      ],
    };

    await saveNote(noteId, testNote.title, testNote.content);
    const loaded = await loadNote(noteId);

    expect(loaded?.title).toBe("Test");
    expect(loaded?.id).toBe(noteId);

    await deleteNote(noteId);
  });
});
```

## Performance Tips

### 1. Batch Operations

```tsx
// ❌ Don't: Multiple saves in quick succession
notes.forEach((note) => saveNote(note.id, note.title, note.content));

// ✅ Do: Wait for saves to complete
await Promise.all(
  notes.map((note) => saveNote(note.id, note.title, note.content))
);
```

### 2. Cache List Results

```tsx
const [notesList, setNotesList] = useState<NoteMetadata[]>([]);

// Load once on mount
useEffect(() => {
  getAllNotes().then(setNotesList);
}, []);

// Update cache when saving
const handleSave = async () => {
  await saveNote(noteId, title, content);
  // Refresh the list
  const updated = await getAllNotes();
  setNotesList(updated);
};
```

### 3. Avoid Loading Full Content When Not Needed

```tsx
// ✅ For listing: Use getAllNotes() which returns metadata only
const notesList = await getAllNotes();

// ✅ For editing: Load full content only when user opens note
const fullNote = await loadNote(noteId);
```

## Migration Guide

If you had notes in localStorage before:

```tsx
import { saveNote } from "../utils/notesDb";

// Migrate from localStorage to IndexedDB
const migrateOldNotes = async () => {
  const oldNotes = JSON.parse(localStorage.getItem("notes") || "[]");

  for (const note of oldNotes) {
    await saveNote(note.id, note.title, note.content);
  }

  // Optionally remove old data
  localStorage.removeItem("notes");
};
```

## Debugging Tips

### Check what's in IndexedDB

```tsx
// In browser console:
const db = await new Promise((resolve) => {
  const req = indexedDB.open("notes-app");
  req.onsuccess = () => resolve(req.result);
});

const tx = db.transaction("notes", "readonly");
const store = tx.objectStore("notes");

store.getAll().onsuccess = (e) => {
  console.log("All notes:", e.target.result);
};
```

### Verify saves are working

```tsx
// Add logging to handleSave
const handleSave = async () => {
  console.log("Saving note:", { noteId, title, content });
  try {
    const result = await saveNote(noteId, title, content);
    console.log("Save result:", result);
  } catch (error) {
    console.error("Save error:", error);
  }
};
```

### Clear IndexedDB for testing

```tsx
// Clear all notes
import { clearAllNotes } from "../utils/notesDb";
await clearAllNotes();
```
