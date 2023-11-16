import Image from "next/image";
import Link from "next/link";
import NumberFormat from "@/utils/convertPrice.utils";
const ProductRelation = ({ data }) => {

  return (
    <>
      <div className="grid grid-cols-9  md:grid-cols-5 gap-4">
        <div className=" col-start-2  col-span-3  sm:col-span-6 font-bold text-[20px] block  border-l-[6px] lg:ml-8 sm:ml-4 pl-2 mt-14 border-blue-500">
          Sản phẩm tương tự
        </div>

        <div className=" col-start-2 product-relation col-span-7 md:col-span-3  md:col-start-2 mt-5 mx-auto gap-4 flex mb-6 cursor-pointer text-center">
          {data?.map((product, index) => {
            return (
              <Link href={`/product/${product.sku}`} key={index}>
                <div
                  key={index}
                  className="w-auto m-0 bg-white border border-slate-200 rounded hover:border-slate-300"
                  style={{
                    padding: "24px 5px 16px 5px",
                    boxShadow: "0px 1px 8px rgba(0, 0, 0, 0.2)",
                    maWidth: "300px",
                  }}
                >
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
                    <div className="text-[16px] h-[2.5rem] font-bold leading-7 text-black">
                      {product.name}
                    </div>
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
      </div>
    </>
  );
};
export default ProductRelation;
