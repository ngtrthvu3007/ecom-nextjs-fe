"use client";
import { useEffect, useState } from "react";
import { getAllProducts } from "@/apis/products.apis";
import Main from "@/components/Main/main";
export default function Home() {
  const [products, setProduct] = useState([]);
  const listIPhone = products.filter((iphone) => iphone.type === "phone");
  const listMacbook = products.filter((macbook) => macbook.type === "macbook");
  const getProducts = async () => {
    const data = await getAllProducts();
    setProduct(data.result.products);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="row">
      <div className="grid grid-cols-12 gap-4  m-auto">
        <Main data={listIPhone} type="iPhone" />
        <Main data={listMacbook} type="MacBook" />
      </div>
    </div>
  );
}
