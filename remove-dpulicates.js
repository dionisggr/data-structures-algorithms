function removeDuplicates(string) {
  const obj = {};
  string.split(' ').forEach(word => {
    obj[word] = 1;
  });
  return Object.keys(obj);
};