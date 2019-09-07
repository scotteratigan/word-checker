"use strict";
console.log("Setting up tests...");
const WordChecker = require("./index");
const checker = new WordChecker("english");
const chai = require("chai");
chai.config.includeStack = true;
const { expect } = chai;

expect(checker.language).to.equal("english");
expect(checker.numWords).to.be.greaterThan(10);
expect(checker.isWord("candy")).to.equal(true);
expect(checker.isWord("kaljsdf")).to.equal(false);
console.log("All tests completed.");
