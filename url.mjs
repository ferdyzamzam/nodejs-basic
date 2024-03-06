import { URL } from "url";


const pzn = new URL("https://example.com/");

pzn.host = "localhost:3000"
pzn.searchParams.append("status", "premium");

console.info(pzn.toString())
console.info(pzn.href)
console.info(pzn.origin)
console.info(pzn.protocol)
console.info(pzn.hostname)
console.info(pzn.port)
console.info(pzn.pathname)
console.info(pzn.search)
console.info(pzn.hash)