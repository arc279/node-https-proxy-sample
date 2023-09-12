import fetch from "node-fetch";
import crypto from "crypto";
import { HttpsProxyAgent } from 'https-proxy-agent';

// const agent = new HttpsProxyAgent('http://127.0.0.1:8080')
const agent = new HttpsProxyAgent('http://localhost:8080', {
  keepAlive: true,
  rejectUnauthorized: false,
  secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
})
const url = "https://example.com";

console.log(url, agent)
const resp = await fetch(url, { agent });

console.log(resp)
console.log(await resp.text())


