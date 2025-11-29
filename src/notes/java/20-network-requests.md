# Network Requests in Java

To make network requests in Java, you can use the `HttpURLConnection` class from the `java.net` package for basic HTTP operations. For more advanced features, you can use the `HttpClient` class introduced in Java 11.

This is similar to using `fetch` in JavaScript for making network requests with promises, albeit a bit more verbose.

## Using `HttpURLConnection`

Here is an example of how to make a simple GET request using `HttpURLConnection`:

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class GetDataFromAPIbyId {
    public static void main(int id) {
        try {
          // Create a URL object with the target API endpoint using the id parameter
            URL url = new URL("https://api.example.com/data/" + id);
            // Open a connection to the URL
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            // Set the request method to GET
            connection.setRequestMethod("GET");
              // Get the response code
            int responseCode = connection.getResponseCode();
            // Check if the request was successful
            if (responseCode == HttpURLConnection.HTTP_OK) {
              // Read the response from the input stream
                BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String inputLine;
                // Use StringBuilder to accumulate the response
                StringBuilder response = new StringBuilder();

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();

                System.out.println("Response: " + response.toString());
                // Error handling for unsuccessful requests
            } else {
                System.out.println("GET request failed. Response Code: " + responseCode);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

Lets break down the code:

- We create a `URL` object with the target API endpoint, appending the `id` parameter to the URL.
- We open a connection to the URL using `HttpURLConnection`.
- We set the request method to `GET`.
- We check the response code to see if the request was successful (HTTP 200 OK).
- If successful, we read the response using a `BufferedReader` and accumulate it in a `StringBuilder`.
- Finally, we print the response or handle errors if the request was unsuccessful.

## Using `HttpClient` (Java 11 and later)

Here is an example of how to make a simple GET request using `HttpClient`:

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
public class GetDataFromAPIbyId {
    public static void main(int id) {
        try {
            // Create an HttpClient instance
            HttpClient client = HttpClient.newHttpClient();
            // Create an HttpRequest object with the target API endpoint using the id parameter
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.example.com/data/" + id))
                    .GET() // Set the request method to GET
                    .build();
            // Send the request and get the response
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
            // Check if the request was successful
            if (response.statusCode() == 200) {
                System.out.println("Response: " + response.body());
            } else {
                System.out.println("GET request failed. Response Code: " + response.statusCode());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

In this example, we use the `HttpClient` class to create an HTTP client and the `HttpRequest` class to build a GET request to the specified API endpoint with the `id` parameter.

- We create an `HttpClient` instance.
- We build an `HttpRequest` object with the target URL and set the request method to `GET`.
- We send the request using the `send` method of the `HttpClient`, which returns an `HttpResponse` object.
- We check the status code of the response to determine if the request was successful and print the response body or handle errors accordingly.

Both methods allow you to make network requests in Java, with `HttpClient` providing a more modern and flexible approach for handling HTTP operations.
