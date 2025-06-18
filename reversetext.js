function reverseText(str) {
  return str.split('').reverse().join('');
}

const textInput = prompt('Введи любой текст');
const reversedText = reverseText(textInput);

console.log(reversedText);

    


