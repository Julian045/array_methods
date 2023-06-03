//ARRAY METHODS

function shift(arr) {
  return arr.slice(1);
}

function unshift(arr, ...rest) {
  return rest.concat(arr);
}

function pop(arr) {
  return arr.slice(0, -1);
}

function push(arr, ...rest) {
  return arr.concat(rest);
}

const input = [1, 2, 3, 4, 5];

console.log(shift(input));            // [2, 3, 4, 5]
console.log(unshift(input, 6, 7, 8));  // [6, 7, 8, 1, 2, 3, 4, 5]
console.log(pop(input));              // [1, 2, 3, 4]
console.log(push(input, 6, 7, 8));    // [1, 2, 3, 4, 5, 6, 7, 8]
