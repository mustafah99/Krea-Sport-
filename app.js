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

var myArray = ["This is an array", 20]; // Declaring a variable with an array, the first value being a string and the second, a number.

console.log(myArray); // Outputs = (2) ["This is an array", 20] / (2) = An array with 2 items.

// Nested Array

/* A list of arrays separated by commas. */
var nestedArray = [
    ["First nested array", 10],
    ["Second nested array", 20]
];

console.log(nestedArray); // Outputs = (2) [Array(2), Array(2)]. This indicated that our variable nestedArray has two array items in which there is 2 items respectively.

// Bracket Notation with Arrays

var indexedArray = [50, 60, 70, 80]; // Declaring a variable with an array as value in which we've stored 4 numbers as items.

console.log(indexedArray[0]); // Selecting the first indexed item in our variable indexedArray. Outputs = 50

// Modifying List Items in Arrays

var modifyThisArray = ["Modify this string", 20, "And this one"]; // Declaring a variable with a name of modifyThisArray with an array of 3 items as value.

console.log(modifyThisArray); // (Before modification) Outputs = (3) ["Modify this string", 20, "And this one"]

modifyThisArray[0] = "Hello World, I am"; // Selecting the first indexed item and assigning a new value to it.
modifyThisArray[2] = "years old."; // Selecting the second indexed item and assigning a new value to it.

console.log(modifyThisArray); // (After modification) Outputs = (3) ["Hello World, I am", 20, "years old."].

// Accessing Multi-Dimensional Arrays with Bracket Notation

var arraysWithinArray = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9],
    [10, 11, 12]
]; // Select 8 from this array.

/* Declaring a new variable and assigning the 2nd indexed array within the array and then selecting the 1st indexed item within that array.*/
var extractedItemFromArray = arraysWithinArray[2][1];

/* Outputs = 8. */ 
console.log(extractedItemFromArray); 

// Append Data with push()

var pushIntoThisArray = [1, 2, 3]; // Our array assigned to a declared variable with the name of pushIntoThisArray.

pushIntoThisArray.push(4); // Pushing 4 onto the end of the array.

// Pushing a new array into our first array.
pushIntoThisArray.push(["We now pushed a new array into our array assigned to the pushIntoThisArray variable.", 4, 5, 6]); 

// Outcome = [1, 2, 3, 4], ["We now pushed a new array into our array assigned to the pushIntoThisArray variable.", 4, 5, 6] 

console.log(pushIntoThisArray); // Output = (5) [1, 2, 3, 4, Array(4)] = 5 list items inside of an array in which there is a nested array with 4 list items.

// Array Manipulation with pop()

/* Declaring a variable with multi-dimensional arrays. */
var popOffThisArray = [
    ["First array", 1],
    ["Second array, pop this one off", 2]
]; // Currently assigned value = [["First array", 1], ["Second array, pop this one off", 2]]

popOffThisArray.pop();
/* Removes the last item inside of our array. */ 

console.log(popOffThisArray);
/* Outcome = [["First array", 1]] */


// Array Manipulation with shift()

/* Declared variable with an array as value. */
var shiftArray = ["Shift this item from this array.", 2, 3, "Did you .shift() it?"];

/* .shift() = Removes the first item within an array. */
shiftArray.shift();

console.log(shiftArray);
/* Outputs = [2, 3, "Did you .shift() it?"] */

// Array Manipulation with unshift()

var unshiftThisArray = ["Shift this item", "Replace the 0th indexed item with: Hello World"];
/* Original output = ["Shift this item", "Replace the 0th indexed item with: Hello World"] */ 

/* Removes the first item inside of the array assigned to our variable. */
unshiftThisArray.shift();

/* Adds an item with the string "Hello World" inside of the array at the 0th indexed position. */
unshiftThisArray.unshift("Hello World");

console.log(unshiftThisArray);
/* Output after manipulation = ["Hello World", "Replace the 0th indexed item with: Hello World"] */

// Nested Arrays / Shopping List

/* An array of arrays. */
var myList = [
    ["Cereal", 15],
    ["Milk", 10],
    ["Bananas", 20],
    ["Juice", 30],
    ["Eggs", 5]
]

// Functions

