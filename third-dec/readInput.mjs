import fs from "fs/promises";

export default async function readInput() {
  try {
    const data = await fs.readFile("./input.txt", "utf8");
    return data;
  } catch (error) {
    console.error("Erreur :", error);
  }
}
