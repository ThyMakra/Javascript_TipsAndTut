let myFunc = (text, callback) => {
    setTimeout(() => {
        callback(text);
    }, 1000);
  };

myFunc('Hello world', console.log); 


