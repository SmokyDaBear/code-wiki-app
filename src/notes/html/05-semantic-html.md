# Semantic HTML

Semantic in this context means using HTML elements that convey the meaning and structure of the content they contain. Semantic HTML improves accessibility, SEO, and maintainability of web pages.
Some common semantic HTML elements include:

- `<header>`: Represents the introductory content or a set of navigational links.
- `<nav>`: Defines a set of navigation links.
- `<main>`: Represents the main content of the document.
- `<article>`: Represents a self-contained piece of content that could be distributed independently.
- `<section>`: Defines a section in a document, typically with a heading.
- `<aside>`: Represents content that is tangentially related to the content around it.
- `<footer>`: Represents the footer of a document or section, typically containing information about the author, copyright, or related links.

Using semantic HTML elements helps browsers and assistive technologies understand the structure and meaning of the content, leading to better user experiences.

## Best Practices

- Use semantic elements whenever possible instead of generic `<div>` or `<span>` elements.
- Ensure that the structure of your HTML reflects the logical structure of your content.
- Combine semantic HTML with ARIA (Accessible Rich Internet Applications) roles and attributes to enhance accessibility further when necessary.

## When to Use Semantic HTML

### Header

Header elements are used to define the header section of a webpage or a section within the page.

They typically contain introductory content, navigation links, or branding elements.

Use a header element for fixed navigation bars or introductory sections at the top of a page or section.

### Nav

The nav element is used to define a section of navigation links.

Use the nav element to group primary navigation links, such as menus or tables of contents.

Often, the nav element is placed within a header or sidebar, and will contain an `<ul>` list of links.

- adding a `<ul>` inside a `<nav>` is a common practice for organizing navigation links, as it allows users to tab through the links easily and provides a clear structure for screen readers.

### Main

The main element is used to define the main content of a webpage, this is where all of the unique content for that page resides excluding headers, footers, and navigation, although headers and footers can be inside the main element if they are part of the main content or part of a section.

### Article

The article element is used to define a self-contained piece of content that could be distributed independently.

Use the article element for blog posts, news articles, forum posts, or any other content that can stand alone.

### Section

The section element is used to define a thematic grouping of content, typically with a heading.

Use the section element to group related content together, such as chapters in an article or different topics on a webpage.

### Aside

The aside element is used to define content that is tangentially related to the main content.

Use the aside element for sidebars, pull quotes, or related links that provide additional context to the main content.

This is also a good element to add advertisements, related articles, and cart widgets.

### Footer

The footer element is used to define the footer section of a webpage or a section within the page.

Typically, it contains information about the author, copyright, or related links.

It can also contain navigation links, contact information, or social media links, as well as links to privacy policies or terms of service.

### Example of Semantic HTML Structure

Here is an example of a simple webpage structure using semantic HTML elements:

```html
<header>
  <h1>Website Title</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
<body>
  <section id="home">
    <h2>Home Section</h2>
    <p>Welcome to the home section of the website.</p>
  </section>
  <section id="about">
    <h2>About Section</h2>
    <p>This section contains information about the website.</p>
  </section>
  <section id="contact">
    <h2>Contact Section</h2>
    <p>This section provides contact information.</p>
  </section>
  <aside>
    <h2>Related Links</h2>
    <p>Check out these related articles and resources.</p>
    <article>
      <h3>Related Article 1</h3>
      <p>This is a summary of related article 1.</p>
    </article>
  </aside>
</body>
<footer>
  <p>&copy; 2024 Website Name. All rights reserved.</p>
</footer>
```

#### Note that this example uses:

- `<header>` for the top section containing the title and navigation.
- `<nav>` for the navigation links, which have a relevant `href` to a page section.
- `<body>` for the main content area.
- `<section>` for different sections of content within the body.
- `<footer>` for the footer section at the bottom of the page.

This structure enhances the readability and accessibility of the webpage by clearly defining the purpose of each section.
