/* Math.floor() Math.ceil() Math.round() */

/* Removes what's after decimal point */

/* if n is positive, round down, 
if n is negative, round up */
console.log(23.9 | 0); // 23
console.log(-23.9 | 0); // -23
// bitwise
console.log(~~23.9); // 23
console.log(~~-23.9); // -23

/* The reasons these particular operations work is 
Once forced to an integer, the value is left unchanged */


/* Remove final digit */

// let str = "1553";
// Number(str.substring(0, str.length - 1));

/* use bitwise OR */
console.log(1553 / 10 | 0); // 155







