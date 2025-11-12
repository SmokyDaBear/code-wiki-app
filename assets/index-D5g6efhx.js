const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/react-markdown-C4yMs8Ql.js","assets/markdown-wrf23eDy.js","assets/highlight-0zkRWLrt.js","assets/rolldown-runtime-DGruFWvd.js","assets/highlight-DdKuH37F.css","assets/react-gpxh9kH1.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-DGruFWvd.js";import{a as t,o as n,s as r}from"./react-gpxh9kH1.js";import{f as i,i as a,m as o,p as s}from"./markdown-wrf23eDy.js";import"./highlight-0zkRWLrt.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var c=e(n(),1),l=e(r(),1),u=e(t(),1);function d(){return(0,u.jsx)(`div`,{className:`spinner-bg`,id:`spinner-bg`,children:(0,u.jsx)(`div`,{className:`spinner`})})}var f=`# CSS Notes

Welcome to the CSS section! Here you'll find notes about CSS styling, layout, and design principles.

## Coming Soon

CSS notes are being prepared. Check back soon for comprehensive guides on:

- CSS Fundamentals
- Flexbox and Grid
- Responsive Design
- CSS Animations
- Modern CSS Features

## Quick Reference

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML.

### Basic Syntax

\`\`\`css
selector {
  property: value;
  property: value;
}
\`\`\`

### Example

\`\`\`css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
\`\`\`

Stay tuned for more detailed content!
`,p=`# CSS Basics

Welcome to CSS! This guide covers the fundamentals of Cascading Style Sheets.

## What is CSS?

CSS (Cascading Style Sheets) is a language used to describe the presentation of HTML documents. It controls layout, colors, fonts, and visual styling.

## Basic Syntax

CSS consists of selectors and declaration blocks:

\`\`\`css
selector {
  property: value;
  property: value;
}
\`\`\`

## Common Selectors

Selectors are used to target HTML elements for styling.
To learn about more about HTML classes, IDs, and Data attributes, visit the [HTML Notes](../html/html-two.md) section.

### Element Selectors

#### Example Code:

\`\`\`css
p {
  color: blue;
  font-size: 16px;
}
\`\`\`

#### Example Output:

<p style="color: blue; font-size: 16px;">This is a paragraph styled with an element selector.</p>

### Class Selectors

#### Example Code:

\`\`\`css
.highlight {
  background-color: yellow;
  color: black;
  font-weight: bold;
}
\`\`\`

#### Example Output:

<p class="highlight" style="background-color: yellow; color: black; font-weight: bold;">This text is highlighted using a class selector.</p>

### ID Selectors

#### Example Code:

\`\`\`css
#header {
  background-color: #333;
  color: white;
  padding: 20px;
}
\`\`\`

#### Example Output:

<div id="header" style="background-color: #333; color: white; padding: 20px;">
  This is a header styled with an ID selector.
</div>

## Box Model

Every element in CSS is a rectangular box with:

- Content: _The actual content of the element (text, images, etc.)_
- Padding: _Space between the content and the border_
- Border: _The line around the padding and content_
- Margin: _Space outside the border_

![CSS Box Model](/images/css-box-model.jpg)

#### Example Code:

\`\`\`css
.box {
  width: 200px;
  height: 100px;
  padding: 10px;
  border: 2px solid black;
  margin: 20px;
}
\`\`\`

#### Example Output:

<div class="box" style="width: 200px; height: 100px; padding: 10px; border: 2px solid black; margin: 20px;">
  This box demonstrates the CSS Box Model.
</div>

## Measurement Units

CSS uses various units to define sizes and lengths:

- **Absolute Units**: \`px\` (pixels), \`cm\` (centimeters), \`mm\` (millimeters), \`in\` (inches), \`pt\` (points), \`pc\` (picas)
- **Relative Units**: \`%\` (percentage), \`em\` (relative to the font size of the element), \`rem\` (relative to the font size of the root element), \`vw\` (viewport width), \`vh\` (viewport height)

All of these units have their specific use cases depending on the design requirements.
Pixels (\`px\`) are commonly used for precise control, while relative units like \`em\` and \`rem\` are preferred for responsive designs.

### Note on \`em\` vs \`rem\`

The difference between \`em\` and \`rem\` is that \`em\` is relative to the font size of its nearest parent, while \`rem\` is relative to the root (html) element's font size.

#### Example Code:

\`\`\`css
.container {
  font-size: 10px; /* Base font size */
}
.child-em {
  font-size: 1.5em; /* 1.5 times the parent's font size (15px) */
}
.child-rem {
  font-size: 1.5rem; /* 1.5 times the root font size (24px if root is 16px) */
}
\`\`\`

#### Example Output:

<div class="container" style="font-size: 10px; border: 1px solid black; padding: 10px; margin-bottom: 10px;">
  Container (10px)
  <div class="child-em" style="font-size: 1.5em; border: 1px solid blue; padding: 5px; margin-top: 5px;">
    Child with 1.5em (15px)
  </div>
  <div class="child-rem" style="font-size: 1.5rem; border: 1px solid green; padding: 5px; margin-top: 5px;">
    Child with 1.5rem (24px if root is 16px)
  </div>
</div>

Measurement are most commonly used in properties such as \`width\`, \`height\`, \`margin\`, \`padding\`, and \`font-size\`.
`,m=`# Positioning

CSS positioning allows you to control the layout and placement of elements on a webpage. There are several positioning schemes available in CSS:

- Static
- Relative
- Absolute
- Fixed
- Sticky

## Positioning Types

### Static Positioning

This is the default positioning for all elements. Elements are positioned according to the normal flow of the document.

#### Example Code:

\`\`\`css
.element {
  position: static; /* Default value */
}
\`\`\`

#### Example:

<div style="margin-bottom: 20px; background-color: #cad4a6ff; padding: 10px;">
  <div style="border: 1px solid black; padding: 10px; width: 200px; height: 50px; position: static;">
    <div class="element">This element is statically positioned.</div>
  </div>
</div>

### Relative Positioning

Elements are positioned relative to their normal position. You can use the \`top\`, \`right\`, \`bottom\`, and \`left\` properties to adjust their position.

#### Example Code:

\`\`\`css
.element {
  position: relative;
  top: 10px; /* Moves the element 10px down from its normal position */
  left: 20px; /* Moves the element 20px to the right from its normal position */
}
\`\`\`

#### Example:

<div style="margin-bottom: 20px; background-color: #cad4a6ff; padding: 10px;">
  <div style="border: 1px solid black; padding: 10px; width: 200px; height: 50px; position: relative; top: 10px; left: 20px;">
    <div class="element">This element is relatively positioned.</div>
  </div>
</div>

### Absolute Positioning

Elements are positioned relative to their nearest positioned ancestor (an ancestor with a position other than \`static\`). If there is no such ancestor, it is positioned relative to the initial containing block (usually the viewport).

#### Example Code:

\`\`\`css
.element {
  position: absolute;
  top: 50px; /* 50px from the top of the nearest positioned ancestor */
  left: 100px; /* 100px from the left of the nearest positioned ancestor */
}
\`\`\`

#### Example:

<div style="margin-bottom: 20px; background-color: #cad4a6ff; padding: 10px; position: relative; height: 200px;">
  <div style="border: 1px solid black; padding: 10px; width: 200px; height: 50px; position: absolute; top: 50px; left: 100px;">
    <div class="element">This element is absolutely positioned.</div>
  </div>
</div>

### Fixed Positioning

Elements are positioned relative to the viewport and remain in the same position even when the page is scrolled.

#### Example Code:

\`\`\`css
.element {
  position: fixed;
  top: 0; /* Stays at the top of the viewport */
  right: 0; /* Stays at the right of the viewport */
}
\`\`\`

#### An Example of this can be seen from the header bar of this very page you are reading now, as well as the side table of contents. These elements remain fixed in place as you scroll through the content.

### Sticky Positioning

Elements are treated as \`relative\` until they reach a specified scroll position, at which point they are treated as \`fixed\`. The \`top\`, \`right\`, \`bottom\`, and \`left\` properties determine the scroll position at which the element becomes fixed. Keep in mind that for \`sticky\` positioning to work, the parent container must have a height greater than the sticky element, and also must be positioned (i.e.,\`relative\` not \`static\`).

#### Example Code:

\`\`\`css
.element {
  position: sticky;
  top: 0; /* Sticks to the top of the viewport when scrolled to */
}
\`\`\`

#### Example:

<div style="margin-bottom: 200px; background-color: #cad4a6ff; padding: 10px; height: 300px; overflow: auto;">
  <div style="border: 1px solid black; padding: 10px; width: 200px; height: 50px; position: sticky; top: 0; background-color: white;">
    <div class="element">This element is sticky positioned.</div>
  </div>
  <div style="height: 600px;"><p>Scroll down to see the sticky effect.</p>
  <p>Keep Scrolling...</p></div>
</div>

## Z-Index

The \`z-index\` property controls the vertical stacking order of positioned elements that overlap. Higher \`z-index\` values are displayed in front of lower values.

#### Example Code:

\`\`\`css
.element1 {
  position: absolute;
  z-index: 1; /* Lower stack order */
}
\`\`\`

\`\`\`css
.element2 {
  position: absolute;
  z-index: 10; /* Higher stack order */
}
\`\`\`

#### Example:

<div style="position: relative; height: 150px; background-color: #cad4a6ff; padding: 10px;">
  <div style="position: absolute; top: 20px; left: 20px; width: 100px; height: 100px; background-color: red; z-index: 1;">
    <div class="element1">Element 1 (z-index: 1)</div>
  </div>
  <div style="position: absolute; top: 50px; left: 50px; width: 100px; height: 100px; background-color: blue; z-index: 10;">
    <div class="element2">Element 2 (z-index: 10)</div>
  </div>
</div>

#### Tip: When using \`z-index\`, ensure that the elements are positioned (i.e., have a \`position\` value other than \`static\`). And also keep in mind that if an item has a parent with a defined \`z-index\`, it will be constrained within that parent's stacking context. For example, a child element cannot appear in front of an ancestor element with a lower \`z-index\`, even if the child has a higher \`z-index\` value.
`,h=`# Flexbox Basics

Flexbox, or the Flexible Box Layout, is a CSS layout model that allows you to design complex layouts more easily and efficiently. It provides a way to distribute space among items in a container, even when their size is unknown or dynamic.

## Key Concepts

- **Flex Container**: The parent element that holds the flex items. You define a flex container by setting the \`display\` property to \`flex\` or \`inline-flex\`.
- **Flex Items**: The child elements inside a flex container. These items can be manipulated using various flexbox properties.

## Flex Container Properties

- \`display: flex;\` - Defines a flex container.
- \`flex-direction\` - Defines the direction of the flex items (row, row-reverse, column, column-reverse).
- \`justify-content\` - Aligns flex items along the main axis (flex-start, flex-end, center, space-between, space-around).
- \`align-items\` - Aligns flex items along the cross axis (stretch, flex-start, flex-end, center, baseline).
- \`flex-wrap\` - Controls whether flex items wrap onto multiple lines (nowrap, wrap, wrap-reverse).

## Flex Item Properties

- \`order\` - Controls the order of flex items.
- \`flex-grow\` - Defines the ability of a flex item to grow if necessary.
- \`flex-shrink\` - Defines the ability of a flex item to shrink if necessary.
- \`flex-basis\` - Defines the default size of a flex item before the remaining space is distributed.
- \`align-self\` - Allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

## Example Code

\`\`\`css
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 500px;
}
.item {
  flex: 1;
  margin: 10px;
  padding: 20px;
  background-color: lightblue;
}
.item-2 {
  background-color: lightgreen;
}
.item-3 {
  background-color: lightcoral;
}
\`\`\`

## Example

<div class="container" style="display: flex; flex-direction: row; justify-content: center; align-items: center; height: 500px; border: 1px solid black; position: relative;">
<h4 style="position: absolute; top: 10px; left: 10px;color: black;">Container</h4>
  <div class="item" style="flex: 1; margin: 10px; padding: 20px; background-color: lightblue;">Item 1</div>
  <div class="item" style="flex: 1; margin: 10px; padding: 20px; background-color: lightgreen;">Item 2</div>
  <div class="item" style="flex: 1; margin: 10px; padding: 20px; background-color: lightcoral;">Item 3</div>
</div>

One of the great things about Flexbox is its responsiveness. Flex containers and items can adapt to different screen sizes and orientations, making it easier to create responsive web designs, without the need for complex media queries.
`,g=`# 📚 Programming Notes Hub

![SmokyDaBear](src/assets/images/profile-animated.png)

#### Author: SmokyDaBear Follow me on [GitHub](https://github.com/SmokyDaBear)

#### Want your own website, or help setting one up? Visit [Verdant Webworks](https://verdant-webworks.vercel.app/)

Welcome to what initially started as my personal notes collection but has since grown into a comprehensive resource for learning and referencing various programming languages and technologies. This is your central hub for all things programming! Built with React and Vite and a little help from ChatGPT, this app is designed to be fast, responsive, and easy to navigate.

## 🎯 What You'll Find Here

This collection covers fundamental concepts, best practices, and practical examples across multiple programming domains. Whether you're learning your first programming language or expanding your skill set, these notes are designed to be clear, concise, and actionable.

---

## 📖 Available Sections

### 🗃️ SQL - Database Management

Learn the fundamentals of Structured Query Language for database operations.

**Available Topics:**

- [Getting Started with SQL](sql-index.md) - Introduction and overview
- [Setting Up Your Environment](setting-up.md) - Installation and configuration
- [Data Types](data-types.md) - Understanding SQL data types
- [Working with Tables](tables.md) - Creating and managing database tables
- [Data Manipulation](manipulating-data.md) - INSERT, UPDATE, DELETE operations
- [Advanced Data Operations](advanced-manipulating-data.md) - Complex queries and joins
- [Constraints](constraints.md) - Data integrity and validation rules

---

### 🌐 HTML - Web Structure

Master the building blocks of web pages with HyperText Markup Language.

**Available Topics:**

- [HTML Overview](html-index.md) - Introduction to HTML
- [Getting Started](get-started.md) - Basic HTML structure and syntax
- [HTML Elements & Attributes](html-two.md) - Working with elements and attributes
- [Advanced HTML](html-three.md) - Forms, semantic HTML, and best practices

---

### 🎨 CSS - Styling & Design

Learn how to style and layout web pages with Cascading Style Sheets.

**Available Topics:**

- [CSS Overview](css-index.md) - Introduction to CSS
- [CSS Fundamentals](css-basics.md) - Selectors, properties, and the box model
- [Layout Techniques](flexbox-basics.md) - Flexbox and Grid (coming soon)
- [Responsive Design](responsive-design.md) - Mobile-first design principles (coming soon)

---

### ⚡ JavaScript - Dynamic Web Programming

Discover the power of JavaScript for interactive web development.

**Available Topics:**

- [JavaScript Overview](javascript-index.md) - Introduction to JavaScript
- [JavaScript Fundamentals](javascript-basics.md) - Variables, functions, and control structures
- [DOM Manipulation](dom-manipulation.md) - Interacting with web pages (coming soon)
- [Async Programming](async-javascript.md) - Promises, async/await (coming soon)

---

### 📘 TypeScript - Typed JavaScript

Explore TypeScript for scalable and maintainable JavaScript applications.

**Available Topics:**

- [TypeScript Overview](typescript-index.md) - Introduction to TypeScript
- [TypeScript Fundamentals](typescript-basics.md) - Types, interfaces, and generics
- [Advanced Types](advanced-types.md) - Union types, mapped types (coming soon)
- [Decorators & Modules](modules.md) - Modern TypeScript features (coming soon)

---

## 🚀 Getting Started

1. **Choose a Section**: Click on any section in the left navigation to explore topics
2. **Follow Along**: Each topic builds upon previous concepts - start with the basics
3. **Practice**: Try out the code examples in your own development environment
4. **Cross-Reference**: Topics often link to related concepts in other sections

## 🔗 Cross-Section Learning

These notes are designed to work together! You'll find links between sections when concepts overlap:

- HTML and CSS work hand-in-hand for web development
- JavaScript and TypeScript share fundamental concepts
- SQL knowledge applies to many programming scenarios

## 💡 Tips for Success

- **Start with the Basics**: Even experienced developers benefit from reviewing fundamentals
- **Practice Regularly**: Programming is a skill that improves with consistent practice
- **Experiment**: Don't just read - try modifying examples to see what happens
- **Build Projects**: Apply what you learn by creating real applications

---

## 📱 Mobile Friendly

This notes app is fully responsive! Use the hamburger menu (☰) on mobile devices to navigate between sections and topics.

---

_Happy Learning! 🎉_

> Last updated: November 2025
`,_=`# HTML Notes

Welcome to the HTML section! Here you'll find notes about HTML fundamentals, elements, and best practices.

## Available Topics

- [Get Started](get-started.md) - Basic HTML introduction
- [HTML Two](html-two.md) - Intermediate HTML concepts
- [HTML Three](html-three.md) - Advanced HTML topics

## Quick Reference

HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications.

### Basic Structure

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
\`\`\`

Navigate through the topics using the links above or the navigation menu on the left.
`,v=`# Getting Started with HTML

This section will teach the basics of HTML, the standard markup language for creating web pages. You'll learn about the structure of an HTML document, common tags, and how to create links and images.

## What is HTML?

HTML (HyperText Markup Language) is the backbone of web content. It defines the structure of web pages using a series of elements represented by tags.

## Basic Structure of an HTML Document

An HTML document has a specific structure that includes the following key components:

\`\`\`html
<!DOCTYPE html>
<html>
  <head>
    <title>Your Page Title</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is your first HTML page.</p>
  </body>
</html>
\`\`\`

- \`<!DOCTYPE html>\`: Declares the document type and version of HTML.
- \`<html>\`: The root element that contains all other HTML elements.
- \`<head>\`: Contains meta-information about the document, such as the title and links to stylesheets.
- \`<title>\`: Sets the title of the web page, which appears in the browser tab.
- \`<body>\`: Contains the content of the web page, such as text, images, and links.

## Tags and Elements

HTML uses tags to create elements. Tags are enclosed in angle brackets (\`< >\`). Most elements have an opening tag and a closing tag, like \`<p>\` and \`</p>\`, which define a paragraph.

### Example

\`\`\`html
<p>This is a paragraph.</p>
<a href="https://www.example.com">This is a link</a>
<img src="image.jpg" alt="Description of image" />
\`\`\`

## Common HTML Tags

Here are some commonly used HTML tags:

- Headings: \`<h1>\` to \`<h6>\` for different levels of headings.
- Paragraph: \`<p>\` for paragraphs of text.
- Anchors/Links: \`<a>\` for hyperlinks.
- Images: \`<img>\` for embedding images.
- Lists: \`<ul>\` for unordered lists and \`<ol>\` for ordered lists, with \`<li>\` for list items.
- Divisions: \`<div>\` for grouping elements and applying styles.


#### Tip: Practice creating simple HTML pages to get comfortable with the structure and tags. Use online resources like [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML) for reference and further learning.
`,y=`# Classes, IDs, and Data Attributes

In HTML, classes, IDs, and data attributes are used to add metadata to elements for styling, scripting, and accessibility purposes.

## Classes

Classes are used to group elements together and apply the same styles or behaviors to multiple elements. They are defined using the \`class\` attribute.

Example:

\`\`\`html
<p class="highlight">This paragraph has a class.</p>
<div class="container">
  <p class="highlight">This paragraph also has a class.</p>
</div>
\`\`\`

## IDs

IDs are unique identifiers for a single element within a page. They are defined using the \`id\` attribute.

Example:

\`\`\`html
<h1 id="main-title">Main Title</h1>
<p id="description">This is the description.</p>
\`\`\`

## Data Attributes

Data attributes allow you to store extra information in HTML elements that can be accessed via JavaScript or CSS. They start with \`data-\`.

Example:

\`\`\`html
<div data-role="button" data-action="submit">Submit</div>
\`\`\`

These attributes provide flexibility in styling and scripting without cluttering the HTML structure.


#### Tip: Use classes for styling multiple elements, IDs for unique elements, and data attributes for storing custom data.
`,b=`# HTML Forms

HTML forms are essential for collecting user input on web pages. They allow users to submit data, which can then be processed by a server or used within the client-side application.

## Form Element

The \`<form>\` element is the container for all form elements. It defines how the form data will be sent and where.

\`\`\`html
<form action="/submit" method="post">
  <!-- Form elements go here -->
  <input type="text" name="username" placeholder="Enter your username" />
  <input type="password" name="password" placeholder="Enter your password" />
  <input type="submit" value="Submit" />
</form>
\`\`\`

- \`action\`: Specifies the URL where the form data will be sent.
- \`method\`: Specifies the HTTP method to use when sending the form data (e.g., "get" or "post").

## Label Element

The \`<label>\` element is used to define labels for form controls. It improves accessibility by associating text with form elements.

#### Example Code:

\`\`\`html
<label for="username">Username Label:</label>
<input
  type="text"
  id="username"
  name="username"
  placeholder="Enter your username"
/>
\`\`\`

#### Example Output:

<label for="username">Username Label:</label>
<input type="text" id="username" name="username" placeholder="Enter your username" />

## Common Form Elements

Here are some commonly used form elements notice the types:

- **Text Input**: \`<input type="text" />\` for single-line text input.
- <input type="text" />
- **Password Input**: \`<input type="password" />\` for password input (hides characters).
- <input type="password" />
- **Email Input**: \`<input type="email" />\` for email addresses.
- <input type="email" />
- **Tel Input**: \`<input type="tel" />\` for telephone numbers.
- <input type="tel" />
- **URL Input**: \`<input type="url" />\` for website URLs.
- <input type="url" />
- **Textarea**: \`<textarea></textarea>\` for multi-line text input.
- <input type="textarea" />
- **Hidden Input**: \`<input type="hidden" />\` for storing hidden data.
- <input type="hidden" />
- **Number Input**: \`<input type="number" />\` for numeric input.
- <input type="number" />
- **Range Input**: \`<input type="range" />\` for selecting a value from a range.
- <input type="range" />
- **Color Input**: \`<input type="color" />\` for selecting a color.
- <input type="color" />
- **Date Input**: \`<input type="date" />\` for selecting dates.
- <input type="date" />
- **Time Input**: \`<input type="time" />\` for selecting times.
- <input type="time" />
- **File Input**: \`<input type="file" />\` for uploading files.
- <input type="file" />
- **Submit Button**: \`<input type="submit" />\` to submit the form.
- <input type="submit" />
- **Reset Button**: \`<input type="reset" />\` to reset the form fields.
- <input type="reset" />
- **Button**: \`<button></button>\` for clickable buttons.
- <button>Click Me</button>

### Input Properties

Common properties for input elements include:

- \`name\`: The name of the input field, used to identify the data when submitted.
- \`value\`: The default value of the input field.
- \`placeholder\`: A short hint that describes the expected value of the input field.
- \`required\`: Specifies that the input field must be filled out before submitting the form.
- \`disabled\`: Disables the input field, preventing user interaction.
- \`readonly\`: Makes the input field read-only, preventing user modification.
- \`maxlength\`: Specifies the maximum number of characters allowed in the input field.
- \`min\` and \`max\`: Define the minimum and maximum values for numeric inputs.

## Other Form Elements

Radio buttons, checkboxes, and dropdowns are also commonly used in forms, but we'll go into more detail on them below:

### Radio Buttons

- **Radio Buttons**: \`<input type="radio" />\` for selecting one option from a group.

  <input type="radio" name="radio-group" value="option1"/><label for="option1">Option 1</label>
  <input type="radio" name="radio-group" value="option2"/><label for="option2">Option 2</label>

### Checkboxes

- **Checkboxes**: \`<input type="checkbox" />\` for selecting multiple options at one time.

  <input type="checkbox" name="checkbox-group" value="option1"/><label for="option1">Option 1</label>
  <input type="checkbox" name="checkbox-group" value="option2"/><label for="option2">Option 2</label>

### Select Dropdowns

- **Dropdowns**: \`<select>\` for creating a dropdown list of options.

  Within the \`<select>\` element, use \`<option>\` elements to define the available choices.

  #### Example Code:

  \`\`\`html
  <select name="dropdown">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </select>
  \`\`\`

  <select name="dropdown"><option for="dropdown">Dropdown Option</option><option value="option1">Option 1</option><option value="option2">Option 2</option></select>

  Dropdowns can also support multiple selections by adding the \`multiple\` attribute.

  <select name="multi-dropdown" multiple><option value="option1">Option 1</option><option value="option2">Option 2</option><option value="option3">Option 3</option></select>

### Text Area

- **Text Area**: \`<textarea>\` for multi-line text input.

#### Example Code:

\`\`\`html
<textarea name="message" rows="4" cols="50">Enter your message here...</textarea
\`\`\`

<textarea name="message" rows="4" cols="50">Enter your message here...</textarea>

## Example of a Complete Form

\`\`\`html
<form action="/submit" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required />
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required />
  <input type="submit" value="Login" />
</form>
\`\`\`

#### Example Output:

<form action="/submit" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required />
  <br />
  <label for="password">Password:</label>
  <input type="password" id="password" name="password" required />
  <br />
  <input type="submit" value="Login" />
</form>

## Form Validation

Form validation ensures that the data entered by users is correct and complete before it is submitted. HTML provides built-in validation attributes such as \`required\`, \`minlength\`, \`maxlength\`, and \`pattern\`.

- required: Ensures that the field must be filled out before submission.
- minlength and maxlength: Specify the minimum and maximum number of characters allowed.
- pattern: Defines a regular expression [click here to learn about regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) that the input value must match.

### Example

\`\`\`html
<input type="email" name="email" required />
<input type="text" name="username" minlength="4" maxlength="12" />
\`\`\`

## Form Accessibility

To make forms accessible, use labels, fieldsets, and legends to provide context for screen readers. Ensure that form controls are keyboard-navigable.

### Example

\`\`\`html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />
</form>
\`\`\`
`,x=`# JavaScript Notes

Welcome to the JavaScript section! Here you'll find comprehensive notes about JavaScript programming.

## Coming Soon

JavaScript notes are being prepared. Check back soon for detailed guides on:

- JavaScript Fundamentals
- ES6+ Features
- DOM Manipulation
- Async Programming
- Modern JavaScript Frameworks

## Quick Reference

JavaScript is a high-level, dynamic programming language that's one of the core technologies of the World Wide Web.

### Basic Syntax

\`\`\`javascript
// Variables
const name = "John";
let age = 30;
var city = "New York";

// Functions
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Arrow Functions
const greet = (name) => \`Hello, \${name}!\`;

// Objects
const person = {
  name: "John",
  age: 30,
  greet() {
    return \`Hello, I'm \${this.name}\`;
  },
};
\`\`\`

More comprehensive content coming soon!
`,S=`# JavaScript Fundamentals

Welcome to JavaScript! This guide covers the core concepts of the JavaScript programming language.

## What is JavaScript?

JavaScript is a high-level, interpreted programming language that enables interactive web pages. It's an essential part of web applications alongside HTML and CSS.

## Variables and Data Types

### Variable Declarations

\`\`\`javascript
// const - cannot be reassigned
const name = "John";

// let - can be reassigned, block-scoped
let age = 25;
age = 26; // OK

// var - function-scoped (avoid in modern JS)
var city = "New York";
\`\`\`

### Data Types

\`\`\`javascript
// Primitive types
const text = "Hello World"; // string
const number = 42; // number
const isTrue = true; // boolean
const nothing = null; // null
let undefined_var; // undefined

// Objects
const person = {
  name: "John",
  age: 30,
  city: "Boston",
};

// Arrays
const colors = ["red", "green", "blue"];
\`\`\`

## Functions

### Function Declarations

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

### Arrow Functions

\`\`\`javascript
const greet = (name) => {
  return \`Hello, \${name}!\`;
};

// Short form
const greet = (name) => \`Hello, \${name}!\`;
\`\`\`

## Control Structures

### Conditional Statements

\`\`\`javascript
if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teenager");
} else {
  console.log("Child");
}
\`\`\`

### Loops

\`\`\`javascript
// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for...of loop
for (const color of colors) {
  console.log(color);
}

// forEach method
colors.forEach((color) => console.log(color));
\`\`\`

## Next Steps

- Learn about [DOM Manipulation](dom-manipulation.md)
- Explore [Async JavaScript](async-javascript.md)
- Master [ES6+ Features](es6-features.md)
`,C=`# Learn SQL 🌎

## Welcome to the SQL Learning Notes!

Welcome to the SQL learning notes! Here, you'll find comprehensive information on various SQL topics, including data types, table creation, data manipulation, and database management.

## Navigation

### [Getting started with SQL 🖥️ 🪛](getting-started.md)

- Learn the basics of SQL, including installation and setup.

### [SQL Data Types 📊](data-types.md)

- Understand the different data types available in SQL and how to use them.

### [SQL Constraints 📏](constraints.md)

- Explore the rules and restrictions that can be applied to table columns to ensure data integrity.

### [Tables in SQL 🗄️](tables.md)

- Learn how to create and manage tables in SQL databases.

### [Manipulating Data in SQL 🛠️](manipulating-data.md)

- Discover how to insert, update, delete, and query data in SQL tables.

### [Advanced SQL Data Manipulation 🚀](advanced-manipulating-data.md)

- Explore advanced techniques for data manipulation and transactions in SQL.

### [Setting Up SQL 🛠️](setting-up.md)

- A guide to installing and configuring SQL on your local machine or server.

## Additional Resources

For more in-depth learning, consider exploring the following resources:

- [W3Schools SQL Tutorial](https://www.w3schools.com/sql/)
- [SQL Documentation](https://www.postgresql.org/docs/current/sql.html)
- [SQLZoo Interactive Tutorials](https://sqlzoo.net/)
- [Mode SQL Tutorial](https://mode.com/sql-tutorial/)
- [LeetCode SQL Problems](https://leetcode.com/problemset/database/)
  Happy learning! 🚀

#### Setup Guide: Follow the [Setting Up SQL 🛠️](setting-up.md) notes to install and configure SQL on your machine.
`,w=`# Getting started with SQL 🖥️ 🪛

## The SQL CREATE DATABASE Statement

The CREATE DATABASE statement is used to create a new SQL database.

### Syntax -

    CREATE DATABASE "databasename";

### CREATE DATABASE Example

The following SQL statement creates a database called "testDB":

    CREATE DATABASE testDB;

#### Tip: Make sure you have admin privilege before creating any database. Once a database is created, you can check it in the list of databases with the following SQL command:

    SHOW DATABASES;

## The SQL DROP DATABASE Statement

The DROP DATABASE statement is used to drop an existing SQL database.

### Syntax

    DROP DATABASE databasename;

### Note: Be careful before dropping a database. Deleting a database will result in complete loss of information stored in the database!

## The SQL BACKUP DATABASE Statement

The BACKUP DATABASE statement is used in SQL Server to create a full back up of an existing SQL database.

### Syntax

    BACKUP DATABASE databasename

    TO DISK = 'filepath';

## The SQL BACKUP WITH DIFFERENTIAL Statement

A differential back up only backs up the parts of the database that have changed since the last full database backup.

### Syntax

    BACKUP DATABASE databasename

    TO DISK = 'filepath'

    WITH DIFFERENTIAL;

### BACKUP DATABASE Example

The following SQL statement creates a full back up of the existing database "testDB" to the D disk:

### Example

    BACKUP DATABASE testDB

    TO DISK = 'D:\\backups\\testDB.bak';

#### Tip: Always back up the database to a different drive than the actual database. Then, if you get a disk crash, you will not lose your backup file along with the database.

### BACKUP WITH DIFFERENTIAL Example

The following SQL statement creates a differential back up of the database "testDB":

### Example

    BACKUP DATABASE testDB

    TO DISK = 'D:\\backups\\testDB.bak'

    WITH DIFFERENTIAL;

#### Tip: A differential back up reduces the back up time (since only the changes are backed up).


#### Previous: Explore the SQL learning notes overview in the [Learn SQL 🌎](sql-index.md) notes to understand the structure of the SQL learning material.
`,T=`# Setting Up SQL 🛠️

Welcome to the SQL setup guide! This document will help you get started with installing and configuring SQL on your local machine or server.

## Step 1: Choose Your SQL Database

There are several SQL database management systems (DBMS) to choose from, including:

- MySQL
- PostgreSQL
- SQLite
- Microsoft SQL Server
- Oracle Database

Choose the one that best fits your needs based on factors like ease of use, community support, and specific features.

## Local Installation Guides

- [MySQL Installation Guide](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)
- [PostgreSQL Installation Guide](https://www.postgresql.org/download/)
- [SQLite Installation Guide](https://www.sqlite.org/download.html)
- [Microsoft SQL Server Installation Guide](https://docs.microsoft.com/en-us/sql/sql-server/install-sql-server)
- [Oracle Database Installation Guide](https://docs.oracle.com/en/database/oracle-database/)

## Step 2: Install SQL Client Tools

To interact with your SQL database, you may want to install a SQL client tool. Some popular options include:

- MySQL Workbench (for MySQL)
- pgAdmin (for PostgreSQL)
- DBeaver (supports multiple databases)
- SQL Server Management Studio (for Microsoft SQL Server)
- Oracle SQL Developer (for Oracle Database)

## Step 3: Configure Your Database

After installation, you will need to configure your database. This typically involves:

- Setting up user accounts and permissions
- Creating your first database
- Configuring network settings for remote access (if needed)

## Step 4: Verify Your Setup

To verify that your SQL database is set up correctly, you can try connecting to it using your SQL client tool and running a simple query, such as:

\`\`\`sql
SELECT VERSION();
\`\`\`

If the query returns the version of your SQL database, congratulations! Your setup is complete.


#### Home: Return to the [Learn SQL 🌎](sql-index.md) main index for more SQL topics and resources.
`,E=`# Overview of SQL Data Types

SQL data types define the kind of data that can be stored in a column of a database table. Choosing the correct data type is essential for data integrity, storage efficiency, and query performance.

## Main Categories of SQL Data Types

### Numeric Data Types

| Data Type | Description                | Range/Size                                              |
| --------- | -------------------------- | ------------------------------------------------------- |
| INT       | Standard integer values    | -2,147,483,648 to 2,147,483,647                         |
| BIGINT    | Large integer numbers      | -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
| SMALLINT  | Small integers             | -32,768 to 32,767                                       |
| TINYINT   | Very small integers        | 0 to 255                                                |
| DECIMAL   | Exact fixed-point numbers  | -10^38 + 1 to 10^38 - 1                                 |
| FLOAT     | Approximate numeric values | -1.79E+308 to 1.79E+308                                 |

### Character and String Data Types

| Data Type | Description                      | Max Length              |
| --------- | -------------------------------- | ----------------------- |
| CHAR      | Fixed-length character string    | 1 to 8,000 characters   |
| VARCHAR   | Variable-length character string | 1 to 8,000 characters   |
| TEXT      | Large variable-length string     | Up to 2^31-1 characters |

### Date and Time Data Types

| Data Type | Description                      |
| --------- | -------------------------------- |
| DATE      | Stores date values               |
| TIME      | Stores time values               |
| DATETIME  | Stores both date and time values |

### Binary Data Types

| Data Type | Description                 | Max Length         |
| --------- | --------------------------- | ------------------ |
| BINARY    | Fixed-length binary data    | 1 to 8,000 bytes   |
| VARBINARY | Variable-length binary data | 1 to 8,000 bytes   |
| BLOB      | Stores binary large objects | Up to 2^31-1 bytes |

### Miscellaneous Data Types

| Data Type | Description                |
| --------- | -------------------------- |
| BOOLEAN   | Stores TRUE or FALSE       |
| JSON      | Stores JSON formatted data |
| XML       | Stores XML data            |

### Importance of Choosing the Right Data Type

Selecting the appropriate data type ensures efficient storage, accurate operations, and validation of input data. It also helps in optimizing query performance and maintaining data integrity. Always consult the documentation for your specific SQL database system to understand the nuances of data types.

## Variables in SQL

Variables are used to store data values. When creating tables, you need to define the datatype for each column in the table.


#### Previous: Review the [SQL Basics 📝](basics.md) notes to understand fundamental SQL concepts before diving into data types and tables.
`,D=`# Tables in SQL 🗄️

to get started with tables in SQL, you first need to understand the concept of variables and datatypes in SQL.

#### You can review the [SQL Data Types 📊](data-types.md) notes for more information on SQL data types.

#### Tip: In SQL, a table is a collection of related data held in a structured format within a database. Each table consists of rows and columns, where each row represents a record and each column represents a field.

## The SQL CREATE TABLE Statement

The CREATE TABLE statement is used to create a new table in a database.
Constraints can also be added to columns to enforce rules on the data in the table, such as NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, and DEFAULT.

#### Learn more about SQL constraints in the [SQL Constraints 📏](constraints.md) notes.

### Syntax

    CREATE TABLE tablename (
     column1 datatype constraint,
     column2 datatype constraint,
     column3 datatype constraint,
     ....);

### CREATE TABLE Example

The following SQL statement creates a table called "Customers" with three columns:

- "CustomerID"
- "CustomerFirstName"
- "CustomerLastName":

### Example

      CREATE TABLE Customers (
        CustomerID int,
        CustomerFirstName varchar(255),
        CustomerLastName varchar(255)
        );

#### Tip: Always define the appropriate data type for each column based on the kind of data you expect to store in that column. This helps in optimizing storage and ensuring data integrity.

## Dropping a Table

The DROP TABLE statement is used to delete an existing table and all of its data from the database.

### Syntax

    DROP TABLE tablename;

### Drop Table Example

The following SQL statement deletes the "Customers" table:

- The DROP TABLE statement specifies the table name (Customers) to be deleted.

### Example

    DROP TABLE Customers;

### IMPORTANT‼️: Be cautious when using the DROP TABLE statement, as it permanently removes the table and all its data. Make sure to back up any important data before dropping a table.

## Altering a Table

The ALTER TABLE statement is used to modify the structure of an existing table, such as adding, deleting, or modifying columns.

### Syntax

    ALTER TABLE tablename

    ADD columnname datatype;

    ALTER TABLE tablename

    DROP COLUMN columnname;

    ALTER TABLE tablename

    MODIFY COLUMN columnname datatype;

### ALTER TABLE Example

The following SQL statements demonstrate how to alter the "Customers" table by adding, dropping, and modifying columns:

- The first statement adds a new column "CustomerEmail" of type varchar(255) to the "Customers" table.
  - This is used when you want to add a new field to your table, such as an email address, or maybe you want to store a tag for each customer like "VIP" or "Regular".
- The second statement drops the "CustomerLastName" column from the "Customers" table.
  - This is used when you no longer need a column in your table and want to remove it to save space or simplify the table structure.
- The third statement modifies the data type of the "CustomerFirstName" column to varchar(100).
  - This is useful when you need to change the size of the column to accommodate different lengths of names.
  - Can also be used in a case where you need to change the datatype of a column to better fit the data being stored like from int to bigint.

### Example

    ALTER TABLE Customers
    ADD CustomerEmail varchar(255);

    ALTER TABLE Customers
    DROP COLUMN CustomerLastName;

    ALTER TABLE Customers
    MODIFY COLUMN CustomerFirstName varchar(100);

#### Tip: When altering a table, ensure that any changes made do not violate existing data integrity constraints or relationships with other tables.


#### Previous: Review the [SQL Data Types 📊](data-types.md) notes to understand different data types available in SQL before creating tables.
`,O=`# SQL Constraints 📏

SQL constraints are rules applied to table columns to enforce data integrity and consistency. They help ensure that the data entered into the database adheres to specific requirements.

## Common SQL Constraints

Here are some of the most commonly used SQL constraints:

- **NOT NULL**: Ensures that a column cannot have a NULL value. This constraint is used when you want to make sure that a field always contains a value.
- **UNIQUE**: Ensures that all values in a column are unique. This constraint is used when you want to prevent duplicate entries in a column.
- **PRIMARY KEY**: A combination of NOT NULL and UNIQUE. It uniquely identifies each record in a table. Each table can have only one primary key, which can consist of one or more columns.
- **FOREIGN KEY**: A field (or collection of fields) in one table that refers to the PRIMARY KEY in another table. This constraint is used to establish a link between the data in two tables and enforce referential integrity.
- **CHECK**: Ensures that all values in a column satisfy a specific condition. This constraint is used to limit the range of values that can be placed in a column.
- **DEFAULT**: Sets a default value for a column when no value is specified during the insertion of a new record. This constraint is used to ensure that a column always has a value, even if the user does not provide one.

## Example of SQL Constraints

The following SQL statement creates a table called "Employees" with various constraints applied to its columns:

- "EmployeeID" is defined as the PRIMARY KEY, ensuring that each employee has a unique identifier.
- "FirstName" and "LastName" are defined with the NOT NULL constraint, ensuring that these fields must have values.
- "Email" is defined with the UNIQUE constraint, ensuring that no two employees can have the same email address.
- "DepartmentID" is defined as a FOREIGN KEY that references the "Departments" table, establishing a relationship between employees and their departments.
- "Salary" is defined with a CHECK constraint to ensure that the salary is always greater than 0.
- "HireDate" is defined with a DEFAULT constraint to automatically set the hire date to the current date if no value is provided during insertion.

## Example

    CREATE TABLE Employees (
      EmployeeID int PRIMARY KEY,
      FirstName varchar(50) NOT NULL,
      LastName varchar(50) NOT NULL,
      Email varchar(100) UNIQUE,
      DepartmentID int,
      Salary decimal(10, 2) CHECK (Salary > 0),
      HireDate date DEFAULT GETDATE(),
      FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
    );

#### Tip: Using constraints effectively can help maintain the quality and reliability of your database by preventing invalid data from being entered, and ensuring relationships between tables are preserved with referential integrity.

## NOT NULL Constraint Example

Useful when you want to ensure that certain fields always have values.

    CREATE TABLE Students (
      StudentID int PRIMARY KEY,
      FirstName varchar(50) NOT NULL,
      LastName varchar(50) NOT NULL,
      Email varchar(100) UNIQUE
    );

## UNIQUE Constraint Example

Useful when you want to prevent duplicate entries in a column, such as email addresses.

    CREATE TABLE Products (
      ProductID int PRIMARY KEY,
      ProductName varchar(100) UNIQUE,
      Price decimal(10, 2)
    );

## PRIMARY KEY Constraint Example

    Essential for uniquely identifying each record in a table.
      CREATE TABLE Categories (
      CategoryID int PRIMARY KEY,
      CategoryName varchar(100) NOT NULL
    );

## FOREIGN KEY Constraint Example

Useful for establishing relationships between tables, such as linking orders to customers.

    CREATE TABLE Orders (
      OrderID int PRIMARY KEY,
      OrderDate date,
      CustomerID int,
      FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
    );


#### Home: Return to the [Learn SQL 🌎](sql-index.md) main index for more SQL topics and resources.
`,k=`# Manipulating Data in SQL 🛠️

## The SQL INSERT INTO Statement

The INSERT INTO statement is used to insert new records into a table.

### Syntax

    INSERT INTO tablename (column1, column2, column3,...)

    VALUES (value1, value2, value3,...);

### INSERT INTO Example

The following SQL statement inserts a new record into the "Customers" table:

- The INSERT INTO statement specifies the table name (Customers) and the columns to insert data into (CustomerID, CustomerFirstName, CustomerLastName).
- The VALUES clause provides the corresponding values for each column in the new record.

### Example

    INSERT INTO Customers (CustomerID, CustomerFirstName, CustomerLastName)

    VALUES (1, 'John', 'Doe');

## The SQL UPDATE Statement

The UPDATE statement is used to modify existing records in a table.

### Syntax

    UPDATE tablename

    SET column1 = value1, column2 = value2, ...

    WHERE condition;

### UPDATE Example

The following SQL statement updates the last name of the customer with CustomerID 1:

- The UPDATE statement modifies the CustomerLastName column in the Customers table.
- The SET clause specifies the new value for the CustomerLastName column.
- The WHERE clause ensures only the record with CustomerID 1 is updated.

### Example

    UPDATE Customers

    SET CustomerLastName = 'Smith'

    WHERE CustomerID = 1;

#### Tip: Always use the WHERE clause to specify which record(s) to update. If you omit the WHERE clause, all records in the table will be updated!

## The SQL DELETE Statement

The DELETE statement is used to delete existing records in a table.

### Syntax

    DELETE FROM tablename

    WHERE condition;

### DELETE Example

The following SQL statement deletes the customer with CustomerID 1:

- The DELETE FROM statement specifies the table name (Customers) from which to delete records.
- The WHERE clause ensures only the record with CustomerID 1 is deleted.

### Example

    DELETE FROM Customers

    WHERE CustomerID = 1;

#### Tip: Always use the WHERE clause to specify which record(s) to delete. If you omit the WHERE clause, all records in the table will be deleted!


#### Previous: Review the [Tables in SQL 🗄️](tables.md) notes to understand how to create and define tables before manipulating data.
`,A=`# Advanced Manipulating Data in SQL 🛠️

## The SQL MERGE Statement

The MERGE statement is used to perform insert, update, or delete operations on a target table based on the results of a join with a source table.

### Use Case

The MERGE statement is particularly useful for synchronizing two tables by applying changes from one table to another.

### Syntax

In the following example, we demonstrate the basic syntax of the MERGE statement

- TargetTable: The table to be modified.
- SourceTable: The table providing the new data.
- INTO TargetTable AS target: Specifies the target table and assigns it an alias.
- USING SourceTable AS source: Specifies the source table and assigns it an alias.
- ON target.ID = source.ID: Defines the condition for matching records between the target and source tables.
- WHEN MATCHED THEN: Specifies the action to take when a match is found (e.g., update).
- WHEN NOT MATCHED THEN: Specifies the action to take when no match is found (e.g., insert).
- WHEN NOT MATCHED BY SOURCE THEN: Specifies the action to take when a record in the target table has no corresponding record in the source table (e.g., delete).

### MERGE Example

The following SQL statement merges data from the "SourceTable" into the "TargetTable":

    MERGE INTO TargetTable AS target
    USING SourceTable AS source
    ON target.ID = source.ID
    WHEN MATCHED THEN
        UPDATE SET target.Name = source.Name, target.Age = source.Age
    WHEN NOT MATCHED THEN
        INSERT (ID, Name, Age) VALUES (source.ID, source.Name, source.Age)
    WHEN NOT MATCHED BY SOURCE THEN
        DELETE;

#### Tip: The MERGE statement can help reduce the complexity of multiple insert, update, and delete operations by combining them into a single statement.

## The SQL UPSERT Operation

The UPSERT operation is a combination of "update" and "insert". It allows you to insert a new record or update an existing record if a conflict occurs (e.g., duplicate key).

### Syntax

The following example demonstrates the basic syntax of the UPSERT operation using the INSERT ... ON CONFLICT statement (PostgreSQL syntax):

    INSERT INTO tablename (column1, column2, column3)
    VALUES (value1, value2, value3)
    ON CONFLICT (conflict_column)
    DO UPDATE SET column1 = EXCLUDED.column1, column2 = EXCLUDED.column2;

### UPSERT Example

The following SQL statement performs an UPSERT operation on the "Customers" table:
INSERT INTO Customers (CustomerID, CustomerFirstName, CustomerLastName)
VALUES (1, 'Jane', 'Doe')
ON CONFLICT (CustomerID)
DO UPDATE SET CustomerFirstName = EXCLUDED.CustomerFirstName, CustomerLastName = EXCLUDED.CustomerLastName;

#### Tip: The UPSERT operation is useful for maintaining data integrity and avoiding duplicate records in a table.
`,j=`# TypeScript Basics

Welcome to TypeScript! This guide covers the fundamentals of TypeScript, a typed superset of JavaScript.

## What is TypeScript?

TypeScript is a programming language developed by Microsoft that builds on JavaScript by adding static type definitions. It compiles to plain JavaScript and runs anywhere JavaScript runs.

## Benefits of TypeScript

- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocompletion and refactoring
- **Self-Documenting Code**: Types serve as documentation
- **Modern JavaScript Features**: Access to latest JavaScript features

## Basic Types

### Primitive Types

\`\`\`typescript
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let value: null = null;
let notDefined: undefined = undefined;
\`\`\`

### Arrays

\`\`\`typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ["a", "b", "c"];
\`\`\`

### Objects

\`\`\`typescript
let person: {
  name: string;
  age: number;
  email?: string; // Optional property
} = {
  name: "John",
  age: 30,
};
\`\`\`

## Interfaces

Interfaces define the shape of objects:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  isActive: true,
};
\`\`\`

## Functions

### Function Types

\`\`\`typescript
function add(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;
\`\`\`

### Optional and Default Parameters

\`\`\`typescript
function greet(name: string, greeting: string = "Hello"): string {
  return \`\${greeting}, \${name}!\`;
}

function createUser(name: string, age?: number): User {
  return {
    id: Math.random(),
    name,
    email: \`\${name.toLowerCase()}@example.com\`,
    isActive: true,
  };
}
\`\`\`

## Type Aliases and Union Types

\`\`\`typescript
type Status = "pending" | "approved" | "rejected";
type ID = string | number;

interface Task {
  id: ID;
  title: string;
  status: Status;
}
\`\`\`

## Generics

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

interface Repository<T> {
  findById(id: string): T | undefined;
  save(entity: T): void;
  delete(id: string): void;
}
\`\`\`

## Next Steps

- Learn about [Advanced Types](advanced-types.md)
- Explore [Decorators](decorators.md)
- Master [Module Systems](modules.md)
`,M=`# TypeScript Notes

Welcome to the TypeScript section! Here you'll find notes about TypeScript, the typed superset of JavaScript.

## Coming Soon

TypeScript notes are being prepared. Check back soon for comprehensive guides on:

- TypeScript Fundamentals
- Type Annotations
- Interfaces and Types
- Generics
- Advanced TypeScript Features

## Quick Reference

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

### Basic Types

\`\`\`typescript
// Basic types
let id: number = 1;
let name: string = "John";
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];

// Objects
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}

const user: User = {
  id: 1,
  name: "John Doe",
};

// Functions
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
\`\`\`

More detailed content coming soon!
`,N={"../notes/css/01-CSS-index.md":f,"../notes/css/02-basics.md":p,"../notes/css/03-positioning.md":m,"../notes/css/04-flexbox-basics.md":h,"../notes/home.md":g,"../notes/html/00-html-index.md":_,"../notes/html/01-get-started-with-html.md":v,"../notes/html/02-classes-ids-and-data-attributes.md":y,"../notes/html/03-forms.md":b,"../notes/javascript/00-javascript-index.md":x,"../notes/javascript/01-javascript-basics.md":S,"../notes/sql/00-sql-index.md":C,"../notes/sql/01-get-started.md":w,"../notes/sql/02-setting-up.md":T,"../notes/sql/03-data-types.md":E,"../notes/sql/04-tables.md":D,"../notes/sql/05-constraints.md":O,"../notes/sql/06-manipulating-data.md":k,"../notes/sql/07-advanced-manipulating-data.md":A,"../notes/typescript/typescript-basics.md":j,"../notes/typescript/typescript-index.md":M},P={},F={};Object.entries(N).forEach(([e,t])=>{let n=e.split(`/`),r=n[n.length-1]||``;if(n.length===3&&r===`home.md`){F[r]={content:t,section:`home`};return}if(n.length>3){let e=n[n.length-2];P[e]||(P[e]={}),P[e][r]=t,F[r]={content:t,section:e}}});const I={sql:{name:`SQL`,icon:`🗃️`},html:{name:`HTML`,icon:`🌐`},css:{name:`CSS`,icon:`🎨`},javascript:{name:`JavaScript`,icon:`⚡`},typescript:{name:`TypeScript`,icon:`📘`}},L={home:`sql-index.md`,getStarted:`get-started.md`,settingUp:`setting-up.md`,tables:`tables.md`,advancedManipulatingData:`advanced-manipulating-data.md`,constraints:`constraints.md`,dataTypes:`data-types.md`,basicManipulatingData:`manipulating-data.md`,dataStructures:`dataStructures.md`,introToData:`introToData.md`,manipulatingStrings:`manipulatingStrings.md`,workingWithNumbers:`workingWithNumbers.md`},R=e=>e.replace(/^\d{2}-/,``),z=e=>R(e).replace(`.md`,``).replace(/-/g,` `).replace(/\b\w/g,e=>e.toUpperCase()),B=e=>Object.keys(P[e]||{}).sort((e,t)=>{let n=parseInt(e.match(/^\d+/)?.[0]||`999`),r=parseInt(t.match(/^\d+/)?.[0]||`999`);return n===r?e.localeCompare(t):n-r}),V=()=>Object.keys(P),H=e=>{let t=F[e];return t?t.section:null},U=e=>{let t=H(e);if(!t)return null;let n=B(t),r=n.indexOf(e);if(r===-1||r>=n.length-1)return null;let i=n[r+1];return{filename:i,title:z(i)}},W=e=>{let t=e.replace(/^\/notes\/[^/]+\//,``).replace(/^\/notes\//,``),n=F[t];if(!n){let e=Object.keys(F).join(`, `);throw Error(`Note not found: ${t}. Available: ${e}`)}return console.log(`Retrieved note:`,t,`from section:`,n.section),n.content},ee=e=>{if(!e.trim())return[];let t=e.toLowerCase(),n=[];return Object.entries(F).forEach(([r,i])=>{let{content:a,section:o}=i,s=a.split(`
`),c=[];if(s.forEach((n,r)=>{if(n.toLowerCase().includes(t)){let t=te(n,e);c.push({context:n.trim(),lineNumber:r+1,highlightedText:t})}}),c.length>0){let e=o===`home`?{name:`Home`,icon:`🏠`}:I[o]||{name:o,icon:`📄`};n.push({filename:r,title:z(r),section:e.name,sectionIcon:e.icon,matches:c.slice(0,3),totalMatches:c.length})}}),n.sort((e,t)=>e.totalMatches===t.totalMatches?e.title.localeCompare(t.title):t.totalMatches-e.totalMatches)};var te=(e,t)=>{let n=RegExp(`(${t})`,`gi`);return e.replace(n,`<mark>$1</mark>`)};const ne=()=>{let e=V(),t=[];return t.push({text:`🏠 Home`,href:`home.md`}),e.forEach(e=>{let n=I[e],r=B(e);if(r.length>0){let e=r.map(e=>({text:re(e),href:e}));t.push({text:`${n.icon} ${n.name}`,children:e})}}),t};var re=e=>R(e).replace(`.md`,``).replace(/-/g,` `).replace(/\b\w/g,e=>e.toUpperCase());L.home,L.constraints,L.advancedManipulatingData,L.dataTypes,L.getStarted,L.basicManipulatingData,L.settingUp,L.tables;const G=ne();function ie({onSearch:e,onClear:t,placeholder:n=`Search all notes...`}){let[r,i]=(0,l.useState)(``),[a,o]=(0,l.useState)(!1),s=(0,l.useRef)(null),c=n=>{let r=n.target.value;i(r),r.trim()?e(r):t()},d=()=>{i(``),t(),s.current?.focus()};return(0,l.useEffect)(()=>{let e=e=>{(e.ctrlKey||e.metaKey)&&e.key===`k`&&(e.preventDefault(),s.current?.focus())};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[]),(0,u.jsxs)(`div`,{className:`search-bar ${a?`focused`:``}`,children:[(0,u.jsxs)(`div`,{className:`search-input-container`,children:[(0,u.jsx)(`span`,{className:`search-icon`,children:`🔍`}),(0,u.jsx)(`input`,{ref:s,type:`text`,value:r,onChange:c,onKeyDown:e=>{e.key===`Escape`&&d()},onFocus:()=>o(!0),onBlur:()=>o(!1),placeholder:n,className:`search-input`}),r&&(0,u.jsx)(`button`,{onClick:d,className:`search-clear`,"aria-label":`Clear search`,children:`✕`})]}),(0,u.jsx)(`div`,{className:`search-shortcut`,children:(0,u.jsx)(`span`,{children:`⌘K`})})]})}function K({setCurrentNote:e,currentSection:t,currentNoteName:n,onSearch:r,onClearSearch:i}){let[a,o]=(0,l.useState)(null);(0,l.useEffect)(()=>{if(t){let e=G.findIndex(e=>{if(e.text&&t in I){let n=I[t];return e.text.includes(n.name)}return!1});e!==-1&&o(e)}},[t]);let s=e=>{o(a===e?null:e)};return(0,u.jsxs)(`div`,{className:`left-nav`,children:[(0,u.jsx)(ie,{onSearch:e=>{r?.(e)},onClear:()=>{i?.()},placeholder:`Search all notes...`}),G.map((t,r)=>{if(t.children){let i=a===r;return(0,u.jsxs)(`div`,{className:`dropdown-parent ${i?`active`:``}`,children:[(0,u.jsxs)(`div`,{className:`dropdown-title`,onClick:()=>s(r),children:[(0,u.jsx)(`span`,{className:`section-arrow`,children:i?`▼`:`▶`}),t.text]}),(0,u.jsx)(`div`,{className:`dropdown-children ${i?`expanded`:`collapsed`}`,children:t.children.map((t,r)=>(0,u.jsx)(`p`,{className:`child-link ${n===t.href?`active`:``}`,onClick:()=>t.href&&e(t.href),children:t.text},r))})]},r)}else return(0,u.jsx)(`div`,{className:`parent-link ${n===t.href?`active`:``}`,onClick:()=>t.href&&e(t.href),children:t.text},r)})]})}function ae({currentNote:e,currentNoteName:t,onLoadNote:n}){let[r,i]=(0,l.useState)([]),[a,o]=(0,l.useState)(null),[s,c]=(0,l.useState)(``);(0,l.useEffect)(()=>{if(!e){i([]),o(null);return}let r=/^(#{1,6})\s+(.+)$/gm,a=[],s;for(;(s=r.exec(e))!==null;){let e=s[1].length,t=s[2].trim();if(e===4)continue;let n=t.toLowerCase().replace(/[^\w\s-]/g,``).replace(/\s+/g,`-`);a.push({id:n,text:t,level:e})}if(n){let e=U(t);e&&a.push({id:`next-lesson`,text:`Next: ${e.title}`,level:2})}i(a);let c=e.replace(/#{1,6}\s+/g,``).replace(/\[([^\]]+)\]\([^)]+\)/g,`$1`).replace(/[*_`]/g,``).trim().split(/\s+/).filter(e=>e.length>0).length,l=Math.max(1,Math.ceil(c/200)),u=e.length;o({wordCount:c,readingTime:l,characterCount:u})},[e,t,n]);let d=e=>{if(e===`next-lesson`&&n){let e=U(t);e&&n(e.filename);return}let r=document.getElementById(e);r&&(r.scrollIntoView({behavior:`smooth`,block:`start`}),c(e))};return(0,l.useEffect)(()=>{let e=()=>{let e=r.map(e=>({id:e.id,element:document.getElementById(e.id)})),t=``;for(let n of e)n.element&&n.element.getBoundingClientRect().top<=100&&(t=n.id);c(t)},t=document.querySelector(`.center.main`);if(t)return t.addEventListener(`scroll`,e),()=>t.removeEventListener(`scroll`,e)},[r]),e?(0,u.jsxs)(`div`,{className:`right-sidebar`,children:[(0,u.jsxs)(`div`,{className:`sidebar-section`,children:[(0,u.jsx)(`h3`,{children:`📊 Note Info`}),(0,u.jsxs)(`div`,{className:`note-stats`,children:[(0,u.jsxs)(`div`,{className:`stat-item`,children:[(0,u.jsx)(`span`,{className:`stat-label`,children:`📄 File:`}),(0,u.jsx)(`span`,{className:`stat-value`,children:R(t)})]}),a&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`div`,{className:`stat-item`,children:[(0,u.jsx)(`span`,{className:`stat-label`,children:`📝 Words:`}),(0,u.jsx)(`span`,{className:`stat-value`,children:a.wordCount.toLocaleString()})]}),(0,u.jsxs)(`div`,{className:`stat-item`,children:[(0,u.jsx)(`span`,{className:`stat-label`,children:`⏱️ Read time:`}),(0,u.jsxs)(`span`,{className:`stat-value`,children:[a.readingTime,` min`]})]}),(0,u.jsxs)(`div`,{className:`stat-item`,children:[(0,u.jsx)(`span`,{className:`stat-label`,children:`🔤 Characters:`}),(0,u.jsx)(`span`,{className:`stat-value`,children:a.characterCount.toLocaleString()})]})]})]})]}),r.length>0&&(0,u.jsxs)(`div`,{className:`sidebar-section`,children:[(0,u.jsx)(`h3`,{children:`📚 Table of Contents`}),(0,u.jsx)(`nav`,{className:`toc-nav`,children:r.map((e,t)=>(0,u.jsxs)(`button`,{className:`toc-item level-${e.level} ${s===e.id?`active`:``} ${e.id===`next-lesson`?`next-lesson`:``}`,onClick:()=>d(e.id),title:e.text,children:[e.id===`next-lesson`&&(0,u.jsx)(`span`,{className:`next-lesson-icon`,children:`🚀`}),e.text]},t))})]})]}):(0,u.jsx)(`div`,{className:`right-sidebar`,children:(0,u.jsxs)(`div`,{className:`sidebar-section`,children:[(0,u.jsx)(`h3`,{children:`📖 Note Info`}),(0,u.jsx)(`p`,{className:`no-note-message`,children:`Select a note to see its table of contents and information.`})]})})}var oe=`modulepreload`,se=function(e){return`/code-wiki-app/`+e},q={};const ce=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=se(t,n),t in q)return;q[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:oe,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};var le=(0,l.lazy)(()=>ce(()=>import(`./react-markdown-C4yMs8Ql.js`),__vite__mapDeps([0,1,2,3,4,5])));function ue({content:e,styleUpNextSections:t,loadNote:n}){return(0,u.jsx)(l.Suspense,{fallback:(0,u.jsx)(d,{}),children:(0,u.jsx)(de,{content:e,styleUpNextSections:t,loadNote:n})})}function de({content:e,styleUpNextSections:t,loadNote:n}){let r=e=>({"html-two.md":`02-classes-ids-and-data-attributes.md`,"classes-ids-data-attributes.md":`02-classes-ids-and-data-attributes.md`,"positioning.md":`03-positioning.md`,"positioning-basics.md":`03-positioning.md`,"flexbox.md":`04-flexbox-basics.md`,"flexbox-basics.md":`04-flexbox-basics.md`,"basics.md":`02-basics.md`,"sql-index.md":`00-sql-index.md`,"get-started.md":`01-get-started.md`,"setting-up.md":`02-setting-up.md`,"data-types.md":`03-data-types.md`,"tables.md":`04-tables.md`,"constraints.md":`05-constraints.md`,"manipulating-data.md":`06-manipulating-data.md`,"advanced-manipulating-data.md":`07-advanced-manipulating-data.md`})[e]||e;return(0,u.jsx)(le,{remarkPlugins:[o,s],rehypePlugins:[i,a],components:{h1:({children:e,...t})=>(0,u.jsx)(`h1`,{...t,id:String(e)?.toLowerCase().replace(/[^\w\s-]/g,``).replace(/\s+/g,`-`),children:e}),h2:({children:e,...t})=>(0,u.jsx)(`h2`,{...t,id:String(e)?.toLowerCase().replace(/[^\w\s-]/g,``).replace(/\s+/g,`-`),children:e}),h3:({children:e,...t})=>(0,u.jsx)(`h3`,{...t,id:String(e)?.toLowerCase().replace(/[^\w\s-]/g,``).replace(/\s+/g,`-`),children:e}),h4:({children:e,...n})=>(0,u.jsx)(`h4`,{...n,id:String(e)?.toLowerCase().replace(/[^\w\s-]/g,``).replace(/\s+/g,`-`),onLoad:()=>{setTimeout(t,100)},children:e}),h5:({children:e,...t})=>(0,u.jsx)(`h5`,{...t,id:String(e)?.toLowerCase().replace(/[^\w\s-]/g,``).replace(/\s+/g,`-`),children:e}),h6:({children:e,...t})=>(0,u.jsx)(`h6`,{...t,id:String(e)?.toLowerCase().replace(/[^\w\s-]/g,``).replace(/\s+/g,`-`),children:e}),a:({href:e,children:t,...i})=>(0,u.jsx)(`a`,{href:e,onClick:t=>{if(e&&e.endsWith(`.md`)&&n){t.preventDefault();let i=e;e.includes(`/`)&&(i=e.split(`/`).pop()||e);let a=r(i);console.log(`Internal link clicked:`,e,`-> normalized:`,a);try{n(a)}catch(e){console.error(`Failed to load note: ${a}`,e);try{n(i)}catch(e){console.error(`Failed to load note with filename: ${i}`,e),alert(`Note not found: ${i}`)}}}},className:`markdown-link`,...i,children:t}),table:({children:e,...t})=>(0,u.jsx)(`table`,{...t,className:`markdown-table`,children:e}),th:({children:e,...t})=>(0,u.jsx)(`th`,{...t,className:`markdown-th`,children:e}),td:({children:e,...t})=>(0,u.jsx)(`td`,{...t,className:`markdown-td`,children:e}),img:({src:e,alt:t,...n})=>(0,u.jsx)(`img`,{src:e,alt:t,style:{maxWidth:`100%`,height:`auto`,border:`1px solid #ddd`,borderRadius:`4px`,margin:`15px 0`,display:`block`},...n})},children:e})}function fe({currentFilename:e,onLoadNote:t}){let n=U(e);return n?(0,u.jsx)(`div`,{className:`next-lesson-container`,children:(0,u.jsx)(`button`,{className:`next-lesson-button`,onClick:()=>{t(n.filename)},"aria-label":`Go to next lesson: ${n.title}`,children:(0,u.jsxs)(`div`,{className:`next-lesson-content`,children:[(0,u.jsx)(`span`,{className:`next-lesson-label`,children:`Up Next`}),(0,u.jsx)(`span`,{className:`next-lesson-title`,children:n.title}),(0,u.jsx)(`span`,{className:`next-lesson-arrow`,children:`→`})]})})}):null}function pe({results:e,query:t,isLoading:n=!1,onSelectNote:r,onClose:i}){let a=e=>{r(e),i()};return t.trim()?(0,u.jsx)(`div`,{className:`search-results-overlay`,onClick:i,children:(0,u.jsxs)(`div`,{className:`search-results-container`,onClick:e=>e.stopPropagation(),children:[(0,u.jsxs)(`div`,{className:`search-results-header`,children:[(0,u.jsx)(`h3`,{children:`Search Results`}),(0,u.jsx)(`button`,{onClick:i,className:`search-results-close`,"aria-label":`Close search results`,children:`✕`})]}),n?(0,u.jsxs)(`div`,{className:`search-loading`,children:[(0,u.jsx)(`div`,{className:`search-spinner`}),(0,u.jsx)(`span`,{children:`Searching...`})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`div`,{className:`search-results-info`,children:e.length===0?(0,u.jsxs)(`span`,{children:[`No results found for "`,t,`"`]}):(0,u.jsxs)(`span`,{children:[`Found `,e.length,` `,e.length===1?`result`:`results`,` for "`,t,`"`]})}),(0,u.jsx)(`div`,{className:`search-results-list`,children:e.map((e,t)=>(0,u.jsxs)(`div`,{className:`search-result-card`,onClick:()=>a(e.filename),children:[(0,u.jsxs)(`div`,{className:`search-result-header`,children:[(0,u.jsxs)(`div`,{className:`search-result-title`,children:[(0,u.jsx)(`span`,{className:`search-result-icon`,children:e.sectionIcon}),(0,u.jsx)(`span`,{className:`search-result-name`,children:e.title})]}),(0,u.jsxs)(`div`,{className:`search-result-meta`,children:[(0,u.jsx)(`span`,{className:`search-result-section`,children:e.section}),(0,u.jsxs)(`span`,{className:`search-result-count`,children:[e.totalMatches,` `,e.totalMatches===1?`match`:`matches`]})]})]}),(0,u.jsxs)(`div`,{className:`search-result-matches`,children:[e.matches.map((e,t)=>(0,u.jsxs)(`div`,{className:`search-result-match`,children:[(0,u.jsxs)(`div`,{className:`search-result-line-number`,children:[`Line `,e.lineNumber]}),(0,u.jsx)(`div`,{className:`search-result-context`,dangerouslySetInnerHTML:{__html:e.highlightedText}})]},t)),e.totalMatches>e.matches.length&&(0,u.jsxs)(`div`,{className:`search-result-more`,children:[`+`,e.totalMatches-e.matches.length,` more`,` `,e.totalMatches-e.matches.length===1?`match`:`matches`]})]})]},`${e.filename}-${t}`))})]})]})}):null}var J=`notes-app-preferences`,Y=`notes-app-storage-allowed`;const X=()=>{try{return localStorage.getItem(Y)===`true`}catch{return!1}},me=()=>{try{return!localStorage.getItem(`notes-app-visited`)}catch{return!0}},he=()=>{try{localStorage.setItem(`notes-app-visited`,`true`)}catch{}},ge=e=>{try{e?localStorage.setItem(Y,`true`):localStorage.removeItem(Y)}catch{}},Z=()=>{let e={theme:`system`,allowsStorage:!1,visitedNotes:[],firstVisit:!0};if(!X())return e;try{let t=localStorage.getItem(J);if(t){let n=JSON.parse(t);return{...e,...n}}}catch{}return e},Q=e=>{if(X())try{let t={...Z(),...e};localStorage.setItem(J,JSON.stringify(t))}catch{}},_e=e=>{X()&&Q({visitedNotes:[e,...(Z().visitedNotes||[]).filter(t=>t!==e)].slice(0,20)})},ve=()=>{try{localStorage.removeItem(J),localStorage.removeItem(Y),localStorage.removeItem(`notes-app-visited`)}catch{}},ye=()=>typeof window<`u`&&window.matchMedia&&window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`,$=e=>{let t=document.documentElement,n;n=e===`system`?ye():e,t.setAttribute(`data-theme`,n),t.classList.remove(`theme-light`,`theme-dark`),t.classList.add(`theme-${n}`)},be=e=>{if(typeof window>`u`||!window.matchMedia)return()=>{};let t=window.matchMedia(`(prefers-color-scheme: dark)`),n=t=>{e(t.matches?`dark`:`light`)};return t.addEventListener(`change`,n),()=>t.removeEventListener(`change`,n)};function xe({isOpen:e,onComplete:t}){let[n,r]=(0,l.useState)(`storage`),[i,a]=(0,l.useState)(!1),[o,s]=(0,l.useState)(``),[c,d]=(0,l.useState)(`system`);if(!e)return null;let f=e=>{a(e),e?r(`setup`):t({allowsStorage:!1,theme:`system`})},p=()=>{t({allowsStorage:i,username:o.trim()||void 0,theme:c})},m=()=>{s(``),p()},h=e=>{d(e),$(e)};return(0,u.jsx)(`div`,{className:`welcome-modal-overlay`,children:(0,u.jsx)(`div`,{className:`welcome-modal`,children:n===`storage`?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`div`,{className:`welcome-modal-header`,children:(0,u.jsx)(`h2`,{children:`Welcome to Programming Notes! 📚`})}),(0,u.jsxs)(`div`,{className:`welcome-modal-content`,children:[(0,u.jsx)(`p`,{children:`To provide you with a personalized experience, we'd like to save your preferences and reading history locally on your device.`}),(0,u.jsxs)(`div`,{className:`storage-benefits`,children:[(0,u.jsxs)(`div`,{className:`benefit-item`,children:[(0,u.jsx)(`span`,{className:`benefit-icon`,children:`🎨`}),(0,u.jsx)(`span`,{children:`Remember your theme preference`})]}),(0,u.jsxs)(`div`,{className:`benefit-item`,children:[(0,u.jsx)(`span`,{className:`benefit-icon`,children:`📖`}),(0,u.jsx)(`span`,{children:`Track your reading history`})]}),(0,u.jsxs)(`div`,{className:`benefit-item`,children:[(0,u.jsx)(`span`,{className:`benefit-icon`,children:`👤`}),(0,u.jsx)(`span`,{children:`Personalized welcome messages`})]})]}),(0,u.jsxs)(`p`,{className:`storage-note`,children:[(0,u.jsx)(`strong`,{children:`Your privacy matters:`}),` All data stays on your device. Nothing is sent to any servers.`]})]}),(0,u.jsxs)(`div`,{className:`welcome-modal-actions`,children:[(0,u.jsx)(`button`,{onClick:()=>f(!1),className:`btn-secondary`,children:`No Thanks`}),(0,u.jsx)(`button`,{onClick:()=>f(!0),className:`btn-primary`,children:`Allow Local Storage`})]})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`div`,{className:`welcome-modal-header`,children:(0,u.jsx)(`h2`,{children:`Let's Personalize Your Experience ✨`})}),(0,u.jsxs)(`div`,{className:`welcome-modal-content`,children:[(0,u.jsxs)(`div`,{className:`setup-section`,children:[(0,u.jsx)(`label`,{htmlFor:`username`,className:`setup-label`,children:`What should we call you? (Optional)`}),(0,u.jsx)(`input`,{id:`username`,type:`text`,value:o,onChange:e=>s(e.target.value),placeholder:`Enter your name...`,className:`setup-input`,maxLength:50})]}),(0,u.jsxs)(`div`,{className:`setup-section`,children:[(0,u.jsx)(`label`,{className:`setup-label`,children:`Choose your theme`}),(0,u.jsxs)(`div`,{className:`theme-options`,children:[(0,u.jsxs)(`button`,{onClick:()=>h(`system`),className:`theme-option ${c===`system`?`active`:``}`,children:[(0,u.jsx)(`span`,{className:`theme-icon`,children:`🖥️`}),(0,u.jsxs)(`div`,{className:`theme-info`,children:[(0,u.jsx)(`div`,{className:`theme-name`,children:`System`}),(0,u.jsx)(`div`,{className:`theme-desc`,children:`Match your device`})]})]}),(0,u.jsxs)(`button`,{onClick:()=>h(`light`),className:`theme-option ${c===`light`?`active`:``}`,children:[(0,u.jsx)(`span`,{className:`theme-icon`,children:`☀️`}),(0,u.jsxs)(`div`,{className:`theme-info`,children:[(0,u.jsx)(`div`,{className:`theme-name`,children:`Light`}),(0,u.jsx)(`div`,{className:`theme-desc`,children:`Bright and clean`})]})]}),(0,u.jsxs)(`button`,{onClick:()=>h(`dark`),className:`theme-option ${c===`dark`?`active`:``}`,children:[(0,u.jsx)(`span`,{className:`theme-icon`,children:`🌙`}),(0,u.jsxs)(`div`,{className:`theme-info`,children:[(0,u.jsx)(`div`,{className:`theme-name`,children:`Dark`}),(0,u.jsx)(`div`,{className:`theme-desc`,children:`Easy on the eyes`})]})]})]})]})]}),(0,u.jsxs)(`div`,{className:`welcome-modal-actions`,children:[(0,u.jsx)(`button`,{onClick:m,className:`btn-secondary`,children:`Skip Name`}),(0,u.jsx)(`button`,{onClick:p,className:`btn-primary`,children:`Get Started`})]})]})})})}function Se({username:e,preferences:t,onThemeChange:n,onClearData:r,onShowHistory:i}){let[a,o]=(0,l.useState)(!1),[s,c]=(0,l.useState)(!1),d=(0,l.useRef)(null);(0,l.useEffect)(()=>{let e=e=>{d.current&&!d.current.contains(e.target)&&o(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let f=()=>{c(!0),o(!1)},p=()=>{r(),c(!1)},m=e=>{switch(e){case`light`:return`☀️`;case`dark`:return`🌙`;case`system`:return`🖥️`;default:return`🖥️`}};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`div`,{className:`user-menu`,ref:d,children:[(0,u.jsxs)(`button`,{onClick:()=>o(!a),className:`user-menu-trigger`,"aria-label":`User menu`,children:[(0,u.jsx)(`div`,{className:`user-avatar`,children:e?e.charAt(0).toUpperCase():`👤`}),(0,u.jsx)(`span`,{className:`user-menu-arrow`,children:a?`▴`:`▾`})]}),a&&(0,u.jsxs)(`div`,{className:`user-menu-dropdown`,children:[e&&(0,u.jsx)(`div`,{className:`user-menu-header`,children:(0,u.jsxs)(`div`,{className:`user-greeting`,children:[`Welcome back, `,(0,u.jsx)(`strong`,{children:e}),`!`]})}),(0,u.jsxs)(`div`,{className:`user-menu-section`,children:[(0,u.jsx)(`div`,{className:`user-menu-label`,children:`Theme`}),(0,u.jsx)(`div`,{className:`theme-selector`,children:[`system`,`light`,`dark`].map(e=>(0,u.jsxs)(`button`,{onClick:()=>{n(e),o(!1)},className:`theme-selector-btn ${t.theme===e?`active`:``}`,children:[(0,u.jsx)(`span`,{className:`theme-selector-icon`,children:m(e)}),(0,u.jsx)(`span`,{className:`theme-selector-name`,children:e.charAt(0).toUpperCase()+e.slice(1)})]},e))})]}),(0,u.jsx)(`div`,{className:`user-menu-section`,children:(0,u.jsxs)(`button`,{onClick:()=>{i(),o(!1)},className:`user-menu-item`,children:[(0,u.jsx)(`span`,{className:`user-menu-icon`,children:`📚`}),`Reading History`,t.visitedNotes.length>0&&(0,u.jsx)(`span`,{className:`history-count`,children:t.visitedNotes.length})]})}),(0,u.jsx)(`div`,{className:`user-menu-section user-menu-danger`,children:(0,u.jsxs)(`button`,{onClick:f,className:`user-menu-item danger`,children:[(0,u.jsx)(`span`,{className:`user-menu-icon`,children:`🗑️`}),`Clear All Data`]})})]})]}),s&&(0,u.jsx)(`div`,{className:`confirm-modal-overlay`,children:(0,u.jsxs)(`div`,{className:`confirm-modal`,children:[(0,u.jsx)(`div`,{className:`confirm-modal-header`,children:(0,u.jsx)(`h3`,{children:`⚠️ Clear All Data`})}),(0,u.jsxs)(`div`,{className:`confirm-modal-content`,children:[(0,u.jsx)(`p`,{children:`This will permanently delete all your saved preferences, reading history, and personal settings.`}),(0,u.jsx)(`p`,{className:`confirm-warning`,children:(0,u.jsx)(`strong`,{children:`Once you delete your progress, this cannot be undone!`})})]}),(0,u.jsxs)(`div`,{className:`confirm-modal-actions`,children:[(0,u.jsx)(`button`,{onClick:()=>c(!1),className:`btn-secondary`,children:`Cancel`}),(0,u.jsx)(`button`,{onClick:p,className:`btn-danger`,children:`Yes, Delete Everything`})]})]})})]})}function Ce({isOpen:e,preferences:t,onClose:n,onSelectNote:r}){if(!e)return null;let i=e=>{r(e),n()},a=e=>{let t=H(e);return t?e===`home.md`?{name:`Home`,icon:`🏠`}:I[t]||{name:t,icon:`📄`}:{name:`General`,icon:`📄`}};return(0,u.jsx)(`div`,{className:`history-modal-overlay`,onClick:n,children:(0,u.jsxs)(`div`,{className:`history-modal`,onClick:e=>e.stopPropagation(),children:[(0,u.jsxs)(`div`,{className:`history-modal-header`,children:[(0,u.jsx)(`h3`,{children:`📚 Reading History`}),(0,u.jsx)(`button`,{onClick:n,className:`history-modal-close`,"aria-label":`Close history`,children:`✕`})]}),(0,u.jsx)(`div`,{className:`history-modal-content`,children:t.visitedNotes.length===0?(0,u.jsxs)(`div`,{className:`history-empty`,children:[(0,u.jsx)(`div`,{className:`history-empty-icon`,children:`📖`}),(0,u.jsx)(`div`,{className:`history-empty-title`,children:`No reading history yet`}),(0,u.jsx)(`div`,{className:`history-empty-desc`,children:`Start exploring the notes to build your reading history!`})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`div`,{className:`history-info`,children:[`You've visited `,t.visitedNotes.length,t.visitedNotes.length===1?` note`:` notes`,` `,`recently`]}),(0,u.jsx)(`div`,{className:`history-list`,children:t.visitedNotes.map((e,t)=>{let n=a(e),r=z(e);return(0,u.jsxs)(`div`,{className:`history-item`,onClick:()=>i(e),children:[(0,u.jsxs)(`div`,{className:`history-item-main`,children:[(0,u.jsxs)(`div`,{className:`history-item-header`,children:[(0,u.jsx)(`span`,{className:`history-item-icon`,children:n.icon}),(0,u.jsx)(`span`,{className:`history-item-title`,children:r})]}),(0,u.jsxs)(`div`,{className:`history-item-meta`,children:[(0,u.jsx)(`span`,{className:`history-item-section`,children:n.name}),(0,u.jsxs)(`span`,{className:`history-item-position`,children:[`#`,t+1]})]})]}),(0,u.jsx)(`div`,{className:`history-item-arrow`,children:`→`})]},`${e}-${t}`)})})]})})]})})}function we(){let[e,t]=(0,l.useState)(null),[n,r]=(0,l.useState)(`home.md`),[i,a]=(0,l.useState)([`home.md`]),[o,s]=(0,l.useState)(null),[c,f]=(0,l.useState)(!1),[p,m]=(0,l.useState)([]),[h,g]=(0,l.useState)(``),[_,v]=(0,l.useState)(!1),[y,b]=(0,l.useState)(()=>Z()),[x,S]=(0,l.useState)(!1),[C,w]=(0,l.useState)(!1),T=(0,l.useCallback)(()=>{t(W(`home.md`)),r(`home.md`),a([`home.md`]),s(`home`),E(`home.md`,`home`)},[]);(0,l.useEffect)(()=>{if(me()&&!X()&&(S(!0),he()),$(y.theme),y.theme===`system`)return be(()=>{y.theme===`system`&&$(`system`)})},[y.theme]),(0,l.useEffect)(()=>{let e=new URLSearchParams(window.location.search),n=e.get(`note`),i=e.get(`section`);if(n)try{t(W(n)),r(n),a([n]);let e=i||H(n);s(e),E(n,e)}catch(e){console.error(`Failed to load note from URL:`,n,e),T()}else T()},[T]),(0,l.useEffect)(()=>{if(e){let e=setTimeout(()=>{A()},100);return()=>clearTimeout(e)}},[e]);let E=(e,t)=>{let n=new URLSearchParams;n.set(`note`,e),t&&n.set(`section`,t);let r=`${window.location.pathname}?${n.toString()}`;window.history.pushState({},``,r)},D=e=>{console.log(`Loading note:`,e),t(null),e!==n&&(a(t=>[...t,e]),r(e)),_e(e);let i=H(e);s(i),E(e,i),f(!1),v(!1),setTimeout(()=>{try{t(W(e));let n=document.querySelector(`.center.main`);n&&(n.scrollTop=0),setTimeout(()=>{A()},50)}catch(n){console.error(`Error loading note:`,e,n),t(`# Error

