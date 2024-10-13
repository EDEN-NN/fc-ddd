"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(id, name, price) {
        this._id = id;
        this._name = name;
        this._price = price;
        this.validate();
    }
    validate() {
        if (this._id.length === 0) {
            throw new Error("id is required");
        }
        if (this._name.length === 0) {
            throw new Error("name is required");
        }
        if (this._price <= 0) {
            throw new Error("price must be greater than zero");
        }
        return true;
    }
    changeName(name) {
        this._name = name;
        this.validate();
    }
    get name() {
        return this._name;
    }
    changePrice(price) {
        this._price = price;
        this.validate();
    }
    get price() {
        return this._price;
    }
}
exports.default = Product;
