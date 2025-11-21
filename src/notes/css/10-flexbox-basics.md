# Flexbox Basics

Flexbox, or the Flexible Box Layout, is a CSS layout model that allows you to design complex layouts more easily and efficiently. It provides a way to distribute space among items in a container, even when their size is unknown or dynamic.

## Key Concepts

- **Flex Container**: The parent element that holds the flex items. You define a flex container by setting the `display` property to `flex` or `inline-flex`.
- **Flex Items**: The child elements inside a flex container. These items can be manipulated using various flexbox properties.

## Flex Container Properties

- `display: flex;` - Defines a flex container.
- `flex-direction` - Defines the direction of the flex items
  - `row`: Items are placed in a row, from left to right (default).
  - `row-reverse`: Items are placed in a row, from right to left.
  - `column`: Items are placed in a column, from top to bottom.
  - `column-reverse`: Items are placed in a column, from bottom to top.
- `justify-content` - Aligns flex items along the main axis (flex-start, flex-end, center, space-between, space-around).
  - `space-between`: Distributes items evenly, with the first item at the start and the last item at the end.
  - `space-around`: Distributes items evenly with equal space around them.
  - `flex-start`: Items are packed toward the start of the flex-direction.
  - `flex-end`: Items are packed toward the end of the flex-direction.
  - `center`: Items are centered along the main axis.
- `align-items` - Aligns flex items along the cross axis.
  - `stretch`: Items stretch to fill the container (default).
  - `flex-start`: Items are aligned to the start of the cross axis.
  - `flex-end`: Items are aligned to the end of the cross axis.
  - `center`: Items are centered along the cross axis.
  - `baseline`: Items are aligned such that their baselines align.
- `flex-wrap` - Controls whether flex items wrap onto multiple lines (nowrap, wrap, wrap-reverse).

#### Tip: Note that the main axis is determined by the `flex-direction` property. For `row` and `row-reverse`, the main axis is horizontal, while for `column` and `column-reverse`, it is vertical, and the cross axis is perpendicular to the main axis.

We can also combine `flex-direction` and `flex-wrap` using the `flex-flow` shorthand property. For example:

```css
.container {
  display: flex;
  flex-flow: row wrap; /* Items will be arranged in a row and will wrap to the next line if necessary */
  max-width: 200px;
  gap: 10px;
}
.child {
  width: 60px;
  height: 60px;
}
```

<div class="container" style="display: flex; flex-flow: row wrap; max-width: 200px; gap: 10px; border: 1px solid black; padding: 10px;">
  <div class="child" style="width: 60px; height: 60px; background-color: lightcoral;">1</div>
  <div class="child" style="width: 60px; height: 60px; background-color: lightblue;">2</div>
  <div class="child" style="width: 60px; height: 60px; background-color: lightgreen;">3</div>
  <div class="child" style="width: 60px; height: 60px; background-color: lightgoldenrodyellow;">4</div>
</div>

## Flex Item Properties

- `flex` - A shorthand property for `flex-grow`, `flex-shrink`, and `flex-basis`. A higher value means the item will take up more space in the flex container, relative to other flex items.
- `order` - Controls the order of flex items, applicable values are integers (default is 0), with lower values appearing first.
- `flex-grow` - Defines the ability of a flex item to grow if necessary, higher values indicate a greater ability to grow.
- `flex-shrink` - Defines the ability of a flex item to shrink if necessary.
- `flex-basis` - Defines the default size of a flex item before the remaining space is distributed.
- `align-self` - Allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

These properties give you fine-grained control over the layout and alignment of items within a flex container, making it easier to create responsive and flexible designs that pick which items should grow, shrink, or stay the same size based on the available space.

## Example Code

```css
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
```

## Example

<div class="container" style="display: flex; flex-direction: row; justify-content: center; align-items: center; height: 500px; border: 1px solid black; position: relative;">
<h4 style="position: absolute; top: 10px; left: 10px;color: black;">Container</h4>
  <div class="item" style="flex: 1; margin: 10px; padding: 20px; background-color: lightblue;">Item 1</div>
  <div class="item" style="flex: 1; margin: 10px; padding: 20px; background-color: lightgreen;">Item 2</div>
  <div class="item" style="flex: 1; margin: 10px; padding: 20px; background-color: lightcoral;">Item 3</div>
</div>

One of the great things about Flexbox is its responsiveness. Flex containers and items can adapt to different screen sizes and orientations, making it easier to create responsive web designs, without the need for complex media queries.

## Flex vs. Grid

Flexbox is ideal for one-dimensional layouts, either in a row or a column, while Grid is designed for two-dimensional layouts, allowing control over both rows and columns simultaneously. Depending on the layout requirements, you may choose one over the other or even combine both for more complex designs.

Flex is generally simpler to use for basic layouts, while Grid offers more control for complex arrangements. Take for instance:

Let's say we have a navigation bar with menu items that need to be spaced evenly across the width of the container. Flexbox would be a great choice here because it allows us to easily distribute the items in a single row.

```css
.navbar {
  display: flex;
  flex-direction: row; //default value
  justify-content: space-between; //"justify" items along main axis with "space-between"
  background-color: #333;
  padding: 10px;
}
.nav-item {
  padding: 10px;
  background-color: lightgray;
}
```

<div class="navbar" style="display: flex; justify-content: space-between; background-color: #333; padding: 10px;">
  <div class="nav-item" style="padding: 10px; background-color: lightgray;">Home</div>
  <div class="nav-item" style="padding: 10px; background-color: lightgray;">About</div>
  <div class="nav-item" style="padding: 10px; background-color: lightgray;">Services</div>
  <div class="nav-item" style="padding: 10px; background-color: lightgray;">Contact</div>
</div>
