// 1)Найдите числа которые повторяются нечетное количество раз в массиве
// solution([12, 23, 34, 12, 12, 23, 12, 45]) -> [34 45]
// solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]) -> [4 100 5000]
// solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]) -> [6 5 9 21]
// solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]) -> [8 16 23 42]
// solution([2, 2, 44, 44]) => []

function findNumber(item) {
  let count = {};
  let array = [];
  item.filter((elements) => {
    if (count[elements] === undefined) {
      count[elements] = 1;
    } else {
      count[elements]++;
    }
  });
  for (let key in count) if (count[key] % 2 !== 0) array.push(+key);
  return array;
}

const arr = [4, 8, 15, 16, 23, 42, 4, 15, 42, 42];

console.log(findNumber(arr));

// 2)
// Создайте объект к которому можно будет применить любое число вызовов
// // obj.method().method().method()
// Передаваемое значение должно возвращаться в виде html тэгов
// Передаваемые аргументы должны быть только в виде строки
// Передаваемые аргументы должны помещаться внутрь предыдущих
// Добавьте метод render, который будет возвращать сгенерированную строку.
// Добавьте методу add второй параметр, который будет размещать информацию внутри тэга
// Создание первого метода должно быть без метода
// // // example
// var helloList = ezjQuery('body') // <body></body>
// .add('div') // <body><div></div></body>
// .add('ul') // <body><div><ul></ul></div></body>
// .add('li', 'Hello') //<body><div><ul><li>Hello</li></ul></div></body>
// .render();
// console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
// // Обратите внимание, что после вызова render создание строки началось сначала
// var bodyDiv = ezjQuery('body') //<body></body>
// .add('div') //<body><div></div></body>
// .render();
// console.log(bodyDiv); //<body><div></div></body>
// // Для выполнивших все задания
// document.write(helloList)

function AddHtml(name) {
  if (name === undefined) {
    this.a = "";
    this.b = "";
	 
  } else {
    this.a = `<${name}>`;
    this.b = `</${name}>`;
  }
  this.html = this.a + this.b;

  this.add = function (tag, str = "") {
    this.a = this.a + `<${tag}>`;
    this.b = `</${tag}>` + this.b;
    this.c = str;
    this.html = this.a + this.c + this.b;
    return this;
  };
  this.render = function () {
	let newHtml = this.html
	this.a = `<${name}>`;
	this.b = `</${name}>`;
   return newHtml;
  };

}
let obj = new AddHtml("body")
.add("div")
.add("div", "hellow")
.render()
document.write(obj)

