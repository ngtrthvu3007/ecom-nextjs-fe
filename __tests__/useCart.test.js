import {
  addProductToLocalStorage,
  totalProductInCart,
  getAllProductsInCart,
  removeOneProductInCart,
} from "@/app/cart/useCart";

beforeEach(() => {
  jest.clearAllMocks();
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("addProductToLocalStorage function", () => {
  test("should add a new product to local storage", () => {
    const product = {
      image: "https://shopdunk.com/images/thumbs/0022756_imac-m3-2023-24-inch-8-core-gpu8gb256gb_240.jpeg",
      name: "iMac M3 2023 24 8GB/256GB",
      price: 45990000,
      sku: "imac-m3 2023",
      user_id: "654fef33c1bb739a6e912d77",
      _id: "6541505a4cdce3e4fd519e1d",
    };
    addProductToLocalStorage(product);
    const updatedProducts = JSON.parse(localStorage.getItem("carts"));
    expect(updatedProducts).toContainEqual(product);
  });
});

describe("totalProductInCart function", () => {
  test("should return the total count of products for a user", async () => {
    const user_id = "654fef33c1bb739a6e912d77";
    const sampleProducts = [
      { user_id: "654fef33c1bb739a6e912d77", sku: "ip14+" },
      { user_id: "654fef33c1bb739a6e91ad28", sku: "android1" },
      { user_id: "654fef33c1bb739a6e9as78a", sku: "ip14s" },
    ];

    window.localStorage.getItem = jest.fn().mockReturnValue(JSON.stringify({ carts: sampleProducts }));
    const result = await totalProductInCart(user_id);
    expect(result).toBe(1);
  });
});

describe("getAllProductsInCart function", () => {
  test("should return all products for a user in the cart", () => {
    const user_id = "654fef33c1bb739a6e912d77";
    const sampleProducts = [
      { user_id: "654fef33c1bb739a6e912d77", sku: "ip14+" },
      { user_id: "654fef33c1bb739a6e91ad28", sku: "android1" },
      { user_id: "654fef33c1bb739a6e912d77", sku: "ip14s" },
    ];
    window.localStorage.getItem = jest.fn().mockReturnValue(JSON.stringify({ carts: sampleProducts }));
    const result = getAllProductsInCart(user_id);
    expect(result).toEqual([
      { user_id: "654fef33c1bb739a6e912d77", sku: "ip14+" },
      { user_id: "654fef33c1bb739a6e912d77", sku: "ip14s" },
    ]);
  });
  test("should return an empty array if there are no products for the user in the cart", () => {
    const user_id = "654fef33c1bb739a6e91ad7";
    const result = getAllProductsInCart(user_id);
    expect(result).toEqual([]);
  });
});

describe("removeOneProductInCart function", () => {
  test("should remove one occurrence of a product for a user", () => {
    const user_id = "654fef33c1bb739a6e91ad7";
    const product_id = "6541505a4cdce3e4fd519e1d";
    const sampleProducts = [
      { user_id: "654fef33c1bb739a6e91ad7", _id: "6541505a4cdce3e4fd519e1d", name: "Product1" },
      { user_id: "654fef33c1bb739a6e9asa9", _id: "6541505a4cdce3e4fdas589d", name: "Product3" },
      { user_id: "654fef33c1bb739a6e91ad7", _id: "6541505a4cdce3e4fd519eas", name: "Product2" },
    ];
    window.localStorage.getItem = jest.fn().mockReturnValue(JSON.stringify({ carts: sampleProducts }));
    removeOneProductInCart(product_id, user_id);
    const updatedProducts = JSON.parse(localStorage.getItem("carts"));
    expect(updatedProducts).toEqual([
      { user_id: "otheruser", _id: "product456", name: "Product2" },
      { user_id: "654fef33c1bb739a6e91ad7", _id: "6541505a4cdce3e4fd519eas", name: "Product2" },
    ]);
  });
});
