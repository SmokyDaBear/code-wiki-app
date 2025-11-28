# Use Reducer

The `useReducer` hook is an alternative to `useState` for managing state in React components. It is particularly useful for managing complex state logic or when the next state depends on the previous state.

## When to Use useReducer

You might choose to use `useReducer` over `useState` in the following scenarios:

- **Complex State Logic**: When the state logic involves multiple sub-values or when the next state depends on the previous one.
- **Multiple State Transitions**: When you have multiple state transitions that can be better managed with a reducer function.
- **Predictable State Updates**: When you want to centralize state updates in a single function (the reducer), making it easier to understand and test.

## Basic Usage

The `useReducer` hook takes two arguments: a reducer function and an initial state. It returns an array with the current state and a dispatch function to send actions to the reducer.

### Let's start by defining a simple counter reducer:

#### First, import the necessary modules

```tsx
import React, { useReducer } from "react";
```

#### Next, define the reducer function and initial state

```tsx
type State = { count: number };
type Action = "increment" | "decrement";
const initialState: State = { count: 0 };
function reducer(state: State, action: Action): State {
  switch (action) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error("Unknown action type");
  }
}
```

Now that we have our function, we can use it in a component with `useReducer`:

```tsx
export function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("increment")}>+</button>
    </div>
  );
}
```

Note that reducer, unlike state setters from `useState`, takes the current state and an action as arguments and returns the new state. This makes it easier to manage complex state transitions.
