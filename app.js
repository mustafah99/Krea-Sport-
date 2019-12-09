var myVar = 10;

console.log(myVar); // Will display 10.

myVar++; // Increments a number by 1.

console.log(myVar); // Will display 11.

myVar--; // Decrements a number by 1.

console.log(myVar); // Will display 10.

// Floating point numbers.

var myDecimal = 1.5;

// Augmented Addition Operator

myVar += 5; // We add 5 to our variable myVar with a value of 10.

console.log(myVar); // Will display 15.

// Augmented Subtraction Operator

myVar -= 5; // We subtract 5 from myVar.

console.log(myVar); // Outcome is 10 since we subtracted 5 from 15.

// Augmented Multiplication Operator

myVar *= 2; // Multiplies the value within myVar by 2.

console.log(myVar); // Outcome is 20. (10 * 2 = 20). * = Astrix symbol. 

// Augmented Division Operator

myVar /= 2; // Divides myVar by 2.

console.log(myVar); // Outcome is 10. (20 / 2 = 10).

// Escaping String Literals Quotes

var myString = "I am a \"double quoted\" string"; // Before quotation mark -> \" & inside quotation mark -> \" = [  \"Characters inside here\"  ] = Escapes string literals. Outcome = "Characters inside here".

console.log(myString); // Outcome = I am a "double quoted" string.

// Easier Method for Escaping String Literal Quotes

var mySecondString = 'Strings surrounded by single quotes allows me to use "double quotes" without backslashing.';

console.log (mySecondString); // Outcome = Strings surrounded by single quotes allows me to use "double quotes" without backslashing.

// Escaping Sequences in Strings

var myThirdString = "firstLine\n\t\\secondLine\nthirdLine" // \n = newline. \t = tab. \\ = For escaping backslashes.

console.log(myThirdString); 
/* Outputs = 
firstLine
\secondLine
thirdLine */

// Concatenate Strings

var concatenatedString = "I come first " + "and I come second.";

console.log(concatenatedString); // Outputs = I come first and I come second.

// Concatenate Strings with Plus Equal Operator +=

var mySecondConcatenatedString = "This is the first sentence ";

mySecondConcatenatedString += "& this is the second sentence.";

console.log(mySecondConcatenatedString); // Outputs = This is the first sentence & this is the second sentence.

// Constructing Strings with Variables

var myNameSentence = "My name is "; // Declaring the first sentence variable.

var nameSentence = "Mustafa"; // Declaring our name variable.

var fullSentence = myNameSentence + nameSentence + " and I am learning JavaScript."; 
// Constructing a string with variables by adding them together.

console.log(fullSentence); // Outputs = My name is Mustafa and I am learning JavaScript.

// Appending Variables with Plus Equal Operator +=

var funCoding = "Learning to code is "; // Declaring the first variable.

var fun = "very fun and worthwhile."; // Declaring the second variable.

funCoding += fun; // Appending our second variable to our first variable with the += operator.

console.log(funCoding); // Outputs = Learning to code is very fun and worthwhile.

// Finding the Length of a String

var lengthString = "How many characters are in this string?"; // Declaring our variable.

var letUsSee = lengthString.length; // Finding the length of our variable with the .length property.

console.log(letUsSee); // Console loggin outputs = 39.

// Bracket Notation

var firstName = "Mustafa"; // Declaring our first variable.

var lastLetterOfFirstName; // Declaring an empty variable. 

lastLetterOfFirstName = firstName[6]; // Assigning the 6th indexed character of our variable firstName to our empty variable lastLetterOfFirstName with bracket notation [6].  

console.log(lastLetterOfFirstName); // Outputs = a

// String Immutability

var changedString = "Yellow World"; // Declaring our first variable with a string of "Yellow World".

console.log(changedString); // Outputs = Yellow World

changedString = "Hello World"; // Assigning a new value to our variable.

console.log(changedString); // Outputs = Hello World

// Bracket Notation to find nth Character in a String

var character = "Character"; // Declaring our first variable.

var thirdCharacterInCharacter = character[2]; // Selecting the 2nd indexed character in our variable with bracket notation.

console.log(thirdCharacterInCharacter); // Outputs = a

// Finding the Last Character in a String

var languageName = "JavaScript"; // Declaring the variable.

var findingLastCharacter = [languageName.length -1]; // Declaring our second variable. [variableName.length -1] looks for the last character in a string.

console.log(findingLastCharacter); // Outputs = 9

var lastCharacter = languageName[9]; // Declaring a new variable & selecting the 9th indexed number (the last character) in our variable languageName.

console.log(lastCharacter); // Outputs = t

// Bracket Notation - Finding the Nth-to-Last Character in a String

var markupLanguage = "Hyper Text Markup Language"; // Declaring our variable.

var findingThirdToLastCharacter = [markupLanguage.length - 3]; // Finding the third to last character.

console.log(findingThirdToLastCharacter); // Console logging outputs = 23

var thirdtoLastCharacter = markupLanguage[23]; // Selecting the 23rd indexed character in our string.

console.log(thirdtoLastCharacter); // Console logging outputs = a (Which is the third to last character in our variable markupLanguage).

// Word Blanks

/* Declaring a function named madLibs with the paramets myAdjective, myNoun, myVerb & myAdverb. */
function madLibs(myAdjective, myNoun, myVerb, myAdverb) {
    var result = ""; // Declaring an empty variable.

    /* Using the plus equal operator to form a string with a string and the parameters.*/
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb; 

    return result;
}

/* Console logging our function. Any argument can be passed through the parentheses to see it's outcome. */
console.log(madLibs("huge", "dog", "sprinted", "quickly."));

/* 
Adjective = Huge, large, big.
Noun = Naming on creatures, i.e = Human, Mosquito, Dog, Dinosaur.
Verb = An action,
Adverb = Strengthening of a verb our adjective. I.e = quickly, fastest, strongest.
*/

// Storing Multiple Values within an Array

