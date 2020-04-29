
let int = "15";
int = +int;
console.log(int); // 15
console.log(typeof int); // number

console.log(+true); // 1
console.log(+false); //0

/* Bitwise Not operator ~ */
// bit wise not operator equal to -n-1
console.log(~15); // -16
/* using 2 tildes in a row negates the operation */
// - (-n - 1) - 1
const i = ~~"15";
console.log(i); // 15
console.log(typeof int); // number

console.log(~true); // -2
console.log(~false); // -1

// let x = 5;
// x+=true
// x+=~~true; x-=~false;
// console.log(x);