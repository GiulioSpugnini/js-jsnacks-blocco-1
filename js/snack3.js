//Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
const result = document.getElementById("snack");
let numbers = 0;
for (let i = 0; i < 10; i++) {
    numbers += parseInt(prompt('Inserisci un numero'));
    if (isNaN(numbers)) {
        isValid = false;
    } else {
        numbers += numbers;
    }
}
if (isValid) {
    result.innerHTML = 'Somma finale: ' + numbers;
} else {
    result.innerHTML = 'Devi inserire solo numeri, riprova';
}