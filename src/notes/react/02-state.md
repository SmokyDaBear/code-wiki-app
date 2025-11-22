# State in React

State in React refers to a built-in object that allows components to manage and track changes in data over time. It is used to store information that can change dynamically and affect the rendering of the component. State is typically managed within class components using the `this.state` object and updated using the `this  .setState()` method. In functional components, state can be managed using the `useState` hook.

## Functional State Management with useState Hook

To start, import the `useState` hook from the React library:

```tsx
import React, { useState } from "react";
```

State in React components allows you to create interactive and dynamic user interfaces.

Next, you can declare a state variable and its corresponding setter function using the `useState` hook. The `useState` hook takes an initial value as an argument and returns an array containing the current state value and a function to update it.

Let's say you want to create a simple counter component that increments a count value when a button is clicked.

Calling the `useState` hook, returns an array with two elements. You will want to pass an initial state value to the `useState` function, for example `0` for a counter or `""` for an empty text input:

```tsx
const [count, setCount] = useState(0);

const [text, setText] = useState("");

const [isVisible, setIsVisible] = useState(true);
```

In functional components, the `useState` hook is used to add state management capabilities. It allows you to declare state variables and provides a function to update them. Here's Vite's template example of how to use the `useState` hook:

```tsx
import React, { useState } from "react";

export function Counter() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to handle button click and update the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```

## Class Component State Management

In class components, state is managed using the `this.state` object and updated using the `this.setState()` method. Here's an example of how to use state in a class component:

```tsx
import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    // Initialize state with a count property
    this.state = {
      count: 0,
    };
  }

  // Method to handle button click and update the count
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Current Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}
```

#### Notice how they are similar, but the syntax differs between functional and class components. In functional components, you use the `useState` hook, while in class components, you use `this.state` and `this.setState()`.

Class Components can get a bit messier with `this` bindings and constructors, which is why functional components with hooks are now the preferred approach in modern React development.

## Passing down state as props

State can also be passed down as props to child components, allowing for a unidirectional data flow. Here's an example of how to pass state as props:

Here is a simple `CounterDisplay` component that receives the `count` state as a prop and displays it:

```tsx
interface CounterDisplayProps {
  count: number;
}
export function CounterDisplay({ count }: CounterDisplayProps) {
  return <p>Current Count: {count}</p>;
}
```

We can then use this `CounterDisplay` component within our `Counter` component, passing the `count` state as a prop:

```tsx
import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <CounterDisplay count={count} />
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```

Sometimes, we may want to lift the state up to a common parent component so that multiple child components can share and update the same state. This is done by managing the state in the parent component and passing it down as props to the child components.

#### Note: State can only be passed down from parent to child components. Child components cannot directly modify the state of their parent components. Instead, they can communicate changes through callback functions passed as props.

Oftentimes, you may want to pass down functions that update the state as props to child components. This allows child components to trigger state changes in the parent component. Here's an example:

```tsx
interface CounterControlsProps {
  handleClick: () => void;
  title: string;
}
export function CounterControls({ handleClick, title }: CounterControlsProps) {
  return <button onClick={handleClick}>{title}</button>;
}
```

```tsx
import React, { useState } from "react";
export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <CounterDisplay count={count} />
      <CounterControls handleClick={increment} title="Add" />
      <CounterControls handleClick={decrement} title="Subtract" />
    </div>
  );
}
```
