"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = __importDefault(require("./entity/order"));
const order_item_1 = __importDefault(require("./entity/order_item"));
let customer = new Customer("123", "Zali");
let address = new Address("Rua Gueis", 1063, "08340320", "São Paulo");
customer.Address = address;
customer.activate();
const item1 = new order_item_1.default("1", "Item 1", 10);
const item2 = new order_item_1.default("2", "Item 2", 15);
const order = new order_1.default("1", "123", [item1, item2]);
