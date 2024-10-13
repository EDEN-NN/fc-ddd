"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = __importDefault(require("./customer"));
const address_1 = __importDefault(require("./address"));
describe("Customer unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            let customer = new customer_1.default("", "Gadders");
        }).toThrow("ID is required");
    });
    it("Should change name", () => {
        const customer = new customer_1.default("123", "Gadders");
        customer.changeName("Gadder");
        expect((customer.name)).toBe("Gadder");
    });
    it("Should activate customer", () => {
        const customer = new customer_1.default("1", "Gadders");
        const address = new address_1.default("Street 1", 123, "08485460", "Tiradentes");
        customer.Address = address;
        customer.activate();
        expect(customer.isActive).toBe(true);
    });
    it("Should deactive customer", () => {
        const customer = new customer_1.default("1", "Gadders");
        customer.deactive();
        expect(customer.isActive).toBe(false);
    });
    it("Should throw error when address is undefined and you try to activate a customer", () => {
        expect(() => {
            const customer = new customer_1.default("1", "Gadders");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    });
});
