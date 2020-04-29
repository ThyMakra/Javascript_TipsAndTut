/* Cleanly extract properties from objects */

const obj = {
    name: 'Joe',
    food: 'cake',
}

const { name, food } = obj;

console.log(name, food); // 'Joe' 'cake'

/* extract properties under a different name */
const {name: myName, food: myFood } = obj;

console.log(myName, myFood);

/* extracting parameters passed to a function  */
let introduce = ({name, age}) => {
    console.log(`I'm ${name}, age: ${age}`);    
  };

let person = {
    'name': 'Meak',
    'age': 18
}
introduce(person);



