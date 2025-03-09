function makeTransaction(quantity, pricePerDroid) {
    const result = `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`
    return result;
}

const result1 = makeTransaction(5, 3000);
const result2 = makeTransaction(3, 1000);
const result3 = makeTransaction(10, 500);
console.log(result1);
console.log(result2);
console.log(result3);
