import { BASE_URL } from './../constants/constants.js';

let requestPayloadsWithoutToken = [
    {
        "url": `${BASE_URL}`,
        "method": "GET",
        "data": {
            "Id": Date.now(),
            "Customer": "Jason Sweet",
            "Quantity": 1,
            "Price": 18
        },
        "headers": {
            "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9",
            "Connection": "keep-alive",
            // "Host": "api.ipify.org",
            // "Referer": "https://api.ipify.org/",
            // "Origin": "https://api.ipify.org",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-site",
            "Cache-Control": "no-cache"
        }
    },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
    // {
    //     "url": `${BASE_URL}`,
    //     "method": "GET",
    //     "data": {
    //         "Id": Date.now(),
    //         "Customer": "Jason Sweet",
    //         "Quantity": 1,
    //         "Price": 18
    //     },
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (iPhone14,3; U; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/19A346 Safari/602.1",
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Accept-Encoding": "gzip, deflate, br",
    //         "Accept-Language": "en-US,en;q=0.9",
    //         "Connection": "keep-alive",
    //         // "Host": "api.ipify.org",
    //         // "Referer": "https://api.ipify.org/",
    //         // "Origin": "https://api.ipify.org",
    //         "Sec-Fetch-Dest": "empty",
    //         "Sec-Fetch-Mode": "cors",
    //         "Sec-Fetch-Site": "same-site",
    //         "Cache-Control": "no-cache"
    //     }
    // },
]

// // replicate the requestPayloadsWithoutToken array 10_000 times
// for (let i = 0; i < 10000; i++) {
//     requestPayloadsWithoutToken.push(requestPayloadsWithoutToken[i]);
// }


export { requestPayloadsWithoutToken };