# Writing about markdown in a markdown file

How Ironic!

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world's most popular markup languages.

It is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Basic Syntax

Similar to HTML, Markdown uses special characters and symbols to indicate different formatting options. Here are some common Markdown syntax elements:

### Headings

Use `#` symbols to create headings. The number of `#` symbols indicates the level of the heading.

```markdown
# Heading 1

## Heading 2

### Heading 3
```

When rendered, it looks like this (at least with the styles I made for this site...):

# Heading 1

## Heading 2

### Heading 3

### Emphasis

Use `*` or `_` for emphasis.

```markdown
_Italic_ or _Italic_
**Bold** or **Bold**
```

### Inline Code

Use backticks `` ` `` to denote inline code.

```markdown
Here is some `inline code`.
```

### Links

Use square brackets `[]` for the link text and parentheses `()` for the URL.

```markdown
[Google](https://www.google.com)
```

[Google](https://www.google.com)

### Images

Use an exclamation mark `!` followed by square brackets `[]` for the alt text and parentheses `()` for the image URL.

```markdown
![Alt text](https://via.placeholder.com/150)

Or for relative paths:

![Alt text](./folderName/your-image.png)
```

Here is an example image with a broken link, which displays the alt text instead:
![Alt text](null)

### Code Blocks

Use triple backticks ``` to create code blocks. You can also specify the language for syntax highlighting.

````markdown
```javascript
function greet() {
  console.log("Hello, World!");
}
```
````

#### In this example, I used quadruple backticks to show the triple backticks without ending the code block.

When rendered, it looks like this:

```javascript
function greet() {
  console.log("Hello, World!");
}
```

### Lists

Use `-`, `*`, or `+` for unordered lists and numbers for ordered lists.

```markdown
- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2

1. First item
2. Second item
```

- Item 1
- Item 2
  - Subitem 2.1
  - Subitem 2.2

1. First item
2. Second item

### Blockquotes

Use `>` to create blockquotes.

```markdown
> This is a blockquote.
```

> This is a blockquote.

### Horizontal Rules

Use three or more hyphens `---`, asterisks `***`, or underscores `___` to create horizontal rules.

```markdown
---
```

When rendered, it looks like this:

---

### Tables

Use pipes `|` and hyphens `-` to create tables.

```markdown
| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

| Header 1 | Header 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
