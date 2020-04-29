// 2 objects point to different references
const obj1 = { 'name': 'Joe' };
const obj2 = { 'name': 'Joe' };
console.log(obj1 === obj2); // false

let obj3 = {'name': 'Dohn'};
let obj4 = obj3;
console.log(obj3 === obj4); // true




