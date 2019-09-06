"use strict";
const WordChecker = require("./index");
const checker = new WordChecker("english");

console.log(checker.isWord("categorical"));
console.log(checker.isWord("jalsdkf"));
