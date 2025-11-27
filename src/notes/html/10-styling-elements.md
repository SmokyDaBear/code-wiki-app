# Styling Elements

Styling HTML elements is primarily done using CSS (Cascading Style Sheets). There are several ways to apply styles to your HTML elements:

1. **Inline Styles**: You can add styles directly to an HTML element using the `style` attribute.

   ```html
   <p style="color: blue; font-size: 16px;">This is a blue paragraph.</p>
   ```

   This method is quick for small changes but is not recommended for larger projects due to maintainability issues.

2. **Internal CSS**: You can include CSS styles within a `<style>` tag in the `<head>` section of your HTML document.
   ```html
   <head>
     <style>
       p {
         color: green;
         font-size: 18px;
       }
     </style>
   </head>
   <body>
     <p>This is a green paragraph.</p>
   </body>
   ```
   This method is useful for styling a single HTML document.
3. **External CSS**: The most common and recommended way to style HTML is by linking to an external CSS file using the `<link>` tag in the `<head>` section.

A link tag can have different attributes including:

- `rel`: Specifies the relationship between the current document and the linked resource. For CSS files, this should be set to "stylesheet".
- `href`: Specifies the URL of the linked resource.
- `type`: Specifies the MIME type of the linked resource. For CSS files, this is typically "text/css", although it is optional and often omitted.
- `media`: Specifies the media type for which the styles are intended (e.g., "screen", "print").

At a minimum, you need to include the `rel`(relation) and `href`(hypertext reference) attributes to link an external CSS file.

```html
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <p>This paragraph will be styled by the external CSS file.</p>
</body>
```

In the `styles.css` file, you can define your styles:

```css
p {
  color: red;
  font-size: 20px;
}
```

This method allows for better organization and reusability of styles across multiple HTML documents.
