# Use Effect

The `useEffect` hook in React is used to perform side effects in functional components. Side effects can include data fetching, subscriptions, or manually changing the DOM. The `useEffect` hook allows you to run code after the component has rendered. It takes two arguments: a function that contains the side effect code, and an optional dependency array that determines when the effect should be re-run.

Use Effect prevents infinite loops that can occur when side effects update state, which in turn causes re-renders. By specifying dependencies, you can control when the effect runs.

## Syntax

Here's the basic syntax of the `useEffect` hook:

```tsx
useEffect(() => {
  // Side effect code here
  if(param1) callback1( param2);
}, [callback1, param1, param2]);
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
