import fs from 'fs';
import axios from 'axios';

const inputFilePath = './input/http_proxies.txt';
const outputFilePath = './output/output.json';

let globalValidProxies = []; // variable shared by all threads

async function readProxiesAsArray(fileContent) {
    // create key value pairs for each column
    const csvHeaders = {};
    fileContent[0].split(',').forEach((column) => {
        csvHeaders[column] = '';
    });

    // create array of objects for each row post headers row onwards
    const csvRowsArr = [];
    fileContent.slice(1).forEach((row) => {
        const currentRowObj = {};
        row.split(',').forEach((element, index) => {
            currentRowObj[Object.keys(csvHeaders)[index]] = element;
        });
        csvRowsArr.push(currentRowObj);
    });

    console.log("🚀 ~ main ~ csvRowsArr:", csvRowsArr);
    return csvRowsArr;
}

// TODO: use multiple threads/ worker threads for parallel processing using all logical CPU cores available
async function checkProxies(proxies) {
    const validProxies = [];
    let promises = [];

    // added for short range: .slice(0, 35)
    for (const element of proxies.slice(0, 35)) {
        try {
            if (element.protocol == "http") {
                promises.push(axios.get('https://api.ipify.org', {
                    proxy: {
                        protocol: element.protocol,
                        host: element.ip, // split(':')[0],
                        port: element.port, // split(':')[1],
                    },
                }));
            }
            else{
                console.warn("protocol mismatch: ", protocol)
            }


        } catch (error) {
            // Proxy is not valid
            // TODO: Add retry logic
        }
    }

    let responses = await Promise.allSettled(promises);
    responses.forEach((response, index) => {
        if (response.status === 'fulfilled' && response.value.status === 200) {
            validProxies.push(proxies[index]);
        }
        else if (response.status === 'rejected') {
            console.error("🚀 ~ checkProxies ~ response.reason:", response.reason);
            console.error("🚀 ~ checkProxies ~ response.reason.statusCode:", response.reason.statusCode);
            console.error("🚀 ~ checkProxies ~ response.reason.statusMessage:", response.reason.statusMessage);
        }
    });

    return validProxies;
}

async function main() {
    // create dynamic object for csv columns without csv package
    const fileContent = fs.readFileSync(inputFilePath, 'utf8').split('\n');
    console.log("🚀 ~ main ~ fileContent:", fileContent);

    let csvContentInArray = await readProxiesAsArray(fileContent);

    let verifiedProxies = await checkProxies(csvContentInArray);
    console.log("🚀 ~ main ~ verifiedProxies:", verifiedProxies);

    // write verified proxies to output file
    fs.writeFileSync(outputFilePath, JSON.stringify(verifiedProxies));

}

main();


