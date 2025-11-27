# Imports and Paths in HTML

In HTML, importing resources such as stylesheets, scripts, and media files is essential for building functional and visually appealing web pages. This is typically done using specific HTML elements and attributes that define the paths to these resources.

## Key Concepts

### Absolute vs. Relative Paths

The `./` notation represents the current directory, while `../` is used to navigate up one directory level. These relative paths are crucial for linking resources correctly based on the location of the HTML file.

Lets say you have the following project structure:

```
website/
├── index.html
├── styles/
│   └── main.css
├── scripts/
│   └── app.js
└── images/
    └── logo.png
```

To link the `logo.png` image in `index.html`, you would use the following relative path:

```html
<img src="images/logo.png" alt="Logo" />
```

Now, lets say you want to add more pages to your website, and you create a new folder called `pages`:

```
website/
├── index.html
├── styles/
│   └── main.css
├── scripts/
│   └── app.js
├── images/
│   └── logo.png
└── pages/
    └── about.html
```

To link the `main.css` stylesheet from `about.html`, you would use the following relative path:

```html
<link rel="stylesheet" href="../styles/main.css" />
```

### Linking Outside Resources

When linking to resources hosted on external servers, you use absolute URLs. For example, to include a CSS framework like Bootstrap, you would use:

```html
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
/>
```

## Linking Stylesheets

To link an external CSS stylesheet to your HTML document, you use the `<link>` element within the `<head>` section. The `href` attribute specifies the path to the CSS file.

```html
<head>
  <link rel="stylesheet" href="styles/main.css" />
</head>
```

## Importing JavaScript Files

To include an external JavaScript file, you use the `<script>` element. The `src` attribute specifies the path to the JavaScript file.

```html
<body>
  <script src="scripts/app.js"></script>
</body>
```

#### For importing small scripts, you can also include JavaScript directly within the `<script>` tags:

```html
<body>
  <script>
    console.log("Hello, World!");
  </script>
</body>
```

#### Also, sometimes the `defer` or `async` attributes are used with the `<script>` tag to control the loading behavior of the script.

- `defer`: The script is executed after the document has been parsed.
- `async`: The script is executed _Asynchronously_ as soon as it is downloaded, without blocking the parsing of the document.

```html
<script src="scripts/app.js" defer></script>
<script src="scripts/appTwo.js" async></script>
```

#### For javaScript modules, you can use the `type="module"` attribute:

```html
<script type="module" src="scripts/module.js"></script>
```

## Image and Media Paths

To include images in your HTML, you use the `<img>` element with the `src` attribute specifying the path to the image file.

```html
<img src="images/photo.jpg" alt="A descriptive text" />
```
