const SIZE_SMALL = "small";
const SIZE_BIG = "big";

const STUFFING_CHEESE = "cheese";
const STUFFING_SALAD = "salad";
const STUFFING_POTATO = "potato";

const TOPPING_MAYO = "mayo";
const TOPPING_SAUCE = "sauce";

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.cal = 0;
    this.price = 0;
    this.order = {
      mayo: 0,
      sauce: 0,
    };
  }
  //
  addtopping(topping) {
    if (topping === "mayo") {
      this.cal += 5;
      this.price += 20;
      this.order[topping]++;
    }
    if (topping === "sauce") {
      this.price += 15;
      this.order[topping]++;
    }
    return this;
  }
  //

  deletetopping(topping) {
    if (this.order["mayo"] !== 0 && topping === "mayo") {
      this.cal -= 5;
      this.price -= 20;
      this.order[topping]--;
    }
    if (this.order["sauce"] !== 0 && topping === "sauce") {
      this.price -= 15;
      this.order[topping]--;
    }
    return this;
  }
  showorder() {
    if (this.size === "small") {
      this.cal += 20;
      this.price += 50;
      switch (this.stuffing) {
        case STUFFING_CHEESE:
          this.cal += 20;
          this.price += 10;
          break;
        case STUFFING_SALAD:
          this.cal += 5;
          this.price += 20;
          break;
        case STUFFING_POTATO:
          this.cal += 10;
          this.price += 15;
          break;
      }
    }
    if (this.size === "big") {
      this.cal += 40;
      this.price += 100;
      switch (this.stuffing) {
        case STUFFING_CHEESE:
          this.cal += 20;
          this.price += 10;
          break;
        case STUFFING_SALAD:
          this.cal += 5;
          this.price += 20;
          break;
        case STUFFING_POTATO:
          this.cal += 10;
          this.price += 15;
          break;
      }
    }
    let order = {
      nameSandwich: "Humburger",
      stuffing: this.stuffing,
      topping: this.order,
      calories: this.cal,
      price: this.price,
    };
    return order;
  }
}

let hamburger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);
hamburger.addtopping(TOPPING_MAYO)
  .addtopping(TOPPING_MAYO)
  .deletetopping(TOPPING_SAUCE);
console.log(b.showorder());
