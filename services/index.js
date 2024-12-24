import sendRequest from './sendRequest.js';
import refreshProxyList from './refreshProxyList.js';
import addProxyIP from './addProxyIP.js';
import addAPIToken from './addAPIToken.js';
import { saveResponse, resetResponses } from './saveResponse.js';

import { GROQ_API_KEYS_ARRAY, PROXIES_ARRAY } from './../constants/constants.js';
import { requestPayloadsWithoutToken } from './../constants/requestPayloads.js';

// // modify this function to handle request payload manipulation
// // Add any other middleware here
async function prepareAndSendRequest(requestPayload, requestIndex, apiKeyIndex, proxyIndex) {
    try {
        requestPayload = await addAPIToken(requestPayload, apiKeyIndex);
        requestPayload = await addProxyIP(requestPayload, proxyIndex);

        let startTime = Date.now(); // Start time before sending the request
        let response = await sendRequest(requestPayload);
        let endTime = Date.now(); // End time after receiving the response
        let responseTime = endTime - startTime; // Calculate the response time in milliseconds

        // Structure the response to include response time
        const structuredResponse = {
            data: response.data,
            responseTime: responseTime
        };

        if (requestPayload?.proxy?.host) {
            structuredResponse.ip = requestPayload.proxy.host;
        }

        await saveResponse(structuredResponse, requestIndex, './data/promptResponses.ndjson');
        return response;
    } catch (error) {
        // console.error(`Error sending request: ${error}`);
        // retry with next proxy in case of error: connect ECONNREFUSED
        if (error.message.includes('ECONNREFUSED') || error.message.includes('ECONNRESET') || error.message.includes('ETIMEDOUT') || error.message.includes('Killing Request') || error.status === 403 || error.status === 429 || error.status === 500 || error.status === 502 || error.status === 503 || error.status === 504) {

            let response;
            let maxRetries = 5; // Set a maximum number of retries
            let attempts = 0;

            while (attempts < maxRetries) {
                try {
                    proxyIndex = (proxyIndex + 1) % PROXIES_ARRAY.length;
                    requestPayload = await addProxyIP(requestPayload, proxyIndex);
                    console.warn(`Attempt ${attempts} - Changed proxy IP (New): ${requestPayload.proxy.host}`);
                    requestPayload = await addAPIToken(requestPayload, apiKeyIndex);

                    let startTime = Date.now(); // Start time before sending the request
                    response = await sendRequest(requestPayload);
                    let endTime = Date.now(); // End time after receiving the response
                    let responseTime = endTime - startTime; // Calculate the response time in milliseconds

                    // Structure the response to include response time
                    const structuredResponse = {
                        data: response.data,
                        responseTime: responseTime
                    };

                    if (requestPayload?.proxy?.host) {
                        structuredResponse.ip = requestPayload.proxy.host;
                    }

                    await saveResponse(structuredResponse, requestIndex, './data/promptResponses.ndjson');
                    // console.log(`requestIndex: ${requestIndex}, response: ${JSON.stringify(response.data)}`);
                    return response;
                } catch (error) {
                    attempts++;
                    console.warn(`Attempt ${attempts} failed: ${error.message}, previous proxy: ${requestPayloadsWithoutToken[requestIndex].proxy.host}`);
                    if (attempts >= maxRetries) {
                        console.error(`Max retries reached for request ${requestIndex}, dropping request to next one`);
                        throw Error(`Max retries reached: for request ${requestIndex}, dropping request to next one`);
                    }
                }
            }
        }
        else {
            console.error(`Error sending request in catch's else block: ${error}`);
            throw Error(`Error sending request in catch's else block: ${error}`);
        }
    }
}

async function main() {
    // // // can be executed once a day to refresh the proxy list
    // await refreshProxyList();

    // reset output file
    await resetResponses('./data/promptResponses.ndjson');

    let MAX_CONCURRENT_CHUNK_SIZE_PER_JOB = 2; // number of requests to be processed by one job at a time
    let MAX_CONCURRENT_JOBS = 1000; // number of jobs to be processed in parallel
    let totalRequests = requestPayloadsWithoutToken.length;
    let totalJobs = Math.ceil(totalRequests / MAX_CONCURRENT_CHUNK_SIZE_PER_JOB);

    // This index will move in steps of MAX_CONCURRENT_CHUNK_SIZE_PER_JOB as jobs pick up next chunk
    let currentJobIndex = 0;


    /**
  * Function that processes a single chunk of up to MAX_CONCURRENT_CHUNK_SIZE_PER_JOB requests
  * and then recursively picks up the next chunk until none remain.
  */
    async function runJob() {
        // If we've allocated all the jobs (chunks), nothing more to do
        if (currentJobIndex >= totalJobs) {
            return;
        }

        // Determine which chunk of requests this job should handle
        const startIndex = currentJobIndex * MAX_CONCURRENT_CHUNK_SIZE_PER_JOB;
        const endIndex = Math.min(startIndex + MAX_CONCURRENT_CHUNK_SIZE_PER_JOB, totalRequests); // this line enables to run requests even if the number of requests is lower than MAX_CONCURRENT_CHUNK_SIZE_PER_JOB
        currentJobIndex++;

        // Extract the chunk from the global requestPayloadsWithoutToken
        const requestChunk = requestPayloadsWithoutToken.slice(startIndex, endIndex); // this line enables to run requests even if the number of requests is lower than MAX_CONCURRENT_CHUNK_SIZE_PER_JOB

        // Build an array of promises for the chunk
        const promisesInChunk = requestChunk.map((payload, chunkOffset) => {
            // For example, rotate the API Key every 2 requests
            const apiKeyIndex = Math.floor((startIndex + chunkOffset) / MAX_CONCURRENT_CHUNK_SIZE_PER_JOB) % GROQ_API_KEYS_ARRAY.length;
            // Similarly for proxies
            const proxyIndex = Math.floor((startIndex + chunkOffset) / MAX_CONCURRENT_CHUNK_SIZE_PER_JOB) % PROXIES_ARRAY.length;

            return prepareAndSendRequest(payload, startIndex + chunkOffset, apiKeyIndex, proxyIndex);
        });

        /**
         * Wait for all requests in the chunk to finish (settled).
         * If you want to handle rejections individually, use Promise.allSettled.
         * If you prefer all must succeed or you bail, use Promise.all.
         */
        const results = await Promise.allSettled(promisesInChunk);

        // // Log each result from the chunk
        // results.forEach((result, idx) => {
        //     const globalIndex = startIndex + idx;
        //     if (result.status === 'fulfilled') {
        //         console.log(`Request ${globalIndex} fulfilled =>`, result.value.data);
        //     } else {
        //         console.error(`Request ${globalIndex} failed =>`, result.reason);
        //     }
        // });

        // After finishing this chunk, immediately pick up the next chunk
        // so this job (slot) remains occupied until all chunks have been processed
        await runJob();
    }


    console.log('About to start parallel jobs.');

    /**
  * Initialize the parallel jobs (slots).
  * Recursive Job Processing!
  * Each “job” will process chunks in a loop until exhausted.
  */
    const jobsArray = [];
    for (let i = 0; i < MAX_CONCURRENT_JOBS; i++) {
        jobsArray.push(runJob());
    }

    /**
   * Wait until all parallel jobs have exhausted all chunks.
   * Once all have finished, we are guaranteed that all requests are completed.
   */
    await Promise.all(jobsArray);

    console.log('All requests have been processed successfully.');


}

main().catch(console.error);