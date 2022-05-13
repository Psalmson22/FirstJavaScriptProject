let x = 1; //loop starts

while (x<=100) {
if (x % 2 === 0) {
console.log (x + " is divisible by 2.");
} else if (x % 7 === 0) {
console.log ( x + " is divisible by 7.");
} else if (x % 2 === 0 & x % 7 === 0) {
console.log(x + " is divisible by both 2 and 7.");
} else {console.log(x + " is not divisible by neither 2 nor 7.");
}
x = x + 1;
}
