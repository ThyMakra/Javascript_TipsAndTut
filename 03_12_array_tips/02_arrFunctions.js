// change value 
var arr = [1, 2, 3, 4, 5];

arr.splice(0, 2, 99, 99);
console.log(arr); // [ 99, 99, 3, 4, 5 ]

// empty array
var array = [1, 2, 3, 4];

// either one 
// arr.length = 0;
arr.splice(0);

// delete duplicate
var duplicates = [1, 1, 1];

var unique1 = Array.from(new Set(duplicates));
console.log(unique1);

var unique2 = [...new Set(duplicates)];
console.log(unique2);

/* Merge arrays */
var arr1 = [1, 1, 1];
var arr2 = [2, 2, 2];
var arr3 = [3, 3, 3];

// spread operator
var merge1 = [...arr1, ...arr2, ...arr3];
console.log(merge1);

// concat()
var merge2 = arr1.concat(arr2, arr3);
console.log(merge2);

/* find duplicates */
var num1 = [1, 1, 1, 2, 3];
var num2 = [2, 3, 4, 4];
// include()
var duplicates = [...new Set(num1)].filter(item => num2.includes(item));
console.log(duplicates);
// has()
let val1 = new Set(num1);
let duplicateVal2 = num2.filter(item => val1.has(item));
console.log(duplicateVal2);


/* find last index of selected element */
let nums = [1, 5, 2, 4, 5, 6, 7, 4];
let lastInd = nums.lastIndexOf(4);

console.log(lastInd);

/* Reverse */
let ascend = [1, 2, 3, 4, 5];
let descend = ascend.reverse(); // mutated

console.log(descend === ascend); // same reference
console.log(ascend);

/* Find smallest */
let numss = [1, 2, 3, -2];

let mini = Math.min(...nums);
// or
let mini1 = Math.min.apply(null, nums);
console.log(mini1);