// Declaring a function called consoleArgument with (saySomethingHere) as a parameter.
// The parameters (placeholder) acts as a placeholder for when the actual argument will be passed through when calling the function (See line :301). 
// Note - Parameters can be named anything we want.
function consoleArgument(saySomethingHere) {
    console.log(saySomethingHere);
    /* Whenever we call this function, the block of code inside of the function { } will be executed. */
}

/* Here we call the function and give it an argument with the value of "Hello Worldzzz" */
consoleArgument("Hello Worldzzz");
/* Console result = Hello Worldzzz */

/* New function declared with two parameters. */
function additionCalculator(param1, param2) {
    console.log(param1 + param2); /* Addition of two numbers taking in the values passed through when calling the function as arguments. */ 
}

additionCalculator(50, 300);
/* Console result = 350. */

// Global Scopes & Functions and Local Scopes

/* Variables declared outside of function blocks are declared as global scopes meaning that they can be seen throughout our entire JavaScript code. */
var globalScope = "This is a global scope variable"; 

function globalAndLocalScope(parameter) {
    /* Declaring variables without the var keyword is possible. Any variable inside of a function without the var keyword is automatically declared as a global scope variable meaning that we can access it and see it throughout our entire JavaScript code. */ 
    globalScopeTwo = "This is also a global scope variable"; 

    /* This variable is only declared locally meaning that we can only use and see it throughout the function block we declared it within. */ 
    var localScopeVariable = "This variable is declared as a local scope variable.";
    console.log(localScopeVariable);
    // Console result when function is called upon = This variable is declared as a local scope variable.
}

globalAndLocalScope();
// Console result = This variable is declared as a local scope variable.

console.log(globalScope);
// Outputs = This is a global scope variable
// This variable is valid since it is declared outside of the function even though the var keyword is used to declare it.

console.log(globalScopeTwo);
// Ouputs = This is also a global scope variable
// The output is valid since the variable is declared as global scope with no var keyword.

// console.log(localScopeVariable); 
/* Outputs = Uncaught ReferenceError: localScopeVariable is not defined. (This error occurs since we can't use it or see it outside of the function that we declared it in. */

// Local & Global Scope

/* Global Scope Variable */
var sameVariable = "Same variable name declared globally.";

/* New function */
function variablePrecedence() {
    /* Locally declared variables with the same name as global scope variables are prioritized and therefore global scope variables with the same name are ignored. */ 
    var sameVariable = "Same variable name but declared locally."
    
    console.log(sameVariable);
}

variablePrecedence();
// Console result = Same variable name but declared locally.

console.log(sameVariable);
// Console result = Same variable name declared globally.
// Value remains the same but different scope since this is a global scope variable and JavaScript can not find any other variable with this name since the variable within our function can only be seen within that function.

// Return a Value from Functions with Return

// New function declared with "number" as a parameter.
function multiplyingCalculator(number) {

    // Returns argument passed through the number parameter and multiplies it by 5.
    return number * 5;
}

console.log(multiplyingCalculator(10));
// Outputs = 50.

// Understanding Undefined Returned from a Function

var sumOne = 0;

function addFive() {
    sumOne += 5;
}

console.log(addFive());
// Outputs = undefined. The reason to why this function returns an undefined value is because we haven't specified what we want to return.
// If we were to do this instead (See below). We would get the value of our variable back because we specified what we wanted to return with the return function.

var sumOf = 0;

function addOne() {
    sumOf += 1;
    // Return function used below to return the variable value after adding 1 with the plus equal operator.
    return sumOf; 
}

console.log(addOne());
// Output = 1.

// Assigning a Returned Value

/* New variable declared with 0 as its stored value. */
var storedReturn = 0;

/* New function with "number" as the parameter. */
function storeReturnedValue(number) {
    /* Returns the argument passed through the parameter and divides it by 2. */
    return number % 2;
}

/* Returned value stored inside our variable we declared. We pass in 1 as its argument. */
storedReturn = storeReturnedValue(1);
/* 1 % 2 = 1 */ 

/* Output = 1. */ 
console.log(storedReturn);

// Queue = Abstract data queue. Items are kept in order, when new items are brought in they go last in line and the ones first in line are replaced by the items behind them in line. 

