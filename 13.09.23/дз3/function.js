const node_for_click = document.getElementById('for_click')

function find_edit() {
    const p1 = document.getElementsByTagName('pre')[1]
    p1.innerHTML = 'Erokhina'
    console.log(p1.innerHTML)

    const p2 = document.getElementsByTagName('pre')[2]
    p2.innerHTML = 'Anastasia'
    console.log(p2.innerHTML)

    const p3 = document.getElementsByTagName('pre')[3]
    p3.innerHTML = 'Aleksandrovna'
    console.log(p3.innerHTML)

    const p5 = document.getElementsByTagName('pre')[4]
    p5.innerHTML = 'IX.III.MMIV'
    console.log(p5.innerHTML)
}

node_for_click.addEventListener('click',find_edit)


























/*const node_for_click = document.getElementById("for_click")

function find_edit(){
    const p1  = document.getElementsByTagName('p')[1]
    console.log(p1.innerText)
    p1.innerText = 'новое значение'

    const p2  = document.getElementsByTagName('p')[2]
    console.log(p2.innerText)
    p2.innerText = 'Для второго параграфа'

}

node_for_click.addEventListener("click",find_edit)*/


/*var number;
number = 3;*/

/*var number = 5;
number = 2;
console.log("Переменная:" + number);*/

/*var num_1 = 4;
var num_2 = 5;

console.log("Вычитание: " + (num_1 * num_2));

var num_3 = 5;
num_3 += 4;
console.log("Результат: " + num_3);

var str_1 = Number("12");
var str_2 = Number("2");
console.log("Результат: " + (str_1 + str_2));

console.log("Math: " + Math.PI);
console.log("Math: " + Math.max(4, 6, 0));*/


/*var number = 15;
var isHasHouse = true;
if(number == 5  && isHasHouse) {
    console.log("Good");
} else if(number > 10) {
console.log("wowww")
} else {
    console.log("Error");
}

var stroka = "word";
switch(stroka) {
    case "4": 
    console.log("Переменная со значением 4");
    break;
    case "45": 
    console.log("Переменная со значением 45");
    break;
    case "word!": 
    console.log("Переменная со значением word!");
    break;
    default:
        console.log("Default");
}*/

/*var arr = [5, true, 5.7, "stroka", 0, -100];
arr[3] = "word"
console.log(arr.length);

var matrix = [
    [4, 6, 8], ["stroka", 5.7], [0, -100]
];
matrix[1][0] = 90;
console.log(matrix);*/


/*for(var i = 100; i > 5; i /=2) {
    console.log(i);
}

var j = 1000;
while(j > 100) {
    j -= 100;
    console.log(j);
}

var x = 100;
do {
    console.log(x);
} while(x < 50);

for(i = 10; i <= 20; i ++) {
    if(i % 2 == 0)
    continue;
    console.log(i);
}

var arr = [5, 7, 3, 8, 91, "stroka"];
for(var i = 0; i < arr.length; i++) {
    arr[i] *= 2;
    console.log("Элемент " + (i + 1) + ": " + arr[i]);
};*/