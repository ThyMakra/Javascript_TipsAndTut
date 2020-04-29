/* Give private access to a variable */

/* 
function createGreeter(greeting) {
    // a function that can only be accessed through createGreeter
    return function(name) {
        console.log(`${greeting}, ${name}`);
    }
} */

// a function(greeting) returning a function(name)
let createGreeter = (greeting) => (name) => {console.log(`${greeting}, ${name}!`);}

// have access to the above anonymous function
// with default 'Hello' as greeting
const sayHello = createGreeter('Hello'); 
sayHello('Joe'); // Hello, Joe


/* Can be used for
function apiConnect(apiKey) that returns some methods that would
use the API key, in this case 
the apiKey only need to be provided once
 */

let fetch = (route, request=Object()) => {
    console.log(`Route ${route}`);
    console.log(request)
}


let apiConnect = (apiKey) => {
    let get = (route) => fetch(`${route}?key=${apiKey}`);
    let post = (route, params) => fetch(route, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    })

    return { get, post }
} 

const api = apiConnect('my-secret-key');

// No need to include the apiKey anymore
api.get('http://www.example.com/get-endpoint');
api.post('http://www.example.com/post-endpoint', { name: 'Joe' });












