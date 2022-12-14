// JavaScript Core Objects

// String
const fullName = "Firstname Lastname";
// string.length property
console.log( fullName.length );

const sentence = "The quick brown fox jumps over the lazy dog";
// split method, returns an array
// split(separator, limit)
const sentenceSplit = sentence.split(" ", 3);
// console.log(sentenceSplit);
const sentenceChars = sentence.split("");
// console.log(sentenceChars);
const sentenceCopy = sentence.split();
// console.log(sentenceCopy);

// slice method
// slice(indexStart, indexEnd)
// console.log(sentence[31]);
const slice1 = sentence.slice(31);
// console.log(slice1);
const slice2 = sentence.slice(4, 19);
console.log(slice2);