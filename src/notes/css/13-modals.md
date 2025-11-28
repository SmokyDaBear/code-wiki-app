# Modals

A modal is a dialog box/popup window that is displayed on top of the current page. Modals are commonly used for user notifications, forms, or additional content without navigating away from the current page.

They are typically implemented using a combination of HTML, CSS, and JavaScript. However, we can create simple modals using pure CSS and HTML.

### JavaScript for Modal Functionality

To make a modal functional, we often use JavaScript to handle opening and closing actions.

We can add event listeners to buttons to toggle the visibility of the modal, by adding or removing a CSS class.

Before you dive into using JavaScript, you can make a basic modal structure with HTML and CSS, although it won't have the interactive functionality without JavaScript.

One of the main reasons is that in order to accomplish a modal with pure CSS, we run into issues with accessibility and usability. For example, closing the modal when clicking outside of it or pressing the Escape key is not feasible with just CSS.

Also, managing focus within the modal for keyboard users is challenging without JavaScript.

## Basic Modal Structure

A basic modal consists of the following elements:

- **Overlay**: A semi-transparent background that covers the entire viewport to focus attention on the modal.
- **Modal Container**: The main content area of the modal.
- **Close Button**: A button to close the modal.

Here is a simple example of a modal using HTML and CSS:

### HTML Structure

```html
<!-- Trigger Button -->
<button id="openModal">Open Modal</button>
<!-- Modal Structure -->
<div id="myModal" class="modal">
  <div class="modal-content">
    <button class="close">&times;</button>
    <h2>Modal Title</h2>
    <p>This is a simple modal example.</p>
  </div>
</div>
```

### CSS Styles

We add the `display: none;` style to the modal by default to keep it hidden until triggered to show.

```css
/* Modal Styles */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
```

If you want to show the modal using only CSS, you can use the `:target` pseudo-class or checkbox hack, but these methods have limitations and aren't really used in production.

## Showing the Modal with JavaScript

If using JavaScript, you would typically add a class to the modal element to show it, like this:

```css
/* Show the modal when it has the 'show' class this would be used if adding a class using javascript*/
.modal.show {
  display: block;
}
```

The JavaScript to handle opening and closing the modal would look something like this:

#### First, create a reference to the modal and buttons

```javascript
// Get modal element
const modal = document.getElementById("myModal");
// Get open modal button
const openModalBtn = document.getElementById("openModal");
// Get close button
const closeBtn = document.querySelector(".close");
```

#### Next, add event listeners to open and close the modal

```javascript
// Listen for open click
openModalBtn.addEventListener("click", () => {
  modal.classList.add("show");
});
// Listen for close click
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});
```

#### It is also common to close the modal when clicking outside of it

```javascript
// Listen for outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
```

## Tips

- Always ensure that modals are accessible, including proper focus management and keyboard navigation.
- Consider using ARIA roles and attributes to enhance accessibility.
- Test modals on different devices and screen sizes to ensure a consistent user experience.

## Backdrop Filter Effect

There is also an effect called `backdrop-filter` that can be used to create a frosted glass effect for the modal overlay when combined with `blur()`, adding a modern touch to your design. This creates a blurred background effect behind the modal, enhancing visual appeal.

```css
.modal {
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
}
```

Other uses of `backdrop-filter` include:

- Saturation adjustments with `saturate()`
- Brightness adjustments with `brightness()`
- Contrast adjustments with `contrast()`
- Grayscale effects with `grayscale()`

These effects can be combined to create unique visual styles for your modals and overlays.
