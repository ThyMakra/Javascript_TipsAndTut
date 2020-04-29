/* specifies what value is yielded next time next() is called
Either finite number of yields after which next() returns undefined value
 or an infinite number of values using a loop */

// finite number 
function* greeter() {
    yield 'Water';
    yield 'Cloud';
    yield 'Rise';
}

const greet = greeter();

console.log(greet.next().value);// 'Water'
console.log(greet.next().value); // 'Cloud'
console.log(greet.next().value); // 'Rise'
console.log(greet.next().value); // undefined

// infinite values
function* idCreator() {
    let i = 0;
    while (true) yield i++;
}

const ids = idCreator();

console.log(ids.next().value); // 0
console.log(ids.next().value); // 1
console.log(ids.next().value); // 2 
console.log(ids.next().value); // 3


