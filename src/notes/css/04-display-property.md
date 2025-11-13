# Display

The `display` property in CSS is used to define how an element is displayed on the web page. It determines the layout behavior of an element and its children.

## Common Display Values

- `block`: The element is displayed as a block-level element. It starts on a new line and takes up the full width available. Examples include `<div>`, `<h1>`, and `<p>`.
- `inline`: The element is displayed as an inline element. It does not start on a new line and only takes up as much width as necessary. Examples include `<span>`, `<a>`, and `<strong>`.
- `inline-block`: The element is displayed as an inline-level block container. It allows setting width and height while still flowing inline with other elements.
- `none`: The element is not displayed at all (it is removed from the document flow).
- `flex`: The element is displayed as a block-level flex container, enabling the use of flexbox layout for its children.
- `grid`: The element is displayed as a block-level grid container, enabling the use of grid layout for its children.

### Block Display

Block-level elements take up the full width available and start on a new line. They are also left-aligned by default.

#### Example Code:

```css
.block-element {
  display: block;
}
```

#### Example:

<div style="border: 1px solid black; padding: 10px; width: 300px;">
  <div class="block-element" style="display: block; background-color: lightgray; margin-bottom: 10px;">This is a block element.</div>
  <div class="block-element" style="display: block; background-color: lightgray;">This is another block element.</div>
</div>

### Inline Display

Inline elements only take up as much width as necessary and do not start on a new line, allowing other elements to sit beside them.

#### Example Code:

```css
.inline-element {
  display: inline;
}
```

#### Example:

<div style="border: 1px solid black; padding: 10px; width: 300px;">
  <span class="inline-element" style="display: inline; background-color: lightgray; margin-right: 10px;">This is an inline element.</span>
  <span class="inline-element" style="display: inline; background-color: lightgray;">This is another inline element.</span>
</div>

### Inline-Block Display

Inline-block elements allow you to set width and height while still flowing inline with other elements, making them useful for creating layouts that require both block and inline characteristics. The difference between `inline` and `inline-block` is that `inline-block` elements respect width and height properties, while `inline` elements do not.

#### Example Code:

```css
.inline-block-element {
  display: inline-block;
  background-color: teal;
  width: 100px;
  height: 50px;
}
.inline-element {
  display: inline;
  background-color: lightgray;
  width: 100px;
  height: 50px;
}
```

#### Example:

<div style="border: 1px solid black; padding: 10px; width: 300px;">
  <div class="inline-block-element" style="display: inline-block; background-color: lightgray; margin-right: 10px;">Inline-Block</div>
  <div class="inline-element" style="display: inline; background-color: lightgray;">Inline</div>
</div>

### None Display

When an element's display property is set to `none`, it is completely removed from the document flow and will not be visible on the page.
This is useful for hiding elements without deleting them from the HTML, like dropdown menus or modals, and is often used in conjunction with JavaScript to toggle visibility.

#### Example Code:

```css
.hidden-element {
  display: none;
}
```

#### Example:

#### Notice that the following element is not visible because its display is set to none, check dev tools to confirm by hitting F12, or right clicking and selecting "Inspect":

<div class="hidden-element" style="display: none; background-color: lightgray; padding: 10px;">This element is hidden.</div>

## Flex and Grid Display

The `flex` and `grid` display values are used to create flexible and grid-based layouts, respectively allowing for more complex arrangements of elements.
These layout models provide powerful tools for designing responsive and adaptive web pages that are fully customizable.
Learn more about Flexbox in the [Flexbox Basics](06-flexbox-basics.md) section and Grid in the [Grid Basics](07-grid-basics.md) section.
