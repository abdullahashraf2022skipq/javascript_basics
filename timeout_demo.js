const calculateBillAmount = (price) => {
    if (price < 1000) {
        console.log("Price is valid");
    }
    else {
        console.log("Price is invalid");
    }
}

const calculateBillAmountWithTimeout = (price, tax, tip) => {
    setTimeout(() => {
        console.log(price + price * tax + price * tip);
    }, 1000);
}

const calculateBillAmountWithPromise = (price, tax, tip) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (price > 1000) {
                reject("Price is invalid");
            }
            resolve(price + price * tax + price * tip);
        }, 1000);
    });
}

const calculateBillAmountWithAsyncAwait = async (price, tax, tip) => {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            if (price > 1000) {
                reject("Price is invalid");
            }
            resolve(price + price * tax + price * tip);
        }, 1000);
    });
}



const price = process.argv[2];
const tax = process.argv[3];
const tip = process.argv[4];

calculateBillAmountWithTimeout(price, tax, tip);
calculateBillAmount(price);
calculateBillAmountWithPromise(price, tax, tip).then((result) => {
    console.log(result);
}, (error) => {
    console.log(error);
});