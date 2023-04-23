// Вам потрібно зробити конструктор сутності "Студент".
// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість.
//  І є можливість отримати вік студента та його середній бал – це методи.
// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів,
// спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність,
// щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true,
//  коли викликаємо .absent() - записується false. Передбачте будь-який захист від того,
//   щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість,
//   present та absent – ​​методи.
// Останній метод: .summary(), перевіряє середню оцінку і середнє
// відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90,
// а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!",
// якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
// Не забудьте після того, як напишите цей конструктор, створити 2-3
// екземпляри (конкретних студентів) і показати використання цих методів.

class Student {
  #arr = [];
  #estimates = [];

  constructor(name, lastname, dateBirth) {
    this.name = name;
    this.lastname = lastname;
    this.dateBirth = dateBirth;
    this.#arr.length = 25;
    this.#estimates.length = 25;
  }

  present(estimates = null) {
    this.#estimates.shift();
    this.#estimates.push(estimates);
    this.#arr.shift();
    this.#arr.push("true");
    return this;
  }
  absent(estimates = null) {
    this.#estimates.shift();
    this.#estimates.push((estimates = null));
    this.#arr.shift();
    this.#arr.push("false");
    return this;
  }
  age() {
    let now = new Date();
    let age = now.getFullYear() - this.dateBirth;
    return age + " років";
  }
  averageRating() {
    let result = 0;
    this.#estimates.forEach((item) => {
      if (item !== undefined || item !== null) {
        result += item;
      }
    });
    let averageRating = result / this.#arr.length;
    return averageRating;
  }
  summary() {
    let averageRating = this.averageRating();
    let avergeVisit = 0;
    let resultVisit;
    let result;
    this.#arr.forEach((item) => {
      if (item === "true") {
        avergeVisit++;
      }
    });
    resultVisit = avergeVisit / this.#arr.length;
    if (averageRating > 90 && resultVisit > 0.9) {
      result = "Молодець";
    } else if (averageRating < 90 && resultVisit < 0.9) {
      result = "Редиска!";
    } else {
      result = "Добре, але можна краще ";
    }

    return result;
  }
}

let student = new Student("Stas", "Mikhaylenko", 1990);
student
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100);
console.log(student);
console.log(student.age());
console.log(student.averageRating());
console.log(student.summary());

let student2 = new Student("Андрій", "М", 2000);
student2
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .absent()
  .absent()
  .absent()
  .absent();
console.log(student2);
console.log(student2.age());
console.log(student2.averageRating());
console.log(student2.summary());

let student3 = new Student("Олексій", "М", 1998);
student3
  .present(100)
  .present(80)
  .present(100)
  .present(1)
  .present(1)
  .present(1)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100)
  .present(100);
console.log(student3);
console.log(student3.age());
console.log(student3.averageRating());
console.log(student3.summary());
