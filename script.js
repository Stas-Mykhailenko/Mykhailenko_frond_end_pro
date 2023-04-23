// 1)Напишите функцию.На вход функции подаётся список строк и нужно найти общий для всех этих строк префикс максимальной длины.
//  Например, для списка ["programming", "product", "procrastination"] — ответом будет "pro"

const array = ["programming", "product", "procrastination", "procrastination"];
function findFirstletter(arr) {
  let x = 0;
  let result = "";
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][x] !== arr[i + 1][x]) {
      break;
    }
    if (i === arr.length - 2) {
      result += arr[0][x];
      i = -1;
      x++;
    }
  }
  return result;
}

console.log(findFirstletter(array));

// 2)Напишите функцию которая превращает массив двухмерных массивов в массив трехмерных и наоборот.
// Остаток добавляется в новый массив

// Например:
// Input: [[1,2], [3,4], [5,6]]
// Output: [[1,2,3], [4,5,6]]

// Input: [[1,2], [3,4], [5,6], [7]]
// Output: [[1,2,3], [4,5,6], [7]]

// И наоборот
// Input: [[1,2,3], [4,5,6]]
// Output: [[1,2], [3,4], [5,6]]
// Усложнение: сделайте так что бы вторым параметром в функцию я могу передать 
// параметр массивы какой длины у меня должны быть в результате, например
// const arr = [[1,2,3], [4,5,6]]
// yourFunc(arr, 5) --> [[1,2,3,4,5], [6]]


function changeArr(arr, b = 3) {
  let result = [];
  let item = [];
  let str = arr.join().split(/[,]/);
  if (arr[0].length === 3) {
    b = 2;
  }
  for (let i = 0; i < str.length; i++) {
    item.push(str[i]);
    if (item.length === b) {
      result.push(item);
      item = [];
    }
    if (i === str.length - 1 && item.length !== 0) {
      result.push(item);
    }
  }
  return result;
}
// const array2 = [[1, 2], [3, 4], [5, 6], [7]];
const array2 = [[1,2,3], [4,5,6]]
console.log(changeArr(array2));
