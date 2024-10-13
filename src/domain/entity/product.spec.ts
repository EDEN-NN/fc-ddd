import Product from "./product";

describe("Product unit tests", () => {

    it("Should throw error when ID is empty", () => {
        expect(() => {
          const product = new Product("", "Product 1", 100);
        }).toThrowError("id is required");
    });

    it("Should throw error when name is empty", () => {
      expect(() => {
        const product = new Product("1", "", 100);
      }).toThrowError("name is required");
  });

  it("Should throw error when price is less or equal to zero", () => {
    expect(() => {
      const product = new Product("1", "Product 1", -13);
    }).toThrowError("price must be greater than zero");
  });

  it("Should change name", () => {
    const product = new Product("1", "Product 1", 100);

    product.changeName("Gadders");

    expect(product.name).toBe("Gadders");
  });

  it("Should change price", () => {
    const product = new Product("1", "Product 1", 100);

    product.changePrice(150);

    expect(product.price).toBe(150);
  });

});