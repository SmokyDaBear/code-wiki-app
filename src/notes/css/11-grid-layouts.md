# CSS Grid Layouts

## Overview

CSS Grid is a powerful layout system in CSS that allows you to create complex, responsive grid-based layouts with ease. It provides a two-dimensional grid-based layout system, meaning it can handle both rows and columns, unlike Flexbox which is primarily one-dimensional.

It is somewhat similar to tables in HTML, but far more flexible and capable. With CSS Grid, you can define rows and columns, position items precisely within the grid, and create responsive designs that adapt to different screen sizes.

## Key Concepts

- **Grid Container**: The parent element that holds the grid items. You define a grid container by setting the `display` property to `grid` or `inline-grid`.
- **Grid Items**: The child elements inside a grid container. These items can be positioned and sized using various grid properties.

## Grid Container Properties

- `display: grid;` - Defines a grid container.
- `grid-template-columns` - Defines the number and size of the columns in the grid.
- `grid-template-rows` - Defines the number and size of the rows in the grid.
- `gap` - Defines the space between rows and columns (also known as gutters), similar to with flex.
- `grid-auto-flow` - Controls how auto-placed items are inserted into the grid (row, column, dense).

## Grid Item Properties

- `grid-column` - Specifies the start and end positions of a grid item in the columns.
- `grid-row` - Specifies the start and end positions of a grid item in the rows.
- `justify-self` - Aligns a grid item along the row axis (start, end, center, stretch).
- `align-self` - Aligns a grid item along the column axis (start, end, center, stretch).

Now, lets say we have a image gallery where we want to arrange images in a grid format with rows and columns, and the items in that grid have different sizes. CSS Grid would be suitable for this scenario.

#### Example Code:

```css
.gallery {
  display: grid;
  color: white;
  width: 300px;
  max-width: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(7, 50px);
  gap: 0.2em;
  font-size: clamp(8px, 2vw, 16px);
}
.gallery-item-header {
  grid-column: span 5;
  background-color: gray;
  text-align: center;
  padding: 0.5em;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.gallery-item {
  box-sizing: border-box;
  text-align: center;
}
.gallery-item.square {
  width: 100%;
  height: 100%;
  background-color: red;
  grid-row: span 1;
  grid-column: span 1;
}
.gallery-item.rectangle {
  width: 100%;
  height: 100%;
  grid-row: span 1;
  grid-column: span 2;
  background-color: blue;
}
.gallery-item.large {
  width: 100%;
  height: 100%;
  grid-column: span 2;
  grid-row: span 2;
  background-color: purple;
}
```

#### Notice the use of grid-column and grid-row to span multiple columns and rows for certain items, like the header, and larger gallery items.

When designing your own grid layouts, you can adjust the number of columns and rows, as well as the size of each item, to fit your specific design needs, and it is a good idea to assign images a class based on their aspect ratio (square, rectangle, large) to make styling easier.

  <style>
  .gallery {
  display: grid;
  color: white;
  width: 300px;
  max-width: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(7, 50px);
  gap: 0.2em;
  font-size: clamp(8px, 2vw, 16px);
}
.gallery-item-header {
  grid-column: span 5;
  background-color: gray;
  text-align: center;
  padding: 0.5em;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.gallery-item{
  box-sizing: border-box;
  text-align: center;
}
.gallery-item.square {
  width: 100%;
  height: 100%;
  background-color: red;
  grid-row: span 1;
  grid-column: span 1;
}
.gallery-item.rectangle {
  width: 100%;
  height: 100%;
  grid-row: span 1;
  grid-column: span 2;
  background-color: blue;
}
.gallery-item.large {
  width: 100%;
  height: 100%;
  grid-column: span 2;
  grid-row: span 2;
  background-color: purple;
}
  </style>
  <div class="gallery">
<div class="gallery-item-header">Header</div>
  <div class="gallery-item square">Square</div>
  <div class="gallery-item rectangle">Rectangle</div>
  <div class="gallery-item large">Large</div>
  <div class="gallery-item rectangle">Rectangle</div>
  <div class="gallery-item square">Square</div>
  <div class="gallery-item large">Large</div>
  <div class="gallery-item rectangle">Rectangle</div>
  <div class="gallery-item square">Square</div>
  <div class="gallery-item square">Square</div>
  <div class="gallery-item rectangle">Rectangle</div>
  <div class="gallery-item square">Square</div>
  <div class="gallery-item rectangle">Rectangle</div>
  <div class="gallery-item large">Large</div>
  <div class="gallery-item rectangle">Rectangle</div>
  <div class="gallery-item square">Square</div>
</div>

#### Learn More about CSS Grid Layouts

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [CSS-Tricks Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [W3Schools CSS Grid Tutorial](https://www.w3schools.com/css/css_grid.asp)
