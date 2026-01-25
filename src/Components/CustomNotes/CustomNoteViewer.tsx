import { useState, useEffect } from "react";
import { deleteNote, loadNote, type StoredNote } from "../../utils/notesDb";
import { NoteBuilder } from "./NoteBuilder";
import "../../styles/custom-note-view.css";
import type { TDraggableComponent } from "./note-builder-types";

interface CustomNoteViewerProps {
  noteId: string;
}

export function CustomNoteViewer({ noteId }: CustomNoteViewerProps) {
  const [note, setNote] = useState<StoredNote | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadNoteData = async () => {
      try {
        setLoading(true);
        setError(null);
        const loadedNote = await loadNote(noteId);
        if (loadedNote) {
          setNote(loadedNote);
        } else {
          setError("Note not found");
        }
      } catch (err) {
        console.error("Failed to load note:", err);
        setError("Failed to load note");
      } finally {
        setLoading(false);
      }
    };

    loadNoteData();
  }, [noteId]);

  if (loading) {
    return <div className="custom-note-loading">Loading note...</div>;
  }

  if (error || !note) {
    return <div className="custom-note-error">{error || "Note not found"}</div>;
  }

  if (isEditing) {
    return (
      <div className="custom-note-editing">
        <div className="edit-controls">
          <button onClick={() => setIsEditing(false)} className="back-btn">
            ← Back to View
          </button>
        </div>
        <NoteBuilder loadNoteId={noteId} />
      </div>
    );
  }

  // Render note content as markdown-like preview
  const renderElement = (
    element: TDraggableComponent,
    depth: number = 0
  ): React.ReactElement => {
    const { type, textContent, children, id } = element;
    const childElements =
      children && children.length > 0
        ? children.map((child: TDraggableComponent) =>
            renderElement(child, depth + 1)
          )
        : null;

    switch (type) {
      case "h1":
        return (
          <h1 key={id} className="markdown-h1">
            {textContent}
            {childElements}
          </h1>
        );
      case "h2":
        return (
          <h2 key={id} className="markdown-h2">
            {textContent}
            {childElements}
          </h2>
        );
      case "h3":
        return (
          <h3 key={id} className="markdown-h3">
            {textContent}
            {childElements}
          </h3>
        );
      case "h4":
        return (
          <h4 key={id} className="markdown-h4">
            {textContent}
            {childElements}
          </h4>
        );
      case "h5":
        return (
          <h5 key={id} className="markdown-h5">
            {textContent}
            {childElements}
          </h5>
        );
      case "h6":
        return (
          <h6 key={id} className="markdown-h6">
            {textContent}
            {childElements}
          </h6>
        );
      case "p":
        return (
          <p key={id} className="markdown-paragraph">
            {textContent}
            {childElements}
          </p>
        );
      case "code":
        return (
          <code key={id} className="markdown-code">
            {textContent}
            {childElements}
          </code>
        );
      case "ul":
        return (
          <ul key={id} className="markdown-list">
            {childElements}
          </ul>
        );
      case "ol":
        return (
          <ol key={id} className="markdown-list">
            {childElements}
          </ol>
        );
      case "li":
        return (
          <li key={id}>
            {textContent}
            {childElements}
          </li>
        );
      case "table":
        return (
          <table key={id} className="markdown-table">
            {childElements}
          </table>
        );
      case "thead":
        return <thead key={id}>{childElements}</thead>;
      case "tbody":
        return <tbody key={id}>{childElements}</tbody>;
      case "tr":
        return <tr key={id}>{childElements}</tr>;
      case "th":
        return (
          <th key={id} className="markdown-th">
            {textContent}
            {childElements}
          </th>
        );
      case "td":
        return (
          <td key={id} className="markdown-td">
            {textContent}
            {childElements}
          </td>
        );
      case "span":
        return (
          <span key={id}>
            {textContent}
            {childElements}
          </span>
        );
      case "div":
        return (
          <div key={id}>
            {textContent}
            {childElements}
          </div>
        );
      default:
        return (
          <div key={id}>
            {textContent}
            {childElements}
          </div>
        );
    }
  };

  return (
    <div className="custom-note-viewer">
      <div className="note-view-controls">
        <button onClick={() => setIsEditing(true)} className="edit-btn">
          Edit Note
        </button>
        <button
          onClick={() => {
            deleteNote(note.id);
            setNote(null);
          }}
          className="btn-danger"
        >
          Delete Note
        </button>
      </div>
      <div className="note-view-header">
        <div className="note-view-meta">
          <h1 className="note-view-title">{note.title}</h1>
          <span className="note-view-section">Section: {note.section}</span>
        </div>
      </div>
      <div className="note-view-content markdown-content">
        {note.content.map((element) => renderElement(element))}
      </div>
    </div>
  );
}
