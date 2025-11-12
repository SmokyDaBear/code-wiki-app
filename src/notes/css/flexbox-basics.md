# Flexbox Basics

Flexbox, or the Flexible Box Layout, is a CSS layout model that allows you to design complex layouts more easily and efficiently. It provides a way to distribute space among items in a container, even when their size is unknown or dynamic.

## Key Concepts

- **Flex Container**: The parent element that holds the flex items. You define a flex container by setting the `display` property to `flex` or `inline-flex`.
- **Flex Items**: The child elements inside a flex container. These items can be manipulated using various flexbox properties.

## Flex Container Properties

- `display: flex;` - Defines a flex container.
- `flex-direction` - Defines the direction of the flex items (row, row-reverse, column, column-reverse).
- `justify-content` - Aligns flex items along the main axis (flex-start, flex-end, center, space-between, space-around).
- `align-items` - Aligns flex items along the cross axis (stretch, flex-start, flex-end, center, baseline).
- `flex-wrap` - Controls whether flex items wrap onto multiple lines (nowrap, wrap, wrap-reverse).

## Flex Item Properties

- `order` - Controls the order of flex items.
- `flex-grow` - Defines the ability of a flex item to grow if necessary.
- `flex-shrink` - Defines the ability of a flex item to shrink if necessary.
- `flex-basis` - Defines the default size of a flex item before the remaining space is distributed.
- `align-self` - Allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

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
