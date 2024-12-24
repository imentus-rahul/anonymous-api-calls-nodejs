import axios from 'axios';
import HttpsProxyAgent from 'https-proxy-agent';
import HttpProxyAgent from 'http-proxy-agent';

// export default async function sendRequest(requestPayload) {
//     console.warn("requestPayload: ", requestPayload);


//     // If you're on the server-side and want to get the IP address of a client that's making a request to your server, 
//     // you can usually do this with request.connection.remoteAddress or request.headers['x-forwarded-for'] in Node.js, depending on your server setup.

//     axios.interceptors.request.use(request => {
//         console.log('Intercepted Request', JSON.stringify(request, null, 2));
//         return request;
//     });

//     // axios.interceptors.response.use(response => {
//     //     console.log('Intercepted Response:', JSON.stringify(response, null, 2));
//     //     return response;
//     // });

//     // Create proxy agent to direct traffic through the specified proxy
//     // Choose HttpProxyAgent or HttpsProxyAgent depending on your proxy protocol and endpoint.
//     const agent = requestPayload.proxy.protocol === 'https' ?
//         new HttpsProxyAgent(`${requestPayload.proxy.protocol}://${requestPayload.proxy.host}:${requestPayload.proxy.port}`) :
//         new HttpProxyAgent(`${requestPayload.proxy.protocol}://${requestPayload.proxy.host}:${requestPayload.proxy.port}`);

//     // A minimalistic set of headers that do not reveal axios or system details.
//     // Try to mimic a common browser user-agent or a generic mobile device.
//     const headers = {
//         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) ' +
//             'Chrome/70.0.3538.77 Safari/537.36',
//         'Content-Type': 'application/json'
//         // You could omit 'Accept' header to be less browser-like, but many servers expect it:
//         // 'Accept': '*/*'
//     };



//     try {
//         // Axios instance with minimal configuration
//         const axiosCustomInstance = axios.create({
//             // Turn off credentials - do not send cookies
//             withCredentials: false,
//             // If you want to remove all defaults from axios:
//             transformRequest: [(data, headers) => {
//                 // Remove axios-specific defaults
//                 // Axios often sets 'common' headers internally; you can delete them if they exist
//                 if (headers && headers.common) {
//                     delete headers.common;
//                 }
//                 if (headers && headers.post) {
//                     delete headers.post;
//                 }
//                 if (headers && headers.get) {
//                     delete headers.get;
//                 }

//                 // Remove anything identifying axios or the Node environment, if present.
//                 if (headers && headers['User-Agent']) {
//                     // We already set a custom User-Agent, so this just ensures no default is attached.
//                 }

//                 return JSON.stringify(data);
//             }],

//             // Use a custom agent so we don't rely on Node's default global agent.
//             httpAgent: agent,
//             httpsAgent: agent,

//             // Drop proxy config if using agent directly. If using 'proxy' config directly in axios, 
//             // comment out agents and set `proxy: {...}` below:
//             // proxy: {
//             //   protocol: 'http',
//             //   host: '61.97.191.101',
//             //   port: 9070
//             // }

//             // Don't set validateStatus or anything that might betray axios usage
//             validateStatus: function (status) {
//                 // Accept any response status for minimal fingerprinting
//                 return true;
//             }
//         });

//         // Use a request interceptor to strip undesired headers
//         axiosCustomInstance.interceptors.request.use((config) => {
//             // config.headers is an AxiosHeaders instance in axios v1.x
//             const headers = config.headers;

//             // Set a neutral User-Agent
//             headers.set('User-Agent',
//                 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) ' +
//                 'Chrome/70.0.3538.77 Safari/537.36'
//             );

//             // Remove default headers that betray Axios usage if any are set
//             // Common headers like 'Accept', 'Accept-Encoding', etc. can be deleted:
//             headers.delete('Accept-Encoding');
//             headers.delete('Accept-Language');
//             headers.delete('X-Requested-With');

//             // If Axios sets its own headers like User-Agent or others, ensure they're replaced:
//             // (We've already set our own User-Agent, so if axios tries, it will be overwritten)

//             return config;
//         }, (error) => {
//             return Promise.reject(error);
//         });

//         // If you still want to transform request data and strip defaults in transformRequest:
//         axiosCustomInstance.defaults.transformRequest = [(data, headers) => {
//             // headers here is also an AxiosHeaders instance.

//             // If you're sending JSON, ensure data is stringified:
//             if (typeof data === 'object' && data !== null) {
//                 data = JSON.stringify(data);

//                 // If you want to ensure Content-Type is JSON
//                 headers.set('Content-Type', 'application/json');
//             }

//             return data;
//         }];


//         console.log("🚀 ~ file: sendRequest.js:58 ~ sendRequest ~ axiosInstance:", axiosCustomInstance);

//         console.warn("sending request with requestPayload: ", requestPayload);
//         let response = await axiosInstance(requestPayload);
//         return response;
//     } catch (error) {
//         console.error(`Error sending request: ${error}`);
//         throw error;
//     }
// }

export default async function sendRequest(requestPayload) {
    // console.warn("requestPayload: ", requestPayload);

    // // Create proxy agent to direct traffic through the specified proxy
    // // Choose HttpProxyAgent or HttpsProxyAgent depending on your proxy protocol and endpoint.
    // const agent = requestPayload.proxy.protocol === 'https' ?
    // new HttpsProxyAgent(`${requestPayload.proxy.protocol}://${requestPayload.proxy.host}:${requestPayload.proxy.port}`) :
    // new HttpProxyAgent(`${requestPayload.proxy.protocol}://${requestPayload.proxy.host}:${requestPayload.proxy.port}`);
    
    // console.log("🚀 ~ file: sendRequest.js:144 ~ sendRequest ~ agent:", agent);
    
    // Create an Axios instance with no default headers and no credentials
    const axiosCustomInstance = axios.create({
        withCredentials: false,
        headers: {},
        // httpAgent: agent,
        // httpsAgent: agent,
        validateStatus: () => true
    });

    // Use a request interceptor to set headers
    axiosCustomInstance.interceptors.request.use((config) => {
        const headers = config.headers;

        // Set a neutral User-Agent
        headers.set('User-Agent',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
            '(KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36'
        );

        // Delete common headers that might betray Axios usage
        headers.delete('Accept-Encoding');
        headers.delete('Accept-Language');
        headers.delete('X-Requested-With');

        // If sending JSON, ensure proper Content-Type
        if (config.data && typeof config.data === 'object') {
            headers.set('Content-Type', 'application/json');
        }

        return config;
    }, (error) => Promise.reject(error));

    // let response = await axiosCustomInstance(requestPayload);

    let response = await Promise.race([
        axiosCustomInstance(requestPayload),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Killing Request as it times out 5sec')), 5000))
    ]);

    // let response = await axios(requestPayload);
    return response;
}
