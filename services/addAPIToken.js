// middleware to add API token to the request payload

import { GROQ_API_KEYS_ARRAY } from './../constants/constants.js';

export default function addAPIToken(requestPayload, apiKeyIndex = 0) {
    // add API token to the request payload
    requestPayload.headers['Authorization'] = `Bearer ${GROQ_API_KEYS_ARRAY[apiKeyIndex]}`;

    return requestPayload;
}