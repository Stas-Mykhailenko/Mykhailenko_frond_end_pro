// Обьект как я его представляю с бека. Можно добавлять новые группы товаров и товары.
const list = [
  //Первая группа товаров
  {
    name: "Виски",
    ListProduct: [
      // первый товар
      {
        nameProduct: "Jemeson",
        card: {
          img: "./img/jemeson.jpg",
          text: `Jameson, 40%
          Традиционный купажированный виски, квинтэссенция ирландского бленда. 
          Отличается янтарным цветом и деликатным ароматом. Вкус приятный и невероятно мягкий, 
          с тонами карамели, ванили, с тонкими ореховыми и хересными оттенками.`,
          cost: "1000 грн",
        },
      },
      // второй товар
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
  //Вторая группа товаров
  {
    name: "Ром",
    ListProduct: [
      // первый товар
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
      // второй товар
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
// Обьект как я его представляю с бека. Можно добавлять новые города для отправки.
const infoFormPost = [
  { city: "Харьков", post: ["Харьков НП 1", "Харьков НП 2", "Харьков НП 3"] },
  { city: "Киев", post: ["Киев НП 1", "Киев НП 2", "Киев НП 3"] },
  { city: "Львов", post: ["Львов НП 1", "Львов НП 2", "Львов НП 3"] },
];
const body = document.querySelector(".body");
let itemMenu = "";
let productlist = [];
let countClickmenu = 0;
let numberProduct;
let countMyOrder = 0;
//открывает и закрывает кнопку меню
function openmenu() {
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
// Открывает продукт в зависимости категории
function openProduct(array) {
  numberProduct = array;
  let nameProduct = [];
  let itemProduct = "";
  let counProduct = 0;
  productlist[array].forEach((itemNameProduct) => {
    nameProduct.push(
      `<p id="prod-1" class="product-style" onclick="openCard(${counProduct}, '${itemNameProduct.nameProduct}')">${itemNameProduct.nameProduct}</p>`
    );
    itemProduct = nameProduct.join("");
    counProduct++;
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
// Открывает карточку товара в зависимости от продукта
function openCard(numberCard, nameproduct) {
  body.innerHTML = `<div class = "card">
  <img src="${productlist[numberProduct][numberCard].card.img}" width="200" alt="">
  <p class="cardtext" >${productlist[numberProduct][numberCard].card.text}</p>
  <p class ="cardcost">${productlist[numberProduct][numberCard].card.cost}</p>
  <a class ="buttonOerder" href="#" onclick="openFormOrder('${productlist[numberProduct][numberCard].card.cost}','${nameproduct}')"> Оформить покупку</a>
  <a class ="buttonBack" href="#" onclick="backmenu()"> Вернуться на главную</a>
</div>`;
}
// Открывает форму
function openFormOrder(cost, nameproduct) {
  let arraycity = [];
  let countcity = 0;
  let city;
  let value = "";
  infoFormPost.forEach((item) => {
    arraycity.push(
      `<option value='${infoFormPost.indexOf(item)}' >${item.city}</option>`
    );
    countcity++;
  });
  city = arraycity.join("");
  body.innerHTML = `  <div class="form">
  <p>Введите ФИО</p>
  <input type="text" id="full-name" name="full-name" pattern="[A-Za-zА-Яа-я\s]+" value="${value}" required>
  <label for="city">Город:</label>
  <select id="city" name="city" onchange="post()" required>
  <option value="">Выберите город</option>
   ${city}
  </select>
  <label for="post-office">Отделение почты:</label>
  <select id="post-office" name="post-office" >
    
  </select>
  <label for="quantity">Количество товара:</label>
  <input type="number" id="quantity" name="quantity" required>
  <label for="payment-method">Способ оплаты:</label>
  <input type="radio" id="payment-method-1" name="payment-method" value="Наличные" required>
  <label for="payment-method-1">Наличные</label>
  <input type="radio" id="payment-method-2" name="payment-method" value="Карта">
  <label for="payment-method-2">Карта</label><br><br>

  <label for="comments">Комментарий:</label><br>
  <textarea id="comments" name="comments" rows="4" cols="50"></textarea><br><br>
  <button onclick="endOrder('${cost}','${nameproduct}')">Купить</button>
 <button onclick="backmenu()">Вернуться на главное меню</button>
</div>`;
}
// Меняеет отделения почты взависимости от города
function post() {
  let selectcity = document.getElementById("city");
  let selectpost = document.getElementById("post-office");
  let arraypost = [];
  let post;
  infoFormPost[selectcity.value].post.forEach((itempost) => {
    arraypost.push(`<option value="${itempost}">${itempost}</option>`);
  });
  post = arraypost.join("");
  selectpost.innerHTML = `${post}`;
}
// Возвращает на главную страницу
function backmenu() {
  countClickmenu = 0;
  body.innerHTML = `<header class="header">
  <a class ="menu" href="#" onclick="openmenu()"> Все товары</a>
  <a class ="myorder" href="#" onclick="openmyorders()"> Мои заказы</a>
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
// При нажатии купить записывает данные в Localstorage
function endOrder(cost, nameproduct) {
  let inputName = document.getElementById("full-name");
  let inputCity = document.getElementById("city");
  let inputPost = document.getElementById("post-office");
  let inputQuantity = document.getElementById("quantity");

  if (Boolean(inputQuantity.value) === false) {
    inputName.classList.add("full-name-mistake");
  }
  if (Boolean(inputCity.value) === false) {
    inputCity.classList.add("city-mistake");
  }
  if (Boolean(inputPost.value) === false) {
    inputPost.classList.add("post-office-mistake");
  }
  if (Boolean(inputQuantity.value) === false) {
    inputQuantity.classList.add("quantity-mistake");
  } else {
    const orders = {
      name: `${nameproduct}`,
      city: `${infoFormPost[inputCity.value].city}`,
      post: `${inputPost.value}`,
      cost: `${cost}`,
      quantity: `${inputQuantity.value}`,
    };
    localStorage.setItem(`${countMyOrder}`, JSON.stringify(orders));
    countMyOrder += 1;

    body.innerHTML = `<header class="header">
      <a class ="menu" href="#" onclick="openmenu()"> Все товары</a>
      <a class ="myorder" href="#" onclick="openmyorders()"> Мои заказы</a>
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
//Открывает окно с заказами, данные беруться с Localstorage
function openmyorders() {
  let arrayorders = [];
  let cardorder;
  let order = JSON.parse(localStorage.getItem("0"));
  if (order === null) {
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
    </div>
    <div class="orders">
    <div class="ordercard"> </div>
    <a class ="myorderbutton" href="#" onclick="backmenu()"> Вернуться на главную</a>
    <a class ="myorderbutton" href="#" onclick="cleanorders()"> Очистить заказы</a>
       </div>`;
  } else {
    for (let index = 0; index < localStorage.length; index++) {
      order = JSON.parse(localStorage.getItem(`${index}`));
      arrayorders.push(`
    <div class="ordercard">
    <p>${order.name}</p>
    <p>${order.city}</p>
    <p>${order.post}</p>
    <p>${order.cost}</p>
    <p>${order.quantity} шт</p>
  </div>`);
      cardorder = arrayorders.join("");
    }
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
  </div>
  <div class="orders">
  ${cardorder}
  <a class ="myorderbutton" href="#" onclick="backmenu()"> Вернуться на главную</a>
  <a class ="myorderbutton" href="#" onclick="cleanorders()"> Очистить заказы</a>
     </div>`;
  }
}
//Очищает историю заказов
function cleanorders() {
  localStorage.clear();
  backmenu();
}
