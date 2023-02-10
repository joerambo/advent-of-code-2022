import { readFileSync } from "fs";

const input = readFileSync("./input.txt", "utf-8");
const sets = input.split("\n\n");

let elves: number[] = [];

for (const set of sets) {
  const calories = set.split("\n").map((num) => parseInt(num));
  const total = calories.reduce((a, b) => a + b, 0);

  elves.push(total);
}

const top = elves.sort((a, b) => b - a).slice(0, 3);
const total = top.reduce((a, b) => a + b, 0);

console.log(total);
