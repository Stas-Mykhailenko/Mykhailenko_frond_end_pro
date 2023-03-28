// 1)Написать функцию которая будет принимать массив в качестве аргумента.
// Массив типа
const arr = [1,[3, [0, [8]]]];
function factorial(n) {
  return n !== 1 && n !== 0 ? n * factorial(n - 1) : 1;
}
function factorialNumber(element) {
  let array = element.flat(Infinity);
  let arr = [];

  array.forEach((element) => {
    arr.push(factorial(element));
  });
  return arr.join();
}
console.log(factorialNumber(arr));
