# Reducing JavaScript

There have been many changes to HTML, that make features that used to take JavaScript to accomplish now possible with pure HTML, and CSS.

Some of these features include:

- Accordions (Expanding Content with a Button Click)
- Input with dropdown of suggestions
- Popovers/Modals

Inspiration came from [htmlhell.dev](https://www.htmhell.dev/adventcalendar/2025/27/)

## JS free Accordions

You can create accordions using the `<details>` and `<summary>` elements in HTML. This allows users to expand and collapse content without needing JavaScript.

```html
<details>
  <summary>Click to expand</summary>
  <p>
    This is the hidden content that will be shown when the summary is clicked.
  </p>
</details>
```

<details>
  <summary>Another Accordion</summary>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</details>

Can also be used to nest accordions:

```html
<details>
  <summary>Parent Accordion</summary>
  <p>This is the content of the parent accordion.</p>
  <details>
    <summary>Child Accordion</summary>
    <p>This is the content of the child accordion.</p>
  </details>
</details>
```

<details>
  <summary>Nested Accordion Example</summary>
  <p>This is the content of the outer accordion.</p>
  <details>
    <summary>Inner Accordion</summary>
    <p>This is the content of the inner accordion.</p>
  </details>
</details>

## Input with dropdown of suggestions

You can use the `<datalist>` element to provide a list of suggestions for an `<input>` field.

```html
<label for="browser">Choose your browser from the list:</label>
<input list="browsers" id="browser" name="browser" />
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Safari"></option>
  <option value="Edge"></option>
  <option value="Opera"></option>
</datalist>
```

The datalist can also be used with other input types like `number`, `text`, etc.

<style>
    input#fruitInput, input#numberInput {
        width: 200px;
        padding: 8px;
        margin: 10px 0;
        box-sizing: border-box;
        display: block;
    };
    </style>
<input type="text" list="fruits" id="fruitInput" name="fruitInput" />
<datalist id="fruits">
    <option value="Apple"></option>
    <option value="Banana"></option>
    <option value="Cherry"></option>
    <option value="Date"></option>
</datalist>

<input type="number" list="numbers" id="numberInput" name="numberInput" />
<datalist id="numbers">
    <option value="10"></option>
    <option value="20"></option>
    <option value="30"></option>
    <option value="40"></option>
</datalist>

## Popovers/Modals

You can create simple popovers or modals using the `<dialog>` element in HTML.

```html
<button id="openDialog" popovertarget="pop-auto">Open Dialog</button>
<dialog popover id="pop-auto">
  <form method="dialog">
    <p>This is a simple dialog.</p>
    <menu>
      <button value="close">Close</button>
    </menu>
  </form>
</dialog>
```

<style>
    .popover-btn {
        width: 95%;
        max-width: 300px;
        margin: 10px;
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
    };
    .popover-btn:hover {
        background-color: #45a049;
    };
    *[popover].example {
        border: 1px solid #ccc;
        padding: 15px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        overflow: auto;
        -webkit-scrollbar: none;
        scrollbar-width: none;
        left: 0;
        top: 0;
        width: max-content;
    };
</style>

<button id="showModal" popovertarget="modal-example" class="popover-btn">Show Modal</button>

<dialog popover id="modal-example" class="example">
  <form method="dialog">
    <p>This is a modal dialog.</p>
    <p>It can be closed by clicking the button below.</p>
    <input type="submit" aria-label="close" class="popover-btn" value="Close Modal" />
  </form>
</dialog>

This creates a dialog that can be opened and closed without any JavaScript. Note that browser support for `<dialog>` may vary, so be sure to check compatibility if you plan to use it in production.

Can also be used for a popover nav menu. Combine with the details accordion for a menu with nested sub-menus.:

```html
<button id="navMenuButtonExample" popovertarget="navMenuExample" >Menu</button>

<dialog popover  id="navMenuExample">
    <details>
    <summary>Open Menu</summary>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Contact</li>
    </ul>
  </details>
  <details>
  <summary>User Settings</summary>
    <ul>
      <li>Profile</li>
      <li>Account</li>
      <li>Logout</li>
    </ul>
    </details>
  </details>
</dialog>
```

<button id="navMenuButtonExample" popovertarget="navMenuExample" class="popover-btn">Menu</button>

<dialog popover class="example" id="navMenuExample">
    <details class="example child">
    <summary class="popover-btn">Open Menu</summary>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Contact</li>
    </ul>
  </details>
  <details id="userSettingsContent" class="example child">
  <summary class="popover-btn">User Settings</summary>
    <ul>
      <li>Profile</li>
      <li>Account</li>
      <li>Logout</li>
    </ul>
    </details>
  </details>
</dialog>
