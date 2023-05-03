// main.js
import { mod1Function,arr } from './mod1.js'

const testFunction = () => {
    console.log('Im the main function')
    mod1Function()
}
let num =[1,2,3,4]
function tes1(item){
	let result = arr(item)
	return result
}

testFunction()
console.log(tes1(num))
