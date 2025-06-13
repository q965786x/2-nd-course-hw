/*Задание 1*/

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

 console.log(min (4, 8));
 console.log(min (6, 6));

 /*Задание 2*/

 function  isNotEven(number) {
    if (number % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
 }

 console.log(isNotEven(2));
 console.log(isNotEven(3));

 /*Задание 3*/

 function squareNumber(number) {
    let square = number ** 2;
    console.log(`Квадрат числа равен ${square}`);
 }

 squareNumber(3);


 function squareNumber(num) {
    return num ** 2;
}

const result = squareNumber(5);
console.log(result);

/*Задание 4*/

function checkAge() {
    const age = prompt('Сколько тебе лет?');

    if (age < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age > 0 && age < 10) {
        console.log('Привет, друг!');
    } else {
        console.log('Добро пожаловать!');
    }    
}

checkAge();

/*Задание 5*/

function multiplyNumbers(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } 
        return a * b;
    }

console.log(multiplyNumbers(3, 5)); 
console.log(multiplyNumbers('abc', 5)); 

/*Задание 6*/

function calculateCube() {
    const userInput = prompt("Введите число:");
    const n = parseFloat(userInput);

    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    } else {
        const cube = n ** 3;
        return `${n} в кубе равняется ${cube}`;
    }
}

// Проверка функции с числами от 0 до 10
for (let i = 0; i <= 10; i++) {
    console.log(calculateCube());
}

/*Задание 7*/

function getCircleArea() {
    return Math.PI * this.radius ** 2;
}

function getCirclePerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 4,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

const circle2 = {
    radius: 7,
    getArea: getCircleArea,
    getPerimeter: getCirclePerimeter,
};

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());