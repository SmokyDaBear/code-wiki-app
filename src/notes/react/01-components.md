# Components in React

In React, components are the building blocks of the user interface. They allow you to break down the UI into reusable and manageable pieces. There are two main types of components in React: functional components and class components.

We will start with functional components, which are the preferred way to create components in modern React development.

## Functional Components

Functional components are JavaScript functions that return JSX (JavaScript XML) to define the UI. They can accept props (properties) as arguments to customize their behavior and appearance.

Here is an example of a simple functional component:

```jsx
import React from "react";

export function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

#### Note: the returned JSX must have a single root element. If you need to return multiple elements, you can wrap them in a `<div>` or use React Fragments (`<>...</>`).

## React Fragments `<>...</>`

These are a special syntax in React that allows you to group multiple elements without adding an extra node to the DOM. This is useful when you want to return multiple elements from a component without introducing unnecessary wrappers.

Here is an example of using React Fragments:

```jsx
import React from "react";

export function ItemList() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </>
  );
}
```

## Props

Props (short for properties) are a way to pass data from a parent component to a child component. They are read-only and cannot be modified by the child component. You can pass props to a component from the parent it is called in like this:

```jsx
<Greeting name="Alice" />
```

In this example, the `Greeting` component receives a prop called `name` with the value "Alice".
There can be multiple props passed to a component as well, which can be accessed via the `props` object like this:

```tsx
import React from "react";

interface GreetingProps {
  name: string;
}

export function Greeting(props: GreetingProps) {
  return <h1>Hello, {props.name}!</h1>;
}
```

Or you can use destructuring to extract the props directly in the function parameters:

```tsx
import React from "react";

interface GreetingProps {
  name: string;
}

export function Greeting({ name }: GreetingProps) {
  return <h1>Hello, {name}!</h1>;
}
```

## Mapping Components

In React, you can use the `map` function to render a list of components based on an array of data. This is useful when you want to display a dynamic list of items. It works very similarly to the `Array.prototype.map()` method in JavaScript.

#### Lets say you have an array of Objects representing users:

```tsx
export const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
```

You can create a `UserCard` component to display each user's information:

```tsx
import React from "react";

interface User {
  id: number;
  name: string;
}
interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>User ID: {user.id}</p>
    </div>
  );
}
```

Then, you can use the `map` function to render a list of `UserCard` components based on the `users` array:

```tsx
import React from "react";
import { UserCard } from "./UserCard";
import { Users } from "./data"; // Assume this imports the users array

export function UserList() {
  return (
    <div className="user-list">
      {Users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
```

## Class Components

Class components are another way to define components in React. They are ES6 classes that extend the `React.Component` class and must have a `render` method that returns JSX. They can also manage their own state and lifecycle methods.

They are less commonly used in modern React development, but here is an example of a class component:

```jsx
import React, { Component } from "react";

export class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

#### Notice the `render()` method that returns the JSX, and the use of `this.props` to access the props passed to the component, and the `this.props` to access the props passed to the component.

### Passing down props in Class Components

Props can also be passed down to class components in the same way as functional components. Here is an example:

```tsx
import React, { Component } from "react";
interface GreetingProps {
  name: string;
}
export class Greeting extends Component<GreetingProps> {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

#### Again, notice the use of `this.props` to access the props in the class component, although in this case, the type is wrapped in `<>` angle brackets after the `extends Component` to define the props type for TypeScript.
