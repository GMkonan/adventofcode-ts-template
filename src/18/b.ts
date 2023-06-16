// Setup deno to get your puzzle input...
import * as path from "https://deno.land/std@0.188.0/path/mod.ts";

const __dirname = path.dirname(path.fromFileUrl(import.meta.url));

const input = await Deno.readTextFile(`${__dirname}/input.txt`);

// Some really crazy and complex code later...

const result = input;

console.log({ result });
