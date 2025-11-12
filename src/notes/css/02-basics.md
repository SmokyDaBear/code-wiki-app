# CSS Basics

Welcome to CSS! This guide covers the fundamentals of Cascading Style Sheets.

## What is CSS?

CSS (Cascading Style Sheets) is a language used to describe the presentation of HTML documents. It controls layout, colors, fonts, and visual styling.

## Basic Syntax

CSS consists of selectors and declaration blocks:

```css
selector {
  property: value;
  property: value;
}
```

## Common Selectors

Selectors are used to target HTML elements for styling.
To learn about more about HTML classes, IDs, and Data attributes, visit the [HTML Notes](../html/html-two.md) section.

### Element Selectors

#### Example Code:

```css
p {
  color: blue;
  font-size: 16px;
}
```

#### Example Output:

<p style="color: blue; font-size: 16px;">This is a paragraph styled with an element selector.</p>

### Class Selectors

#### Example Code:

```css
.highlight {
  background-color: yellow;
  font-weight: bold;
}
```

#### Example Output:

<p class="highlight" style="background-color: yellow; font-weight: bold;">This text is highlighted using a class selector.</p>

### ID Selectors

#### Example Code:

```css
#header {
  background-color: #333;
  color: white;
  padding: 20px;
}
```

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

```css
.box {
  width: 200px;
  height: 100px;
  padding: 10px;
  border: 2px solid black;
  margin: 20px;
}
```

#### Example Output:

<div class="box" style="width: 200px; height: 100px; padding: 10px; border: 2px solid black; margin: 20px;">
  This box demonstrates the CSS Box Model.
</div>

## Measurement Units

CSS uses various units to define sizes and lengths:

- **Absolute Units**: `px` (pixels), `cm` (centimeters), `mm` (millimeters), `in` (inches), `pt` (points), `pc` (picas)
- **Relative Units**: `%` (percentage), `em` (relative to the font size of the element), `rem` (relative to the font size of the root element), `vw` (viewport width), `vh` (viewport height)

All of these units have their specific use cases depending on the design requirements.
Pixels (`px`) are commonly used for precise control, while relative units like `em` and `rem` are preferred for responsive designs.

### Note on `em` vs `rem`

The difference between `em` and `rem` is that `em` is relative to the font size of its nearest parent, while `rem` is relative to the root (html) element's font size.

#### Example Code:

```css
.container {
  font-size: 10px; /* Base font size */
}
.child-em {
  font-size: 1.5em; /* 1.5 times the parent's font size (15px) */
}
.child-rem {
  font-size: 1.5rem; /* 1.5 times the root font size (24px if root is 16px) */
}
```

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

Measurement are most commonly used in properties such as `width`, `height`, `margin`, `padding`, and `font-size`.
