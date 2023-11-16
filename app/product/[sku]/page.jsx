"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getProductDetail, getAllProducts } from "@/apis/products.apis";
import ImageModal from "@/components/Modal/ImageModal";
import Loading from "@/components/Loading/Loading";
import { Rating, Icon } from "semantic-ui-react";
import NumberFormat from "@/utils/convertPrice.utils";
import DiscountBox from "./discount";
import ButtonGroup from "./ButtonGroup";
import { IconHot } from "@/components/Icons/Icons";
import ProductRelation from "./ProductDesc";


const ProductDetail = () => {
  const sku = usePathname();
  const [open, setOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["product_detail"],
    queryFn: () => getProductDetail(sku.split("/product/")[1]),
  });
  const { data: list_product } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
  const relationProducts = list_product?.products.filter((product) => product.type === data?.type).filter(product=> !sku.includes(product.sku))
  const openImageModal = () => setOpen(true);

  return (
    <div className="row">
       <div className="bg-[#F2F2F2] h-[50px] flex items-center">
        <Link href='/'>
        <div className='ml-[100px] sm:ml-5 md:ml-10  mr-2 text-blue-400 font-semibold text-[16px] '>Trang chủ  </div>
        </Link>
        <Icon name='chevron right'size='large' color="grey" />
         <div className="ml-2 text-[#767676] font-semibold text-[16px]">{data?.name}</div>
       </div>
      <div className="grid grid-cols-12 gap-4 m-auto">
        {isLoading ? (
          <div className=" product col-start-3  col-span-8 mt-12 mb-6  text-center">
            <Loading />
          </div>
        ) : (
          <>

            <div className=" product-detail col-start-3  col-span-8 mt-20 mb-6 text-center">
              <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4 m-auto text-center">
                <div
                  className="col-span-2 p-7 bg-[#f5f5f7] rounded shadow-sm border mx-auto"
                  onClick={() => openImageModal()}>
                  <Image src={data?.image} alt={data.name ?? "product thumnail"} width={400} height={400} />
                </div>
                <div className="col-span-2 text-left pl-5 md:mt-5 sm:mt-5">
                  <h2>{data.name}</h2>
                  <div className="rating flex">
                    <Rating icon="star" defaultRating={data?.rating ?? 5} maxRating={5} disabled size="huge" />
                    <div className="text-blue-400 ml-3 text-[15px]">185 đánh giá</div>
                  </div>
                  <div className="mt-6 border-t flex items-baseline">
                    <div className="text-blue-600 text-[30px] mt-6 font-bold mr-2">{NumberFormat(data.price)}đ</div>
                    <Image src={IconHot} alt="hot product" width={30} height={20} className="icon-hot mt-6" />
                  </div>
                  <DiscountBox />
                  <ButtonGroup />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <ProductRelation data={relationProducts} />

      <ImageModal setOpen={setOpen} open={open} image={data?.image} />
    </div>
  );
};
export default ProductDetail;
