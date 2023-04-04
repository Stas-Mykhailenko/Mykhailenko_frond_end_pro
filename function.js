// 1)Написать функцию которая будет возвращать уникальные значения в массиве

// Пример:

// const yourFunc = (arr) => {};

// const arr1 = [1,2,3,4,5,1,2,3,4,5]

// yourFunc(arr1) // [1,2,3,4,5]

// Должно работать с любыми значениями
const yourFunc = (arr) => {
  let array = [arr[0]];
  arr.forEach((element) => {
    if (arr.includes(element) !== array.includes(element)) array.push(element);
  });
  return array;
};
const arr1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(yourFunc(arr1));
// 2)Напишите функцию которая принимает массив целых чисел и вернет число которое
// встречается чаще всего, если таких чисел несколько результатом должно быть число которое встречается первым,
const arr2 = [1, 2, 3, 3, 3, 4, 3, 4, 4, 4, 4, 4, 3, 3];
function findNumber(arr) {
  let count = {};
  let maxNum = 0;
  let resalt = [];
  arr.forEach((item) => {
    if (count[item] === undefined) {
      count[item] = 1;
    } else {
      count[item]++;
    }
    if (count[item] > maxNum) maxNum = count[item];
  });
  console.log(count);
  for (let key in count) if (count[key] === maxNum) resalt.push(key);
  return resalt.shift();
}
// 3) Что вернет выражение z(x) ?

// Напишите ответ своими словами как вы понимаете

// В консоле не смотрите, сначала напишите, после проверьте себя

// let y = 5;
// let x = () => y;
// let z = t => {
//   let y = 5;
//   t();
// };
// z(x);
//  Я думаю мы вызовим функцию z и 
// передадим аргументом фукцию x  так как в функция х возвращает у то ее значение оно возмет из глобальной переменой.
// Поэтому функция z вернет 5.