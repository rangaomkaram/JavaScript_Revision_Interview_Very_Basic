// Manipulate the array using the unshift() functions
//Unshift fucntion used push the first element

var ourArray = ["Stimpson","J","Cat"];
ourArray.shift(); // removes the first element 
ourArray.unshift("Happy");
// ourArray now equals ["Happy","J","Cat"]

//SetUp

var myArray = [["John",23],["dog",3]];
myArray.shift();
myArray.unshift(["paul",35]);

console.log(ourArray);
console.log(myArray);