let userName = prompt ( 'What is your name?');
let userSecondName = prompt ( 'What is your last name?')
let userAge =Number (prompt ('How old are you?'));
let userSity = prompt ('What city do you live in?');
userName ? userName : userName = "I don't now your name";
userSecondName ? userSecondName : userSecondName = "I don't now your second name";
userAge ? userAge : userAge ="I don't now your age";
typeof userAge ? userAge : userAge ="I don't now your age";
userSity ? userSity : userSity = "I don't now where are you live";
let userInfo = {
	name: userName,
	secondName: userSecondName,
	age: userAge,
	sity: userSity,
}
let ask = confirm ( 'Can are show your info?');
ask ? console.log(userInfo.name +', '+userInfo.secondName+', '+userInfo.age+', '+userInfo.sity) : alert ('the user has disabled the data!')
console.log(typeof userAge);