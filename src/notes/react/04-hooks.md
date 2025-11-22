# React Hooks

React Hooks are special functions that let you "hook into" React features, such as state and lifecycle methods, from functional components. They were introduced in React 16.8 and have since become the standard way to manage state and side effects in React applications.

## Commonly Used Hooks

Some of the most commonly used React Hooks include:

- `useState`: Allows you to add state to functional components.
- `useEffect`: Lets you perform side effects in functional components, such as data fetching or subscriptions.
- `useContext`: Enables you to access context values without using the `Context.Consumer` component.
- `useRef`: Provides a way to create mutable references that persist across renders.
- `useReducer`: An alternative to `useState` for managing more complex state logic.
- `useMemo`: Memoizes expensive calculations to optimize performance.
- `useCallback`: Memoizes functions to prevent unnecessary re-creations on re-renders.

We learned about [State Management](./02-state.md) and the `useState` hook already, but let's take a look at some of the others.

## Use Effect

Use effect is used to perform _side effects_ in functional components. Side effects can include:

- data fetching
- manually changing the DOM
- setting up subscriptions or timers
- logging
- local storage operations like themes.

These are useful for preventing memory leaks and infinite loops when components mount and unmount, or state changes causing a re-render.

Refer to the [Use Effect](./05-use-effect.md) section for review information on the `useEffect` hook and how to use it to manage side effects in functional components.

## Use Context

The `useContext` hook allows you to access context values directly in functional components without needing to use the `Context.Consumer` component. This is useful for sharing data that can be considered "global" for a tree of React components, such as themes, user information, or settings.
Here's an example of how to use the `useContext` hook:

```tsx
import React, { createContext, useContext } from "react";
// Create a Context for the theme
const ThemeContext = createContext("light");

const ThemedComponent = () => {
  const theme = useContext(ThemeContext);
  return <div>The current theme is {theme}</div>;
};
```

In this example, we create a `ThemeContext` with a default value of "light". The `ThemedComponent` uses the `useContext` hook to access the current theme value from the context.
To provide a context value to components, you can use the `ThemeContext.Provider` component:

```tsx
const App = () => {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
};
```

In this example, the `App` component provides a value of "dark" to the `ThemeContext`, which is then accessed by the `ThemedComponent`.

## Use Ref

The `useRef` hook provides a way to create mutable references that persist across renders.

#### A reference is like a box that can hold a mutable value in its `.current` property. Unlike state, updating a ref does not cause a re-render of the component.

### Use Cases:

- Accessing DOM elements: You can use `useRef` to create a reference to a DOM element and manipulate it directly.
- Storing mutable values: You can use `useRef` to store values that need to persist across renders without causing re-renders when they change.

Here's an example of how to use the `useRef` hook to access a DOM element:

```tsx
import React, { useRef } from "react";
export function TextInputWithFocusButton() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // Focus the input element when the button is clicked
    if (inputRef.current) {
      inputRef.current.focus();
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

In this example, we create a reference to the input element using `useRef`. When the button is clicked, the `handleClick` function focuses the input element by accessing it through the `inputRef`.

## Custom Hooks

Custom hooks are a way to extract and reuse stateful logic across multiple components. They are simply JavaScript functions that can call other hooks. Custom hooks allow you to encapsulate complex logic and share it easily. Here's an example of a custom hook that manages a users data:

```tsx
import React, { useState, useEffect } from "react";
interface User {
  id: number;
  name: string;
  friendIds: number[];
}
export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://api.example.com/user/1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return user;
}
export function useUserFriends(friendIds: number[]) {
  const [friends, setFriends] = useState<User[]>([]);

  useEffect(() => {
    Promise.all(
      friendIds.map((id) =>
        fetch(`https://api.example.com/user/${id}`).then((response) =>
          response.json()
        )
      )
    ).then((data) => setFriends(data));
  }, [friendIds]);

  return friends;
}
```

In this example, the `useUser` custom hook fetches user data from an API and manages the user state. You can use this custom hook in any functional component to access the user data:

```tsx
function UserFriends({ friendsList }: { friendsList: User[] }) {
  return (
    <ul>
      {friendsList.map((friend) => (
        <li key={friend.id}>{friend.name}</li>
      ))}
    </ul>
  );
}

export function UserProfile() {
  const user = useUser();
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <UserFriends friendsList={useUserFriends(user.friendIds)} />
    </div>
  );
}
```
