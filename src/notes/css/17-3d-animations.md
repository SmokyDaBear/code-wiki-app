# Creating 3D Animations and Effects with CSS

3D animations and effects can add depth and interactivity to your web designs. CSS provides several properties that allow you to create 3D transformations and animations. Below are some key concepts and examples to get you started.

## Perspective

The `perspective` property defines the distance between the viewer and the z=0 plane. It gives a 3D space effect to the elements.

```css
.container {
  perspective: 1000px; /* Adjust the value to change the depth effect */
}
```

The value passed to `perspective` determines how intense the 3D effect will be. A smaller value results in a more pronounced 3D effect.

## Perspective-Origin

The `perspective-origin` property sets the origin point for the perspective effect. It can be defined using keywords or length values.

```css
.container {
  perspective-origin: center center; /* Default is center center */
}
```

You can also use specific values like `top left`, `50% 50%`, or pixel values to adjust the origin point.

This makes an effect as if you are looking at the object from a different angle.

## Transform-Style

The `transform-style` property specifies how nested elements are rendered in 3D space. The default value is `flat`, which means that child elements are not rendered in 3D.

We can change it to `preserve-3d` to maintain the 3D transformations of child elements.

```css
.parent {
  transform-style: preserve-3d;
}
```

This allows child elements to retain their 3D transformations when the parent is transformed.

## Adding shadows for depth

To enhance the 3D effect, you can add shadows using the `box-shadow` property. Shadows can give a sense of depth and realism to your 3D elements.

```css
.box {
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
}
```

This adds a shadow to the box, making it appear elevated from the background.

## Example: 3D Rotating Cube

Here's a simple example of a 3D rotating cube using CSS:

Apply classes to all of the faces of the cube:

```html
<div class="container">
  <div class="cube">
    <div class="face front">Front</div>
    <div class="face back">Back</div>
    <div class="face right">Right</div>
    <div class="face left">Left</div>
    <div class="face top">Top</div>
    <div class="face bottom">Bottom</div>
  </div>
</div>
```

Then add css to style and animate the cube:

```css
.container {
  perspective: 800px;
  width: 200px;
  height: 200px;
  position: relative;
}
.cube {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  animation: rotateCube 5s infinite linear;
}
@media (prefers-reduced-motion: reduce) {
  .cube {
    animation: none; /* Disable animation for users who prefer reduced motion */
  }
}
@keyframes rotateCube {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
.face {
  position: absolute;
  width: 200px;
  height: 200px;
  background: rgba(134, 56, 56, 0.8);
  border: 2px solid #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.front {
  transform: translateZ(100px);
}
.back {
  transform: rotateY(180deg) translateZ(100px);
}
.right {
  transform: rotateY(90deg) translateZ(100px);
}
.left {
  transform: rotateY(-90deg) translateZ(100px);
}
.top {
  transform: rotateX(90deg) translateZ(100px);
}
.bottom {
  transform: rotateX(-90deg) translateZ(100px);
}
```

This code creates a 3D rotating cube with six faces. Each face is positioned in 3D space using the `transform` property, and the cube is animated to rotate continuously using keyframes.

The rendered cube will look like this:

<style>
  .animation-container-234 {
  perspective: 800px;
  width: 200px;
  height: 200px;
  position: relative;
  margin: 200px auto;
}
.cube {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  animation: rotateCube 5s infinite linear;
}
@meida(prefers-reduced-motion: reduce) {
  .cube {
    animation: none;
  }
}
@keyframes rotateCube {
  from {
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}
.cube .face {
  position: absolute;
  width:100%;
  height: 100%;
  background: rgba(134, 56, 56, 0.8);
  border: 2px solid #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
.frontcb {
  transform: translateZ(100px);
}
.backcb {
  transform: rotateY(180deg) translateZ(100px);
}
.rightcb {
  transform: rotateY(90deg) translateZ(100px);
}
.leftcb {
  transform: rotateY(-90deg) translateZ(100px);
}
.topcb {
  transform: rotateX(90deg) translateZ(100px);
}
.bottomcb {
  transform: rotateX(-90deg) translateZ(100px);
}
</style>

<div class="animation-container-234">
  <div class="cube">
    <div class="face frontcb">Front</div>
    <div class="face backcb">Back</div>
    <div class="face rightcb">Right</div>
    <div class="face leftcb">Left</div>
    <div class="face topcb">Top</div>
    <div class="face bottomcb">Bottom</div>
  </div>
</div>
</br>
</br>
You can also assign variables to perspective to create dynamic effects based on user interaction, such as mouse movement or scrolling.

```css
:root {
  --perspective-distance: 800px;
}
.container {
  perspective: var(--perspective-distance);
}
```

This allows you to easily adjust the perspective distance by changing the value of the CSS variable `--perspective-distance`.

We can then use JavaScript to update the `--perspective-distance` variable based on the scroll position or mouse movement to create interactive 3D effects.

```javascript
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const newPerspective = Math.max(200, 1000 - scrollY); // Adjust perspective based on scroll
  document.documentElement.style.setProperty(
    "--perspective-distance",
    `${newPerspective}px`
  );
});
```

This code listens for the scroll event and updates the perspective distance dynamically, creating a more immersive 3D experience as the user scrolls through the page.
