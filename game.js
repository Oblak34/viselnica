var words = ["программа", "макака", "прекрасный", "оладушек", "пещера", "лось", "маскарад"];
var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for( let i = 0; i < word.length; i++){
    answerArray[i] = "_";
}
var count = 20;

// переменная с длиной заданного массива
var remainingLetters = word.length;

while(remainingLetters > 0 && count > 0){
    alert(answerArray.join(" "));

    var guess = prompt("Угадайте букву или нажмите отмена для выхода из игры");
    guess = guess.toLowerCase();
    
    if(guess == null){
        break;
    }else if(guess.length !== 1){
        alert("Пожалуйста введите только одну букву");
    }else{
        for( let j = 0; j < word.length; j++){
            if(word[j] === guess && answerArray[j] == "_"){
                answerArray[j] = guess;
                remainingLetters--;             
            }
        }
    }
    count--;
}

if(count == 0){
    alert( "У вас кончились попытки")
}else{
    alert(answerArray.join(" "));
alert("Отлично! Было отгадано слово " + word);
}

