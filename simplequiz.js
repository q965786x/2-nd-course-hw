function simpleQuiz() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];

    let attempts = 0;
    
    for (let i = 0; i < quiz.length; i++) {
        let userAnswer = Number(prompt(`Выбери правильный ответ?\n${quiz[i].question}\n${quiz[i].options.join('\n')}`));
        if (userAnswer === quiz[i].correctAnswer) {
            attempts++;
            alert('Молодец! Ты верно ответил.');
        } else {
            alert('Твой ответ неверный');
        }
    }
    
    alert(`Ты верно ответил на ${attempts} вопросов из ${quiz.length}`);
}

simpleQuiz();