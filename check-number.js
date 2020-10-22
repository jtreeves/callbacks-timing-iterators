function checkNumber(num) {
    if (num > 0) {
        return 'positive';
    } else if (num < 0) {
        return 'negative';
    } else {
        return 'zero';
    }
}

console.log(checkNumber(5));
console.log(checkNumber(-11));
console.log(checkNumber(0));
console.log(checkNumber(57));
console.log(checkNumber(-23));
console.log(checkNumber(76));
console.log(checkNumber(0.78));
console.log(checkNumber(-8.93));
console.log(checkNumber(0.0000));
console.log(checkNumber(123.456));