"use strict";
const WordChecker = require("./index");
const checker = new WordChecker("english");

console.log("Language:", checker.language);
console.log("Number of Words used:", checker.numWords);
console.log("categorical is a word?", checker.isWord("categorical"));
console.log("jalsdkf is a word?", checker.isWord("jalsdkf"));
