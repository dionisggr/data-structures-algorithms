// Anagram
function anagram(string) {
  if (string.length === 1) {
    return string;
  };
  return string.split('').map((_, idx) => {
    if (string[idx] === anagram(string.slice(1))) {
      return '';
    }
    return string[idx] + anagram(string.slice(1));
  });
};