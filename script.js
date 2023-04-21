// 1)Напишите функцию.На вход функции подаётся список строк и нужно найти общий для всех этих строк префикс максимальной длины.
//  Например, для списка ["programming", "product", "procrastination"] — ответом будет "pro"

const a = ["programming", "product", "procrastination", "procrastination"];
function findFirstletter(arr) {
  let x = 0;
  let result = "";
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][x] !== arr[i + 1][x] || arr[i] === undefined ) {
      break;
    }
    if (i === arr.length - 2) {
      result += arr[0][x];
      x++;
      i = 0;
    }
  }
  return result;
}

console.log(findFirstletter(a));
