import axios from "axios";
import http from "http";
import https from "https";

// If you're on the server-side and want to get the IP address of a client that's making a request to your server, 
// you can usually do this with request.connection.remoteAddress or request.headers['x-forwarded-for'] in Node.js, depending on your server setup.

axios.interceptors.request.use(request => {
    console.log('Intercepted Request', JSON.stringify(request, null, 2));
    return request;
});

// axios.interceptors.response.use(response => {
//     console.log('Intercepted Response:', JSON.stringify(response, null, 2));
//     return response;
// });

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
});

const httpAgent = new http.Agent();
// console.log("🚀 ~ agent:", agent);

// // API Examples
// GET IP: https://api.ipify.org
// POST SOME RANDOM DATA: https://reqbin.com/echo/post/json // doesn't accepts calls from http (only https)
// POST SOME RANDOM DATA: https://httpbin.org/anything // accepts calls even from http proxies

const apiEndpoint = 'https://httpbin.org/anything'; // replace with your API endpoint
// const apiEndpoint = 'https://api.ipify.org'; // replace with your API endpoint
const data = {
    "Id": 78912,
    "Customer": "Jason Sweet",
    "Quantity": 1,
    "Price": 18
}; // replace with your data

let requestOptions = {
    method: "POST",
    url: apiEndpoint,
    data: data, // ensure using "data" instead of body
    headers: {
        // // JWT headers
        // authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,

        // https://deviceatlas.com/blog/list-of-user-agent-strings
        'User-Agent': `Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1`,
        'Content-Type': 'application/json',

    },
    withCredentials: false, // don't send cookies
    // transformRequest: [function (data, headers) {
    //     console.log("🚀 ~ makeRequest ~ headers:", headers);
    //     // Do whatever you want to transform the data
    //     delete headers.common; // remove anything added by axios to say it's axios request
    //     return data;
    // }],
    // httpAgent: httpAgent, // use a common agent
    // httpsAgent: httpsAgent, // use a common agent
    httpsAgent: false, // use a common agent
    proxy: {
        protocol: 'http',
        host: '61.97.191.101',
        port: 9070,
        // auth: {
        //     username: 'mikeymike',
        //     password: 'rapunz3l'
        // }
    },
};

async function printResponseDetails(response) {
    console.log("Entire Response:", response);
    console.log("Response status:", response.status);
    console.log("Response statusText:", response.statusText);
    // print headers list
    console.log("Response headers:")
    for (const [key, value] of response.headers) {
        console.log(`${key}: ${value}`);
    }
    // print data
    console.log("Response data:", response.data);
}

async function makeRequest() {
    try {
        let startTime = Date.now();
        const response = await axios(requestOptions);
        let endTime = Date.now();
        printResponseDetails(response);
        console.log("Response Time | Latency:", (endTime - startTime) / 1000, "seconds");
    } catch (error) {
        console.error("🚀 ~ makeRequest ~ error:", error);
        console.error("🚀 ~ makeRequest ~ error.message:", error.message);
    }
}

makeRequest();

export default makeRequest;