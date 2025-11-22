# Conditional Rendering in React

Conditional rendering allows you to render different UI elements or components based on certain conditions or state values. This is useful for creating dynamic and interactive user interfaces that respond to user actions or changes in data.

## Using if-else Statements

You can use traditional `if-else` statements to conditionally render components as well as ternary operators. Here's an example:

```tsx
import React, { useState } from "react";

export function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome back!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Please sign in.</h1>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
}
```

This works, but can become cumbersome with more complex conditions. There are several ways to simplify conditional rendering in React, but my personal favorite is using the `&&` operator.

## Using the Logical AND (`&&`) Operator

The logical AND operator can be used to conditionally render a component based on a boolean expression. If the expression evaluates to `true`, the component will be rendered; otherwise, it will not be rendered. Here's an example:

```tsx
export function Notification({ message }: { message: string }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      {isVisible && (
        <div className="notification">
          <p>{message}</p>
          <button onClick={() => setIsVisible(false)}>Dismiss</button>
        </div>
      )}
      {!isVisible && (
        <button onClick={() => setIsVisible(true)}>Show Notification</button>
      )}
    </div>
  );
}
```

Here we are using the `&&` operator to conditionally render the notification message and the dismiss button when `isVisible` is `true`. When `isVisible` is `false`, we render a button to show the notification again.

We can also use this technique to conditionally render a specific component based on the value of a variable or state.

Let's say we have a `currentPage` state variable that determines which page to display:

```tsx
type TPages = "home" | "about" | "contact";
export function PageRenderer() {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("about")}>About</button>
        <button onClick={() => setCurrentPage("contact")}>Contact</button>
      </nav>

      {currentPage === "home" && <HomePage />}
      {currentPage === "about" && <AboutPage />}
      {currentPage === "contact" && <ContactPage />}
    </div>
  );
}
```

In this example, we use the `&&` operator to conditionally render the `HomePage`, `AboutPage`, or `ContactPage` components based on the value of the `currentPage` state variable.

If we were approaching this with if-else statements, it would be more verbose and less readable.

```tsx
if (currentPage === "home") {
  return <HomePage />;
} else if (currentPage === "about") {
  return <AboutPage />;
} else if (currentPage === "contact") {
  return <ContactPage />;
}
```
