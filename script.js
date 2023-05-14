const dropdown = document.querySelector(".menu");
const jackdaniels = document.querySelector(".jackdaniels");
const jameson = document.querySelector(".jameson");
const product1 = document.querySelector(".product1");
const product2 = document.querySelector(".product2");
const productbutton1 = document.querySelector(".productbutton1");
const productbutton2 = document.querySelector(".productbutton2");
const productbutton3 = document.querySelector(".productbutton3");
const productbutton4 = document.querySelector(".productbutton4");
const buyinfo = document.querySelector(".buyinfo");
const form = document.querySelector(".form");
const full_name = document.querySelector("#full_name");
const city = document.querySelector("#city");
const post_office1 = document.querySelector("#post_office1");
const post_office2 = document.querySelector("#post_office2");
const post_office3 = document.querySelector("#post_office3");
const payment_card = document.querySelector("#payment_card");
const payment_card2 = document.querySelector("#payment_card2");
const quantity = document.querySelector("#quantity");
const error = document.querySelector("#quantity");
const buttonreg = document.querySelector("#error");
let nameInput;
let quantityInput;
let choisePay;

jameson.addEventListener("click", () => {
  dropdown.style.display = "none";
  product2.style.display = "inline-block";
});

productbutton3.addEventListener("click", () => {
  product2.style.display = "none";
  form.style.display = "flex";
});
productbutton4.addEventListener("click", () => {
  product2.style.display = "none";
  dropdown.style.display = "flex";
});
jackdaniels.addEventListener("click", () => {
  dropdown.style.display = "none";
  product1.style.display = "inline-block";
});
productbutton1.addEventListener("click", () => {
  product1.style.display = "none";
  form.style.display = "flex";
});
productbutton2.addEventListener("click", () => {
  product1.style.display = "none";
  dropdown.style.display = "flex";
});

full_name.addEventListener("input", () => {
  nameInput = full_name.value;
});

city.addEventListener("change", () => {
  if (city.value === "kharkiv") {
    post_office1.style.display = "block";
    post_office2.style.display = "none";
    post_office3.style.display = "none";
  }
  if (city.value === "kyiv") {
    post_office1.style.display = "none";
    post_office2.style.display = "block";
    post_office3.style.display = "none";
  }
  if (city.value === "lviv") {
    post_office1.style.display = "none";
    post_office2.style.display = "none";
    post_office3.style.display = "block";
  }
});
payment_card.addEventListener("click", () => {
  choisePay = payment_card.value;
});
payment_card2.addEventListener("click", () => {
  choisePay = payment_card2.value;
});

quantity.addEventListener("input", () => {
  if (quantity.value === !isNaN) {
    quantityInput = quantity.value;
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
});

buttonreg.addEventListener("click", () => {
  form.style.display = "none";
  buyinfo.style.display = "inline-block";
  setTimeout(() => {
    buyinfo.style.display = "none";
    dropdown.style.display = "flex";
  }, 3000);
});

// product1.style.display = "none";
// buyinfo.style.display = "inline-block";
// setTimeout(() => {
//   buyinfo.style.display = "none";
//   dropdown.style.display = "flex";
// }, 1500);
