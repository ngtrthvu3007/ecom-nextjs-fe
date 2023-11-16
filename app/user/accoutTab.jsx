"use client";
import React, { useState, useContext } from "react";
import { AppContext } from "../contexts";
import { Tab, Header, Button } from "semantic-ui-react";
import FieldForm from "@/components/Modal/fieldForm";
import { useFormik } from "formik";
import { yubEditUser } from "../../constants/index";
import { useMutation } from "@tanstack/react-query";
import { updateProfile } from "../../apis/user.apis";
import { getAccessToken, setProfileUser } from "../../utils/authen";
import { toastSuccess, toastError } from "../../components/ToastHelper/Toast";
const AccountTab = () => {
  const { setProfile, profile } = useContext(AppContext);
  const token = getAccessToken();

  const initialValues = {
    name: profile?.name,
    address: profile?.address,
  };

  const updateProfileMutaion = useMutation({
    mutationFn: (body) => updateProfile(body, token),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: yubEditUser,
    onSubmit: async (values) => {
      if (values.name === initialValues.name && values.address === initialValues.address) return;
      else {
        updateProfileMutaion.mutate(values, {
          onSuccess: (data) => {
            const { user, message } = data;
            setProfile(user);
            setProfileUser(user);
            toastSuccess(message);
          },
          onError: (error) => {
            toastError(error);
          },
        });
      }
    },
  });
  return (
    <Tab.Pane>
      <Header>
        <div className="flex items-center mb-3 ">Thông tin tài khoản</div>
      </Header>

      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-rows-4 gap-4 px-[40px] sm:px-[0px] mt-5 mb-5">
          <FieldForm
            label="Tên tài khoản"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            placeholder="Nhập tên người dùng"
            isRequired={false}
            error={formik.errors.name && formik.touched.name && formik.errors.name}
          />
          <FieldForm
            label="Email"
            name="email"
            value={profile?.email}
            placeholder="Nhập email"
            disabled={true}
            isRequired={false}
          />
          <FieldForm
            label="Số Điện Thoại"
            name="phone"
            value={`0${profile?.phone}`}
            placeholder="Nhập số điện thoại"
            disabled={true}
            isRequired={false}
          />

          <FieldForm
            label="Địa chỉ"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            placeholder="Nhập địa chỉ"
            isRequired={false}
            error={formik.errors.address && formik.touched.address && formik.errors.address}
          />
        </div>
        <div className="mt-3 text-center">
          <Button color="green" type="submit" disabled={updateProfileMutaion.isPending}>
            Cập nhật
          </Button>
        </div>
      </form>
    </Tab.Pane>
  );
};
export default AccountTab;
