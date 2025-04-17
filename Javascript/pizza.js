let numberofGuest = 4;

let pizaSize;
// small <= 2
// medium <= 5
//large

if(numberofGuest <= 2) {
    pizaSize = "small pizza";
} else if (numberofGuest <= 5) {
    pizaSize = "medium pizza";
} else {
    pizaSize = "large pizza";
}

console.log(`You need a ${pizaSize} for ${numberofGuest} guests`);