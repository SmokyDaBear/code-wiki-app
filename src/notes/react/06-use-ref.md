# Use Ref

The `useRef` hook in React allows you to create a mutable reference that persists across re-renders of a component. It is often used to access and interact with DOM elements directly or to store mutable values that do not require re-rendering when they change.

You can use the `useRef` hook to:

- Access DOM elements: You can create a reference to a DOM element and manipulate it directly.
- Store mutable values: You can store values that need to persist across renders without causing re-renders when they change.
- Implement instance variables: In functional components, refs can be used to mimic instance variables found in class components.
- Manage timers: You can use refs to store timer IDs for functions like `setTimeout` or `setInterval`.
- Integrate with third-party libraries: Refs can be used to interact with third-party libraries that require direct access to DOM elements.
- Optimize performance: By using refs to store values that do not affect rendering, you can optimize performance by reducing unnecessary re-renders.

You can think of a ref as being like a "box" that can hold a mutable value in its `.current` property. Unlike state, updating a ref does not cause a re-render of the component.

## DOM Access

You can do things that you would do with getElementById or querySelector in vanilla JavaScript, but in a React-friendly way.

Here's an example of how to use the `useRef` hook to access a DOM element:

```tsx
import React, { useRef } from "react";
export function TextInputWithFocusButton() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // Focus the input element when the button is clicked
    if (inputRef.current) {
      inputRef.current.focus(); // focus the input element
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
}
```

This is also useful if you have a large amount of data on a page and want to scroll to a specific section when a button is clicked:

```tsx
import React, { useRef } from "react";
export function ScrollToSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <button onClick={handleScroll}>Go to Section</button>
      <div style={{ height: "1500px" }}></div> {/* Spacer to enable scrolling */}
      <div ref={sectionRef} style={{ height: "200px", backgroundColor: "lightblue" }}>
        Target Section
      </div>
    </div>
  );
```

## Storing Mutable Values

A mutable value is a value that can change over time. You can use `useRef` to store such values without causing re-renders when they change, and also without losing their values between renders.

Here's an example of using `useRef` to store a mutable value:

```tsx
import React, { useRef, useState } from "react";
export function Timer() {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [count, setCount] = useState(0);
  const startTimer = () => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
  };
  const stopTimer = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}
```
