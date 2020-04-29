/* works with variables with Primitive type */

const arr = [1, 2, 2, 3, 4, 5, 4, 4, 5];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [ 1, 2, 3, 4, 5 ]
