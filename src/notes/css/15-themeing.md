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

Then, if we want to add a dark theme, we can define another set of variables with a data attribute selector:

```css
:root[data-theme="dark"] {
  --primary-color: #2980b9;
  --secondary-color: #27ae60;
  --background-color: #2c3e50;
  --text-color: #ecf0f1;
}
```

## Applying Themes

Themes are applied by changing the `data-theme` attribute on the `<html>` or `<body>` element. This can be done using JavaScript to toggle between themes based on user preference.

```javascript
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
}
```

## Getting User Preference

You can also check the user's system preference for light or dark mode using the `prefers-color-scheme` media query and set the initial theme accordingly.

```css
@media (prefers-color-scheme: dark) {
  :root {
    --primary-color: #2980b9;
    --secondary-color: #27ae60;
    --background-color: #2c3e50;
    --text-color: #ecf0f1;
  }
}
--- @media (prefers-color-scheme: light) {
  :root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --background-color: #ffffff;
    --text-color: #333333;
  }
}
```
