console.log('You are at '+window.location);

let numberModule = prompt('insert the number');
numberModule = parseInt(numberModule);

if(numberModule>=0) {
	console.log(numberModule);
}
else {
	console.log(-1*numberModule);
}