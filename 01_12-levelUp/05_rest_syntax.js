/* put any number of arguments passed to the function */

function myFunc(...args) {
    console.log(args); // [ 1, 2, 3, 4 ]
    console.log(args[0]);
}

myFunc(1, 2, 3, 4);