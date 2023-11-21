"use client";
import React, { useState, useContext, useEffect } from "react";
import { Icon, Table } from "semantic-ui-react";
import Image from "next/image";
import { getAllProductsInCart, removeOneProductInCart } from "./useCart";
import { AppContext } from "../contexts";
import NumberFormat from "@/utils/convertPrice.utils";
import UserInfo from "./UserInfo";

const Cart = () => {
  const { profile } = useContext(AppContext);
  const [products, setProducts] = useState([]);

  const handleRemoveProduct = (product_id) => {
    setProducts((products) => products.filter((product) => product._id !== product_id));
    removeOneProductInCart(product_id, profile?._id ?? null);
  };
  const handleProductAmount = (value, product_id) => {
    setProducts((products) =>
      products.map((product) => {
        if (product?._id === product_id) {
          return { ...product, product_amount: value };
        }
        return product;
      })
    );
  };

  useEffect(() => {
    setProducts(getAllProductsInCart(profile?._id ?? null));
  }, [profile]);

  return (
    <div className="grid grid-cols-12 gap-4 m-auto">
      <div className=" cart col-start-4 col-span-6 text-lg  md:col-start-2 md:col-span-10 sm:col-start-1 sm:col-span-12  mt-20 mb-6 sm:text-sm">
        <Table singleLine size="small" unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Hình ảnh</Table.HeaderCell>
              <Table.HeaderCell>Tên sản phẩm</Table.HeaderCell>
              <Table.HeaderCell>Giá bán</Table.HeaderCell>
              <Table.HeaderCell width={1}> Số lượng</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          {products?.map((product, index) => {
            return (
              <Table.Body key={index}>
                <Table.Row>
                  <Table.Cell>
                    <Image src={product.image} alt="image product" width={80} height={50} />
                  </Table.Cell>
                  <Table.Cell>
                    <div>
                      <div className="font-semibold">{product.name}</div>
                      <div className="text-sm">Mã sản phẩm: {product.sku}</div>
                    </div>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="font-semibold text-red-500">{NumberFormat(product.price)} đ</div>
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center">
                      <div className="w-[5rem] h-[2rem] border pl-3">
                        <input
                          type="number"
                          value={product.product_amount}
                          min={1}
                          className="w-full h-full outline-none"
                          onChange={(e) => handleProductAmount(e.target.value, product?._id)}
                        />
                      </div>
                      <span className="ml-3" onClick={() => handleRemoveProduct(product._id)}>
                        <Icon name="trash" size="large" />
                      </span>
                    </div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            );
          })}
        </Table>

        <div className="p-5 border rounded">
          <div className="font-semibold text-lg">Thông tin của bạn</div>
          <div className="mt-3">
            <UserInfo products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
