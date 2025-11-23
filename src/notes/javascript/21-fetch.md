# Fetch API

The Fetch API provides a modern way to make network requests in JavaScript. It is built into most modern browsers and allows you to make HTTP requests to servers and handle responses using Promises.

There are a few different requests you can make with the Fetch API, including GET, POST, PUT, PATCH, and DELETE.

- GET: Used to retrieve data from a server.
- POST: Used to send data to a server to create a new resource.
- PUT: Used to update an existing resource on the server.
- PATCH: Used to partially update an existing resource on the server.
- DELETE: Used to delete a resource from the server.

These operations correspond to the standard CRUD (Create, Read, Update, Delete) operations used in RESTful APIs.

## Fetch Syntax

The basic syntax for making a fetch request is as follows:

```javascript
fetch(url, options);
```

The `fetch` function takes two arguments:

- `url`: The URL of the resource you want to fetch.
- `options`: An optional object that contains settings for the request:
  - `method`: The HTTP method (GET, POST, etc.).
  - `headers`: An object containing any headers you want to include in the request.
  - `body`: The body of the request (for POST, PUT, etc.).
  - `mode`: The mode of the request (e.g., cors, no-cors, same-origin).
  - `credentials`: Indicates whether to include cookies in the request.

### Headers

Headers are used to provide additional information about the request or response. You can set headers in the `options` object when making a fetch request.
Header Options Include:

- `Content-Type`: Specifies the media type of the resource (e.g., application/json).
- `Authorization`: Contains credentials for authenticating the request.
- `Accept`: Indicates the media types that are acceptable for the response.
- `Cache-Control`: Directives for caching mechanisms in both requests and responses.

Typically, most basic fetch requests will at least include the `Content-Type` header to specify the format of the data being sent or expected.

```javascript
fetch("https://api.example.com/data", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer your-token-here",
  },
});
```

### Body

The `body` property in the `options` object is used to send data to the server when making POST, PUT, or DELETE requests. The body can be a string, FormData, Blob, or other types depending on the content type.

Typically, we will be sending JSON data, so we will convert a JavaScript object to a JSON string using `JSON.stringify()`.

```javascript
const data = { name: "John", age: 30 };
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});
```

### Mode

The `mode` property in the `options` object specifies the mode of the request. The available modes are:

- `cors`: Allows cross-origin requests with CORS headers.
- `no-cors`: Restricts the request to same-origin only.
- `same-origin`: Ensures the request is made to the same origin as the calling script.

### Credentials

The `credentials` property in the `options` object indicates whether to include cookies in the request. The available options are:

- `omit`: Never send cookies.
- `same-origin`: Send cookies for same-origin requests.
- `include`: Always send cookies, even for cross-origin requests.

```javascript
fetch("https://api.example.com/data", {
  method: "GET",
  credentials: "include", // Include cookies in the request
});
```

## Get Requests

Here's an example of making a GET request using the Fetch API:

```javascript
fetch("https://api.example.com/data", {
  method: "GET",
}).then((response) => {
  if (response.ok) {
    return response.json(); // Parse the JSON from the response
  }
});
```

## POST Requests

Here's an example of making a POST request using the Fetch API:

```javascript
const newUser = { name: "Jane Doe", age: 25 };
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newUser),
}).then((response) => {
  if (response.ok) {
    return response.json();
  }
});
```

In this example, we create a new user object and send it to the server using a POST request. We set the appropriate headers and convert the user object to a JSON string for the request body. We then handle the response and any potential errors as before.

## PUT and PATCH Requests

You can use the Fetch API to make PUT and PATCH requests to update existing resources on the server.

A PUT request is used to update an entire resource, while a PATCH request is used to update only specific fields of a resource.

### PUT Request

This will replace or _overwrite_ the entire resource with the new data provided.

Any fields not included in the request will be removed from the resource.

```javascript
// Example: Making a PUT request
const updatedUser = { name: "Alice Smith", age: 31 };
fetch("https://api.example.com/users/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedUser),
}).then((response) => response.json());
```

### PATCH Request

A PATCH request is used to update only specific fields of a resource.

Fields not included in the request will remain unchanged.

```javascript
// Example: Making a PATCH request
const partialUpdate = { age: 32 };
fetch("https://api.example.com/users/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(partialUpdate),
}).then((response) => response.json());
```

## DELETE Request

You can use the Fetch API to make DELETE requests to remove resources from the server.

```javascript
// Example: Making a DELETE request
fetch("https://api.example.com/users/1", {
  method: "DELETE",
}).then((response) => {
  if (response.ok) {
    console.log("User deleted successfully.");
  }
});
```

## Handling Responses

The Fetch API returns a Promise that resolves to the Response object representing the response to the request. You can use the `then()` method to handle the response.

```javascript
fetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // Parse the JSON from the response
  })
  .then((data) => {
    console.log(data); // Handle the parsed data
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });
```

In this example, we first check if the response is okay using the `ok` property. If it is not, we throw an error. Then, we parse the JSON from the response using the `json()` method, which also returns a Promise. Finally, we handle the parsed data in the next `then()` method and catch any errors that occur during the fetch operation.

## Creating a Restful API with JSON Server

You can use the Fetch API in combination with a mock RESTful API created using the JSON Server package.

This is useful for testing and prototyping your applications without needing a real backend server.

Learn how to set up a JSON Server in the [JSON notes](./17-JSON.md).

Let's say we have a create new user form, we can use fetch to send the data to our JSON server.

```javascript
// Example: Creating a new user
const newUser = { name: "Charlie", age: 28, email: "charlie@example.com" };

export function createUser(formData) {
  const { name, age, email } = formData;
  // You can add validation or transformation logic here if needed
  if (!name || !age || !email) {
    console.error("All fields are required.");
    return;
  }
  const newFormData = {
    name,
    age,
    email,
  };

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newFormData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("New user created:", data);
    })
    .catch((error) => {
      console.error("Error creating user:", error);
    });
}
```

Now, if we want to retrieve that data later, we can use a GET request.

```javascript
// Example: Fetching all users
export function fetchUsers() {
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched users:", data);
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });
}
```

Then, we can create a function to update a user using a PUT request.

```javascript
// Example: Updating a user
export function updateUser(userId, updatedData) {
  fetch(`http://localhost:3000/users/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("User updated:", data);
    })
    .catch((error) => {
      console.error("Error updating user:", error);
    });
}
```
