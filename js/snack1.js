//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
const result = document.getElementById("snack");
//primo numero
firstNumber = parseInt(prompt('Inserisci un numero'));
//secondo numero
secondNumber = parseInt(prompt('Inserisci un numero'));

let maxNumber = 'I numeri sono uguali';
if ((isNaN(firstNumber) || isNaN(secondNumber))) {
    maxNumber = 'Puoi inserire solo numeri, riprova';
} else {
    //controllo per capire il maggiore
    if (firstNumber < secondNumber) {
        maxNumber = 'Il numero maggiore è ' + secondNumber;

    } else if (firstNumber > secondNumber) {
        maxNumber = 'Il numero maggiore è ' + firstNumber;
    }
}
result.innerHTML = maxNumber;