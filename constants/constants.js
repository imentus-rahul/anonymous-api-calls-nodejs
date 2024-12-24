import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config();

const GROQ_API_KEYS = process.env.GROQ_API_KEYS;
export const GROQ_API_KEYS_ARRAY = GROQ_API_KEYS.split(',');

export const PROXIES_ARRAY = JSON.parse(fs.readFileSync('./data/proxies/output/verifiedProxies.json', 'utf8'));

export const BASE_URL = 'https://api.ipify.org?format=json';
// // API Examples
// GET IP: https://api.ipify.org
// POST SOME RANDOM DATA: https://reqbin.com/echo/post/json // doesn't accepts calls from http (only https)
// POST SOME RANDOM DATA: https://httpbin.org/anything // accepts calls even from http proxies

