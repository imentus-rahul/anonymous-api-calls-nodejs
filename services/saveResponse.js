import fs from 'fs';

async function saveResponse(responseValue, responseKey, filePath) {
    // // append response to objects in key-value format in the file
    // let fileContent = fs.readFileSync(filePath, 'utf8');

    // // Check if the file is empty
    // let objects = {};
    // if (fileContent.trim() !== '') {
    //     objects = JSON.parse(fileContent);
    //     // console.log("🚀 ~ file: saveResponse.js:7 ~ saveResponse ~ objects:", objects);
    // } else {
    //     console.warn("The file is empty. Initializing an empty object.");
    // }

    // objects[responseKey] = responseValue;
    // fs.writeFileSync(filePath, JSON.stringify(objects, null, 2));

    // // no longer need to read and write to the entire file for large file sizes

    // Create a new JSON object with the responseKey and responseValue
    const newEntry = { [responseKey]: responseValue };

    // Convert the object to a JSON string
    const jsonString = JSON.stringify(newEntry);

    // Append the JSON string as a new line to the file
    const writeStream = fs.createWriteStream(filePath, { flags: 'a' });
    writeStream.write(jsonString + '\n');
    writeStream.end();
}

async function resetResponses(filePath) {
    fs.writeFileSync(filePath, '');
}

export { saveResponse, resetResponses };