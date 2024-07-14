var words = ["программа", "макака", "прекрасный", "оладушек"];
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for( let i = 0; i < answerArray.length; i++){
    answerArray[i] = "_";
}

// переменная с длиной заданного массива
var remainingLetters = word.length;

while(remainingLetters > 0){
    alert(answerArray.join(" "));

    var guess = prompt("Угадайте букву или нажмите отмена для выхода из игры");
    if(guess == null){
        break;
    }else if(guess.length !== 1){
        alert("Пожалуйста введите только одну букву");
    }else{
        for( let j = 0; j < word.length; j++){
            if(word[j] === guess){
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert(answerArray.join(" "));
alert("Отлично! Было отгадано слово " + word);
