const conteiner = document.querySelector(".conteiner");
const slideleft = document.querySelector("#slideleft");
const slideright = document.querySelector("#slideright");
let positionleft = 0;
slideright.addEventListener("click", () => {
  if (positionleft !== -2450) {
    positionleft -= 350;
    conteiner.style.left = positionleft + "px";
	 slideleft .style.display = "inline";
  }
  if (positionleft === -2450) {
    slideright.style.display = "none";
  }
});
slideleft.addEventListener("click", () => {
  if (positionleft !== 0) {
    positionleft += 350;
    conteiner.style.left = positionleft + "px";
    slideright.style.display = "inline";
  }
  if(positionleft === 0){
	slideleft .style.display = "none";
  }
});
