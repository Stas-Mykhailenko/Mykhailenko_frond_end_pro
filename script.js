// 1)Проверьте что строка содержит все символы от "a" до "z"
// solution("wyyga") // false
// solution("qwertyuioplkjhgfdsazxcvbnm") // true
// solution("ejuxggfsts") // false
// solution("qpwoeirutyalskdjfhgmznxbcv") // true
// solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv") // true
// solution("0123456789abcdefghijklmnop") // false

function solution(str) {
  let string = "abcdefghijklmnopqrstuvwxyz";
  let b;
  string.split("").forEach((item) => {
    if (string.split("").includes(item) !== str.split("").includes(item)) {
      b = false;
    } else {
      b = true;
    }
  });
  return b;
}
console.log(solution("0123456789abcdefghijklmnop"));
console.log(solution("qwertyuioplkjhgfdsazxcvbnm"));
console.log(solution("wyyga"));
console.log(solution("WqqqqqqqpwoeirutyalskdjfhgmznxbCV"));