Note not found: `+e)}},100)},O=()=>{f(!c)},k=()=>{f(!1)},A=()=>{document.querySelectorAll(`.markdown-content h3, .markdown-content h4`).forEach(e=>{e.textContent&&e.textContent.includes(`Up Next`)&&e.classList.add(`up-next-section`)})},j=()=>{if(i.length>1){let e=[...i];e.pop();let n=e[e.length-1];a(e),r(n);try{t(W(n));let e=document.querySelector(`.center.main`);e&&(e.scrollTop=0)}catch(e){console.error(`Error loading previous note:`,n,e)}}},M=e=>{g(e),e.trim()?(m(ee(e)),v(!0)):(m([]),v(!1))},N=()=>{g(``),m([]),v(!1)},P=e=>{D(e),v(!1)},F=e=>{if(ge(e.allowsStorage),e.allowsStorage){let t={...y,allowsStorage:!0,username:e.username,theme:e.theme,firstVisit:!1};b(t),Q(t)}$(e.theme),S(!1)},L=e=>{b({...y,theme:e}),Q({theme:e}),$(e)},z=()=>{ve(),b({theme:`system`,allowsStorage:!1,visitedNotes:[],firstVisit:!0}),$(`system`),window.location.reload()},B=()=>{w(!0)},V=o&&o in I?I[o]:null,U=o===`home`?`📚 Programming Notes Hub`:V?`${V.icon} ${V.name} Notes`:`📚 Programming Notes`;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`header`,{children:[(0,u.jsxs)(`button`,{className:`hamburger-menu`,onClick:O,"aria-label":`Toggle navigation menu`,children:[(0,u.jsx)(`span`,{}),(0,u.jsx)(`span`,{}),(0,u.jsx)(`span`,{})]}),(0,u.jsx)(`h1`,{children:U}),(0,u.jsx)(Se,{username:y.username,preferences:y,onThemeChange:L,onClearData:z,onShowHistory:B})]}),(0,u.jsxs)(`div`,{style:{display:`flex`,width:`100%`,marginTop:`var(--header-height)`},children:[(0,u.jsx)(K,{setCurrentNote:D,currentSection:o,currentNoteName:n,onSearch:M,onClearSearch:N}),c&&(0,u.jsx)(`div`,{className:`mobile-overlay`,onClick:k,children:(0,u.jsxs)(`div`,{className:`mobile-menu`,onClick:e=>e.stopPropagation(),children:[(0,u.jsxs)(`div`,{className:`mobile-menu-header`,children:[(0,u.jsx)(`h2`,{children:`Navigation`}),(0,u.jsx)(`button`,{className:`close-mobile-menu`,onClick:k,"aria-label":`Close navigation menu`,children:`✕`})]}),(0,u.jsx)(K,{setCurrentNote:D,currentSection:o,currentNoteName:n,onSearch:M,onClearSearch:N,isMobile:!0})]})}),(0,u.jsxs)(`div`,{className:`center main`,children:[(0,u.jsxs)(`div`,{className:`navigation-bar`,children:[i.length>1&&(0,u.jsx)(`button`,{onClick:j,className:`back-button`,children:`← Back`}),(0,u.jsx)(`span`,{className:`current-note`,children:R(n)})]}),e===null&&(0,u.jsx)(d,{}),e!==null&&(0,u.jsxs)(`div`,{className:`markdown-content`,children:[(0,u.jsx)(ue,{content:e,styleUpNextSections:A,loadNote:D}),(0,u.jsx)(fe,{currentFilename:n,onLoadNote:D})]})]}),(0,u.jsx)(`div`,{className:`right-nav`,children:(0,u.jsx)(ae,{currentNote:e,currentNoteName:n,onLoadNote:D})})]}),_&&(0,u.jsx)(pe,{results:p,query:h,onSelectNote:P,onClose:()=>v(!1)}),(0,u.jsx)(xe,{isOpen:x,onComplete:F}),(0,u.jsx)(Ce,{isOpen:C,preferences:y,onClose:()=>w(!1),onSelectNote:D})]})}var Te=we;(0,c.createRoot)(document.getElementById(`root`)).render((0,u.jsx)(l.StrictMode,{children:(0,u.jsx)(Te,{})}));