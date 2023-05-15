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
const full_namecolor = document.querySelector(".full_namecolor");
const city = document.querySelector("#city");
const post_office1 = document.querySelector("#post_office1");
const post_office2 = document.querySelector("#post_office2");
const post_office3 = document.querySelector("#post_office3");
const payment_card = document.querySelector("#payment_card");
const payment_card2 = document.querySelector("#payment_card2");
const colorradio_first = document.querySelector(".colorradio_first");
const colorradio_second = document.querySelector(".colorradio_second");
const quantity = document.querySelector("#quantity");
const quantity_color = document.querySelector(".quantity_color");
const error = document.querySelector("#error");
const buttonreg = document.querySelector("#buttonreg");
const attention = document.querySelector(".attention");
const listorder = document.querySelector(".listorder");
const firsttab = document.querySelector("#firsttab");
const secondtab = document.querySelector("#secondtab");
const thirdtab = document.querySelector("#thirdtab");
const fouthtab = document.querySelector("#fouthtab");
const fifthtab = document.querySelector("#fifthtab");
const listorder_button1 = document.querySelector("#listorder_button1");
const listorder_button2 = document.querySelector("#listorder_button2");
let nameInput = null;
let quantityInput = null;
let choisePay = null;
let post_office = post_office1.value;
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
post_office1.addEventListener("click", () => {
  post_office = post_office1.value;
});
post_office2.addEventListener("click", () => {
  post_office = post_office2.value;
});
post_office3.addEventListener("click", () => {
  post_office = post_office3.value;
});
payment_card.addEventListener("click", () => {
  choisePay = payment_card.value;
});
payment_card2.addEventListener("click", () => {
  choisePay = payment_card2.value;
});

quantity.addEventListener("input", () => {
  if (!isNaN(quantity.value)) {
    quantityInput = quantity.value;
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
});
buttonreg.addEventListener("click", () => {
  if (nameInput === null) {
    full_namecolor.style.color = "#ff0000";
  }
});
buttonreg.addEventListener("click", () => {
  if (quantityInput === null) {
    quantity_color.style.color = "#ff0000";
  }
});

buttonreg.addEventListener("click", () => {
  if (choisePay === null) {
    colorradio_second.style.color = "#ff0000";
    colorradio_first.style.color = "#ff0000";
  }
});
buttonreg.addEventListener("click", () => {
  if (quantityInput !== null && nameInput !== null && choisePay !== null) {
    form.style.display = "none";
    listorder.style.display = "block";
    attention.style.display = "none";
  }
  firsttab.innerHTML = `ФИО ${nameInput}`;
  secondtab.innerHTML = `Місто ${city.value}`;
  thirdtab.innerHTML = `Відділеня НП  ${post_office}`;
  fouthtab.innerHTML = `Спосіб оплати ${choisePay}`;
  fifthtab.innerHTML = `Кількість     ${quantityInput} шт.`;
});
listorder_button1.addEventListener("click", () => {
  listorder.style.display = "none";
  buyinfo.style.display = "block";
  setTimeout(() => {
    buyinfo.style.display = "none";
    dropdown.style.display = "flex";
  }, 3000);
});
listorder_button2.addEventListener("click", () => {
  listorder.style.display = "none";
  form.style.display = "flex";
});
