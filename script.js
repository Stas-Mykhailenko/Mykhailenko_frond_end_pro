const  fire = document.querySelector(".fire")
const  atb = document.querySelector(".atb")
const  parking = document.querySelector(".parking")
const firstcount=document.querySelector(".firstcount")
const secondcount =document.querySelector(".secondcount")
const thirdcount =document.querySelector(".thirdcount")
let numFire = 0;
let numAtb = 0;
let numParking = 0;
function countfire(){	
	numFire ++
	firstcount.innerHTML= numFire
}
function countatb(){
	numAtb ++
	secondcount.innerHTML= numAtb
}
function countParking(){
	numParking ++
	thirdcount.innerHTML= numParking
}
fire.addEventListener("click", countfire)
atb.addEventListener("click", countatb)
parking.addEventListener("click", countParking)