import { Icon } from "semantic-ui-react";
import { IconCheck } from "@/components/Icons/Icons";
import Image from "next/image";

const DiscountBox = () => {
  return (
    <div className="mt-6 border rounded p-5">
      <div className="flex items-baseline">
        <Icon name="gift" size="large" />
        <div className="ml-3 font-bold text-[18px]">Ưu đãi</div>
      </div>
      <div className="pl-5 mt-5 leading-7">
        <div className="text-orange-500 font-bold">I.Ưu đãi thanh toán</div>
        <div className="pl-1 font-semibold flex items-center">
          <Image src={IconCheck} alt="icon" width={20} height={5} className="icon-check" />
          <span className="ml-2">Giảm tới 500.000đ khi thanh toán ZaloPay</span>
        </div>
        <div className="pl-1 font-semibold flex items-center">
          <Image src={IconCheck} alt="icon" width={20} height={5} className="icon-check" />
          <span className="ml-2">Giảm tới 1.000.000đ khi thanh toán qua thẻ tín dụng</span>
        </div>
        <div className="pl-1 font-semibold flex items-center">
          <Image src={IconCheck} alt="icon" width={20} height={5} className="icon-check" />
          <span className="ml-2">Giảm 10% khi thanh toán trả góp</span>
        </div>
        <div className="text-orange-500 font-bold">II. Ưu đãi khi mua kèm</div>
        <div className="pl-1 font-semibold flex items-center">
          <Image src={IconCheck} alt="icon" width={20} height={5} className="icon-check" />
          <span className="ml-2">Ưu đãi mua kèm các phụ kiện Apple </span>
        </div>
        <div className="pl-1 font-semibold flex items-center">
          <Image src={IconCheck} alt="icon" width={20} height={5} className="icon-check" />
          <span className="ml-2">Giảm tới 20% khi mua bảo hành kim cương</span>
        </div>
        <div className="text-orange-500 font-bold">III. Thu cũ lên đời</div>
        <div className="pl-1 font-semibold flex items-center">
          <Image src={IconCheck} alt="icon" width={20} height={5} className="icon-check" />
          <span className="ml-2">Trợ giá đến 2.000.000đ khi lên đời iPhone 15 series</span>
        </div>
      </div>
    </div>
  );
};
export default DiscountBox;
