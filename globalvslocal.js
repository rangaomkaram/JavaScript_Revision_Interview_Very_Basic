//Global vs Local Scope in Functions
var outerWear = "T-Shirt";

function myOutfit(){
    var outerWear = "sweater";

    return outerWear;
}

console.log(myOutfit());

console.log(outerWear);