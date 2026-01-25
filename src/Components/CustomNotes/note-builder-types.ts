export type elmType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "div"
  | "table"
  | "thead"
  | "tbody"
  | "tr"
  | "th"
  | "td"
  | "ul"
  | "ol"
  | "li"
  | "code";

export interface TDraggableComponent {
  title: string;
  type: elmType;
  textContent: string;
  inlineCSS?: React.CSSProperties;
  children?: TDraggableComponent[];
  id: string;
}
