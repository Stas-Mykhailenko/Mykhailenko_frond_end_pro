// first task
let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sum = 0;
arr.forEach(function(number){
if( number > 0 ) {
	sum += number;
};
});
console.log(sum);

// second task
console.log(Math.min(...arr), arr.indexOf(Math.min(...arr)));
// third task
console.log(Math.max(...arr), arr.indexOf(Math.max(...arr)));
// fourth task
let amount = 0;
arr.forEach(function(number){
	if( number < 0 ){
		amount += 1
	}
});
console.log(amount);
// fifth task
let result = 0;
arr.forEach(function(number){
	number > 0 
	if( number % 3 === 0 ){
		amount += 1
	}
});
console.log(amount);
// sixth task
let result2 = 0;
arr.forEach(function(number){
	number > 0 
	if( number % 2 === 0 ){
		amount +=1
	}
});
console.log(amount);
// seventh task
let sumNumbers = 0;
arr.forEach(function(number){	
	if(number > 0 && number % 2 === 0) {
		sumNumbers += number
	}
})
console.log(sumNumbers);
// eighth task
let sumNumber = 0;
arr.forEach(function(number){	
	if(number > 0 && number % 3 === 0) {
		sumNumber += number
	}
})
console.log(sumNumber);
// ninth task
let product = 1;
arr.forEach(function(number) {	
	if( number > 0 ) {
		product *= number
	}
})
console.log(product);
// tenth task
let maxArr = Math.max(...arr);
let array = arr.map(function(number) {
	if(Math.max(...arr) !== number) {
	return number = 0
	} else{
	return	number = Math.max(...arr)
	};
});
console.log(array);