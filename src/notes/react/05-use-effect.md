# Use Effect

The `useEffect` hook in React is used to perform side effects in functional components.

Side effects can include:

- data fetching
- manually changing the DOM.
- setting up subscriptions or timers
- logging
- local storage operations like themes

The `useEffect` hook allows you to run code after the component has rendered.

It takes two arguments:

- a function that contains the side effect code
- an optional dependency array that determines when the effect should be re-run.

## Syntax

Here's the basic syntax of the `useEffect` hook:

```tsx
useEffect(() => {
  // Side effect code here
  if(param1) callback1( param2);
}, [callback1, param1, param2]);
}
```

Use Effect prevents infinite loops that can occur when side effects update state, which in turn causes re-renders. By specifying dependencies, you can control when the effect runs.

#### Lets say you want to fetch some data from an API, and then update the component state with the fetched data.

You can use the `useEffect` hook to achieve this.

As a beginner you may think you can just call the fetch function directly in the component body. But doing so would cause an infinite loop of re-renders, because updating the state would trigger a re-render, which would call the fetch function again, and so on:

```tsx
export function InfiniteLoopExample() {
  const [data, setData] = useState(null);

  // This will cause an infinite loop of re-renders
  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => setData(data));

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}
```

#### ‼️Trying to run this will cause your browser to freeze or crash.

Here is how you can use the `useEffect` hook to fetch data without causing an infinite loop:

```tsx
import React, { useEffect, useState } from "react";

export function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // Empty dependency array means this effect runs once on mount

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
}
```

## Use Cases

Here are some common use cases for the `useEffect` hook:

1. **Data Fetching**: You can use `useEffect` to fetch data from an API when the component mounts.

```tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
export function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.example.com/data")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
    </div>
  );
}
```

#### Axios is a popular library for making HTTP requests. You can also use the native `fetch` API as shown in the previous example.

2. **Event Listeners**: You can use `useEffect` to add and clean up event listeners.

```tsx
import React, { useEffect } from "react";
export function WindowResizeListener() {
  useEffect(() => {
    const handleResize = () => {
      console.log(
        "Window resized to:",
        window.innerWidth,
        "x",
        window.innerHeight
      );
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount
  return <div>Resize the window and check the console.</div>;
}
```

#### Note the cleanup function returned from the effect to remove the event listener when the component unmounts, preventing memory leaks.

- **Memory Leaks:** A memory leak occurs when resources are not properly released, leading to increased memory usage over time. In React, this can happen if event listeners or subscriptions are not cleaned up when a component unmounts, and can eventually degrade application performance.

3. **Updating Document Title**: You can use `useEffect` to update the document title based on component state.

#### The title refers to the text shown on the browser tab.

```tsx
import React, { useEffect, useState } from "react";
export function TitleUpdater() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Effect runs whenever 'count' changes
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

#### In this example, the document title is updated whenever the `count` state changes, but this is also used in the Notes App you are using to set the page title dynamically based on the current note being viewed.

4. **Local Storage**: You can use `useEffect` to save state to local storage whenever it changes, like saving a name or theme preference.

Here is an example of saving a theme preference to local storage:

```tsx
import React, { useEffect, useState } from "react";

export function ThemeSettings() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    // On mount, load saved settings from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches; // Check user's system preference
      setTheme(prefersDark ? "dark" : "light");
    }
    if (savedTheme) setTheme(savedTheme);
  }, []); // Empty dependency array means this effect runs once on mount

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]); // Effect runs whenever 'theme' changes
  return (
    <div>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light Theme</option>
        <option value="dark">Dark Theme</option>
      </select>
    </div>
  );
}
```
