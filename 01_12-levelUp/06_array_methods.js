const arr = [1, 2, 3, 4, 5, 6];

// map
const mapped = arr.map(el => el + 1);
console.log(mapped);

// filter 
const filtered = arr.filter(el => el === 2 || el === 4);
console.log(filtered);

// reduce
const reduced = arr.reduce((total, current) => total + current);
console.log(reduced);

// find
const found = arr.find(el => el > 5);
console.log(found);

// findIndex
const foundIndex = arr.findIndex(el => el === 'Frank');
console.log(foundIndex);

// push 
// make changes to the array
let newArr = arr.slice();
const pushed = arr.push(5);
console.log(newArr);
console.log(pushed);

// pop
const popped = newArr.pop();
console.log(newArr);
console.log(popped);

// shift, unshift
const shifted = newArr.shift();
console.log(newArr);
console.log(shifted);
const unshifted = newArr.unshift();
console.log(newArr);
console.log(unshifted);

// slice
// returns shallow copy of an array from start position & before the end position
const sliced = arr.slice(2, 4);
console.log(arr);
console.log(sliced);

// splice 
// modify an array by remove, replacing, adding new elements
// modify in place
let spliced = [1, 3, 4, 5];
spliced.splice(1, 0, '123');
console.log(spliced);

// sort 
const sorter = (firstEle, secondEle) => secondEle - firstEle;
arr.sort(sorter);

console.log(arr);







