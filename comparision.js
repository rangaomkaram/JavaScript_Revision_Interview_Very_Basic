// Comparision with the Equality operator 

function testEqual(val) {
    if(val == 12){ // Change this line
        return "Equal"; 
    }
    return "Not Equal";
}

//Change this value to test
console.log(testEqual(12));

// Comparision with the Strict Equality Operator
function testStrict(val){
    if (val === 7){
        return "Equal";
    }
    return "Not Equal";
}

//Change this value to test

testStrict(10);


/*
3 === 3
3 === '3'
*/




















