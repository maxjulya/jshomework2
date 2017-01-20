// var arr = ["Юра","Саша","Маша","Даша","Степаша" ];
 
// var Word = prompt("Введите имя"); 
 
// for (var i = 0; i < arr.length; ++i) 
// 	if (arr[i] == Word) 
// 	{ alert( Word + ", вы успешно вошли"); break; } 
// 	if (i == arr.length) alert("Имя не найдено");

 
var arrNames = [];
var a = 0;

while (a < 5) {
	var value = prompt("Введите имя"); 
	arrNames.push(value);
	a++;
}
//console.log(arrNames.length);

var Word = prompt("ввести имя пользователя"); 

var ln = arrNames.length;
for (var i = 0; i < ln; ++i) {
	if (Word == arrNames[i]) {
		alert(Word+ '! Вы успешно вошли');break;
	} else {
		alert("Имя не найдено");break;
	}
}



