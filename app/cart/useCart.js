// const handleAddToCart = async (newProduct) => {
//   let updatedProducts;
//   const isProductAlreadyInCart = listProductInCarts.some(
//     (product) => newProduct.id === product?.id && newProduct.user_id === product.user_id
//   );
//   if (isProductAlreadyInCart) {
//     updatedProducts = listProductInCarts.map((product) => {
//       return updateTotalQuantity(product, newProduct, parseInt(newProduct?.quantity));
//     });
//   } else {
//     updatedProducts = [...listProductInCarts, newProduct];
//   }
//   let NumberProduct = updateTotalNumberProductInCart(updatedProducts);
//   let TotalPrice = updateTotalPrice(updatedProducts);
//   dispatch(updateNumberProductInCart(NumberProduct));
//   dispatch(calculateTotalPriceInCart(TotalPrice));
//   dispatch(addProductToCart(updatedProducts));
// };
export const addProductToLocalStorage = (newProduct) => {
  if (typeof window !== "undefined") {
    const existingProducts = JSON.parse(localStorage.getItem("carts")) || [];
    const updatedProducts = [...existingProducts, newProduct];

    localStorage.setItem("carts", JSON.stringify(updatedProducts));
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
