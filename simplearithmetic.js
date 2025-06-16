//Функция для получения случайного числа
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для генерации случайной математической задачи
function generateMathTask() {
    const operators = ['+', '-', '*', '/'];
    const operation = operators[Math.floor(Math.random() * operators.length)];  
    const firstNumber = getRandomNumber(1, 10);
    const secondNumber = getRandomNumber(1, 10);
    const task = `${firstNumber} ${operation} ${secondNumber}`;  
    
    return {
        task: task,
        answer: eval(task)
    };
}

// Основная функция игры
function simpleArithmetic() {
    const {task, answer} = generateMathTask(); 
    const userAnswer = parseFloat(prompt(`Решите задачу: ${task} = ?`));
    
        if (isNaN(userAnswer)) {
            alert('Пожалуйста, введите число!');
        } else if (Math.abs(userAnswer - answer) < 0.0001) { // учитываем погрешность для дробных чисел
            alert('Правильно! Молодец!');
        } else {
            alert(`Неправильно. Правильный ответ: ${answer}`);
        }

        if (confirm('Хотите решить еще одну задачу?')) {
            simpleArithmetic();
        } else {
            alert('Спасибо за игру!');
        }
}

simpleArithmetic();




