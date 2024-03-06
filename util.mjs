import util from "util";

const firtName = "World";
const lastName = "Ferdy";

console.info(`Hello ${firtName} ${lastName}`);
console.info(util.format("Hello %s", firtName, lastName));

const person = {
  firtName: "World",
  lastName: "Ferdy",
}

console.info(`Person: ${JSON.stringify(person)}`)