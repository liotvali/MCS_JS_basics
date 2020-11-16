console.log('You are at '+window.location);

let numberModule = prompt('insert the number');
numberModule = parseInt(numberModule);

(numberModule >= 0) ? console.log(numberModule) : console.log(-1*numberModule);