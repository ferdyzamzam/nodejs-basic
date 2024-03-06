import fs from "fs";

async function readFileAsync() {
  try {
    const buffer = await fs.promises.readFile("file-system.mjs");
    console.info(buffer.toString());
    await fs.promises.writeFile("temp.txt", "Hello World");

    console.log("File read and write operations completed successfully.");
  } catch (error) {
    console.error("Error:", error);
  }
}

readFileAsync();
