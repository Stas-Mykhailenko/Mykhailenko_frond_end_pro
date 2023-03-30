// 1)Написать функцию которая будет возвращать уникальные значения в массиве

// Пример:

// const yourFunc = (arr) => {};

// const arr1 = [1,2,3,4,5,1,2,3,4,5]

// yourFunc(arr1) // [1,2,3,4,5]

// Должно работать с любыми значениями
const yourFunc = (arr) =>{
	let array = [];
	array.push(arr[0]);
	console.log(array)
	arr.forEach(element => {
		if(array.includes(element) !== array.includes(element))
		array.push(element)
		console.log (element)
	});
	return array
}
const arr1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
yourFunc(arr1); // [1,2,3,4,5]
console.log(yourFunc(arr1));
