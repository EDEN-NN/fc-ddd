"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("./product"));
describe("Product unit tests", () => {
    it("Should throw error when ID is empty", () => {
        expect(() => {
            const product = new product_1.default("", "Product 1", 100);
        }).toThrowError("id is required");
    });
    it("Should throw error when name is empty", () => {
        expect(() => {
            const product = new product_1.default("1", "", 100);
        }).toThrowError("name is required");
    });
    it("Should throw error when price is less or equal to zero", () => {
        expect(() => {
            const product = new product_1.default("1", "Product 1", -13);
        }).toThrowError("price must be greater than zero");
    });
    it("Should change name", () => {
        const product = new product_1.default("1", "Product 1", 100);
        product.changeName("Gadders");
        expect(product.name).toBe("Gadders");
    });
    it("Should change price", () => {
        const product = new product_1.default("1", "Product 1", 100);
        product.changePrice(150);
        expect(product.price).toBe(150);
    });
});
