/* Value vs Reference Variable assignment */
/* 
JS always assign variables by value for Primitive type values, 
But when the assigned value is an Array, Function, Object a reference
to the object in memory is assigned
 */

// by value
let var1 = 'My String';
let var2 = var1;

var2 = 'My new string';

console.log(var1); // My String
console.log(var2); // My new string

// by reference
let var3 = { name: 'Jin' }
let var4 = var3;

var2.name = 'John';

console.log(var3); // { name: 'Jin' }
console.log(var4); // { name: 'Jin' }
/* 
this could cause a problem 
when you create a function that unintentionally mutates an object
 */

/* 
JS 5 Primitive types: 
    Boolean
    null
    undefined
    String 
    Number
 */

