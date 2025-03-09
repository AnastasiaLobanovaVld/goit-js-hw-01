function getShippingMessage(country, price, deliveryFee) {
    const totalPrice = price + deliveryFee;
    const result = `Shipping to ${country} will cost ${totalPrice} credits`
    return result;
}

const myResult1 = getShippingMessage("Australia", 120, 50);
const myResult2 = getShippingMessage("Germany", 80, 20);
const myResult3 = getShippingMessage("Sweden", 100, 20);
console.log(myResult1);
console.log(myResult2);
console.log(myResult3);
