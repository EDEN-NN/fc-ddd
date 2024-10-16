"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderItem {
    constructor(id, productId, name, price, quantity) {
        this._id = id;
        this._productId = productId;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }
    get quantity() {
        return this._quantity;
    }
    get price() {
        return this._price;
    }
    orderItemTotal() {
        return this._price * this._quantity;
    }
}
exports.default = OrderItem;
