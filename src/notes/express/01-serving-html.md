# Serving HTML with Express

To serve HTML files using Express, you can use the `res.sendFile()` method to send an HTML file as a response to a client's request. Below is an example of how to set up a simple Express server that serves an HTML file.

Create an Express application and import the necessary modules:

```javascript
const express = require("express");
const path = require("path");

const app = express();
```

After installing Express, and creating an instance of express, you can set up a route to serve an HTML file as follows:

```javascript
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
```

- `req` represents the HTTP request object.
- `res` represents the HTTP response object.

Finally, start the server and listen on a specified port:

```javascript
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

`res.sendFile()` takes an absolute path to the file you want to serve. In this example, we use `path.join(__dirname, "index.html")` to construct the absolute path to the `index.html` file located in the same directory as the server script.

`__dirname` is a Node.js variable that contains the directory name of the current module. This ensures that the path to the HTML file is correct regardless of where the script is executed from.
