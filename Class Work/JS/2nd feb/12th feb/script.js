// task 1: 
// const currentTax = 10;

// function calcTax(productPrice){
//     return productPrice * (currentTax / 100);
// }

// function calcTotalPrice(productPrice , callback){
//     const productTax = callback(productPrice);
//     return productPrice + productTax;
// }
// console.log(calcTotalPrice(200,calcTax));

// tax 2: 

const currentTax = 10;
const dollarValue = 82;

const calcDomesticTax = productPrice => productPrice * (currentTax / 100);

const calcForeignTax = productPrice => {
    const inr = productPrice * dollarValue;
    return inr * (currentTax / 100);
}

const calcTax = productPrice => {
    if(productPrice < 1000){
        calcForeignTax(productPrice);
    }
    else{
        calcDomesticTax(productPrice);
    }
}

function calcTotalPrice(productPrice,callback){
    const productTax = callback(productPrice);
    return productPrice + productTax;
}
console.log(calcTotalPrice(200,calcTax))