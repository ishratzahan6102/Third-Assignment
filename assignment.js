

// Problem : (1)

function kilometerToMeter (kilometer){
    var meter = kilometer * 100;
    return meter;
}

var myAddress = kilometerToMeter (20);
// console.log(myAddress);


// Problem : (2)

function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity){
    var watch = 50;
    var phone = 100;
    var laptop =500;
    var totalCost = watch*watchQuantity + phone*phoneQuantity+ laptopQuantity*laptop;
    return totalCost;
}

var inputQuantity = budgetCalculator(1, 2, 3);
// console.log(inputQuantity);


// Problem : (3)

var nightStayed = 30;
var hotelCost = 0;

if (nightStayed <= 10){
    hotelCost = nightStayed * 100;
}
else if (nightStayed <=20){
    var firstPart = 10 * 100;
    var remainging = nightStayed - 10;
    var secondPart = remainging * 80;
    hotelCost = firstPart + secondPart;
}
else{
    var firstPart = 10 * 100;
    var secondPart = 10 * 80;
    var remainging = nightStayed - 20;
    var thirdPart = remainging * 50;
    hotelCost = firstPart + secondPart + thirdPart;
}

// console.log(hotelCost);


// Problem : (4)

// get the array.
// check if "a" is smaller than "b" and then replace a.

function megaFriend(element){
var result = "";

for(var i = 0; i < element.length; i++){
    var currentString = element[i];
    if (currentString.length > result.length){
        result = element[i];
    }
}
return result;
}

var friendsName = ['adiba', 'farhana', 'shanta', 'mim', 'roza'];
// console.log(megaFriend(friendsName));