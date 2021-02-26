//Working with 2D Arrays (incomplete)
const Input = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1]
];

function twoDeeArray(arrays) {
  for (i = 0; i < arrays.length; i++) {
    while (arrays[i].indexOf(0) > 0) {
      const idx = arrays[i].indexOf(0);
      arrays.forEach(array => {
        array[idx] = 0;
      })
      arrays[i] = arrays[i].map(val => {
        return val * 0;
      })
    }
  }
  return arrays;
};