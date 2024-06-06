# Anonymous RESTful API Invocation Using Proxies (Rotation + Chain) and Tor

## Description

The Anonymous RESTful API Caller is a tool built with Node.js that allows you to make anonymous API calls using proxy chains and the Tor network. It provides a simple and secure way to interact with RESTful APIs while maintaining your anonymity.

## Features

- Anonymously make RESTful API calls using proxy chains and the Tor network
- Support for multiple nodes in the Tor network
- Easy-to-use API for making GET, POST, PUT, and DELETE requests
- Customizable request headers and body
- Error handling and logging for better debugging

## Installation

1. Install Node.js (version X.X.X or higher) from the official website.
2. Clone this repository
3. Navigate to the project directory: `cd make-anonymous-api-requests`
4. Install the dependencies: `npm install`
5. Update the input proxy list in the `input/http_proxies.txt` file. Get latest proxies from https://proxyscrape.com/free-proxy-list.

## Usage

1. Start the Tor service on your machine.
2. Configure the proxy chains to use the Tor network.
3. Initialize the API caller with the desired Tor nodes.
4. Make API calls using the provided methods.
5. `node index.js` to run the example code. This is still WIP.
6. To check for proxies that are currently available, run `node check-proxies.js`. This is still WIP.

# Using TOR for API Request

**Difference b/w Proxy Rotation (rotate on different request) v/s Proxy Chains (routes from multiple IPs on same request)**

To relay an API request using the TOR network with Node.js, and ensuring it passes through a specified number of nodes (12 in this case), you need to set up a custom TOR circuit. Here's a step-by-step guide on how to achieve this:

### Step 1: Install Required Packages

First, ensure you have Node.js installed. Then, install the necessary packages:

```bash
npm install tor-request axios
```

### Step 2: Configure TOR

You need to configure your TOR instance to use a specific number of nodes. TOR usually selects the path length (number of nodes) automatically, but we can attempt to force it by modifying the `torrc` file.

Find your `torrc` file (typically located in `/etc/tor/torrc` on Linux or `C:\Users\<YourUsername>\AppData\Roaming\tor` on Windows), and add the following lines to configure it to use 12 nodes:

```
UseEntryGuards 0
NumEntryGuards 1
NumDirectoryGuards 1
NumExitGuards 1
PathLength 12
```

### Step 3: Set Up TOR Request in Node.js

Here’s a basic script that demonstrates how to use TOR with Node.js to relay an API request through a proxy server:

```jsx
const torRequest = require("tor-request");
const axios = require("axios");

// Configure torRequest to use the TOR proxy
torRequest.TorControlPort.password = "your_tor_password"; // Set your TOR password if you have one
torRequest.setTorAddress("127.0.0.1", 9050); // Assuming TOR runs on default port

// Function to make the API request through TOR and then through a proxy
async function makeRequestThroughTor() {
  // Specify the URL of the proxy server
  const proxyServerUrl = "http://your_proxy_server:proxy_port";

  // The target URL of the main server
  const targetUrl = "https://api.example.com/your-endpoint";

  // Make the request through TOR
  torRequest.request(targetUrl, async (error, response, body) => {
    if (!error && response.statusCode == 200) {
      // Successful TOR request, now pass the payload to the proxy server
      try {
        const proxyResponse = await axios.post(proxyServerUrl, body, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Proxy Response:", proxyResponse.data);
      } catch (err) {
        console.error("Error sending request to proxy server:", err.message);
      }
    } else {
      console.error("Error with TOR request:", error);
    }
  });
}

// Execute the function
makeRequestThroughTor();
```

### Step 4: Run the Script

Ensure your TOR instance is running, then execute your Node.js script:

```bash
node your_script.js
```

### Additional Configuration Notes

1. **TOR Control Port**: Make sure the TOR control port is enabled and properly configured. The `torrc` file should contain:

   ```
   ControlPort 9051
   HashedControlPassword your_hashed_password
   ```

2. **TOR Password**: If you have set a control password, replace `'your_tor_password'` in the script with your actual TOR control port password.
3. **Proxy Server**: Ensure your proxy server (e.g., Webshare) is correctly set up to receive requests and forward them to the main server.

By following these steps, you should be able to relay your API request through the TOR network using Node.js and then pass it through a proxy server before reaching the main server. Adjust the `torrc` file and the script as needed for your specific setup and security requirements.
