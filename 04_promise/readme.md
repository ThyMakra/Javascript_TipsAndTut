## Promise
Promise represents a value that is unknown now
and may become known in the future 
__= manages a single async value that can be handled in the future__

### Usage 
1. create a Promise = represents an asynchronous value
2. consume a Promise = resolves an asynchronous operation

1. Create a Promise
// starts off as pending state, with callback function(executor), when to resolve or reject the promise
2. Consume a Promise
// waiting for the asynchronous method to be fulfilled
* Note: 
    All the method returns Promises, can be chained together to perform sequence action

```javascript
promise
    .then(...)
    .then(...)
    .then(...)
    .catch(...)
    .finally(...);
```