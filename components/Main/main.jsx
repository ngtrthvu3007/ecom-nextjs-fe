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
      <div className="col-start-5  mt-12 text-center">
        <div className="font-bold text-[30px] uppercase ">{type}</div>
      </div>
      <>
        <div className=" product col-start-3 col-span-5 mt-12 mb-6 cursor-pointer">
          <div className="grid grid-cols-4 gap-4 m-auto text-center">
            {data.slice(0, numItems).map((product, index) => {
              return (
                <div
                  key={index}
                  className="w-auto m-0 bg-white border border-slate-200 rounded hover:border-slate-300"
                  style={{
                    padding: "24px 5px 16px 5px",
                    boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.2)",
                    width: "250px",
                  }}>
                  <div className="product-item">
                    <div className="thumnail" style={{ margin: "25px 0 20px" }}>
                      <Link href={"/"}>
                        <Image
                          alt={product.name}
                          src={product.image}
                          width={240}
                          height={240}
                          style={{ objectFit: "scale-down" }}
                        />
                      </Link>
                    </div>
                    <div className="product-detail ">
                      <div className="text-[16px] font-bold leading-7 text-black">{product.name}</div>
                      <div className="mt-6 price text-[20px] font-semibold text-red-600">
                        <span>{NumberFormat(product.price)}</span>
                        <span className="text-[16px] ml-1 mb-1">VNĐ</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {!loadMore && (
          <div className="col-start-5  col-span-2 mt-3" onClick={() => handleClick()}>
            <button className=" min-w-[150px] px-8 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-slate-200">
              Xem Thêm {type}
            </button>
          </div>
        )}
      </>
    </>
  );
}
