let mixed = [0, 'blue', NaN, 2, true, undefined, false, "", null];
let trueArray = mixed.filter(Boolean);

console.log(trueArray); // [ 'blue', 2, true ]


