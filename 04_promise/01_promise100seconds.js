/* 
Promise represents a value that is unknown now
and may become known in the future 
= manages a single async value that can be handled in the future
*/

/* 
1. create a Promise = represents an asynchronous value
2. consume a Promise = resolves an asynchronous operation
*/

/* 1. Create a Promise */
// starts off as pending state, with callback function(executor), when to resolve or reject the promise
const ride = new Promise((resolve, reject) => {
    
    if(arrived) { // resolve
        resolve('driver arrived');
    } else {
        reject('driver bailed');
    }
    
});

/* 2. Consume a Promise */
// waiting for the asynchronous method to be fulfilled
ride
    .then(value => {
        console.log(value);
        // driver arrived
    })
    .catch(error => {
        console.log(error);
        // driver bailed
    })
    .finally(() => { // always execute
        console.log('All settled');
    });

/* 
All the method returns Promises, 
can be chained together to perform 
*/
/* 
ride
    .then(...)
    .then(...)
    .then(...)
    .catch(...)
 */

