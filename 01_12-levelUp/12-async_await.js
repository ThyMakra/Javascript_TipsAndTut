/* "Syntactic sugar" on top of Promises  */

const greeter = new Promise((res, rej) => {
    setTimeout(() => res('Hello World'), 3000);
});

async function asyncFunc() {
    const greeting = await greeter;
    console.log(greeting);
}

asyncFunc();