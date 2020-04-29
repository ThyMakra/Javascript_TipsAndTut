## Introduction
Javascript arrays

### Interesting
* Mapping without array
    ```javascript
    let arr = [
        { name: 'Alice', age: 22},
        { name: 'Bob', age: 23},
        { name: 'Cathe', age: 24},
        { name: 'Dara', age: 25},
        { name: 'Eve', age: 26},
    ];
    Array.from(arr, ({name}) => name);
    ```