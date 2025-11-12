# Classes, IDs, and Data Attributes

In HTML, classes, IDs, and data attributes are used to add metadata to elements for styling, scripting, and accessibility purposes.

## Classes

Classes are used to group elements together and apply the same styles or behaviors to multiple elements. They are defined using the `class` attribute.

Example:

```html
<p class="highlight">This paragraph has a class.</p>
<div class="container">
  <p class="highlight">This paragraph also has a class.</p>
</div>
```

## IDs

IDs are unique identifiers for a single element within a page. They are defined using the `id` attribute.

Example:

```html
<h1 id="main-title">Main Title</h1>
<p id="description">This is the description.</p>
```

## Data Attributes

Data attributes allow you to store extra information in HTML elements that can be accessed via JavaScript or CSS. They start with `data-`.

Example:

```html
<div data-role="button" data-action="submit">Submit</div>
```

These attributes provide flexibility in styling and scripting without cluttering the HTML structure.


#### Tip: Use classes for styling multiple elements, IDs for unique elements, and data attributes for storing custom data.
