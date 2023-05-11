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

jameson.addEventListener("click", () => {
  dropdown.style.display = "none";
  product2.style.display = "inline-block";
});

productbutton3.addEventListener("click", () => {
  product2.style.display = "none";
  buyinfo.style.display = "inline-block";
  setTimeout(() => {
    buyinfo.style.display = "none";
    dropdown.style.display = "flex";
  }, 1500);
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
  buyinfo.style.display = "inline-block";
  setTimeout(() => {
    buyinfo.style.display = "none";
    dropdown.style.display = "flex";
  }, 1500);
});
productbutton2.addEventListener("click", () => {
  product1.style.display = "none";
  dropdown.style.display = "flex";
});
