# CSS Basics

Welcome to CSS! This guide covers the fundamentals of Cascading Style Sheets.

## What is CSS?

CSS (Cascading Style Sheets) is a language used to describe the presentation of HTML documents. It controls layout, colors, fonts, and visual styling.

## Basic Syntax: Selectors

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

Element selectors target HTML elements by their tag name, such as `p`, `h1`, `div`, etc.

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

Class selectors target HTML elements with a specific class attribute. Classes are defined in HTML using the `class` attribute and can be reused on multiple elements, note the `.` before the class name in CSS.

#### Example Code:

```css
.highlight {
  background-color: yellow;
  color: black;
  font-weight: bold;
}
```

#### Example Output:

<p class="highlight" style="background-color: yellow; color: black; font-weight: bold;">This text is highlighted using a class selector.</p>

### ID Selectors

ID selectors target a unique HTML element with a specific ID attribute. IDs are defined in HTML using the `id` attribute and should be unique within a page, note the `#` before the ID name in CSS.

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
- **Relative Units**: `%` (percentage), `em` (relative to the font size of the parent element), `rem` (relative to the font size of the root element), `vw` (viewport width), `vh` (viewport height)

#### Tip: The `Viewport` units (`vw`, `vh`) are particularly useful for responsive designs, as they adapt to the size of the user's screen, and can help create layouts that work well on different devices by adjusting element sizes based on the viewport dimensions.

This is commonly used with the `clamp` function to create fluid typography and layouts.

For `clamp`, the syntax is:

```css
.responsive-heading {
  font-size: clamp(1rem, 2.5vw, 2rem);
}
```

The first size is the minimum size, the second is the preferred size based on viewport width, and the third is the maximum size.

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

## Font Properties

CSS provides various properties to style text and fonts:

- `font-family` - Specifies the font of the text, like Arial, Times New Roman, etc.
- `font-size` - Sets the size of the font.
- `font-weight` - Controls the thickness of the text (normal, bold, etc.).
- `font-style` - Defines the style of the font (normal, italic, oblique).
- `text-decoration` - Adds decoration to text (underline, overline, line-through).
- `text-align` - Aligns the text (left, right, center, justify).
- `text-transform` - Transforms the text (uppercase, lowercase, capitalize).
- `line-height` - Sets the height of a line of text, which affects the spacing between lines.
- `letter-spacing` - Adjusts the space between characters in the text.
- `font-variant` - Controls the use of alternate glyphs for a font (small-caps, etc.).

#### Example Code:

```css
.big-light-text {
  font-family: "Arial", sans-serif;
  font-size: 24px;
  font-weight: lighter;
  font-style: italic;
  text-decoration: underline;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.5;
  letter-spacing: 2px;
}
.small-bold-text {
  font-family: "Times New Roman", serif;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
  text-align: left;
  text-transform: none;
  line-height: 1.2;
  letter-spacing: normal;
}
.small-caps-text {
  font-variant: small-caps;
}
```

#### Example Output:

<div class="big-light-text" style="font-family: 'Arial', sans-serif; font-size: 24px; font-weight: lighter; font-style: italic; text-decoration: underline; text-align: center; text-transform: uppercase; line-height: 1.5; letter-spacing: 2px;">
  This is a big, light, italic, underlined, centered, uppercase text.
</div>
<br/>
<div class="small-bold-text" style="font-family: 'Times New Roman', serif; font-size: 14px; font-weight: bold; font-style: normal; text-decoration: none; text-align: left; text-transform: none; line-height: 1.2; letter-spacing: normal;">
  This is a small, bold, normal-style text.
</div>
<br/>
<div class="small-caps-text" style="font-variant: small-caps; font-size: 16px; margin-top: 10px;">
  This text is in small-caps, which automatically capitalizes lowercase letters, while leaving them smaller than uppercase letters.
</div>
