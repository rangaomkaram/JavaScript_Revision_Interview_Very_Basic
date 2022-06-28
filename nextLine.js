function nextInLine(Arr,item){

    //my code here
    Arr.push(item);

    //return item;
    return Arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: "+ JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After:"+JSON.stringify(testArr));