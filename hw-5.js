  /*Задание 1*/
//Дан массив: [1, 5, 4, 10, 0, 3].
//Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение 10. 
//После вывода значения 10 в консоль, цикл должен прекратить свою работу.

const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] === 10) 
      break;    
    console.log(numbs[i]);
}

//Верный вариант
const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);
    if (numbs[i] === 10) {        
      break;    
    }       
}


/*Задание 2*/
//Дан массив: [1, 5, 4, 10, 0, 3]. 
//Найдите индекс значения 4 в этом массиве.

const numbers = [1, 5, 4, 10, 0, 3];
const element = 4;
const index = numbers.indexOf(element);

console.log(index);

//Вариант 2
const numbers = [1, 5, 4, 10, 0, 3];

 for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 4) {
        console.log(i);
      break; 
    }   
}

//Вариант 3
const numbers = [1, 5, 4, 10, 0, 3];
console.log(numbers.indexOf(4));


/*Задание 3*/
//Дан массив чисел: [1, 3, 5, 10, 20]. 
//С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

const array = [1, 3, 5, 10, 20];
let joinedArray = array.join(' ');

console.log(joinedArray);

//Вариант 2
const array = [1, 3, 5, 10, 20];
console.log(array.join(' '));


/*Задание 4*/
//С помощью вложенных циклов создайте многомерный массив вида: 
//[[1, 1, 1], [1, 1, 1], [1, 1, 1]].

const arr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
]

for (let item of arr) {
    for (let i = 0; i < item.length; i++) {
      if (i === 0) {
         console.log(`Список ${item[i]}`);
      } else {
         console.log(`\t ${item[i]}`);
      }
    }
}

//Верный вариант

const arr = [];

for (let i = 0; i < 3; i++) {
  const arr2 = [];
  for (let i = 0; i < 3; i++) {
    arr2.push(1);
  }
  arr.push(arr2);
}
console.log(arr);


 /*Задание 5*/
//Дан массив: [1, 1, 1]. 
// Добавьте в конец массива значения 2, 2, 2.   

const nums = [1, 1, 1];
nums.push(2, 2, 2);

console.log(nums);


/*Задание 6*/
//Дан массив: [9, 8, 7, 'a', 6, 5].
//С помощью метода sort отсортируйте массив и удалите букву 'a' из массива. 
//Затем выведите массив.

const arrs = [9, 8, 7, 'a', 6, 5];
arrs.sort();
arrs.pop();

console.log(arrs);


/*Задание 7*/
//Дан массив: [9, 8, 7, 6, 5].
//Попросите пользователя угадать число с помощью метода prompt. 
//Если значение, которое ввел пользователь, есть в массиве, выведите в 
//alert «Угадал», в противном случае — «Не угадал».

const gessNumbers = [9, 8, 7, 6, 5];
let userInput = Number(prompt('Угадай число от 0 до 10'));

if (numbers.includes(userInput)) {
    alert("Угадал");
} else {
    alert("Не угадал");
}


/*Задание 8*/
//Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.

const string = 'abcdef';
let reversedString = string.split("").reverse().join("");

console.log(reversedString);


/*Задание 9*/
//Дан массив: [[1, 2, 3],[4, 5, 6]]. 
//Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

const arrays = [[1, 2, 3],[4, 5, 6]];
const unitedArrays = [...arrays[0], ...arrays[1]];

console.log( unitedArrays);

//Вариант 2

const arrays = [[1, 2, 3], [4, 5, 6]];
const unitedArrays = [];

for (let i = 0; i < arrays.length; i++) {
  unitedArrays.push(...arrays[i]);
}
console.log(unitedArrays);

//Вариант 3

const arrays = [[1, 2, 3],[4, 5, 6]];
console.log(arrays.flat());


/*Задание 10*/
//Создайте массив с произвольными числами (диапазон от 1 до 10).
//Переберите его с помощью цикла for.
//В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.
 
const setNumbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

for (let i = 0; i < setNumbers.length; i++) {
    if(i + 1 < setNumbers.length) {
        const sum = setNumbers[i] + setNumbers[i + 1];
        console.log(`Сумма элементов ${i} и ${i + 1}: ${sum}`);
    } else {
        console.log(`Элемент ${i} последний, следующего элемента нет`);
    }
}

//Вариант 2

const setNumbers = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

for (let i = 0; i < setNumbers.length; i++) {
    if(setNumbers[i + 1]) {
      console.log(setNumbers[i] + setNumbers[i + 1]);
    }
}


/*Задание 11*/
//Создайте функцию, которая принимает на вход массив целых чисел, 
//а возвращает массив квадратов этих чисел.

const fullNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredNumber = fullNumbers.map(number=> number ** 2);

console.log(squaredNumber);

//Вариант 2

function squaredNumber(fullNumbers) {
  return fullNumbers.map(number=> number ** 2);
}

console.log(squaredNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


/*Задание 12*/
//Создайте функцию, которая принимает на вход массив строк,
//а возвращает массив длины слов.

function getStringLengths(arr) {
  return arr.map(str => str.length);
}

const strings = ['table', 'chair', 'desk'];
const lengths = getStringLengths(strings);

console.log(lengths);

//Вариант 2

function getStringLengths(arr) {
  return arr.map(str => str.length);
}

console.log(getStringLengths(['table', 'chair', 'desk']));


/*Задание 13*/
//Создайте функцию, которая принимает на вход массив целых чисел,
//а возвращает массив, содержащий только отрицательные значения.

function filterNegativeNumbers(arr) {
  return arr.filter(number => number < 0);
}

const anynumbers = [1, 2, -3, 4, 5, -6, 7, 8, -9, 10];
const negativeNumbers = filterNegativeNumbers(anynumbers);

console.log(negativeNumbers); 

//Вариант 2 

function filterNegativeNumbers(arr) {
  return arr.filter(number => number < 0);
}

console.log(filterNegativeNumbers([1, 2, -3, 4, 5, -6, 7, 8, -9, 10]));


/*Задание 14*/
//Создайте массив, состоящий из 10 значений. 
//Значения массива необходимо сгенерировать с помощью метода Math.random() в диапазоне от 0 до 10.
//В данном массиве найдите все четные значения и добавьте их в новый массив. 
//Результат работы программы необходимо вывести в консоль — это будут два массива: исходный массив и массив с четными значениями.

const randomNumbers = [];
for (let i = 0; i < 10; i++) {
  randomNumbers.push(Math.floor(Math.random() * 11));
}

const evenNumbers = randomNumbers.filter(num => num % 2 === 0);

console.log("Исходный массив:", randomNumbers);
console.log("Массив с четными числами:", evenNumbers);

//Вариант 2

function randomNumbers () {
  return Math.floor(Math.random() * 10);
}

const arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(randomNumbers());
 }

console.log(arr);

const evenNumbers = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenNumbers.push(arr[i]);
  }  
 }

 console.log(evenNumbers);


/*Задание 15*/
//Создайте массив, состоящий из 6 элементов. 
//Элементы массива необходимо сгенерировать с помощью Math.random() в диапазоне от 1 до 10.
//Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

const numericElement = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10) + 1);
const average = numericElement.reduce((sum, num) => sum + num, 0) / numericElement.length;

console.log('Сгенерированный массив:', numericElement);
console.log('Среднее арифметическое:', average);
 
//Вариант 2

function randomNumbers () {
  return Math.floor(Math.random() * 10);
}

const numericElement = [];

for (let i = 0; i < 10; i++) {
  numericElement.push(randomNumbers());
}

console.log(numericElement);
console.log(numericElement.reduce((sum, num) => sum + num, 0) / numericElement.length);


 