// New variable declared with a name of arrayList and an array stored as value.
var arrayList = [1, 2, 3, 4, 5, 6];

// New function declared with the parameters arrayName and arrayItem where we take in the name of the variable in which we've stored an array and an array item which we want to pass through as an argument to be pushed to the end of our array respectively.
function nextInLine(arrayName, arrayItem) {
    // .push(arrayItem) - Here we push the passed argument onto our list.
    arrayName.push(arrayItem);

    // We return the value of the first item in the list which we shift off.
    return arrayName.shift();
 }

console.log("Before = " + JSON.stringify(arrayList));
/* Output:
Before = [1,2,3,4,5,6] */

console.log(nextInLine(arrayList, 7));
// Output = 1 (The returned value which we shifted off of our list.)

console.log("After = " + JSON.stringify(arrayList));
/* Output: 
After = [2,3,4,5,6,7] */

// Boolean Data Types

function booleanFunction() {

    /* Booleans are data types which can only be True or False. */
    return true;
    return false;
}

// If Statements

/* New function declared */
function ifStatements(isItTrue) {
    /* If the value passed through our parameter is true then execute the block of code inside of our semi-colons. */
    if (isItTrue) {
        return "Yes, it was true.";
    }
    /* Else, if the value passed through as an argument is not true and instead false then execute this block of code within these semi-colons. */
    else {
        return "No, it was not true.";
    }
}

/* When passing through a true value as argument, we get this output: 
= Yes, it was true. */ 
console.log(ifStatements(true));

/* When passing through a false value as an argument, we get the following output:
= No, it was not true. */
console.log(ifStatements(false));

// Comparison using the Equality Operator

/* New function declared. */

function equalityOperator(parameter) {
    if (parameter == 1) {
        return "The value you input was 1."
    }
    else {
        return "Try a different value."
    }
}

/* When passing through the number 1 as an argument, we get the following output:
= The value you input was 1. */
console.log(equalityOperator(1));

/* When passing in a string with the same value as what we're asking for, we would still get the same result in our console since the equality operator converts string types into numbers so that '1' = 1. */
console.log(equalityOperator('1'))
// Result = The value you input was 1.

/* When passing through any other number as an argument, we get the following output:
= Try a different value. */
console.log(equalityOperator(2));

// Comparison using the Strict Equality Operator

function strictEqualityOperator(param) {
    if (param === 1) {
        return "Yes, that is a true value.";
    }
    else {
        return "No, that was not the value we were looking for.";
    }
}

/* This passed argument will return a false value since the strict equality operator does not perform type conversions from strings to numbers. */
console.log(strictEqualityOperator('1'))
// Console output = No, that was not the value we were looking for.

/* Passing through the number that our function values as true. */
console.log(strictEqualityOperator(1));
// Console output = Yes, that is a true value.

// Comparing Different Values

/* New function declared. */
function comparingTwoParameters(param1, param2) {
    /* If the passed through arguments are equal to each other, the block of code within the semi-colons will be executed for the first If statement. */
    if (param1 == param2) {
        return "Equal";
    }
    /* Else, if they are not equal, return this value to the console. */
    else {
        return "These values are not equal to each other.";
    }
}

console.log(comparingTwoParameters(50, '50'));
// Output = Equal

console.log(comparingTwoParameters(1, 100));
// Output = These values are not equal to each other.

// Inequality Operator

function inequalityOperatorFunction(parameter) {
    // If the value passed through as an argument is NOT equal to 100, execute the following block of code.
    if (parameter != 100) {
        return "Not equal to 100";
    }
    // Else, return this value.
    else {
        return "Yes, the value input is equal to 100.";
    }
}

console.log(inequalityOperatorFunction(99));
// Output = Not equal to 100 (This is because 99 is NOT equal to 100).

console.log(inequalityOperatorFunction('100'));
// Output = Yes, the value input is equal to 100. (This is because the inequality operator also performs type conversions from strings to numbers).

console.log(inequalityOperatorFunction(100));
// Output = Yes, the value input is equal to 100.

// Strict Inequality Operator

function strictInequality(param) {
    if (param !== 100) {
        return "Not equal to 100.";
    }
    else {
        return "These values are equal to each other.";
    }
}

