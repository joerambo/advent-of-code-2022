import { readFileSync } from "fs";

const input = readFileSync("./input.txt", "utf-8");
const sets = input.split("\n\n");

let highest = 0;

for (const set of sets) {
  const calories = set.split("\n").map((num) => parseInt(num));
  const total = calories.reduce((a, b) => a + b, 0);

  if (total > highest) {
    highest = total;
  }
}

console.log(highest);
