# CSS Animations

CSS animations allow you to create dynamic and engaging user experiences by animating the properties of HTML elements over time. You can define animations using keyframes and control their behavior with various animation properties.

## Key Concepts

- **Transform**: Allow you to change property values smoothly (over a given duration) when they change, such as on hover or focus.

- **Animation Properties**: Control the duration, timing, delay, iteration count, direction, and fill mode of the animation.

- **Keyframes**: Define the stages of the animation and the styles at each stage.

## Transformations

The `transform` property allows you to apply various transformations to an element such as:

### Translations

- `translateX(value)`: Moves the element horizontally by the specified value.
- `translateY(value)`: Moves the element vertically by the specified value.
- `translate(valueX, valueY)`: Moves the element both horizontally and vertically.

```css
.transform-example {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  transition: transform 0.5s ease;
}
.transform-example:hover {
  transform: translateX(50px) translateY(50px);
}
```

<style> 
  .transform-example {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    transition: transform 0.5s ease;
  }
  .transform-example:hover {
    transform: translateX(50px) translateY(50px);
  }
</style>
<div class="transform-example"></div>

### Rotations

- `rotate(angle)`: Rotates the element by the specified angle.

```css
.rotate-example {
  width: 100px;
  height: 100px;
  background-color: lightcoral;
  transition: transform 0.5s ease;
}
.rotate-example:hover {
  transform: rotate(45deg);
}
```

<style>
  .rotate-example {
    width: 100px; 
    height: 100px;
    background-color: lightcoral;
    transition: transform 0.5s ease;
  }
  .rotate-example:hover {
    transform: rotate(45deg);
  }
</style>
<div class="rotate-example"></div>

### Scaling

- `scale(factor)`: Scales the element uniformly by the specified factor.
- `scaleX(factor)`: Scales the element horizontally by the specified factor.
- `scaleY(factor)`: Scales the element vertically by the specified factor.

```css
.scale-example {
  width: 100px;
  height: 100px;
  background-color: lightgreen;
  transition: transform 0.5s ease;
}
.scale-example:hover {
  transform: scale(1.2);
}
```

<style>
  .scale-example {
    width: 100px;
    height: 100px;
    background-color: lightgreen;
    transition: transform 0.5s ease;
  }
  .scale-example:hover {
    transform: scale(1.2);
  }
</style>
<div class="scale-example"></div>

### Skewing:

- `skewX(angle)`: Skews the element along the X-axis by the specified angle.
- `skewY(angle)`: Skews the element along the Y-axis by the specified angle.

```css
.skew-example {
  width: 100px;
  height: 100px;
  background-color: lightgoldenrodyellow;
  transition: transform 0.5s ease;
}
.skew-example:hover {
  transform: skewX(20deg);
}
```

<style>
  .skew-example {
  width: 100px;
  height: 100px;
  background-color: lightgoldenrodyellow;
  transition: transform 0.5s ease;
}
.skew-example:hover {
  transform: skewX(20deg);
}
</style>
<div class="skew-example"></div>

## Animation Properties

- `animation-name`: Specifies the name of the keyframes to use for the animation.
- `animation-duration`: Defines how long the animation takes to complete one cycle (e.g., `2s` for 2 seconds).
- `animation-timing-function`: Controls the speed curve of the animation (e.g., `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`).
- `animation-delay`: Sets a delay before the animation starts (e.g., `1s` for a 1-second delay).
- `animation-iteration-count`: Specifies how many times the animation should repeat (e.g., `infinite` for endless repetition ).
- `animation-direction`: Determines whether the animation should play in reverse on alternate cycles (e.g., `normal`, `reverse`, `alternate`, `alternate-reverse`).
- `animation-fill-mode`: Defines how the element should apply styles before and after the animation (e.g., `none`, `forwards`, `backwards`, `both`).

The shorthand `animation` property can be used to set all the animation properties in one line:

