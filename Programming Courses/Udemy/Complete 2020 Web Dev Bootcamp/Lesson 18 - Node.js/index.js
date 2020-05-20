// native node modules
const fs = require("fs");

// external node module
const superheroes = require("superheroes");
const supervillains = require("supervillains");

fs.copyFileSync("file1.txt", "file2.txt");

var superName =  superheroes.random();
var villainName = supervillains.random()

console.log(`${superName} vs. ${villainName}`);
