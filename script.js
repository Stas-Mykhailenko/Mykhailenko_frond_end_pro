// 1)Проверьте что строка содержит все символы от "a" до "z"
// solution("wyyga") // false
// solution("qwertyuioplkjhgfdsazxcvbnm") // true
// solution("ejuxggfsts") // false
// solution("qpwoeirutyalskdjfhgmznxbcv") // true
// solution("qqqqqqqqpwoeirutyalskdjfhgmznxbcv") // true
// solution("0123456789abcdefghijklmnop") // false

function solution(str) {
  let string = "abcdefghijklmnopqrstuvwxyz";
  let resalt;
  string.split("").forEach((item) => {
    if (string.split("").includes(item) !== str.split("").includes(item)) {
      resalt = false;
    } else {
      resalt = true;
    }
  });
  return resalt;
}
console.log(solution("0123456789abcdefghijklmnop"));
console.log(solution("qwertyuioplkjhgfdsazxcvbnm"));
console.log(solution("wyyga"));
console.log(solution("WqqqqqqqpwoeirutyalskdjfhgmznxbCV"));

// 2)Вам дано предложение, верните массив из слов, которые длинее чем средняя длина всех слов.
// Слова разделены пробелами, если в предложении запятые,они должны быть пропущены
// solution(["This is a sample string"]) expected ["This" "sample" "string"]
// solution(["Some another sample"]) expected ["another" "sample"]
// solution(["Do, do, do, do... do it!"]) expected []

function solutionNew(item) {
  let arr = item[0].split(/[\W]/).filter(Boolean);
  let a = arr.length;
  let b = arr.join("").length;
  let array = [];
  arr.forEach((element) => {
    if (b / a < element.length) array.push(element);
  });
  return array;
}
console.log(solutionNew(["This is a sample string"]));
console.log(solutionNew(["Some another sample"]));
console.log(solutionNew("Do, do, do, do... do it!"));

// 3)
// Сделайте 4 объекта - не усложняйте, просто наследование через __proto__
// - Пользователь - Верифицированный пользователь - Гость - База данных -
// База хранит информацию о пользователях
// Пользователи знают мыло админа
// Aдмин знает пароль от базы данных
// Гости могут зарегистрироваться в базе данных

const database = {
  nameUser: " name",
  passwordDatabase: "password",
  registrationNewUser: "newName",
};
const user = {
};
const admin = {
  email: "email",
};
const guest = {
};

user.__proto__ = admin;
admin.__proto__ = database;
guest.__proto__=database
console.log(admin.passwordDatabase); //password
console.log(user.email); //email
console.log(guest.email); // undefined
