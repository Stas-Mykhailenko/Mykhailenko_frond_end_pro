const firstNumb=parseInt(prompt("Введите первое число") || 0);
const secondNumb=parseInt(prompt("Введите второе число") || 22);
let data;
firstNumb && secondNumb ? data=80 : data=40;
item={};
if(firstNumb>=90){
	item.size='big'
}else if(firstNumb<=40){
	item.size='small'	
}else{
	item.size='medium'
};
let value;
switch(item.size){
	case 'big':
		value=1000;
		break;
	case 'medium':
		value=100;
		break;
	case 'small':
		value=10;
		break;
}
if((firstNumb*secondNumb)%2!=0){
	console.log('Hellow')
}else if(secondNumb>50){
	alert(secondNumb)
};	