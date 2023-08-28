const Product = require("./Product");

module.exports = class Poster extends Product{
    constructor(name, description, heigth, width, price, instock = 0){
        super(name, description, price, instock)
        this.heigth = heigth;
        this.width = width;
    }
}