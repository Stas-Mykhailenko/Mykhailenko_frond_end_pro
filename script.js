// Получить всех персонажей с помощью этого API - https://swapi.dev/api/people/
// Все 82 обьекта добавить в один массив, промапать что бы осталось только - name, mass, height, gender, films.
// отобразить персонажей которые появлялись больше чем в трех фильмах
let uniteObjects = [];
let sortObjects = [];
let findName = [];
async function getData(url) {
  if (url !== 0) {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.next !== null) {
			uniteObjects.push(res.results);
          return getData(res.next);
        }
        if (res.next === null) {
			uniteObjects.push(res.results);
        }
        return uniteObjects;
      })
      .then((res) => {
        for (let i = 0; i < res.length; i++) {
          for (let y = 0; y < res[i].length; y++) {
            let objNew = {
              name: res[i][y].name,
              mass: res[i][y].mass,
              height: res[i][y].height,
              gender: res[i][y].gender,
              films: res[i][y].films,
            };
            sortObjects.push(objNew);
          }
        }
        return sortObjects;
      })
      .then((res) => {
        console.log(res); // Список  - name, mass, height, gender, films.
       
        for (let i = 0; i < res.length; i++) {
          if (res[i].films.length > 3) {
            findName.push(res[i].name);
          }
        }
        return findName;
      })
      .then((res) => console.log(res)); //персонажей которые появлялись больше чем в трех фильмах
  }
  return sortObjects;
}
getData("https://swapi.dev/api/people/");
