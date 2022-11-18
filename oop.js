var purchase = {
    shoes: 100,
    salesTax: 1.2,
    total: function () {
        let calculation = this.shoes * this.salesTax;
        console.log(calculation)
        return calculation
    }
}
purchase.total(); // 120