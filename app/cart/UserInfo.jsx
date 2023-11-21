"use client";
import React, { useContext } from "react";
import { AppContext } from "../contexts";
import { Button } from "semantic-ui-react";
import FieldForm from "@/components/Modal/fieldForm";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { toastSuccess, toastError } from "../../components/ToastHelper/Toast";
import { getAccessToken } from "@/utils/authen";
import { yubCreatOrder } from "@/constants";
import { creatingOrder } from "../../apis/orders.apis";
import { removeOneProductInCart } from "./useCart";

const UserInfo = ({ products }) => {
  const token = getAccessToken();
  const { profile } = useContext(AppContext);

  const initialValues = {
    name: profile?.name ?? "",
    phone: `0${profile?.phone}` ?? "",
    address: profile?.address ?? "",
    paymentMethod: "cash",
  };
  const creatingOrderMutaion = useMutation({
    mutationFn: (body) => creatingOrder(body, token),
  });
  const formik = useFormik({
    initialValues,
    validationSchema: yubCreatOrder,
    onSubmit: async (values, { resetForm }) => {
      const { address, paymentMethod, phone } = values;

      const body = {
        address,
        paymentMethod,
        phone,
        products: products.map((product) => ({
          product_id: product._id,
          product_amount: product.product_amount,
        })),
      };
      creatingOrderMutaion.mutate(body, {
        onSuccess: (data) => {
          body.products.map((product) => {
            removeOneProductInCart(product.product_id, profile?._id ?? null);
          });
          toastSuccess(data.message);
          resetForm();

          // chỗ này là navigate đến chi tiết đơn hàng
        },
        onError: (error) => {
          toastError("Có lỗi xảy ra");
        },
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-rows-4 gap-4 px-[40px] sm:px-[0px] mt-5 mb-5">
        <FieldForm
          label="Tên khách hàng"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          placeholder="Nhập tên khách hàng"
          isRequired={true}
          error={formik.errors.name && formik.touched.name && formik.errors.name}
        />
        <FieldForm
          label="Số Điện Thoại"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          placeholder="Nhập số điện thoại"
          isRequired={true}
          error={formik.errors.phone && formik.touched.phone && formik.errors.phone}
        />

        <FieldForm
          label="Địa chỉ"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          placeholder="Nhập địa chỉ"
          isRequired={true}
          error={formik.errors.address && formik.touched.address && formik.errors.address}
        />
        <div className="row">
          <label className="text-[16px] font-semibold mb-2 block">
            Hình thức thanh toán
            <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center">
            <label htmlFor="cashOnDelivery" className="mr-2">
              Thanh toán khi nhận hàng
            </label>
            <input
              id="cashOnDelivery"
              className="form-control outline-none py-2 pl-1 h-[35px] border-b-[2px] border-[#ccc] w-5 text-left"
              type="radio"
              name="paymentMethod"
              value="cash"
              checked={formik.values.paymentMethod === "cash"}
              onChange={formik.handleChange}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="momo" className="mr-2">
              Ví điện tử Momo
            </label>
            <input
              id="momo"
              className="form-control outline-none py-2 pl-1 h-[35px] border-b-[2px] border-[#ccc] w-5 text-left"
              type="radio"
              name="paymentMethod"
              value="momo"
              checked={formik.values.paymentMethod === "momo"}
              onChange={formik.handleChange}
            />
          </div>
          <span className="text-red-500">
            {formik.errors.paymentMethod && formik.touched.paymentMethod && formik.errors.paymentMethod}
          </span>
        </div>
      </div>
      <div className="mt-3 text-center">
        <Button color="green" type="submit" disabled={creatingOrderMutaion.isPending}>
          Thanh toán
        </Button>
      </div>
    </form>
  );
};

export default UserInfo;
