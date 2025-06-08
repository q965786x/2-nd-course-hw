/*Заданиие 1*/
let a = 10;
alert (a);
a = 20;
alert (a);

/*Задание 2*/
const yearOfManufacture = 2007;
alert (yearOfManufacture);

/*Задание 3*/
const userName = 'Brendan Eich';
alert (userName);

/*Задание 4*/
let x = 10;
let y = 2;
alert (x + y);
alert (x - y);
alert (x * y);
alert (x / y);

/*Задание 5*/
let result = 2 ** 5;
alert (result);

/*Задание 6*/
let a1 = 9;
let b1 = 2;
alert (a1 % b1);

/*Задание 7*/
let num = 1;
alert(num += 5);
alert(num -= 3);
alert(num *= 7);
alert(num /= 3);
alert(num += 1);
alert(num -= 1);
alert(num);

/*Задание 8*/
let age = prompt ("Сколько вам лет?");
alert (age);

/*Задание 9*/
const user = {
    name : 'Lialia',
    age : 50,
    'isAdmin': false
};
alert (`Это объект user:\n${JSON.stringify(user)}`);

/*Задание 10*/
let name = prompt ("Как вас зовут?");
let greeting = "Привет";
let phrase = `Привет, ${name}!`; // Шаблонная строка
alert (phrase);

/*допзадание*/
let number = Number(prompt("Загадайте любое число:"));
let doubled = number * 2;
alert(`Удвоенное число: ${doubled}`);
let sumTen = doubled + 10;
alert(`Удвоенное число + 10: ${sumTen}`);
let halved = sumTen / 2;
alert(`Результат деления на 2: ${halved}`);
let finalResult = halved - number;
alert(`Результат после вычитания исходного числа: ${finalResult}`);
alert("Итоговый ответ всегда равен 5!");
