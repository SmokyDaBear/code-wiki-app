import { lazy, Suspense } from "react";
import { SpinLoader } from "./SpinLoader";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";

// Lazy load only the Markdown component
const Markdown = lazy(() => import("react-markdown"));

interface MarkdownRendererProps {
  content: string;
  styleUpNextSections: () => void;
  loadNote?: (filename: string) => void;
}

export function MarkdownRenderer({
  content,
  styleUpNextSections,
  loadNote,
}: MarkdownRendererProps) {
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
  // Normalize filename function to handle both old and new numbered filenames
  const normalizeFilename = (filename: string): string => {
    // First handle old-style references to new numbered files
    const oldToNew: Record<string, string> = {
      "html-two.md": "02-classes-ids-and-data-attributes.md",
      "classes-ids-data-attributes.md": "02-classes-ids-and-data-attributes.md",
      "positioning.md": "03-positioning.md",
      "positioning-basics.md": "03-positioning.md",
      "flexbox.md": "04-flexbox-basics.md",
      "flexbox-basics.md": "04-flexbox-basics.md",
      "basics.md": "02-basics.md",
      "sql-index.md": "00-sql-index.md",
      "get-started.md": "01-get-started.md",
      "setting-up.md": "02-setting-up.md",
      "data-types.md": "03-data-types.md",
      "tables.md": "04-tables.md",
      "constraints.md": "05-constraints.md",
      "manipulating-data.md": "06-manipulating-data.md",
      "advanced-manipulating-data.md": "07-advanced-manipulating-data.md",
    };

    return oldToNew[filename] || filename;
  };

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

        const normalizedFilename = normalizeFilename(filename);
        console.log(
          "Internal link clicked:",
          href,
          "-> normalized:",
          normalizedFilename
        );

        try {
          loadNote(normalizedFilename);
        } catch (error) {
          console.error(`Failed to load note: ${normalizedFilename}`, error);
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
