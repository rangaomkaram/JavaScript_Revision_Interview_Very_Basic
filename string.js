var firstName = "Alan";
var lastName = "Turing";

//only Change code below this line

var myFirstname = "Beau";
var myLastName = "Carnes";

//Escaping the literal quotes in strings

var myStr = "I am a\"double quoted\" string inside \"double quotes\"";
console.log(myStr);

var myStr2 = '<a href="http://www.exampel.com" target ="blank">Link</a>';
console.log(myStr2);

//Escaping Sequences in the string

/****** 
code output
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backscape
\f form feed

 *******/
var myString;

myString = "FirstLine\n\t\\SecondLine\nThirdLine";

//Concatenating Strings with plus Operator

//Example
var Ourstring = "I come first. " + "I come Second.";

// Only Change Code below this line

var my_String = "This is the start ." + "This is the end. ";

console.log(my_String);

// Constructing the strings with varaibles

var OurName = "LearnWithRanga";
var ourStr = "Hello, our  name is " + OurName + ", How are you?";
console.log(ourStr)

// Example 

var anAdjective = "awesome";
var strOur = "freeCodeCamp";
strOur += anAdjective;

// Only change below this line

var someAdjective = "worthwhile";
var mystrOur = "Learning to code is";
mystrOur += someAdjective;

console.log(mystrOur);

// find the length of string

var firstNameLength = 0;
var first_Name = "Adam-eve3";

firstNameLength = first_Name.length;

//Setup 

console.log(firstNameLength);

// bracket Notation to find the first character in string

firstletter = first_Name[0];
console.log(firstletter);
//String Immutability :


var Immutability = "Jello World";

// only change below code

// Immutability[0] ="H" // Fix Me
// by accessing we cannot change like above
//but we can change like as below

Immutability = "Hello World"
 // Bracket Notation tp find the Nth character in string


var lastLetterName = Immutability[Immutability.length - 1];

console.log(lastLetterName)

//Nth last letter name like 3rd last last letter

var thridlastLetter = Immutability[Immutability.length-3]
console.log(thridlastLetter)

















































































