/* wrap async logic in Promise
 and resolve on success or reject on fail. 
use then to handle success and catch to handle failure
 */

 const myPromise = new Promise((res, rej) => {
     setTimeout(() => {
         if (Math.random() < 0.5) {
            return res('Hooray!');
         }
         return rej('Oh no');
        }, 1000);
 });

 myPromise
    .then((data) => console.log(`Sucess: ${data}`))
    .catch((err) => console.log(`Error: ${err}`));

// If random < 0.9, it will log success