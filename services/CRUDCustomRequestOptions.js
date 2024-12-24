// middleware to add/remove/update custom request options to the request payload

// ENSURE: fields are checked at level 1 hierarchy, for nested fields, update entire level 1 field

export default function addCustomRequestOptions(fieldsToAdd, requestPayload) {

    // headers: {
    //     // // JWT headers
    //     // authorization: `Bearer ${JSON.parse(localStorage.getItem("auth"))}`,

    //     // https://deviceatlas.com/blog/list-of-user-agent-strings
    //     'User-Agent': `Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1`,
    //     'Content-Type': 'application/json',

    // },
    // withCredentials: false, // don't send cookies

    // add custom request options to the request payload
    for (let field of fieldsToAdd) {
        requestPayload[field] = fieldsToAdd[field];
    }
    return requestPayload;
}

export default function removeCustomRequestOptions(fieldsToRemove, requestPayload) {
    // remove custom request options from the request payload
    for (let field of fieldsToRemove) {
        delete requestPayload[field];
    }
    return requestPayload;
}

export default function updateCustomRequestOptions(fieldsToUpdate, requestPayload) {
    // update custom request options in the request payload
    for (let field of fieldsToUpdate) {
        requestPayload[field] = fieldsToUpdate[field];
    }
    return requestPayload;
}