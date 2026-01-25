# IndexedDB Hybrid Persistence Setup

## Overview

The note app now uses an **IndexedDB hybrid approach** for persisting notes:

- **IndexedDB**: Stores the full note content (all elements and structure)
- **localStorage** (future): Can store metadata index for quick note listing without full DB query
- **Database**: `notes-app` with object store `notes`

## How It Works

### Saving a Note

```tsx
const noteId = generateNoteId(); // Creates ID like: note_1734234567890_abc123def
await saveNote(noteId, "My Note Title", contentArray);
```

The `saveNote()` function:

- Stores full note data in IndexedDB with timestamps
- Preserves `createdAt` if updating existing note
- Updates `updatedAt` on every save

### Loading a Note

```tsx
const note = await loadNote(noteId);
// Returns: { id, title, content, createdAt, updatedAt }
```

### Listing All Notes

```tsx
const allNotes = await getAllNotes();
// Returns: Array of NoteMetadata with preview (first 100 chars)
```

### Note Structure

Each stored note contains:

```typescript
{
  id: string;              // Unique ID: note_timestamp_random
  title: string;           // User's note title
  content: TDraggableComponent[];  // Full element tree
  createdAt: number;       // Timestamp of first save
  updatedAt: number;       // Timestamp of last save
}
```

## NoteBuilder Integration

The `NoteBuilder` component now:

- Generates a unique ID on mount: `const [noteId, setNoteId] = useState()`
- Saves to IndexedDB when "Save Note" button is clicked
- Can load notes by passing `loadNoteId` prop

### Saving a Note

```tsx
<button onClick={handleSave} className="save-btn">
  Save Note
</button>
```

### Loading a Note

```tsx
<NoteBuilder loadNoteId="note_1734234567890_abc123def" />
```

## Next Steps

1. **Create Notes List UI**: Component to display all saved notes with metadata
2. **Add Load UI**: Interface to select a saved note and open it
3. **Add Delete**: UI to delete notes from IndexedDB
4. **Optional - localStorage Index**: Store metadata list in localStorage for faster listing
5. **Optional - Export**: Add markdown export download functionality

## Database Structure

### IndexedDB Diagram

```
notes-app (Database)
└── notes (Object Store)
    ├── note_1734234567890_abc123def
    │   ├── id: "note_1734234567890_abc123def"
    │   ├── title: "My First Note"
    │   ├── createdAt: 1734234567890
    │   ├── updatedAt: 1734234567890
    │   └── content: [
    │       {
    │         type: "h1",
    │         textContent: "Title",
    │         id: "...",
    │         children: []
    │       },
    │       ...
    │     ]
    └── note_1734235678901_def456ghi
        ├── id: "note_1734235678901_def456ghi"
        ├── title: "My Second Note"
        └── ...
```

## API Reference

### `saveNote(id, title, content)`

- **Parameters**:
  - `id`: string (note ID)
  - `title`: string (note title)
  - `content`: TDraggableComponent[] (element array)
- **Returns**: Promise<StoredNote>

### `loadNote(id)`

- **Parameters**: `id`: string
- **Returns**: Promise<StoredNote | null>

### `getAllNotes()`

- **Returns**: Promise<NoteMetadata[]> (sorted by updatedAt descending)

### `deleteNote(id)`

- **Returns**: Promise<void>

### `generateNoteId()`

- **Returns**: string (unique ID)

## Browser Compatibility

IndexedDB is supported in:

- Chrome/Edge 24+
- Firefox 16+
- Safari 10+
- Mobile browsers (iOS Safari 10+, Chrome Mobile)

## Storage Limits

- IndexedDB storage: Typically 50MB per origin (Chrome), variable by browser
- Can request persistent storage via StorageManager API
- Notes are stored locally - no server synchronization

## Error Handling

All database operations include try-catch blocks with console logging:

```tsx
const handleSave = async () => {
  try {
    await saveNote(noteId, title, content);
    console.log("Note saved successfully");
  } catch (error) {
    console.error("Failed to save note:", error);
  }
};
```
