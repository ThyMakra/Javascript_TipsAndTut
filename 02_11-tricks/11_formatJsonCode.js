/* 
make stringify indent the JSON
- stringigy takes 2 optional parameters; 
    (replacer, space_value = the number of space or a string '\t')
 */

console.log(JSON.stringify({alpha: 'A', beta: 'B'}, null, '\t'));
/* 
{
	"alpha": "A",
	"beta": "B"
}
 */ 



/* 

for (var i = 0; i < arr.length; i++) { }

// vs

for (var i = 0, arrLength = arr.length; i < arrLength; i++) { }

1. Is there any advantage to caching the length property of an array 
in JavaScript? Is there much more involved in reading a local variable 
over an object's property?
2. Is the length property simply altered on creation and on shift() 
and pop() type methods that don't return a new array and otherwise 
simply stored as an integer?


// Answer
i < array.length actually was faster in Chrome

Every Array object has a length property whose value is always
a nonnegative integer less than 232. The value of the length property is
numerically greater than the name of every property whose name is an 
array index; whenever a property of an Array object is created or changed, 
other properties are adjusted as necessary to maintain this invariant. 
Specifically, whenever a property is added whose name is an array index, 
the length property is changed, if necessary, to be one more than the numeric 
value of that array index; and whenever the length property is changed, 
every property whose name is an array index whose value is not 
smaller than the new length is automatically deleted. 
This constraint applies only to own properties of an Array object 
and is unaffected by length or array index properties that may be 
inherited from its prototypes

*/