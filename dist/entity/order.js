"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(id, customerId, items) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
        this._total = this.total();
        this.validate();
    }
    validate() {
        if (this._id.length === 0) {
            throw new Error("id is required");
        }
        if (this._customerId.length === 0) {
            throw new Error("CustomerId is required");
        }
        if (this._items.length === 0) {
            throw new Error("Items are required");
        }
        if (this._items.some(item => item.quantity <= 0)) {
            throw new Error("quantity must be greater than zero");
        }
        return true;
    }
    total() {
        return this._items.reduce((acc, item) => acc + item.orderItemTotal(), 0);
    }
}
exports.default = Order;
