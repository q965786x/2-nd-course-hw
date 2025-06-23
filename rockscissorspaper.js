function rockScissorsPaper() {
    const selectionArray = ['камень', 'ножницы', 'бумага'];
    const userSelection = prompt('Выбери: камень, ножницы или бумага?').toLowerCase();

    if (!selectionArray.includes(userSelection)) {
        alert("Некорректный ввод. Пожалуйста, выбери камень, ножницы или бумага.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * selectionArray.length);
    const computerSelection = selectionArray[randomIndex];

    let result;

    if (userSelection === computerSelection) {
        result = 'Ничья!';    
    } else if (
        (userSelection === 'камень' && computerSelection === 'ножницы') ||
        (userSelection === 'ножницы' && computerSelection === 'бумага') ||
        (userSelection === 'бумага' && computerSelection === 'камень')
    ) {
        result = 'Победа!';
    } else {
        result = 'Поражение';
    }

    alert(`
        Твой выбор: ${userSelection}
        Выбор компьютера: ${computerSelection}
        Результат: ${result}
    `);
}