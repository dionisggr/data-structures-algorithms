/*
1-800 number format

This format probably varies for different countries, but for the purpose of this Kata here are my rules:

A 1-800 number is an 11 digit phone number which starts with a 1-800 prefix.

The remaining 7 digits can be written as a combination of 3 or 4 letter words. e.g.

    1-800-CODE-WAR
    1-800-NEW-KATA
    1-800-GOOD-JOB

The - are included just to improve the readibility.
Story

A local company has decided they want to reserve a 1-800 number to help with advertising.

They have already chosen what words they want to use, but they are worried that maybe that same phone number could spell out other words as well. Maybe bad words. Maybe embarrassing words.

They need somebody to check for them so they can avoid any accidental PR scandals!

That's where you come in...
Kata Task

There is a preloaded array of lots of 3 and 4 letter (upper-case) "words".

    For JavaScript it is Preloaded.WORDS

Given the 1-800 (phone word) number that the company wants to use, you need to check against all known words and return the set of all possible 1-800 numbers which can be formed using those same digits.

Notes

    The desired phone-word number provided by the company is formatted properly. No need to check.
    All the letters are upper-case. No need to check.
    Only words in the list are allowed.


*/
let Preloaded = {
  WORDS: ["CODE", "GOOD", "RAW", "WAR", "HOLY", "KATA", "WANT", "GAL", "LAD", "INK", "KIN", "JOB"]
}

const Phonewords = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
  ['J', 'K', 'L'],
  ['M', 'N', 'O'],
  ['P', 'Q', 'R', 'S'],
  ['T', 'U', 'V'],
  ['W', 'X', 'Y', 'Z']
]

const WordsPhonemap = {
  'A': 0,
  'B': 0,
  'C': 0,

  'D': 1,
  'E': 1,
  'F': 1,

  'G': 2,
  'H': 2,
  'I': 2,

  'J': 3,
  'K': 3,
  'L': 3,

  'M': 4,
  'N': 4,
  'O': 4,

  'P': 5,
  'Q': 5,
  'R': 5,
  'S': 5,

  'T': 6,
  'U': 6,
  'V': 6,

  'W': 7,
  'X': 7,
  'Y': 7,
  'Z': 7
}

function check1800(str) {
  let justNumber = str.split('-').slice(2);
  const posibilities = [];
  justNumber.forEach(number => {
    const letters = [];
    for (const [key, value] in Object.entries(WordsPhonemap)) {
      if (value === number) {
        letters.push(key);
      };
    };
    return (letters);
  });
};

// Unfinished

console.log(check1800('1-800-234-5677'))