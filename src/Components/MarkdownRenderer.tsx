import { lazy, Suspense, useEffect } from "react";
import { SpinLoader } from "./SpinLoader";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { getCleanTitle } from "../data/notes";

// Lazy load only the Markdown component
const Markdown = lazy(() => import("react-markdown"));

interface MarkdownRendererProps {
  languageDirectory?: string;
  content: string;
  displayName?: string;
  styleUpNextSections: () => void;
  loadNote?: (filename: string) => void;
}

export function MarkdownRenderer({
  displayName,
  content,
  languageDirectory,
  styleUpNextSections,
  loadNote,
}: MarkdownRendererProps) {
  useEffect(() => {
    document.title = displayName
      ? `${getCleanTitle(displayName)} - ${languageDirectory || "Notes"}`
      : "Programming Notes";
  }, [displayName, languageDirectory]);
  return (
    <Suspense fallback={<SpinLoader />}>
      <LazyMarkdown
        content={content}
        styleUpNextSections={styleUpNextSections}
        loadNote={loadNote}
      />
    </Suspense>
  );
}

// Separate component to handle the lazy-loaded Markdown
function LazyMarkdown({
  content,
  styleUpNextSections,
  loadNote,
}: MarkdownRendererProps) {
  // Custom link component for internal navigation
  const CustomLink = ({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const handleClick = (e: React.MouseEvent) => {
      if (href && href.endsWith(".md") && loadNote) {
        e.preventDefault();

        let filename = href;
        if (href.includes("/")) {
          filename = href.split("/").pop() || href;
        }
        console.log("Internal link clicked:", href, "-> normalized:", filename);

        try {
          loadNote(filename);
        } catch (error) {
          console.error(`Failed to load note: ${filename}`, error);
          try {
            loadNote(filename);
          } catch (fallbackError) {
            console.error(
              `Failed to load note with filename: ${filename}`,
              fallbackError
            );
            alert(`Note not found: ${filename}`);
          }
        }
      }
    };

    return (
      <a href={href} onClick={handleClick} className="markdown-link" {...props}>
        {children}
      </a>
    );
  };
  return (
    <Markdown
      remarkPlugins={[remarkGfm, remarkBreaks]}
      rehypePlugins={[rehypeHighlight, rehypeRaw]}
      components={{
        // Custom rendering for headers with IDs for TOC linking
        h1: ({ children, ...props }) => (
          <h1
            {...props}
            id={String(children)
              ?.toLowerCase()
              .replace(/[^\w\s-]/g, "")
              .replace(/\s+/g, "-")}
          >
            {children}
          </h1>
        ),
        h2: ({ children, ...props }) => (
          <h2
            {...props}
            id={String(children)
              ?.toLowerCase()
              .replace(/[^\w\s-]/g, "")
              .replace(/\s+/g, "-")}
          >
            {children}
          </h2>
        ),
        h3: ({ children, ...props }) => (
          <h3
            {...props}
            id={String(children)
              ?.toLowerCase()
              .replace(/[^\w\s-]/g, "")
              .replace(/\s+/g, "-")}
          >
            {children}
          </h3>
        ),
        h4: ({ children, ...props }) => (
          <h4
            {...props}
            id={String(children)
              ?.toLowerCase()
              .replace(/[^\w\s-]/g, "")
              .replace(/\s+/g, "-")}
            onLoad={() => {
              // Style "Up Next" sections after rendering
              setTimeout(styleUpNextSections, 100);
            }}
          >
            {children}
          </h4>
        ),
        h5: ({ children, ...props }) => (
          <h5
            {...props}
            id={String(children)
              ?.toLowerCase()
              .replace(/[^\w\s-]/g, "")
              .replace(/\s+/g, "-")}
          >
            {children}
          </h5>
        ),
        h6: ({ children, ...props }) => (
          <h6
            {...props}
            id={String(children)
              ?.toLowerCase()
              .replace(/[^\w\s-]/g, "")
              .replace(/\s+/g, "-")}
          >
            {children}
          </h6>
        ),
        // Custom link component to handle internal navigation
        a: CustomLink,
        // Custom table components
        table: ({ children, ...props }) => (
          <table {...props} className="markdown-table">
            {children}
          </table>
        ),
        th: ({ children, ...props }) => (
          <th {...props} className="markdown-th">
            {children}
          </th>
        ),
        td: ({ children, ...props }) => (
          <td {...props} className="markdown-td">
            {children}
          </td>
        ),
        // Custom image component with base path handling
        img: ({ src, alt, ...props }) => {
          // Ensure proper path for production with base path
          const imageSrc = src?.startsWith("/")
            ? `${import.meta.env.BASE_URL}${src.slice(1)}`
            : src;
          return (
            <img
              src={imageSrc}
              alt={alt}
              style={{
                maxWidth: "100%",
                height: "auto",
                border: "1px solid #ddd",
                borderRadius: "4px",
                margin: "15px 0",
                display: "block",
              }}
              {...props}
            />
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
}
