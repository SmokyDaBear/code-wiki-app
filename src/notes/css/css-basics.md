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

```css
p {
  color: blue;
  font-size: 16px;
}
```

### Class Selectors

```css
.highlight {
  background-color: yellow;
  font-weight: bold;
}
```

### ID Selectors

```css
#header {
  background-color: #333;
  color: white;
  padding: 20px;
}
```

## Box Model

Every element in CSS is a rectangular box with:

- Content
- Padding
- Border
- Margin

![CSS Box Model](/images/css-box-model.jpg)

```css
.box {
  width: 200px;
  height: 100px;
  padding: 10px;
  border: 2px solid black;
  margin: 20px;
}
```

## Next Steps

- Learn about [Flexbox](flexbox-basics.md)
- Explore [CSS Grid](grid-basics.md)
- Master [Responsive Design](responsive-design.md)
