# Positioning

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

```css
.element {
  position: static; /* Default value */
}
```

#### Example:

<div style="margin-bottom: 20px; background-color: #cad4a6ff; padding: 10px;">
  <div style="border: 1px solid black; padding: 10px; width: 200px; height: 50px; position: static;">
    <div class="element">This element is statically positioned.</div>
  </div>
</div>

### Relative Positioning

Elements are positioned relative to their normal position. You can use the `top`, `right`, `bottom`, and `left` properties to adjust their position.

#### Example Code:

```css
.element {
  position: relative;
  top: 10px; /* Moves the element 10px down from its normal position */
  left: 20px; /* Moves the element 20px to the right from its normal position */
}
```

#### Example:

<div style="margin-bottom: 20px; background-color: #cad4a6ff; padding: 10px;">
  <div style="border: 1px solid black; padding: 10px; width: 200px; height: 50px; position: relative; top: 10px; left: 20px;">
    <div class="element">This element is relatively positioned.</div>
  </div>
</div>

### Absolute Positioning

Elements are positioned relative to their nearest positioned ancestor (an ancestor with a position other than `static`). If there is no such ancestor, it is positioned relative to the initial containing block (usually the viewport).

#### Example Code:

```css
.element {
  position: absolute;
  top: 50px; /* 50px from the top of the nearest positioned ancestor */
  left: 100px; /* 100px from the left of the nearest positioned ancestor */
}
```

#### Example:

<div style="margin-bottom: 20px; background-color: #cad4a6ff; padding: 10px; position: relative; height: 200px;">
  <div style="border: 1px solid black; padding: 10px; width: 200px; height: 50px; position: absolute; top: 50px; left: 100px;">
    <div class="element">This element is absolutely positioned.</div>
  </div>
</div>

### Fixed Positioning

Elements are positioned relative to the viewport and remain in the same position even when the page is scrolled.

#### Example Code:

```css
.element {
  position: fixed;
  top: 0; /* Stays at the top of the viewport */
  right: 0; /* Stays at the right of the viewport */
}
```

#### An Example of this can be seen from the header bar of this very page you are reading now, as well as the side table of contents. These elements remain fixed in place as you scroll through the content.

### Sticky Positioning

Elements are treated as `relative` until they reach a specified scroll position, at which point they are treated as `fixed`. The `top`, `right`, `bottom`, and `left` properties determine the scroll position at which the element becomes fixed. Keep in mind that for `sticky` positioning to work, the parent container must have a height greater than the sticky element, and also must be positioned (i.e.,`relative` not `static`).

#### Example Code:

```css
.element {
  position: sticky;
  top: 0; /* Sticks to the top of the viewport when scrolled to */
}
```

#### Example:

<div style="margin-bottom: 200px; background-color: #cad4a6ff; padding: 10px; height: 300px; overflow: auto;">
  <div style="border: 1px solid black; padding: 10px; width: 200px; height: 50px; position: sticky; top: 0; background-color: white;">
    <div class="element">This element is sticky positioned.</div>
  </div>
  <div style="height: 600px;"><p>Scroll down to see the sticky effect.</p>
  <p>Keep Scrolling...</p></div>
</div>

## Z-Index

The `z-index` property controls the vertical stacking order of positioned elements that overlap. Higher `z-index` values are displayed in front of lower values.

#### Example Code:

```css
.element1 {
  position: absolute;
  z-index: 1; /* Lower stack order */
}
```

```css
.element2 {
  position: absolute;
  z-index: 10; /* Higher stack order */
}
```

#### Example:

<div style="position: relative; height: 150px; background-color: #cad4a6ff; padding: 10px;">
  <div style="position: absolute; top: 20px; left: 20px; width: 100px; height: 100px; background-color: red; z-index: 1;">
    <div class="element1">Element 1 (z-index: 1)</div>
  </div>
  <div style="position: absolute; top: 50px; left: 50px; width: 100px; height: 100px; background-color: blue; z-index: 10;">
    <div class="element2">Element 2 (z-index: 10)</div>
  </div>
</div>

#### Tip: When using `z-index`, ensure that the elements are positioned (i.e., have a `position` value other than `static`). And also keep in mind that if an item has a parent with a defined `z-index`, it will be constrained within that parent's stacking context. For example, a child element cannot appear in front of an ancestor element with a lower `z-index`, even if the child has a higher `z-index` value.
