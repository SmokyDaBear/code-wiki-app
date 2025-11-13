# Colors

CSS supports various ways to define colors:

- Named Colors
- Hexadecimal
- RGB
- RGBA
- HSL
- HSLA

There are several properties in CSS that utilize colors, including:

- `color`: Sets the color of text
- `background-color`: Sets the background color of an element
- `border-color`: Sets the color of an element's border
- `outline-color`: Sets the color of an element's outline
- `text-decoration-color`: Sets the color of text decorations (like underlines)
- `box-shadow`: Can include color values for shadow effects

## Types of Color Notations

### Named Colors

Uses a standard naming convention for colors, e.g., `red`, `blue`, `green`

#### Example Code:

```css
body {
  background-color: lightblue;
  color: darkblue;
}
```

#### Useful resource: [CSS Named Colors](https://www.w3schools.com/colors/colors_names.asp)

### Hexadecimal

Uses a six-digit combination of numbers and letters to represent colors, starting with a `#` e.g., `#ff0000` for red.

You can also use three-digit shorthand notation for some colors, e.g., `#f00` for red.

#### Example Code:

```css
.red-bg-hex {
  background-color: #ff0000;
}
```

Learn more about [Hexadecimal Colors](https://www.w3schools.com/colors/colors_hexadecimal.asp)

### RGB (Red, Green, Blue)

RGB takes in individual values for red, green, and blue levels e.g., `rgb(255, 0, 0)` for red, and `rgb(0, 255, 0)` for green.

The values can range from 0 to 255, 0 being no intensity and 255 being full intensity.

### RGBA (Red, Green, Blue, Alpha)

RGBA format takes in the alpha channel (transparency) in addition to the standard RGB values. e.g., `rgba(255, 0, 0, 0.5)` for semi-transparent red

### HSL(Hue, Saturation, Lightness)

HSL represents colors using three components:

- hue (the type of color)
- saturation (the intensity of the color)
- lightness (the brightness of the color).

The hue is represented as a degree on the color wheel (0-360).

Saturation is represented as a percentage, where 0% saturation means a shade of gray, and 100% is the full color.

Lightness is also represented as a percentage, where 0% lightness is black, 100% is white, and 50% is the normal color.

e.g., `hsl(0, 100%, 50%)` for red

### HSLA(Hue, Saturation, Lightness, Alpha): e.g., `hsla(0, 100%, 50%, 0.5)` for semi-transparent red

Similar to RGBA, HSLA includes an alpha channel for transparency in addition to the standard HSL values.

e.g., `hsla(0, 100%, 50%, 0.5)` for semi-transparent red

## Using Colors in CSS

Now that we have covered the different ways to define colors in CSS, let's see how to use them in various CSS properties.

### Color, Background-Color, Text-Decoration-Color and Border-Color

Fairly straightforward properties to set text color, background color, text-decoration color, and border color respectively.

#### Example Code:

```css
.text-color-dark-gray {
  color: rgb(34, 34, 34);
}
.background-color-lime {
  background-color: hsl(120, 100%, 75%);
}
.border-color-orange {
  border: 2px solid #ff5733;
}
.text-decoration-color-teal {
  text-decoration: underline;
  text-decoration-color: teal;
}
```

#### Example Output:

<div style="padding: 10px; border: 2px solid black; background-color: #f0f0f0; color: black;">
  <p class="text-color-dark-gray" style="color: rgb(34, 34, 34);">This text is dark gray.</p>
  <div class="background-color-lime" style="background-color: hsl(120, 100%, 75%); padding: 10px;">
    This div has a lime background.
  </div>
  <div class="border-color-orange" style="border: 2px solid #ff5733; padding: 10px;">
    This div has an orange border.
  </div>
  <p class="text-decoration-color-teal" style="text-decoration: underline; text-decoration-color: teal;">
    This text has a teal underline.
  </p>
</div>

### Outline

The `outline` property can also use color values to set the color of an element's outline, very similar to borders, but outlines do not take up space and can overlap other elements. They are often used for accessibility purposes, such as highlighting focused elements like when a user tabs through links or selects a form field.

#### Example Code:

```css
.outline-blue {
  outline: 3px solid blue;
}
```

#### Example Output:

<div class="outline-blue" style="outline: 3px solid blue; padding: 10px; margin: 10px;">
  This div has a blue outline.
</div>

### Box-Shadow and Text-Shadow

The `box-shadow` property can include color values to create shadow effects around elements.
The `text-shadow` property can also use color values to create shadow effects for text.

- The first value is the horizontal offset of the shadow.
- The second value is the vertical offset of the shadow.
- The third value is the blur radius (optional).
- The fourth value is the color of the shadow in any of the above formats.

#### Example Code:

```css
.shadow-blue {
  box-shadow: 0 4px 8px rgba(0, 0, 255, 0.3);
}
.text-shadow-orange {
  text-shadow: 2px 2px 4px rgb(255, 165, 0);
}
```

#### Example Output:

<div class="shadow-blue" style="box-shadow: 0 4px 8px rgba(0, 0, 255, 0.3); padding: 10px; margin: 10px;">
  This div has a blue shadow.
  <p class="text-shadow-orange" style="text-shadow: 2px 2px 4px rgb(255, 165, 0);">
    This text has an orange shadow.
  </p>
</div>

#### Tip: Text shadow can also be used to create a text outline effect by applying multiple shadows in different directions

```css
.text-outline {
  padding: 5px;
  font-size: 24px;
  color: white;
  background-color: lightgray;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0
      #000;
}
```

#### Example Output:

<p class="text-outline" style="text-shadow:
    -1px -1px 0 #000,
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000; font-size: 24px; color: white; background-color: lightgray; padding: 5px;">
  This text has an outline effect using text shadows.
</p>
