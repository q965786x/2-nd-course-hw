/*Задание 1*/
//Преобразовать строку 'js' в верхний регистр.

const str = 'js';
console.log(str.toUpperCase());

//Вариант 2

let str = 'js';
str = str.toUpperCase();
console.log(str);


/*Задание 2*/
//Создать функцию, которая принимает массив строк и строку. 
//Функция должна вернуть новый массив, содержащий только те элементы первого массива, 
//которые начинаются со второй строки. 
//Регистр символов не влияет на результат.

const array = ['молоко', 'чай чёрный', 'конфеты Чайка', 'Чай Краснодарский', 'хлеб', 'сыр', 'чай зелёный', 'сок', 'творог', 'Чай Грузинский'];
const string = 'чай';

function getFilteredArray(array, string) {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().startsWith(string.toLowerCase())) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}

console.log(getFilteredArray(array, string));

//Вариант 2

function filter(arr, str) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().startsWith(str.toLowerCase())) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(filter(['JavaScript', 'Java', 'Python'], 'ja'));

//Вариант 3

function filter(arr, str) {
    const lowerStr = str.toLowerCase()
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr))
}

console.log(filter(['JavaScript', 'Java', 'Python'], 'ja'));    


/*Задание 3*/
//Округлить число 32.58884:

//До меньшего целого.
//До большего целого.
//До ближайшего целого.

let num = 32.58884;

console.log(Math.floor(num)); //До ближайшего меньшего целого.
console.log(Math.ceil(num)); //До ближайшего большего целого.
console.log(Math.round(num)); //До ближайшего целого.


/*Задание 4*/
//Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 
//и вывести их в консоль.

//Вариант 1

const numbers = [52, 53, 49, 77, 21, 32]; //дан массив

console.log(Math.min(...numbers));
console.log(Math.max(...numbers));

//Вариант 2

52, 53, 49, 77, 21, 32

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

/*Задание 5*/
//Создать функцию, которая выводит в консоль случайное число от 1 до 10.

function getRandomNumber() {
  
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(randomNumber);
}

getRandomNumber();


/*Задание 6*/
//Написать функцию, которая принимает целое число и 
//возвращает массив случайных чисел от 0 до этого числа.
//Длина массива должна быть в два раза меньше переданного числа.

function getRandomArray(num) {
    
    const length = Math.floor(num / 2);
    const result = Array.from({ length }, () => Math.floor(Math.random() * (num + 1)));

    return result;
}

console.log(getRandomArray(10));
console.log(getRandomArray(5)); 

//Вариант 2

function getRandomNumber(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(Math.floor(Math.random() * num));
    }

    return arr;
}

console.log(getRandomNumber(10));

//Вариант 3

function getRandomNumber(num) {
    return Array.from({ length:Math.floor(num / 2) }, () => Math.floor(Math.random() * num));
}

console.log(getRandomNumber(10));


/*Задание 7*/
//Создать функцию, которая принимает два целых числа и
//возвращает случайное число в этом диапазоне.

function getRandomNumberInRange(min, max) {
    
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;  
}

console.log(getRandomNumberInRange(1, 10));


/*Задание 8*/
//Вывести в консоль текущую дату.

//Вариант 1

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date();
let fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear()
+ ", " + days[myDate.getDay()];

console.log(fullDate);

//Вариант 2

//let currentDate = new Date();
//console.log(currentDate);

//Вариант 3

//let myDate = new Date();
//console.log(+myDate);

//let myDate = new Date(1750177155785);
//console.log(myDate);


/*Задание 9*/
//Создать переменную currentDate, хранящую текущую дату. 
//Вывести дату, которая наступит через 73 дня после текущей.

let currentDate = new Date(2025, 5, 73, 23, 45, 30, 10);
console.log(currentDate);

//Вариант 2

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

/*Задание 10*/
//Написать функцию, которая принимает дату и возвращает ее в формате:
//Дата: [число] [месяц на русском] [год] — это [день недели на русском].
//Время: [часы]:[минуты]:[секунды]

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date();
let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear()
+ " - это " + days[myDate.getDay()];
let fullTime = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

console.log(fullDate);
console.log(fullTime);


//Вариант 2

function formatDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const dayOfWeek = days[date.getDay()]; // Исправлено: getDay() вместо getDate()
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `
    Дата: ${day} ${months[month]} ${year} - это ${dayOfWeek}.
    Время: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));

