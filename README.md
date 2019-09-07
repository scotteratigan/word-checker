# word-checker

Checks if a string is a word or the beginning of a word.

## Fast dictionary search.

Dictionary trie creation time is O(n) based on dictionary size.

Dictionary search is O(n) based on word length. Dictionary size is irrelevant once trie is constructed!

### Internal Data Structure

Builds out an object, with \$ indicating the end of a valid word string.
Example with "cat" and "car":

{ c: {a: { r: {$: 1}, t: {$: 1}}}}

In this trie, you can essentially check a boolean:
(trie.c.a.t.\$) console.log('cat is a word')
