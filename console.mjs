import { Console } from "console";
import fs from "fs";

const file = fs.createWriteStream("aplication.log");

const log =  new Console({
  stdout: file,
  stderr: file
})

log.info("Hello World")
log.error("Hello World")

const person = {
  firtName: "World",
  lastName: "Ferdy",
}

log.table(person)