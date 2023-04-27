const SIZE_SMALL = {
  name: "small",
  price: 50,
  cal: 20,
};
const SIZE_BIG = {
  name: "big",
  price: 100,
  cal: 40,
};

const STUFFING_CHEESE = {
  name: "cheese",
  price: 100,
  cal: 40,
};
const STUFFING_SALAD = {
  name: "salad",
  price: 100,
  cal: 40,
};
const STUFFING_POTATO = {
  name: "potato",
  price: 100,
  cal: 40,
};

const TOPPING_MAYO = "mayo";
const TOPPING_SAUCE = "sauce";

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.cal = this.size.cal + this.stuffing.cal;
    this.price = this.size.price + this.stuffing.price;
    this.listTopping = {
      mayo: 0,
      sauce: 0,
    };
  }
  calories() {
    return;
  }
  addtopping(topping) {
    if (topping === "mayo") {
      this.cal += 5;
      this.price += 20;
      this.listTopping[topping]++;
    }
    if (topping === "sauce") {
      this.price += 15;
      this.listTopping[topping]++;
    }
    return this;
  }
  //

  deletetopping(topping) {
    if (this.listTopping["mayo"] !== 0 && topping === "mayo") {
      this.cal -= 5;
      this.price -= 20;
      this.order[topping]--;
    }
    if (this.listTopping["sauce"] !== 0 && topping === "sauce") {
      this.price -= 15;
      this.listTopping[topping]--;
    }
    return this;
  }
  showOrder() {
    console.log(
      "Размер гамбургера " + this.size.name,
      "Начинка " + this.stuffing.name,
      "Каллорийность " + this.cal,
      "Цена " + this.price
    );
  }
  showCalories() {
    console.log("Каллорийность " + this.cal);
  }
  showPrice() {
    console.log("Цена " + this.price);
  }
}

let hamburger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);
// hamburger.addtopping(TOPPING_MAYO)
//   .addtopping(TOPPING_MAYO)
//   .deletetopping(TOPPING_SAUCE);
hamburger.showOrder();
