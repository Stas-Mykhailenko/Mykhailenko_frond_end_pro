const body = document.querySelector("body");
const input = document.createElement("input");
body.insertAdjacentElement("afterbegin", input)
const divRed = document.createElement("div")
divRed.style.width= "100px"
divRed.style.height = "100px"
divRed.style.background ="red";
input.onfocus=()=>{
	body.insertAdjacentElement("beforeend", divRed)
	console.log("one")
}
input.onblur =()=>{
	divRed.remove("div")
	console.log("two")
}
