function guessNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let userInput;
    let attempts = 0;

do {
    userInput = Number(prompt("Угадай число от 1 до 100:"));
    attempts++;

    if (isNaN(userInput)) {
        alert("Игра отменена!");
        break;
    }

    if (userInput < 1 || userInput > 100) {
        alert("Укажи число от 1 до 100!");
        continue;
    }

    if (userInput > randomNumber) {
        alert("Загаданное число меньше!");
    } else if (userInput < randomNumber) {
        alert("Загаданное число больше!");
    } else {
        alert(`Поздравляю, молодец! Ты угадал число ${randomNumber} за ${attempts} попыток.`);
    }
} while (userInput !== randomNumber);
}