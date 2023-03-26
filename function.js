// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

const arr = [1, 5, 2, 3, 1, 5, 2, 3];
function removeElement(arr, item = 1) {
  arr.forEach((element) => {
    if (item === element) arr.splice(arr.indexOf(item), 1);
  });
  return arr;
}
console.log(removeElement(arr));
// console.log(arr)

// 2)Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів
// із набору characters довжиною length. span>

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(numb, string) {
  let arr = string.split("").sort((a, b) => {
    return Math.random() - 0.5;
  });
  arr.length = numb;
  return arr.join("");
}
let key = generateKey(8, characters);
console.log(key);

// 3)Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
//  'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function deleteLetters(string, letters) {
  let arr = string
    .split("")
    .filter((item) => !letters.includes(item))
    .join("");
  return arr;
}
console.log(deleteLetters("hello world", ["l", "d"]));

// 4)Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
// Первый вызов
// sum(3) = 3
// Второй вызов
// sum(5) = 8
// Третий вызов
// sum(20) = 28

function sumAdd() {
  let sum = 0;
  return function (number) {
    sum += number;
    return sum;
  };
}
let sum = sumAdd();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
