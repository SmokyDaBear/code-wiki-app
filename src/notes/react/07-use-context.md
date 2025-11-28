# Use Context

The `useContext` hook in React is used to access the value of a context directly within a functional component. Context provides a way to pass data through the component tree without having to pass props down manually at every level.

## Why Use Context?

Context is useful for sharing data that can be considered "global" for a tree of React components, such as the current authenticated user, theme settings, or application settings. It helps to avoid "prop drilling," where you have to pass props through multiple layers of components that do not need the data themselves.

### Specific Use Cases for Context

- **Theming**: Sharing theme information (like light or dark mode) across the application.
- **Authentication**: Sharing user authentication status and user information.
- **Localization**: Sharing language preferences and translations.
- **State Management**: Sharing state and functions for managing that state across multiple components, such as a shopping cart.

## Creating a Context

To create a context, you use the `createContext` function from React. This function returns a Context object.

```javascript
import React, { createContext } from "react";
const MyContext = createContext(defaultValue);
```

A common example is to create a theme context:

```javascript
import React, { createContext } from "react";
const ThemeContext = createContext("light"); // "light" is the default value
```

## Providing a Context Value

To provide a context value to the component tree, you use the `Provider` component that comes with the Context object. You wrap your component tree with the `Provider` and pass the value you want to share via the `value` prop.

Let's say you want to create a cart with built in functionality to add and remove items from the cart. You would create a context and a provider component like this:

### First, import the necessary modules

```tsx
// Import necessary modules
import React, { createContext } from "react";
```

### Next, create the context

If using TypeScript, you can define the type for the context value

```tsx
type CartItem = {
  id: string;
  name: string;
  price: number;
};
type CartContextType = {
  items: CartItem[];
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};
```

#### You can initialize the context with undefined or a default value

In this case, we use undefined to indicate that the context might not be provided

```tsx
const CartContext = createContext<CartContextType | undefined>(undefined);
```

If you want to provide a default value, you can do so like this:

```tsx
// First, create a default value for the context
const defaultCartContext: CartContextType = {
  items: [],
};

// Then, create the context with the default value
const CartContextWithDefault =
  createContext<CartContextType>(defaultCartContext);
```

### Finally, create the provider component

```tsx
// Create a provider component
export const CartProvider = ({ children }) => {
  // Here you would implement the logic to manage the cart state, like adding/removing items

  const addItem = (item: CartItem) => {
    // Logic to add item to cart
  };

  const removeItem = (id: string) => {
    // Logic to remove item from cart
  };
  const clearCart = () => {
    // Logic to clear the cart
  };

  // Provide the context value to children components
  return (
    <CartContext.Provider value={{ addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
```

Next, you would wrap your application (or part of it) with the `CartProvider` component to make the context value available to all nested components. Anything inside `CartProvider` can now access the cart context, as it is a child of the provider.

```jsx
import React from "react";
export const App = () => {
  return (
    <CartProvider>
      <ChildComponentOne />
      <ChildComponentTwo />
    </CartProvider>
  );
};
```

Now, instead of passing props down manually, any component within `MyProvider` can access the shared context value using the `useContext` hook.

## Consuming Context with `useContext`

After creating your context and providing a value, you can use the `useContext` hook to consume the context value in any functional component.

```javascript
import React, { useContext } from "react";
const MyContext = createContext();
const MyComponent = () => {
  const contextValue = useContext(MyContext);
  return <div>{contextValue}</div>;
};
```

Let's take the cart example further. Let's say we have items we want to add to the cart. We can create a component that uses the `useContext` hook to access the cart context and add items to the cart.

```tsx
import React, { useContext } from "react";
import { CartContext } from "./CartProvider"; // Import the CartContext
import { CartItem } from "./types"; // Import the CartItem type

const ProductList = () => {
  const cart = useContext(CartContext);

  const { addItem } = cartContext;

  const products: CartItem[] = [
    { id: "1", name: "Product 1", price: 10 },
    { id: "2", name: "Product 2", price: 20 },
  ];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => addItem(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};
```

Now, the button in the `ProductList` component can add items to the cart without needing to pass any props down from parent components. The `useContext` hook allows direct access to the cart context, simplifying state management across the component tree.

#### If using this in a real scenario, make sure to handle the case where the context might be undefined (if you initialized it with undefined). You can do this by adding a check before using the context value:

```tsx
const cartContext = useContext(CartContext);
if (!cartContext) {
  throw new Error("CartContext must be used within a CartProvider");
}
const { addItem, removeItem, clearCart } = cartContext;
```

This ensures that the component using the context is always within a provider, preventing runtime errors.
