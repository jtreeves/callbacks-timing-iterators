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