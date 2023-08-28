module.exports = class Product {
    constructor(name, description, price, instock = 0){
        this.name = name;
        this.description = description;
        this.price = price;
        this.instock = instock;
    }
    addStock(quantity){
        this.instock += quantity;
    }
    removeStock(quantity){
        this.instock -= quantity;
    }
}