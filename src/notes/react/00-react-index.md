# React

React is a popular JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components and manage the state of their applications efficiently.

## Key Features of React

- **Component-Based Architecture**: React applications are built using components, which are self-contained pieces of UI that can be reused throughout the application.
- **Virtual DOM**: React uses a virtual DOM to optimize updates and rendering, improving performance by minimizing direct manipulation of the actual DOM.
- **JSX Syntax**: React uses JSX, a syntax extension that allows developers to write HTML-like code within JavaScript, making it easier to create and visualize UI components.
- **Unidirectional Data Flow**: React follows a unidirectional data flow, meaning that data flows in one direction from parent components to child components, making it easier to understand and debug applications.
- **State Management**: React provides built-in state management for components, allowing developers to manage and update the state of their applications easily.

## Getting Started with React

To get started with React, you can use the Create React App tool, which sets up a new React project with a simple command:

```bashnpx create-react-app my-app
cd my-app
npm start
```

This will create a new React application in the `my-app` directory and start a development server.

## Using Vite with React

Vite is a fast build tool that can be used with React to create a development environment. To set up a React project with Vite, you can use the following commands:

```bash
npm create vite@latest my-app-name
//There will be a prompt to select a framework. Choose "React"
//There will be a prompt to select a variant. Choose "JavaScript" or "TypeScript" based on your preference.
cd my-app-name
npm install
npm run dev
```

This will create a new React application using Vite in the `my-app-name` directory and start a development server.
The basic file structure will look like this:

```
my-app-name/
├── index.html
├── package.json
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── assets/
│   └── Components/
│        ├── Component1.jsx
│        └── Component2.jsx
├── public/
└── vite.config.js
```

## JSX and TSX Files

In React, files with the `.jsx` extension are used for JavaScript files that contain JSX syntax, while files with the `.tsx` extension are used for TypeScript files that contain JSX syntax. JSX allows you to write HTML-like code within your JavaScript or TypeScript files, making it easier to create and visualize UI components.

When using TypeScript with React, you should use the `.tsx` extension for files that contain JSX syntax to ensure proper type checking and support for TypeScript features.

#### These files are basically JavaScript or TypeScript files with embedded HTML-like syntax, which also means you can use JavaScript/TypeScript expressions within the JSX code by enclosing them in curly braces `{}`.

### Similar to how in HTML files you can wrap code in `<script>` tags to include JavaScript, in React's JSX/TSX files, it is the exact opposite. You can directly write JavaScript/TypeScript code wrapping your HTML-like markup in parentheses `()` and curly braces `{}`.

## Learning Resources

- [Official React Documentation](https://reactjs.org/docs/getting-started.html)
- [React Tutorial for Beginners](https://reactjs.org/tutorial/tutorial.html)
- [FreeCodeCamp React Course](https://www.freecodecamp.org/learn/front-end-libraries/react/)
- [Egghead.io React Courses](https://egghead.io/browse/frameworks/react)
- [Codecademy React Course](https://www.codecademy.com/learn/react-101)
