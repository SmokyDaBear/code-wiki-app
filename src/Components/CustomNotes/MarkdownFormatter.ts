import type { TDraggableComponent } from "./note-builder-types";

export const MarkdownFormatter = (
  element: TDraggableComponent,
  depth: number = 0
): string => {
  let md = "";

  switch (element.type) {
    case "h1":
      md = `# ${element.textContent}`;
      break;
    case "h2":
      md = `## ${element.textContent}`;
      break;
    case "h3":
      md = `### ${element.textContent}`;
      break;
    case "h4":
      md = `#### ${element.textContent}`;
      break;
    case "h5":
      md = `##### ${element.textContent}`;
      break;
    case "h6":
      md = `###### ${element.textContent}`;
      break;
    case "p":
      md = element.textContent;
      break;
    case "code":
      md = `\`\`\`\n${element.textContent}\n\`\`\``;
      break;
    case "li":
      md = `${"  ".repeat(depth)}- ${element.textContent}`;
      break;
    default:
      md = element.textContent;
  }

  if (element.children && element.children.length > 0) {
    const childMd = element.children
      .map((child: TDraggableComponent) => MarkdownFormatter(child, depth + 1))
      .join("\n");

    if (["ul", "ol"].includes(element.type)) {
      md = childMd;
    } else {
      md += "\n" + childMd;
    }
  }

  return md;
};

export const MarkdownParser = (markdown: string): TDraggableComponent[] => {
  const lines = markdown.split("\n").map((line) => line.replace(/\r$/, ""));
  const elements: TDraggableComponent[] = [];
  let currentParent: TDraggableComponent | null = null;
  const stack: TDraggableComponent[] = [];

  lines.forEach((line, index) => {
    let element: TDraggableComponent | null = null;

    if (line.startsWith("###### ")) {
      element = {
        id: `el-${index}`,
        type: "h6",
        title: "",
        textContent: line.replace("###### ", ""),
      };
    } else if (line.startsWith("##### ")) {
      element = {
        id: `el-${index}`,
        type: "h5",
        title: "",
        textContent: line.replace("##### ", ""),
      };
    } else if (line.startsWith("#### ")) {
      element = {
        id: `el-${index}`,
        type: "h4",
        title: "",
        textContent: line.replace("#### ", ""),
      };
    } else if (line.startsWith("### ")) {
      element = {
        id: `el-${index}`,
        type: "h3",
        title: "",
        textContent: line.replace("### ", ""),
      };
    } else if (line.startsWith("## ")) {
      element = {
        id: `el-${index}`,
        type: "h2",
        title: "",
        textContent: line.replace("## ", ""),
      };
    } else if (line.startsWith("# ")) {
      element = {
        id: `el-${index}`,
        type: "h1",
        title: "",
        textContent: line.replace("# ", ""),
      };
    } else if (line.startsWith("- ")) {
      element = {
        id: `el-${index}`,
        type: "li",
        title: "",
        textContent: line.replace("- ", ""),
      };
    } else if (line.startsWith("```")) {
      // Handle code blocks
      const codeLines: string[] = [];
      let i = index + 1;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      element = {
        id: `el-${index}`,
        type: "code",
        title: "",
        textContent: codeLines.join("\n"),
      };
    } else if (line.trim() !== "") {
      element = {
        id: `el-${index}`,
        type: "p",
        title: "",
        textContent: line,
      };
    }

    if (element) {
      if (currentParent) {
        currentParent.children = currentParent.children || [];
        currentParent.children.push(element);
      } else {
        elements.push(element);
      }

      if (element.type === "ul" || element.type === "ol") {
        stack.push(currentParent!);
      }
    }
    if (line.trim() === "" && stack.length > 0) {
      currentParent = stack.pop() || null;
    }
  });

  return elements;
};
