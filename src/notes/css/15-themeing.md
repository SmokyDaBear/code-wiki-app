# Themes in CSS

Themes in CSS allow developers to create different visual styles for a website or application, enabling users to switch between them easily. This can enhance user experience by providing options that suit individual preferences, typically light and dark modes although you can create custom themes as well.

## The `:root` Selector

The `:root` pseudo-class in CSS represents the highest-level parent of the document, which is usually the `<html>` element. It is commonly used to define global CSS variables that can be accessed throughout the stylesheet.

### Variables

CSS variables (also known as custom properties) are defined using the `--` prefix and can be accessed using the `var()` function. Defining theme colors as CSS variables in the `:root` selector allows for easy theme management.

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --background-color: #ffffff;
  --text-color: #333333;
}
```
