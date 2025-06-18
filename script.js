function reverseText(str) {
  return str.split('').reverse().join('');
}

const textInput = prompt('Давай поиграем! Введите любой текст, и я переверну его!');
const reversedText = reverseText(textInput);

alert(reversedText);
