/*Задание 1*/
let password = 'пароль';
let input = prompt('Введите пароль');
if (input === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

/*Задание 2*/
let c = 0;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

c = 10;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

c = -3;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

c = 2;
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

/*Задание 3*/
let d = 25;
let e = 108;
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

/*Задание 4*/
let a = '2';
let b = '3';
alert(Number (a) + Number (b));

/*Задание 5*/
let monthNumber = Number(prompt('Введите номер месяца'));

if (monthNumber < 1 || monthNumber > 12) {
    console.log('Номер месяца должен быть от 1 до 12');
} else {
    switch (monthNumber) {
        case 1: 
            console.log('Январь: Сезон: Зима');
            break;
        case 2: 
            console.log('Февраль: Сезон: Зима');
            break;
        case 3: 
            console.log('Март: Сезон: Весна');
            break;
        case 4: 
            console.log('Апрель: Сезон: Весна');
            break;
        case 5:
            console.log('Май: Сезон: Весна');
            break;
        case 6: 
            console.log('Июнь: Сезон: Лето');
            break;
        case 7: 
            console.log('Июль: Сезон: Лето');
            break;
        case 8:        
            console.log('Август: Сезон: Лето');
            break;
        case 9: 
            console.log('Сентябрь: Сезон: Осень');
            break;
        case 10:
            console.log('Октябрь: Сезон: Осень');
            break;
        case 11: 
            console.log('Ноябрь: Сезон: Осень');
            break;
        case 12: 
            console.log('Декабрь: Сезон: Зима');
            break;
    }
}

/*Допзадание 1*/
let userInput = prompt('Пожалуйста, введите любое число');
let number = userInput;
if (isNaN(number)) {
    console.log('Вы ввели не число. Пожалуйста, введите корректное число.')
} else {
    if (number % 2 === 0) {
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
}

/*Допзадание 2*/
let clientOS = 0;
if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
} else if(clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
} else {
     console.log('Ваша операционная система не поддерживается');
}

/*Допзадание 3*/
clientOS = 1; // 0 - iOS, 1 - Android
let clientDeviceYear = 2015;
if (clientOS === 1 && clientDeviceYear < 2015) {
        console.log('Установите облегченную версию приложения для Android  по ссылке');
} else if (clientOS === 1) {
        console.log('Установите версию приложения для Android по ссылке');
} else if (clientOS === 0 && clientDeviceYear < 2015) {
        console.log('Установите облегченную версию приложения для iOS по ссылке');
} else {
     console.log('Установите версию приложения для iOS по ссылке');
}




