async function films(urls) {
  try {
    await fetch(urls)
      .then((res) => res.json())
      .then((res) => {
        let arrayFilmsUrl = [];
        res.results.forEach((element) => {
          arrayFilmsUrl.push(element);
        });
        return planets(arrayFilmsUrl);
      });
  } catch (error) {
    fetch("https://swapi.dev/api/starships/9/")
        .then((res) => res.json())
        .then((res) => console.log(`${res.name} все уничтожил`));
  }
}

function planets(item) {
  let planetsUrl = [];
  item.forEach((element) => {
    let planets = element.planets;
    planetsUrl.push(planets);
  });
  let arr = [];
  planetsUrl.forEach((item) => {
    item.forEach((item) => {
      arr.push(item);
    });
  });
  return addNamePlanets(arr);
}

function addNamePlanets(url) {
  url.forEach(async (item) => {
    try {
      await fetch(item)
        .then((res) => res.json())
        .then((res) => console.log(res.name));
    } catch (error) {
      fetch("https://swapi.dev/api/starships/9/")
        .then((res) => res.json())
        .then((res) => console.log(`${res.name} все уничтожил`));
    }
  });
}
films("https://swapi.dev/api/films");
