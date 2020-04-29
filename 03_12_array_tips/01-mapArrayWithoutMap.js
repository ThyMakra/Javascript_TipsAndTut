let arr = [
    { name: 'Alice', age: 22},
    { name: 'Bob', age: 23},
    { name: 'Cathe', age: 24},
    { name: 'Dara', age: 25},
    { name: 'Eve', age: 26},
];

let arrName = Array.from(arr, ({name}) => name);
console.log(arrName);

let arrName2 = arr.map((ele, index) => {
    return ele.name;
});
console.log(arrName2);



