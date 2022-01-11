//L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
const result = document.getElementById("snack");
//primo numero
const firstWord = prompt('Inserisci una stringa');

//secondo numero
const secondWord = prompt('Inserisci una stringa');
let resultWord = 'Le parole sono uguali';
if (firstWord.length == 0 || secondWord.length == 0) {
    alert('Hai inserito un input sbagliato, inserisci una stringa');
} else {


    //controllo per capire il maggiore
    if (firstWord.length < secondWord.length) {
        resultWord = 'La parola più corta è ' + firstWord;
        resultWord += ' La parola più lunga è ' + secondWord;

    } else if (firstWord.length > secondWord.length) {
        resultWord = 'La parola più corta è ' + secondWord;
        resultWord += ' La parola più lunga è ' + firstWord;
    }
}
result.innerHTML = resultWord;