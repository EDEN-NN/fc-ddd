"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = __importDefault(require("./order"));
const order_item_1 = __importDefault(require("./order_item"));
describe("Order unit tests", () => {
    it("Should throw error when ID is empty", () => {
        expect(() => {
            let order = new order_1.default("", "123", []);
        }).toThrowError("id is required");
    });
    it("Should throw error when customerId is empty", () => {
        expect(() => {
            let order = new order_1.default("123", "", []);
        }).toThrowError("CustomerId is required");
    });
    it("Should throw error when items quantity were less or equal to 0", () => {
        expect(() => {
            let order = new order_1.default("123", "123", []);
        }).toThrowError("Items are required");
    });
    it("Should calculate total", () => {
        const item = new order_item_1.default("i1", "p1", "Item 1", 50, 2);
        const item2 = new order_item_1.default("i2", "p2", "Item 2", 50, 5);
        const order = new order_1.default("o1", "c1", [item]);
        let total = order.total();
        expect(total).toBe(100);
        const order2 = new order_1.default("o2", "c1", [item, item2]);
        total = order2.total();
        expect(total).toBe(350);
    });
    it("Should throw error if the item quantity is greater than zero", () => {
        expect(() => {
            const item = new order_item_1.default("i1", "p1", "Item 1", 50, 0);
            const order = new order_1.default("o1", "c1", [item]);
        }).toThrowError("quantity must be greater than zero");
    });
});
