// middleware to add proxy IP to the request payload

import { PROXIES_ARRAY } from './../constants/constants.js';

export default function addProxyIP(requestPayload, proxyIndex = 0) {

    // // randomize proxy index temporarily
    // proxyIndex = Math.floor(Math.random() * PROXIES_ARRAY.length);

    let proxy = {};

    if (PROXIES_ARRAY[proxyIndex].protocol == "http" || !PROXIES_ARRAY[proxyIndex].protocol) {
        proxy = {
            protocol: PROXIES_ARRAY[proxyIndex].protocol || "http",
            host: PROXIES_ARRAY[proxyIndex].ip.split(':')[0],
        }
        if (!PROXIES_ARRAY[proxyIndex].port) {
            proxy.port = PROXIES_ARRAY[proxyIndex].ip.split(':')[1];
        }
        else {
            proxy.port = PROXIES_ARRAY[proxyIndex].port;
        }
        if (PROXIES_ARRAY[proxyIndex].username && PROXIES_ARRAY[proxyIndex].password) {
            proxy.auth = {
                username: PROXIES_ARRAY[proxyIndex].username,
                password: PROXIES_ARRAY[proxyIndex].password
            }
        }
    }
    else {
        console.warn("addProxyIP - protocol mismatch: ", PROXIES_ARRAY[proxyIndex])
    }

    requestPayload.proxy = proxy;
    return requestPayload;
}