```css
.animated-box {
  width: 100px;
  height: 100px;
  background-color: coral;
  animation: slideIn 2s ease-in-out alternate infinite;
}
```

Note the order of values in the shorthand property: `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, and `animation-fill-mode`.

Some values can be omitted, and default values will be used, but the animation name and duration are required.

## Defining Keyframes

You can define keyframes using the `@keyframes` rule. Keyframes specify the styles at various points during the animation sequence.

From and To syntax is commonly used for simple animations, noting the starting and ending states.

```css
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.animated-box {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  background-color: coral;
  animation: slideIn 2s ease-in-out alternate infinite;
}
```

<style>
  @keyframes slideIn {
    from {
      transform: translateX(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .animated-box {
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color: coral;
    animation: slideIn 2s ease-in-out alternate infinite;
  }
  </style>

<div class="animated-box"></div>

Percentage syntax allows for more complex animations with multiple stages.

```css
@keyframes slideInWithJump {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    transform: translateX(-50%) translateY(-20px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.animated-box-with-jump {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  background-color: coral;
  animation: slideInWithJump 2s ease-in-out alternate infinite;
}
```

<style>
  @keyframes slideInWithJump {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    50% {
      transform: translateX(-50%) translateY(-20px);
      opacity: 0.5;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  .animated-box-with-jump {
    margin: 0 auto;
    width: 100px;
    height: 100px;
    background-color: coral;
    animation: slideInWithJump 2s ease-in-out alternate infinite;
  }
  </style>

<div class="animated-box-with-jump"></div>

### Using Ease Functions

CSS provides several built-in timing functions to control the pacing of animations:

- `ease`: Starts slow, speeds up in the middle, and slows down at the end.
- `linear`: Maintains a constant speed throughout the animation.
- `ease-in`: Starts slow and speeds up towards the end.
- `ease-out`: Starts fast and slows down towards the end.
- `ease-in-out`: Starts and ends slow, with a faster middle section.

`ease` and `ease-in-out` are similar but differ in their pacing profiles. `ease` has a more pronounced acceleration and deceleration, while `ease-in-out` provides a smoother transition at both the start and end of the animation.

### Using @property for variable animations

The `@property` rule allows you to define custom properties that can be animated. This is particularly useful for creating more complex animations that involve CSS variables.

Syntax:
after the @property keyword, specify the name of the custom property, followed by its syntax, inheritance behavior, and initial value.

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: red;
}
```

You can then use @keyframes to animate the custom property:

```css
@keyframes colorChange {
  0% {
    --my-color: red;
  }
  100% {
    --my-color: blue;
  }
}
```

Using the custom property in a class:

```css
.animated-color-box {
  width: 100px;
  height: 100px;
  background-color: var(--my-color);
  animation: colorChange 3s infinite alternate;
}
```

<style>
  @property --my-color {
    syntax: "<color>";
    inherits: false;
    initial-value: red;
  }
  @keyframes colorChange {
    0% {
      --my-color: red;
    }
    100% {
      --my-color: blue;
    }
  }
  .animated-color-box {
    width: 100px;
    height: 100px;
    background-color: var(--my-color);
    animation: colorChange 3s infinite alternate;
  }
</style>
<div class="animated-color-box"></div>

## Accesiblity Considerations

When implementing CSS animations, it's important to consider users with motion sensitivities. Excessive or rapid animations can cause discomfort or trigger vestibular disorders in some individuals.

To accommodate these users, you can respect their system preferences by using the `prefers-reduced-motion` media query. This allows you to disable or simplify animations for users who have indicated a preference for reduced motion.

```css
@media (prefers-reduced-motion: reduce) {
  .animated-box,
  .animated-box-with-jump,
  .animated-color-box {
    animation: none;
  }
}
```

Another way to use this accesiblity feature is to ONLY perform the animation if the user has NOT indicated a preference for reduced motion:

```css
@media (prefers-reduced-motion: no-preference) {
  .animated-element {
    animation: slideIn 2s ease-in-out alternate infinite;
  }
}
```
