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
// 2)Створіть об’єкт calculator з трьома методами:

// read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
// sum() повертає суму збережених значень.
// mul() множить збережені значення і повертає результат.
let calculator = {
  read(){
    this.a = parseInt(prompt("Первое число", 0));
    this.b = parseInt(prompt("Второе число",0));
  },
  sum(){
    return this.a + this.b
  },
  mul(){
    return this.a * this.b
  }
};
57
calculator.read()
console.log("Sum",calculator.sum())
console.log("Mul",calculator.mul())
