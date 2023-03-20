
let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
//  Знайти суму та кількість позитивних елементів.
let sum = 0;
arr.forEach(function(number) {
if( number > 0 ) {
	sum += number;
};
});
console.log(sum);
// Знайти мінімальний елемент масиву та його порядковий номер.
let minNumb = arr [0];
arr.forEach(function(number){
	if(number > minNumb){
		minNumb = number;
	}
});
console.log(arr.indexOf(minNumb), minNumb);
// Можно ли так решить?
// console.log(Math.min(...arr), arr.indexOf(Math.min(...arr)));

// Знайти максимальний елемент масиву та його порядковий номер.
let maxNumb = arr [0];
arr.forEach(function(number){
	if(number < maxNumb){
		maxNumb = number;
	}
});
console.log(arr.indexOf(maxNumb), maxNumb);
// Можно ли так решить?
// console.log(Math.max(...arr), arr.indexOf(Math.max(...arr)));

// Визначити кількість негативних елементів.
let amount = 0;
arr.forEach(function(number){
	if( number < 0 ){
		amount += 1
	}
});
console.log(amount);
// Знайти кількість непарних позитивних елементів.
let result = 0;
arr.forEach(function(number){
	number > 0 
	if( number % 3 === 0 ){
		amount += 1
	}
});
console.log(amount);
// Знайти кількість парних позитивних елементів.
let result2 = 0;
arr.forEach(function(number){
	number > 0 
	if( number % 2 === 0 ){
		amount +=1
	}
});
console.log(amount);
// Знайти суму парних позитивних елементів.
let sumNumbers = 0;
arr.forEach(function(number){	
	if(number > 0 && number % 2 === 0) {
		sumNumbers += number
	}
})
console.log(sumNumbers);
// Знайти суму непарних позитивних елементів
let sumNumber = 0;
arr.forEach(function(number){	
	if(number > 0 && number % 3 === 0) {
		sumNumber += number
	}
})
console.log(sumNumber);
// Знайти добуток позитивних елементів.
let product = 1;
arr.forEach(function(number) {	
	if( number > 0 ) {
		product *= number
	}
})
console.log(product);
// Знайти найбільший серед елементів масиву, остальні обнулити.
let array = arr.map(function(number) {
	if(Math.max(...arr) !== number) {
	return number = 0
	} else{
	return	number = Math.max(...arr)
	};
});
console.log(array);