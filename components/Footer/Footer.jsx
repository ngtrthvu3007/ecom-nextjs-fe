"use client";
import Link from "next/link";
import { LogoNextShop } from "../Icons/Icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className=" h-[250px] mt-12 w-full bg-[#1d1d1f] text-white">
        <div className="grid grid-cols-9  m-auto">
          <div className="col-start-2  col-span-4 mt-14 sm:hidden">
            <Link href="/">
              <LogoNextShop />
            </Link>
            <div className="mt-4">
              Xin chào, tôi là Vũ aka Vincent, Đây là trang web bán các sản phẩm iPhone, Macbook dựa trên ý tưởng thiết
              kế của Shopdunk. Trang web này được xây dựng bằng NextJS version 13 và API miễn phí từ
              <a className="text-blue-400" href="https://vu-ecom-api.onrender.com/">
                dự án
              </a>
              này.
            </div>
            <div className="mt-2">
              Trang web này chỉ là sản phẩm cá nhân và mang tính chất tham khảo, không có giá trị thực tế. Vui lòng
              không sử dụng cho bất cứ mục đích thương mại nào. Cám ơn
            </div>
          </div>

          <div
            className="col-start-7 col-span-2 sm:col-start-2 sm:col-span-6
           mt-14 ml-[10px] ">
            <div className="text-2xl font-bold">About Me</div>
            <div>Author: Nguyen Tran The Vu (Vincent)</div>
            <div className="mt-2">
              Git:
              <a className="text-blue-400" href="https://github.com/ngtrthvu3007">
                https://github.com/ngtrthvu3007
              </a>
            </div>
            <div className="mt-2">
              Email:
              <a className="text-blue-400" href="mailto:nguyentranthevu@gmail.com">
                nguyentranthevu@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
