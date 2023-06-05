const obj = [
  {
    nameCategori: "Виски",
    nameidCategori: "a",
    nameproduct: [
      {
        firstproduct: "Jack Daniels",
        firstproductform: {
          addimg: "./img/jackdaniels.jpeg",
          nameidproduct: "prod-1",
          about: "text",
        },
      },
      {
        secondproduct: "Jemeson",
        secondproductform: {
          addimg: "./img/jemeson.jpg",
          nameidproduct: "prod-2",
          about: "text",
        },
      },
    ],
  },
  {
    nameCategori: "Ром",
    nameidCategori: "b",
    nameproduct: [
      {
        firstproduct: "Bacardi",
        firstproductform: {
          addimg: "./img/Bacardi.jpg",
          nameidproduct: "prod-1",
          about: "text",
        },
      },

      {
        secondproduct: "Captan Morgan",
        secondproductform: {
          addimg: "./img/captanmorgan.jpg",
          nameidproduct: "prod-2",
          about: "text",
        },
      },
    ],
  },
  {
    nameCategori: "Водка",
    nameidCategori: "c",
  },
];
const body = document.querySelector(".body");
const menu = document.querySelector(".menu");
const header = document.querySelector(".header");

let categorilist = "";
let categoriarray = [];
let productlist = "";
(function addBack(array) {
  let arraycatalog = [];
  array.forEach((element) => {
    let elementcatalog = `<p id= ${element.nameidCategori} class="catalog-style"> ${element.nameCategori} </p>`;
    arraycatalog.push(elementcatalog);
    categorilist = arraycatalog.join("");
  });
})(obj);

function openmenu() {
  return (body.innerHTML = `
	<header class="header">
	  <a class="menu" href="#"> Все товары</a>
	  <a class="myorder" href="#"> Мои заказы</a>
	</header>
	<div class="info">
	  <h1 class="infotitle">Виски</h1>
	  <p class="infotext">
		 Виски — наименование крепкого алкогольного напитка, получаемого методом
		 дистилляции зернового сусла на основе ячменя, пшеницы, ржи или кукурузы.
		 Основные объемы виски производят в Шотландии, Ирландии, США и Канаде,
		 известен также японский виски. У нас вы найдете огромный ассортимент
		 солодового и купажированного виски превосходного качества.
	  </p>
	  <img class="infoimg" src="./img/firstpage.png" alt="" />
	  </div>
	  <div class="catalog"> ${categorilist}
	  </div>`);
}

function openproduct() {}
function firstscreen() {
  return (body.innerHTML = `
	<header class="header">
	  <a class="menu" href="#"> Все товары</a>
	  <a class="myorder" href="#"> Мои заказы</a>
	</header>
	<div class="info">
	  <h1 class="infotitle">Виски</h1>
	  <p class="infotext">
		 Виски — наименование крепкого алкогольного напитка, получаемого методом
		 дистилляции зернового сусла на основе ячменя, пшеницы, ржи или кукурузы.
		 Основные объемы виски производят в Шотландии, Ирландии, США и Канаде,
		 известен также японский виски. У нас вы найдете огромный ассортимент
		 солодового и купажированного виски превосходного качества.
	  </p>
	  <img class="infoimg" src="./img/firstpage.png" alt="" />`);
}

menu.addEventListener("click", function (e) {
  openmenu();
  e.stopPropagation();
});
