import fs from "fs";

const writer = fs.createWriteStream("target.log");


writer.write("Ferdy\n")
writer.write("Zam Zam\n")
writer.write("Hello World\n")
writer.end()

const reader = fs.createReadStream("target.log")

reader.addListener("data", (data) => {
  console.info(data.toString())
})