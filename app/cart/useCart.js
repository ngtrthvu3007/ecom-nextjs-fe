export const addProductToLocalStorage = (newProduct) => {
  if (typeof window !== "undefined") {
    const existingProducts = JSON.parse(localStorage.getItem("carts")) || [];
    const existingProduct = existingProducts.find((product) => product._id === newProduct._id);
    if (existingProduct) existingProduct.product_amount++;
    else existingProducts.push(newProduct);
    return localStorage.setItem("carts", JSON.stringify(existingProducts));
  }
};

export const totalProductInCart = async (user_id) => {
  if (typeof window !== "undefined") {
    const allProducts = JSON.parse(localStorage.getItem("carts")) || [];
    const productsOfUser = await allProducts.filter((product) => product.user_id === user_id);

    return productsOfUser.length;
  }
};

export const getAllProductsInCart = (user_id) => {
  if (typeof window !== "undefined") {
    const allProducts = JSON.parse(localStorage.getItem("carts")) || [];
    return allProducts.filter((product) => product.user_id === user_id);
  }
};
export const removeOneProductInCart = (product_id, user_id) => {
  if (typeof window !== "undefined") {
    let allProducts = JSON.parse(localStorage.getItem("carts")) || [];
    const updatedProducts = allProducts.filter(
      (product) => !(product.user_id === user_id && product._id === product_id)
    );
    localStorage.setItem("carts", JSON.stringify(updatedProducts));
  }
};

export const totalPriceInCart = (user_id) => {
  if (typeof window !== "undefined") {
    let sum = 0;
    const allProducts = JSON.parse(localStorage.getItem("carts")) || [];
    allProducts.filter((product) => {
      if (product.user_id === user_id) {
        sum = sum + product.price * product.product_amount;
      }
    });
    return sum;
  }
};
