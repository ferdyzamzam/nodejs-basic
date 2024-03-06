import dns from "dns";

const ip = dns.lookup("socialchat.id", (err, address, family) => {
  if (err) {
    console.error(err);
  }
  console.info(address);
  console.info(family);
});
console.info(ip)