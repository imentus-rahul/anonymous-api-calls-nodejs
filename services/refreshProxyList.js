import fs from 'fs';
import axios from 'axios';

// const inputFilePath = './data/proxies/input/httpProxies.txt';
// const inputFilePath = './data/proxies/input/httpProxies.json';
const inputFilePath = './data/proxies/input/Webshare-10-proxies.json';
const outputFilePath = './data/proxies/output/verifiedProxies.json';

async function downloadProxies() {
    console.warn("downloading proxies from source");
    // download proxies from source
    // https://proxy.webshare.io/api/v2/proxy/list/download/vwbarvuhstkovxhmdxdevluxgtbafavgzocriybx/-/any/username/direct/-/ // Webshare 10 proxies Download URL
    // 'https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all' // v2 URL
    let url = 'https://api.proxyscrape.com/v4/free-proxy-list/get?request=get_proxies&skip=0&proxy_format=protocolipport&format=json&limit=15' // v4 URL
    let response = await axios.get(url);
    fs.writeFileSync(inputFilePath, JSON.stringify(response.data.proxies));
}

async function readCSVProxiesAsJSONArray(fileContent) {
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
async function doubleCheckProxiesIfAlive(proxies) {
    const validProxies = [];
    let promises = [];

    // // added for short range: .slice(0, 35)
    // for (const element of proxies.slice(0, 35)) 
    for (const element of proxies) {
        try {
            // check for element's protocol field to be "http" or element donot have a protocol field
            if (element.protocol == "http" || !element.protocol) {
                let proxy = {
                    protocol: element.protocol || "http",
                    host: element.ip.split(':')[0],
                }
                if (!element.port) {
                    proxy.port = element.ip.split(':')[1];
                }
                else {
                    proxy.port = element.port;
                }
                if (element.username && element.password) {
                    proxy.auth = {
                        username: element.username,
                        password: element.password
                    }
                }

                promises.push(Promise.race([
                    axios.get('https://api.ipify.org', {
                        proxy: proxy,
                    }),
                    new Promise((_, reject) =>
                        setTimeout(() => reject(new Error('Killing Request as it times out 3sec')), 3000) // 3 seconds timeout
                    )
                ]));
            }
            else {
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
            console.error("🚀 ~ refreshProxyList ~ response.reason:", response.reason);
            console.error("🚀 ~ refreshProxyList ~ response.reason.statusCode:", response.reason.statusCode);
            console.error("🚀 ~ refreshProxyList ~ response.reason.statusMessage:", response.reason.statusMessage);
        }
    });

    return validProxies;
}

async function refreshProxyList() {

    // let forceDownload = false;

    // // download proxies from source only if file is older than 1 day
    // let fileCreationTimeMs = fs.statSync(inputFilePath).birthtimeMs;
    // let currentTime = new Date();
    // let timeDifferenceMs = currentTime - fileCreationTimeMs;
    // let oneDayInMs = 24 * 60 * 60 * 1000;
    // if (timeDifferenceMs > oneDayInMs || forceDownload) {
    //     await downloadProxies();
    // }

    // read file be it CSV or txt or JSON, based on file extension
    let fileContent = fs.readFileSync(inputFilePath, 'utf8');
    let contentInJSONArray = [];
    if (inputFilePath.endsWith('.csv')) {
        fileContent = fileContent.split('\n');
        contentInJSONArray = await readCSVProxiesAsJSONArray(fileContent);
    }
    else if (inputFilePath.endsWith('.txt')) {
        fileContent = fileContent.split('\n');
        contentInJSONArray = await readCSVProxiesAsJSONArray(fileContent);
    }
    else if (inputFilePath.endsWith('.json')) {
        contentInJSONArray = JSON.parse(fileContent);
    }

    let verifiedProxies = await doubleCheckProxiesIfAlive(contentInJSONArray);
    console.log("🚀 ~ main ~ verifiedProxies:", verifiedProxies);

    // write verified proxies to output file
    fs.writeFileSync(outputFilePath, JSON.stringify(verifiedProxies));

}

export default refreshProxyList;


