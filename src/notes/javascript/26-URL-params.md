# Using URLSearchParams in JavaScript

The `URLSearchParams` interface provides utility methods to work with the query string of a URL. It allows you to easily create, read, and manipulate the parameters in the URL.

The basic structure of a URL with query parameters looks like this:

```
https://example.com/page?param1=value1&param2=value2
```

Notice the `?` that separates the base URL from the query parameters, and the `&` that separates individual parameters.

## Creating URLSearchParams

You can create an instance of `URLSearchParams` by passing a query string or an object.

```javascript
// From a query string
const params1 = new URLSearchParams("param1=value1&param2=value2");
// From an object
const params2 = new URLSearchParams({ param1: "value1", param2: "value2" });
```

# Accessing Parameters from a URL

You can also create `URLSearchParams` from the current URL or any URL string.

```javascript
// From the current URL
const params = new URLSearchParams(window.location.search);

// From a specific URL string
const url = new URL("https://example.com/page?param=value1&param2=value2");

// Create URLSearchParams from the URL's search parameters
const params = new URLSearchParams(url.search);

// Accessing parameter values
const val1 = params.get("param"); // 'value1'
const val2 = params.get("param2"); // 'value2'
```

Adding a search/filter functionality to a webpage using URL parameters can enhance user experience by allowing users to share specific views or states of the page. Here's an example of how to implement this:

```javascript
// Function to update the URL with search parameters
function updateSearchParams(searchTerm) {
  const params = new URLSearchParams(window.location.search);
  if (searchTerm) {
    params.set("search", searchTerm);
  } else {
    params.delete("search");
  }
  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.pushState({}, "", newUrl);
}
```
