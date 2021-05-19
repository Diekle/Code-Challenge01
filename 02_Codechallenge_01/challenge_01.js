
/*********   CODE CHALLENGE 1 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
‘Die Summe der Zahlen ist: summe ‘
*/

/**** Variante 01 ****/

/*
let number1, number2, result;   //Dekl.
number1 = parseFloat (prompt ("Bitte erste Zahl eingeben: "), 10);  // Umwandlung von string zu float
number2 = parseFloat (prompt ("Bitte zweite Zahl eingeben: "),10);
result = number1 + number2; // Addition number1 + number2
console.log(number1 + " + " + number2 + " = " + result); //Ausgabe Ergebnis 
*/

/**** Variante 02, mit Operatoreingabe ****/

let number1, number2, operator, result;   //Dekl.
number1 = parseFloat (prompt ("Bitte erste Zahl eingeben: "), 10);  // Umwandlung von string zu float
operator =  prompt ("Bitte Operator eingeben: ");
number2 = parseFloat (prompt ("Bitte zweite Zahl eingeben: "),10);
result = number1, operator,  number2;
console.log(number1 + " " + evalue("operator") + " " + number2 + " = " + result); //Ausgabe Ergebnis 


