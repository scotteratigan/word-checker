"use strict";
const fs = require("fs");

module.exports = class WordChecker {
  constructor(language = "english") {
    this.language = language.toLowerCase();
    const dictionaryArr = loadDictionary(`${language}.txt`);
    this.wordTrie = buildWordTrie(dictionaryArr);
  }
  getLang() {
    return this.language;
  }
  isWord(letterString) {
    const letterArr = letterString.toLowerCase().split("");
    if (!this.wordTrie) return console.error("no trie loaded!");
    if (letterArr.length < 3) return false;
    let currObj = this.wordTrie;
    for (let i = 0; i < letterArr.length; i++) {
      const letter = letterArr[i];
      if (!currObj[letter]) return false;
      currObj = currObj[letter];
    }
    if (currObj.$) return true;
    return false;
  }
};

// helper function called in constructor
function loadDictionary(source) {
  if (!source)
    throw new Error(
      "loadDictionary called with no source dictionary specified"
    );
  try {
    const wordList = fs
      .readFileSync(source)
      .toString()
      .split("\r\n");
    console.log("Dictionary loaded, words:", wordList.length);
    return wordList;
  } catch (err) {
    console.error("Error, unable to load dictionary", source);
  }
}

// helper function called in constructor
/* Builds out an object, with $ indicating the end of a valid word string.
 * Example with "cat" and "car":
 *
 * { c: {a: { r: {$: 1}, t: {$: 1}}}}
 *
 * In this trie, you can essentially check a boolean:
 * if (trie.c.a.t.$) console.log('cat is a word')
 */
function buildWordTrie(dictionaryArr) {
  function addWord(word, obj) {
    if (!word) return (obj.$ = 1);
    const letter = word.substring(0, 1);
    const restOfWord = word.substring(1);
    if (obj[letter] === undefined) obj[letter] = {};
    return addWord(restOfWord, obj[letter]);
  }
  const wordTrie = {};
  dictionaryArr.forEach(word => addWord(word, wordTrie));
  return wordTrie;
}
