import React, { useState, useEffect } from "react";
import {
  getAllNotes,
  deleteNote,
  type NoteMetadata,
} from "../../utils/notesDb";

interface NotesListProps {
  onSelectNote: (noteId: string) => void;
  onCreateNew: () => void;
}

export function NotesList({ onSelectNote, onCreateNew }: NotesListProps) {
  const [notes, setNotes] = useState<NoteMetadata[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      setLoading(true);
      setError(null);
      const allNotes = await getAllNotes();
      setNotes(allNotes);
    } catch (err) {
      setError("Failed to load notes");
      console.error("Error loading notes:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (
    e: React.MouseEvent,
    noteId: string,
    noteTitle: string
  ) => {
    e.stopPropagation();

    if (
      !window.confirm(
        `Are you sure you want to delete "${noteTitle}"? This cannot be undone.`
      )
    ) {
      return;
    }

    try {
      await deleteNote(noteId);
      setNotes(notes.filter((n) => n.id !== noteId));
    } catch (err) {
      console.error("Failed to delete note:", err);
      setError("Failed to delete note");
    }
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year:
        date.getFullYear() !== new Date().getFullYear() ? "numeric" : undefined,
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="notes-list-container">
      <div className="notes-list-header">
        <h2>My Notes</h2>
        <button onClick={onCreateNew} className="create-note-btn">
          New Note
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading notes...</div>
      ) : notes.length === 0 ? (
        <div className="empty-state">
          <p>No notes yet. Create your first note to get started!</p>
          <button onClick={onCreateNew} className="create-note-btn primary">
            Create First Note
          </button>
        </div>
      ) : (
        <div className="notes-grid">
          {notes.map((note) => (
            <div
              key={note.id}
              className="note-card"
              onClick={() => onSelectNote(note.id)}
            >
              <div className="note-card-header">
                <h3>{note.title || "Untitled Note"}</h3>
                <button
                  className="delete-btn"
                  onClick={(e) => handleDelete(e, note.id, note.title)}
                  title="Delete note"
                >
                  Delete
                </button>
              </div>

              <p className="note-preview">{note.preview || "No content"}</p>

              <div className="note-card-footer">
                <span className="note-date">
                  Updated: {formatDate(note.updatedAt)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
