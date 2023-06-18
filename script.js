const list = [
  {
    name: "Виски",
    ListProduct: [
      {
        nameProduct: "Jemeson",
        card: {
          img: "./img/jemeson.jpg",
          text:  `Jameson, 40%
          Традиционный купажированный виски, квинтэссенция ирландского бленда. 
          Отличается янтарным цветом и деликатным ароматом. Вкус приятный и невероятно мягкий, 
          с тонами карамели, ванили, с тонкими ореховыми и хересными оттенками.`,
          cost: "1000 грн",
        },
      },
      {
        nameProduct: "Jack Daniels",
        card: {
          img: "./img/jackdaniels.jpeg",
          text: `Jack Daniels — американский виски, для его изготовления используется более 51 % кукурузы.
           Имеет насыщенный аромат и мягкий вкус с нотками дыма. 
           Большие ценители виски данной марки предпочитают пить Jack Daniels отдельно от всего,
            остальным можно порекомендовать коктейли на основе лимонного или яблочного сока и льда.`,
          cost: "500 грн",
        },
      },
    ],
  },
  {
    name: "Ром",
    ListProduct: [
      {
        nameProduct: "Bacardi",
        card: {
          img: "./img/Bacardi.jpg",
          text: `Ром темно-янтарного цвета с золотистыми искрами. 
          Изысканный аромат рома соблазняет гармоничным переплетением пряных и дымных нот. 
          Ром обладает насыщенным, гладким, пряным, терпким вкусом с оттенками сладких специй, пряностей и долгим, 
          обволакивающим послевкусием с дымными и дубовыми нюансами.`,
          cost: "800 грн",
        },
      },
      {
        nameProduct: "Capten Morgan",
        card: {
          img: "./img/captanmorgan.jpg",
          text: `Captain Morgan White rum – бесцветный прозрачный ром крепостью 37,5% с ванильно-фруктовым ароматом. 
          Вкус кокоса, дыни и банана оттеняют карамельные ноты. Послевкусие – сухое, перечно-ванильное. 
          Напиток не менее года выдерживают в бочках из белого дуба.`,
          cost: "300 грн",
        },
      },
    ],
  },
];

const body = document.querySelector(".body");
let itemMenu = "";
let productlist = [];
let countClickmenu = 0;
let numberProduct ;

(function addCatalog(list) {
  let catalogList = [];
  let countindex = 0;
  list.forEach((item) => {
    catalogList.push(
      `<p  class="catalog-style" onclick="openProduct('${countindex}')">${item.name}</p>`
    );
    itemMenu = catalogList.join("");
    countindex++;
    productlist.push(item.ListProduct);
  });
})(list);

function openmenu() {
  if (countClickmenu === 0) {
    countClickmenu = 1;
    body.innerHTML = ` <header class="header">
		<a class ="menu" href="#" onclick="openmenu('Stas')"> Все товары</a>
		<a class ="myorder" href="#"> Мои заказы</a>
	 </header>
	 <div class="info" >
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

    <div class="catalog ">
      ${itemMenu}
    </div>`;
  } else if (countClickmenu !== 0) {
    countClickmenu = 0;
    body.innerHTML = `<header class="header">
		<a class ="menu" href="#" onclick="openmenu('Stas')"> Все товары</a>
		<a class ="myorder" href="#"> Мои заказы</a>
	 </header>
	 <div class="info" >
		<h1 class="infotitle">Виски</h1>
		<p class="infotext">
		  Виски — наименование крепкого алкогольного напитка, получаемого методом
		  дистилляции зернового сусла на основе ячменя, пшеницы, ржи или кукурузы.
		  Основные объемы виски производят в Шотландии, Ирландии, США и Канаде,
		  известен также японский виски. У нас вы найдете огромный ассортимент
		  солодового и купажированного виски превосходного качества.
		</p>
		<img class="infoimg" src="./img/firstpage.png" alt="" />
	 </div>`;
  }
}

function openProduct(array) {
  numberProduct = array;
  let nameProduct = [];
  let itemProduct = "";
  let counProduct = 0;
  productlist[array].forEach((itemNameProduct ) => {

    nameProduct.push(
      `<p id="prod-1" class="product-style" onclick="openCard(${counProduct})">${itemNameProduct.nameProduct}</p>`
    );
    itemProduct = nameProduct.join("");
    counProduct ++
  
  });

  body.innerHTML = ` <header class="header">
  <a class ="menu" href="#" onclick="openmenu('Stas')"> Все товары</a>
  <a class ="myorder" href="#"> Мои заказы</a>
 </header>
 <div class="info" >
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

  <div class="catalog ">
  ${itemMenu}
  </div>
  <div class="product">
  ${itemProduct}
    </div>`;
}

function openCard(numberCard){
  console.log(productlist[numberProduct][numberCard].card)
  body.innerHTML = `<div class = "card">
  <img src="${productlist[numberProduct][numberCard].card.img}" width="200" alt="">
  <p class="cardtext" >${productlist[numberProduct][numberCard].card.text}</p>
  <p class ="cardcost">${productlist[numberProduct][numberCard].card.cost}"грн"</p>
  <form action="/action_page.php">
    <label for="quantity">Количество:</label>
    <input type="number" id="quantity" name="quantity" min="1" max="5">
  </form>
  <a class ="buttonOerder" href="#" onclick=""> Оформить покупку</a>
  <a class ="buttonBack" href="#" onclick="backmenu()"> Вернуться на главную</a>
</div>`;
}
function backmenu(){
  countClickmenu = 0
  body.innerHTML = `<header class="header">
  <a class ="menu" href="#" onclick="openmenu()"> Все товары</a>
  <a class ="myorder" href="#"> Мои заказы</a>
 </header>
 <div class="info" >
  <h1 class="infotitle">Виски</h1>
  <p class="infotext">
    Виски — наименование крепкого алкогольного напитка, получаемого методом
    дистилляции зернового сусла на основе ячменя, пшеницы, ржи или кукурузы.
    Основные объемы виски производят в Шотландии, Ирландии, США и Канаде,
    известен также японский виски. У нас вы найдете огромный ассортимент
    солодового и купажированного виски превосходного качества.
  </p>
  <img class="infoimg" src="./img/firstpage.png" alt="" />
 </div>`;
}