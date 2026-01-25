import React, { useState, type ReactElement } from "react";
import type { TDraggableComponent, elmType } from "./note-builder-types";

// Get markdown-style class name based on element type
const getMarkdownClass = (type: elmType): string => {
  switch (type) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
      return `markdown-${type}`;
    case "p":
      return "markdown-paragraph";
    case "code":
      return "markdown-code";
    case "th":
      return "markdown-th";
    case "td":
      return "markdown-td";
    case "table":
      return "markdown-table";
    default:
      return "";
  }
};

export function DraggableComponent({
  textContent,
  inlineCSS,
  type,
  children,
  id,
  isSelected,
  onSelect,
  onUpdate,
  onDragStart,
  onDragOver,
  onDrop,
  onAddChild,
}: TDraggableComponent & {
  isSelected?: boolean;
  onSelect?: (id: string) => void;
  onUpdate?: (id: string, updatedElement: TDraggableComponent) => void;
  onDragStart?: (id: string) => void;
  onDragOver?: (e: React.DragEvent, id: string) => void;
  onDrop?: (e: React.DragEvent, id: string) => void;
  onAddChild?: (
    parentId: string,
    childType: elmType,
    afterChildId?: string
  ) => void;
}) {
  const [editMode, setEditMode] = useState(false);
  const [editValue, setEditValue] = useState(textContent);
  const [isDragging, setIsDragging] = useState(false);

  if (!inlineCSS) inlineCSS = {};

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect?.(id);
    if (
      isSelected &&
      !["table", "thead", "tbody", "tr", "ul", "ol"].includes(type)
    ) {
      setEditMode(true);
    }
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.stopPropagation();
    setIsDragging(true);
    onDragStart?.(id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "move";
    onDragOver?.(e, id);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDrop?.(e, id);
  };

  const handleSave = () => {
    if (onUpdate && editValue !== textContent) {
      onUpdate(id, {
        title: "",
        type,
        textContent: editValue,
        inlineCSS,
        children,
        id,
      });
    }
    setEditMode(false);
  };

  const handleBlur = handleSave;
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && e.ctrlKey) {
      handleSave();
    }
  };

  const baseClass = "element";
  const selectedClass = isSelected ? "selected" : "";
  const draggingClass = isDragging ? "dragging" : "";
  const markdownClass = getMarkdownClass(type);

  const dragProps = {
    draggable: !editMode,
    onDragStart: handleDragStart,
    onDragEnd: handleDragEnd,
    onDragOver: handleDragOver,
    onDrop: handleDrop,
  };

  const handleAddChild = (childType: elmType, afterChildId?: string) => {
    onAddChild?.(id, childType, afterChildId);
  };

  const childElements = children?.map((child) => (
    <React.Fragment key={child.id}>
      <DraggableComponent
        {...child}
        isSelected={isSelected}
        onSelect={onSelect}
        onUpdate={onUpdate}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onAddChild={onAddChild}
      />
      {/* Add + button after each cell for tr */}
      {type === "tr" && (
        <td className="add-cell-btn-container">
          <button
            className="add-cell-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleAddChild(child.type as elmType, child.id);
            }}
          >
            +
          </button>
        </td>
      )}
    </React.Fragment>
  ));

  let elm: ReactElement;

  if (
    editMode &&
    !["table", "thead", "tbody", "tr", "ul", "ol"].includes(type)
  ) {
    const renderEditableElement = () => {
      const commonProps = {
        className: `${baseClass} ${selectedClass} ${markdownClass}`.trim(),
        style: inlineCSS,
        children: (
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            autoFocus
            className="inline-edit-input"
          />
        ),
      };

      switch (type) {
        case "h1":
          return <h1 {...commonProps} />;
        case "h2":
          return <h2 {...commonProps} />;
        case "h3":
          return <h3 {...commonProps} />;
        case "h4":
          return <h4 {...commonProps} />;
        case "h5":
          return <h5 {...commonProps} />;
        case "h6":
          return <h6 {...commonProps} />;
        case "p":
          return <p {...commonProps} />;
        case "span":
          return <span {...commonProps} />;
        case "div":
          return <div {...commonProps} />;
        case "code":
          return <code {...commonProps} />;
        case "th":
          return <th {...commonProps} />;
        case "td":
          return <td {...commonProps} />;
        case "li":
          return <li {...commonProps} />;
        default:
          return <div {...commonProps} />;
      }
    };
    elm = renderEditableElement();
  } else {
    switch (type) {
      case "h1":
        elm = (
          <h1
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass}`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {textContent}
            {childElements}
          </h1>
        );
        break;
      case "h2":
        elm = (
          <h2
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass}`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {textContent}
            {childElements}
          </h2>
        );
        break;
      case "h3":
        elm = (
          <h3
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass}`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {textContent}
            {childElements}
          </h3>
        );
        break;
      case "h4":
        elm = (
          <h4
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass}`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {textContent}
            {childElements}
          </h4>
        );
        break;
      case "h5":
        elm = (
          <h5
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass}`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {textContent}
            {childElements}
          </h5>
        );
        break;
      case "h6":
        elm = (
          <h6
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass}`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {textContent}
            {childElements}
          </h6>
        );
        break;
      case "p":
        elm = (
          <p
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass}`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {textContent}
            {childElements}
          </p>
        );
        break;
      case "span":
        elm = (
          <span
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass}`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {textContent}
            {childElements}
          </span>
        );
        break;
      case "div":
        elm = (
          <div
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass}`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {textContent}
            {childElements}
          </div>
        );
        break;
      case "code":
        elm = (
          <code
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass}`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {textContent}
            {childElements}
          </code>
        );
        break;
      case "table":
        elm = (
          <table
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass} markdown-table`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {childElements}
          </table>
        );
        break;
      case "thead":
        elm = (
          <thead
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass}`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {childElements}
          </thead>
        );
        break;
      case "tbody":
        elm = (
          <tbody
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass}`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {children?.map((child) => (
              <React.Fragment key={child.id}>
                <DraggableComponent
                  {...child}
                  isSelected={isSelected}
                  onSelect={onSelect}
                  onUpdate={onUpdate}
                  onDragStart={onDragStart}
                  onDragOver={onDragOver}
                  onDrop={onDrop}
                  onAddChild={onAddChild}
                />
                <tr className="add-row-btn-container">
                  <td colSpan={100}>
                    <button
                      className="add-row-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddChild("tr", child.id);
                      }}
                    >
                      <span className="line"></span>
                      <span className="plus">+</span>
                      <span className="line"></span>
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        );
        break;
      case "tr":
        elm = (
          <tr
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass}`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {childElements}
          </tr>
        );
        break;
      case "th":
        elm = (
          <th
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass} markdown-th`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {textContent}
            {childElements}
          </th>
        );
        break;
      case "td":
        elm = (
          <td
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass} markdown-td`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {textContent}
            {childElements}
          </td>
        );
        break;
      case "ul":
        elm = (
          <ul
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass}`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {children?.map((child) => (
              <React.Fragment key={child.id}>
                <DraggableComponent
                  {...child}
                  isSelected={isSelected}
                  onSelect={onSelect}
                  onUpdate={onUpdate}
                  onDragStart={onDragStart}
                  onDragOver={onDragOver}
                  onDrop={onDrop}
                  onAddChild={onAddChild}
                />
                <li className="add-list-item-btn-container">
                  <button
                    className="add-list-item-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddChild("li", child.id);
                    }}
                  >
                    +
                  </button>
                </li>
              </React.Fragment>
            ))}
          </ul>
        );
        break;
      case "ol":
        elm = (
          <ol
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass}`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {children?.map((child) => (
              <React.Fragment key={child.id}>
                <DraggableComponent
                  {...child}
                  isSelected={isSelected}
                  onSelect={onSelect}
                  onUpdate={onUpdate}
                  onDragStart={onDragStart}
                  onDragOver={onDragOver}
                  onDrop={onDrop}
                  onAddChild={onAddChild}
                />
                <li className="add-list-item-btn-container">
                  <button
                    className="add-list-item-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddChild("li", child.id);
                    }}
                  >
                    +
                  </button>
                </li>
              </React.Fragment>
            ))}
          </ol>
        );
        break;
      case "li":
        elm = (
          <li
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass}`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {textContent}
            {childElements}
          </li>
        );
        break;
      default:
        elm = (
          <div
            style={inlineCSS}
            className={`${baseClass} ${selectedClass} ${draggingClass}`.trim()}
            onClick={handleClick}
            {...dragProps}
          >
            {textContent}
            {childElements}
          </div>
        );
    }
  }

  return elm;
}
