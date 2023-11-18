import Image from "next/image";
import Link from "next/link";
import NumberFormat from "../../utils/convertPrice.utils";
import React, { useState } from "react";

export default function Main(props) {
  const { data, type } = props;
  const [numItems, setNumItems] = useState(4);
  const [loadMore, setLoadMore] = useState(false);

  const handleClick = () => {
    setNumItems(data.length);
    setLoadMore(true);
  };
  return (
    <>
      <div className=" product col-start-3  col-span-8 mt-12 mb-6  text-center">
        <div className="font-bold text-[30px] mb-10 ">{type}</div>
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4 m-auto text-center">
          {data.slice(0, numItems).map((product, index) => {
            return (
              <Link href={`/product/${product.sku}`} key={index}>
                <div
                  key={index}
                  className="w-auto m-0 bg-white border border-slate-200 rounded hover:border-slate-300 cursor-pointer"
                  style={{
                    padding: "24px 5px 16px 5px",
                    boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.2)",
                    maWidth: "300px",
                  }}>
                  <div className="product-item">
                    <div className="thumnail" style={{ margin: "25px 0 20px" }}>
                      <Image
                        alt={product.name}
                        src={product.image}
                        width={240}
                        height={240}
                        style={{ objectFit: "scale-down" }}
                      />
                    </div>
                    <div className="text-[16px] h-[2.5rem] font-bold leading-7 text-black">{product.name}</div>
                    <div className="mt-6 price text-[20px] font-semibold text-red-600">
                      <span>{NumberFormat(product.price)}</span>
                      <span className="text-[16px] ml-1 mb-1">VNĐ</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        {!loadMore && (
          <div className="grid grid-cols-5 md:grid-cols-1 sm:grid-cols-1">
            <div className=" xl:col-start-3 lg:col-start-3  mt-12 text-center mx-auto" onClick={() => handleClick()}>
              <div className="min-w-[150px] w-full px-8 py-4 rounded-lg border border-blue-500 text-blue-500 hover:bg-slate-200">
                Xem Thêm {type}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
