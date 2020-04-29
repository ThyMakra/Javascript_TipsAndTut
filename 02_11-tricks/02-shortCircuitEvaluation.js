let one = 1, two = 2, three = 3;

/* Return the first false */
/* if every operand is true, the last expression will be return  */
console.log(one && two && three); // 3
console.log(0 && null); // 0 /* if any false, then return the first false */

/* Return the first true */
/* if every operand evaluates to false, the last expression will be returned */
console.log(one || two || three); // 1
console.log(0 || null); // null

/* Real use */
let foo;
let fooLength = (foo || []).length; /* no need to check type of 'foo' */
console.log(fooLength);

/* API usage */
var res = {
    'state': {
        'data': 4
    }
};
/* accessing a nested object property, but the properties might not exist
Ex: we want to access property 'data' but 'data' is undefined until
our program has sucessfully returned a fetch request */
let getData1 = (res) => {
    if (res.state.data) { // checking by condition
        return res.state.data
    } else {
        return 'Fetching data'
    }
}
console.log(getData1(res));

// using OR operator
let getData = (res) => {
    return (res.state.data || 'Fetching data'); // return the 1st true
}
console.log(getData(res));

/* Optional Chaining */
/* let data = res.state.data?.(); // only returning data if it is not null
console.log(data);
this.state?.data // whether state is defined or not
*/

// bitwise NOT 
/* ~true = -2; ~false = -1 */