// The strict inequality operator !== will not perform type conversions from strings to numbers such as the equality operator or the inequality operator.
console.log(strictInequality('100'));
// Output = Not equal to 100.

console.log(strictInequality(100));
// Output = These values are equal to each other.

// Greater Than & Multiple If Statements

function multipleIfAndGreater(value) {
    // If the value is greater than 100, execute this block of code.
    if (value > 100) {
        return "The value you passed through is greater than 100.";
    }
    // Else, if the value is greater than 10, execute this block of code.
    else if (value > 10) {
        return "The value you passed through is greater than 10.";
    }
    // Else, return this value to the console.
    else {
        return "10 or under.";
    }
}

// The value passed through is greater than 100 by 1 (101).
console.log(multipleIfAndGreater(101));
// Output = The value you passed through is greater than 100.

// The value is greater than 10 by 1 (11).
console.log(multipleIfAndGreater(11));
// Output = The value you passed through is greater than 10.

// The value passed through is under 10.
console.log(multipleIfAndGreater(1));
// Output = 10 or under.

// Greater Than or Equal To Operator

function greaterThanOrEqualTo(value) {
    // If the value is greater than or equal to 10, execute this block of code.
    if(value >= 10) {
        return "Equal to 10 or more.";
    }
    // Else, if the value is equal to 1 or more, execute this block of code. 
    else if(value >= 1) {
        return "Equal to 1 or more.";
    }
    // Else, return this value.
    else {
        return "Under 1.";
    }
}

console.log(greaterThanOrEqualTo(10));
// Output = Equal to 10 or more.

console.log(greaterThanOrEqualTo(1));
// Output = Equal to 1 or more.

console.log(greaterThanOrEqualTo(0));
// Output = Under 1.

// Less Than Operator

function lessThan(value) {
    // If value is less than 1, execute this block of code.
    if (value < 1) {
        return "Less than 1.";
    }
    // If value is less than 10, execute this block of code.
    else if (value < 10) {
        return "Less than 10.";
    }
    // Else, return this value to the console.
    else {
        return "Value is greater than."
    }
}

console.log(lessThan(9));
// Output = Less than 10.

console.log(lessThan(0));
// Output = Less than 1.

console.log(lessThan(100));
// Output = Value is greater than.

// Less Than or Equal to Operator

function lessThanOrEqualTo(value) {
    // If the value is less than or equal to 10 then execute this block of code.
    if (value <= 10) {
        return "Less than or equal to 10.";
    }
    // Else, if the value is less than or equal to 20 then execute this block of code.
    else if (value <= 20) {
        return "Less than or equal to 20.";
    }
    // Else, return this value to the console.
    else {
        return "Greater than these values.";
    }
}

console.log(lessThanOrEqualTo(10));
// Output = Less than or equal to 10.

console.log(lessThanOrEqualTo(20));
// Output = Less than or equal to 20.

console.log(lessThanOrEqualTo(30));
// Output = Greater than these values.

// Logical And Operator

// New function declared.
function logicalAndOperator(value) {
    // If the value is equal to or greater than 25 AND (&&) less than 50 or equal to 50 then execute this block of code.
    if (value > 25 && value < 50) {
        return "Value is between 25 and 50.";
    }
    // Else, return this value in the console.
    else {
        return "Value is exactly or lower than or higher than 25 or 50 respectively."
    }
}

console.log(logicalAndOperator(40));
// Output = Value is between 25 and 50.

console.log(logicalAndOperator(24));
// Output = Value is exactly or lower than or higher than 25 or 50 respectively.

console.log(logicalAndOperator(51));
// Output = Value is exactly or lower than or higher than 25 or 50 respectively.

// Logical Or Operator

function logicalOrOperator(value) {
    // If the value is less than 10 OR ( || ) greater than 20 then execute this block of code.
    if (value < 10 || value > 20) {
        return "Outside value.";
    }
    // Else, return this value to the console output.
    else {
        return "Within range of values.";
    }
}

console.log(logicalOrOperator(9));
// Output = Outside value.

console.log(logicalOrOperator(15));
// Output = Within range of values.

console.log(logicalOrOperator(21));
// Output = Outside value.
