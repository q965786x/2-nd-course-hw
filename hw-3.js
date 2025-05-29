/*Задание 1*/
let i = 0;
let n = Number(prompt('Сколько раз вам сказать привет?'));

while (i <=n) {
    if (i === 2){
      break; // Прерываем выполнение цикла, если i = 2
   }
    alert('Привет');
    i++;
}

/*Заданиие 2*/
i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

/*Задание 3*/
i = 7;
do {
   console.log(i);
   i++;
} while(i <= 22);

/*Задание 4*/
const obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}

for (let key in obj) {
   console.log(`${key}: ${obj[key]}`);
}

/*Задание 5*/
n = 1000;
let num = 0;
while(n >= 50) {
    n = n / 2;  
    num++;  
}
console.log(n);
console.log(num);

/*Задание 6*/
const firstFriday = 5;
const month = 31;

for (let day = firstFriday; day <= month; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

/*Допзадание 1*/
let k = 100;
let iterations = 0;
while(k >= 0) {
    k -= 7;
    iterations++;
}
console.log(k);
console.log(iterations);

/*Допзадание 2*/
const months = {
    "Январь" : "1", 
    "Февраль" : "2", 
    "Март" : "3", 
    "Апрель" : "4", 
    "Май" : "5", 
    "Июнь" : "6",
    "Июль" : "7", 
    "Август" : "8", 
    "Сентябрь" : "9", 
    "Октябрь" : "10", 
    "Ноябрь" : "11", 
    "Декабрь" : "12"
}

for (let key in months) {
    console.log(`${key}: ${months[key]}`);
}

/*Допзадание 2 вариант 2*/
months = [
  "Январь", "Февраль", "Март", "Апрель", 
  "Май", "Июнь", "Июль", "Август", 
  "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];

for (let i = 0; i <= 12; i++) {
  console.log(`${i + 1}. ${months[i]}`);
}

/*Допзадание 3*/
obj = {
    "название" : "Граф Монте-Кристо",
    "автор" : "А.Дюма",
    "год издания" : "1846",
    "жанр" : "историко-приключенческий роман"
}

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

/*Допзадание 4*/
const numbers = [3, 6, 15, 8, 5, 2, 9, 4, 7, 11];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }    
}
console.log(min);
