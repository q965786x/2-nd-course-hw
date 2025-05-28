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

