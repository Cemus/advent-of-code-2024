import fs from "fs/promises";

export default async function readInput(inputPath) {
  try {
    const data = await fs.readFile(inputPath, "utf8");
    return data;
  } catch (error) {
    console.error("Erreur :", error);
  }
}
