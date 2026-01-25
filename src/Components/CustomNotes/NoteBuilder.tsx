import React, { useState, useEffect } from "react";
import "../../styles/note-builder.css";
import "../../styles/markdown.css";
import { saveNote, generateNoteId, getAllSections } from "../../utils/notesDb";
import type { elmType, TDraggableComponent } from "./note-builder-types";
import { DraggableComponent } from "./DraggableComponent";

function AddElementTool({
  addElement,
  addTableStructure,
}: {
  addElement: (type: elmType) => void;
  addTableStructure: () => void;
}) {
  const elementTypes: elmType[] = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "span",
    "div",
    "table",
    "thead",
    "tbody",
    "tr",
    "th",
    "td",
    "ul",
    "ol",
    "li",
    "code",
  ];

  return (
    <div className="scrollable-panel selector-btns">
      {elementTypes.map((elmType, index) => (
        <button
          key={index}
          className="add-btn selector-btn"
          onClick={() => {
            if (elmType === "table") {
              addTableStructure();
            } else {
              addElement(elmType);
            }
          }}
        >
          {elmType}
        </button>
      ))}
    </div>
  );
}

// Recursive component to render element tree
function ElementTreeItem({
  element,
  index,
  selectedElementId,
  onSelectElement,
  onDragStart,
  onDragOver,
  onDrop,
  onAddChild,
  depth = 0,
}: {
  element: TDraggableComponent;
  index: number;
  selectedElementId: string | null;
  onSelectElement: (id: string) => void;
  onDragStart: (id: string) => void;
  onDragOver: (e: React.DragEvent, id: string) => void;
  onDrop: (e: React.DragEvent, id: string) => void;
  onAddChild: (
    parentId: string,
    childType: elmType,
    afterChildId?: string
  ) => void;
  depth?: number;
}) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const isSelected = selectedElementId === element.id;
  const hasChildren = element.children && element.children.length > 0;

  return (
    <div className="tree-item" style={{ paddingLeft: `${depth * 16}px` }}>
      <button
        className={`element-btn selector-btn ${isSelected ? "active" : ""} ${
          draggingId === element.id ? "dragging" : ""
        }`}
        onClick={() => onSelectElement(element.id)}
        draggable
        onDragStart={(e) => {
          setDraggingId(element.id);
          onDragStart(element.id);
          e.dataTransfer.effectAllowed = "move";
        }}
        onDragEnd={() => setDraggingId(null)}
        onDragOver={(e) => {
          e.preventDefault();
          e.dataTransfer.dropEffect = "move";
          onDragOver(e, element.id);
        }}
        onDrop={(e) => {
          e.preventDefault();
          onDrop(e, element.id);
        }}
      >
        {hasChildren && (
          <span
            className="expand-toggle"
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
          >
            {isExpanded ? "▼" : "▶"}
          </span>
        )}
        {index + 1}. {element.type} -{" "}
        {element.title || element.textContent.substring(0, 20)}
      </button>
      {/* Add + buttons for relevant element types */}
      {["ul", "ol"].includes(element.type) && (
        <button
          className="tree-add-btn"
          onClick={(e) => {
            e.stopPropagation();
            onAddChild(element.id, "li");
          }}
          title="Add list item"
        >
          +
        </button>
      )}
      {element.type === "tbody" && (
        <button
          className="tree-add-btn"
          onClick={(e) => {
            e.stopPropagation();
            onAddChild(element.id, "tr");
          }}
          title="Add row"
        >
          +
        </button>
      )}
      {element.type === "thead" && (
        <button
          className="tree-add-btn"
          onClick={(e) => {
            e.stopPropagation();
            onAddChild(element.id, "tr");
          }}
          title="Add header row"
        >
          +
        </button>
      )}
      {element.type === "tr" && (
        <>
          <button
            className="tree-add-btn"
            onClick={(e) => {
              e.stopPropagation();
              // Check if parent is thead or tbody to determine cell type
              const cellType =
                element.children?.[0]?.type === "th" ? "th" : "td";
              onAddChild(element.id, cellType);
            }}
            title="Add cell"
          >
            +
          </button>
        </>
      )}
      {hasChildren && isExpanded && (
        <div className="children-list">
          {element.children!.map((child, childIndex) => (
            <ElementTreeItem
              key={child.id}
              element={child}
              index={childIndex}
              selectedElementId={selectedElementId}
              onSelectElement={onSelectElement}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
              onAddChild={onAddChild}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function EditElementTool({
  elements,
  selectedElementId,
  onSelectElement,
  onDragStart,
  onDragOver,
  onDrop,
  onAddChild,
}: {
  elements: TDraggableComponent[];
  selectedElementId: string | null;
  onSelectElement: (id: string) => void;
  onDragStart: (id: string) => void;
  onDragOver: (e: React.DragEvent, id: string) => void;
  onDrop: (e: React.DragEvent, id: string) => void;
  onAddChild: (
    parentId: string,
    childType: elmType,
    afterChildId?: string
  ) => void;
}) {
  const selectedElement = elements.find((el) => el.id === selectedElementId);

  return (
    <div className="edit-element-tool">
      <h4>Elements ({elements.length})</h4>
      <div className="elements-list selector-btns">
        {elements.map((elm, index) => (
          <ElementTreeItem
            key={elm.id}
            element={elm}
            index={index}
            selectedElementId={selectedElementId}
            onSelectElement={onSelectElement}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            onAddChild={onAddChild}
          />
        ))}
      </div>

      {selectedElement && (
        <div className="edit-panel">
          <h5>Editing: {selectedElement.type}</h5>
          <p className="edit-hint">Click element in preview to edit inline</p>
        </div>
      )}
    </div>
  );
}

export function NoteBuilder({ loadNoteId }: { loadNoteId?: string } = {}) {
  const [noteId, setNoteId] = useState<string>(loadNoteId || "");
  const [title, setTitle] = useState("Note Title");
  const [section, setSection] = useState("Unsorted");
  const [availableSections, setAvailableSections] = useState<string[]>([]);
  const [isCreatingNewSection, setIsCreatingNewSection] = useState(false);
  const [newSectionName, setNewSectionName] = useState("");
  const [content, setContent] = useState<TDraggableComponent[]>([]);
  const [selectedElementId, setSelectedElementId] = useState<string | null>(
    null
  );
  const [activeToolTab, setActiveToolTab] = useState<"add" | "edit">("add");
  const [draggedElementId, setDraggedElementId] = useState<string | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDragStart = (id: string) => {
    setDraggedElementId(id);
  };

  const handleDragOver = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    if (!draggedElementId || draggedElementId === targetId) return;

    // Check if Ctrl/Cmd key is pressed to make it a child instead of reorder
    if (e.ctrlKey || e.metaKey) {
      // Will be handled in handleDrop
      return;
    }

    const draggedIndex = content.findIndex((el) => el.id === draggedElementId);
    const targetIndex = content.findIndex((el) => el.id === targetId);

    if (draggedIndex === -1 || targetIndex === -1) return;

    const newContent = [...content];
    const [draggedElement] = newContent.splice(draggedIndex, 1);
    newContent.splice(targetIndex, 0, draggedElement);
    setContent(newContent);
  };

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    if (!draggedElementId) return;

    // If Ctrl/Cmd key is pressed, make dragged element a child of target
    if (e.ctrlKey || e.metaKey) {
      const makeChildRecursive = (
        elements: TDraggableComponent[],
        parentId: string,
        draggedId: string
      ): {
        newElements: TDraggableComponent[];
        draggedElement: TDraggableComponent | null;
      } => {
        let draggedElement: TDraggableComponent | null = null;

        const newElements = elements
          .map((el) => {
            if (el.id === draggedId) {
              draggedElement = el;
              return null;
            }
            if (el.id === parentId) {
              // Don't process yet, will add child after extraction
              return el;
            }
            if (el.children && el.children.length > 0) {
              const result = makeChildRecursive(
                el.children,
                parentId,
                draggedId
              );
              if (result.draggedElement) {
                draggedElement = result.draggedElement;
              }
              return {
                ...el,
                children: result.newElements,
              };
            }
            return el;
          })
          .filter((el): el is TDraggableComponent => el !== null);

        // Now add dragged element as child of parent if found
        if (draggedElement) {
          return {
            newElements: newElements.map((el) => {
              if (el.id === parentId) {
                return {
                  ...el,
                  children: [...(el.children || []), draggedElement!],
                };
              }
              if (el.children && el.children.length > 0) {
                const updated = makeChildRecursive([el], parentId, draggedId);
                if (updated.draggedElement) {
                  return updated.newElements[0];
                }
              }
              return el;
            }),
            draggedElement,
          };
        }

        return { newElements, draggedElement };
      };

      const result = makeChildRecursive(content, targetId, draggedElementId);
      if (result.draggedElement) {
        setContent(result.newElements);
      }
    }

    setDraggedElementId(null);
  };

  const addElement = (type: elmType) => {
    const newElement: TDraggableComponent = {
      type,
      textContent: `New ${type}`,
      title: `New ${type}`,
      children: [],
      id: `${type}-${Date.now()}`,
    };
    setContent([...content, newElement]);
    setSelectedElementId(newElement.id);
  };

  const addTableStructure = () => {
    const timestamp = Date.now();
    const table: TDraggableComponent = {
      type: "table",
      textContent: "New table",
      title: "New table",
      id: `table-${timestamp}`,
      children: [
        {
          type: "thead",
          textContent: "",
          title: "Table Head",
          id: `thead-${timestamp}`,
          children: [
            {
              type: "tr",
              textContent: "",
              title: "Header Row",
              id: `tr-head-${timestamp}`,
              children: [
                {
                  type: "th",
                  textContent: "Header 1",
                  title: "Header 1",
                  id: `th-1-${timestamp}`,
                  children: [],
                },
                {
                  type: "th",
                  textContent: "Header 2",
                  title: "Header 2",
                  id: `th-2-${timestamp}`,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          type: "tbody",
          textContent: "",
          title: "Table Body",
          id: `tbody-${timestamp}`,
          children: [
            {
              type: "tr",
              textContent: "",
              title: "Row 1",
              id: `tr-1-${timestamp}`,
              children: [
                {
                  type: "td",
                  textContent: "Cell 1",
                  title: "Cell 1",
                  id: `td-1-1-${timestamp}`,
                  children: [],
                },
                {
                  type: "td",
                  textContent: "Cell 2",
                  title: "Cell 2",
                  id: `td-1-2-${timestamp}`,
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    };
    setContent([...content, table]);
    setSelectedElementId(table.id);
  };

  const addChildElement = (
    parentId: string,
    childType: elmType,
    afterChildId?: string
  ) => {
    const addChildRecursive = (
      elements: TDraggableComponent[]
    ): TDraggableComponent[] => {
      return elements.map((el) => {
        if (el.id === parentId) {
          const newChild: TDraggableComponent = {
            type: childType,
            textContent: `New ${childType}`,
            title: `New ${childType}`,
            children:
              childType === "tr"
                ? [
                    {
                      type: el.type === "thead" ? "th" : "td",
                      textContent: "Cell",
                      title: "Cell",
                      id: `cell-1-${Date.now()}`,
                      children: [],
                    },
                    {
                      type: el.type === "thead" ? "th" : "td",
                      textContent: "Cell",
                      title: "Cell",
                      id: `cell-2-${Date.now() + 1}`,
                      children: [],
                    },
                  ]
                : [],
            id: `${childType}-${Date.now()}`,
          };

          if (afterChildId) {
            const afterIndex = (el.children || []).findIndex(
              (c) => c.id === afterChildId
            );
            const newChildren = [...(el.children || [])];
            newChildren.splice(afterIndex + 1, 0, newChild);
            return {
              ...el,
              children: newChildren,
            };
          }

          return {
            ...el,
            children: [...(el.children || []), newChild],
          };
        }
        if (el.children && el.children.length > 0) {
          return {
            ...el,
            children: addChildRecursive(el.children),
          };
        }
        return el;
      });
    };
    setContent(addChildRecursive(content));
  };

  const updateElement = (id: string, updatedElement: TDraggableComponent) => {
    const updateRecursive = (
      elements: TDraggableComponent[]
    ): TDraggableComponent[] => {
      return elements.map((el) => {
        if (el.id === id) {
          return updatedElement;
        }
        if (el.children && el.children.length > 0) {
          return {
            ...el,
            children: updateRecursive(el.children),
          };
        }
        return el;
      });
    };
    setContent(updateRecursive(content));
  };

  const deleteElement = (id: string) => {
    const deleteRecursive = (
      elements: TDraggableComponent[]
    ): TDraggableComponent[] => {
      return elements
        .filter((el) => el.id !== id)
        .map((el) => ({
          ...el,
          children: el.children ? deleteRecursive(el.children) : [],
        }));
    };
    setContent(deleteRecursive(content));
    if (selectedElementId === id) {
      setSelectedElementId(null);
    }
  };

  const moveElement = (id: string, direction: "up" | "down") => {
    const currentIndex = content.findIndex((el) => el.id === id);
    if (currentIndex === -1) return;

    const newIndex = direction === "up" ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0 || newIndex >= content.length) return;

    const newContent = [...content];
    [newContent[currentIndex], newContent[newIndex]] = [
      newContent[newIndex],
      newContent[currentIndex],
    ];
    setContent(newContent);
  };

  // Initialize with new note and load sections
  useEffect(() => {
    // Create a new note ID if not in load mode
    if (!noteId) {
      setNoteId(generateNoteId());
    }

    // Load available sections
    getAllSections().then((sections) => {
      setAvailableSections(sections);
    });
  }, [noteId]);

  const handleSave = async () => {
    try {
      if (!noteId) {
        console.error("No note ID available");
        return;
      }

      await saveNote(noteId, title || "Untitled Note", section, content);
      console.log("Note saved successfully");
      // Could show a success toast here
    } catch (error) {
      console.error("Failed to save note:", error);
      // Could show an error toast here
    }
  };

  const handleSectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "__new__") {
      setIsCreatingNewSection(true);
    } else {
      setSection(value);
      setIsCreatingNewSection(false);
    }
  };

  const handleCreateSection = () => {
    if (newSectionName.trim()) {
      setSection(newSectionName.trim());
      setAvailableSections(
        [...availableSections, newSectionName.trim()].sort()
      );
      setIsCreatingNewSection(false);
      setNewSectionName("");
    }
  };

  return (
    <div className="note-builder-container">
      <div className="note-builder">
        <div className="note-header-controls">
          <input
            type="text"
            placeholder="Note Title"
            className="note-title"
            value={title}
            onChange={handleTitleChange}
          />
          <div className="section-selector">
            <label htmlFor="section-select">Section:</label>
            {!isCreatingNewSection ? (
              <select
                id="section-select"
                value={section}
                onChange={handleSectionChange}
                className="section-dropdown"
              >
                <option value="Unsorted">Unsorted</option>
                {availableSections.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
                <option value="__new__">+ Create New Section</option>
              </select>
            ) : (
              <div className="new-section-input">
                <input
                  type="text"
                  placeholder="New section name"
                  value={newSectionName}
                  onChange={(e) => setNewSectionName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleCreateSection();
                    if (e.key === "Escape") {
                      setIsCreatingNewSection(false);
                      setNewSectionName("");
                    }
                  }}
                  autoFocus
                />
                <button onClick={handleCreateSection}>Create</button>
                <button
                  onClick={() => {
                    setIsCreatingNewSection(false);
                    setNewSectionName("");
                  }}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="elements-preview markdown-content">
          {content.length === 0 ? (
            <p className="placeholder-text">Click Add Element to get started</p>
          ) : (
            content.map((element) => (
              <DraggableComponent
                key={element.id}
                {...element}
                isSelected={selectedElementId === element.id}
                onSelect={setSelectedElementId}
                onUpdate={updateElement}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, element.id)}
                onAddChild={addChildElement}
              />
            ))
          )}
        </div>
        <button onClick={handleSave} className="save-btn">
          Save Note
        </button>
      </div>

      <div className="note-builder-tools">
        <h3>Tools</h3>
        <div className="tool-tabs">
          <button
            className={`tab-btn ${activeToolTab === "add" ? "active" : ""}`}
            onClick={() => setActiveToolTab("add")}
          >
            Add Element
          </button>
          <button
            className={`tab-btn ${activeToolTab === "edit" ? "active" : ""}`}
            onClick={() => setActiveToolTab("edit")}
          >
            Edit List
          </button>
        </div>

        {activeToolTab === "add" && (
          <AddElementTool
            addElement={addElement}
            addTableStructure={addTableStructure}
          />
        )}

        {activeToolTab === "edit" && (
          <>
            <EditElementTool
              elements={content}
              selectedElementId={selectedElementId}
              onSelectElement={setSelectedElementId}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onAddChild={addChildElement}
            />
            {selectedElementId && (
              <div className="element-actions">
                <button
                  onClick={() => moveElement(selectedElementId, "up")}
                  disabled={
                    content.findIndex((el) => el.id === selectedElementId) === 0
                  }
                >
                  Move Up
                </button>
                <button
                  onClick={() => moveElement(selectedElementId, "down")}
                  disabled={
                    content.findIndex((el) => el.id === selectedElementId) ===
                    content.length - 1
                  }
                >
                  Move Down
                </button>
                <button
                  onClick={() => deleteElement(selectedElementId)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
