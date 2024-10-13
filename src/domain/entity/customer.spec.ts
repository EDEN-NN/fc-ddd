import Customer from "./customer";
import Address from "./address";

describe("Customer unit tests", () => {


    it("should throw error when id is empty", () => {
        expect(() => {
          let customer = new Customer("", "Gadders");
        }).toThrow("ID is required");
      });


    it("Should change name", () => {
        const customer = new Customer("123", "Gadders");
        customer.changeName("Gadder");
        expect((customer.name)).toBe("Gadder");
    });

    it("Should activate customer", () => {
      const customer = new Customer("1", "Gadders");
      const address = new Address("Street 1", 123, "08485460", "Tiradentes");
      customer.Address = address;

      customer.activate();

      expect(customer.isActive).toBe(true);
    });

    it("Should deactive customer", () => {
      const customer = new Customer("1", "Gadders");

      customer.deactive();

      expect(customer.isActive).toBe(false);
    });

    it("Should throw error when address is undefined and you try to activate a customer", () => {
      expect(() => {
        const customer = new Customer("1", "Gadders");
        customer.activate();
      }).toThrowError("Address is mandatory to activate a customer");
    });

    it("Should add reward points", () => {
      const customer = new Customer("1", "Customer 1");
      expect(customer.rewardPoints).toBe(0);

      customer.addRewardPoints(10);
      expect(customer.rewardPoints).toBe(10);

      customer.addRewardPoints(10);
      expect(customer.rewardPoints).toBe(20);

    });

});