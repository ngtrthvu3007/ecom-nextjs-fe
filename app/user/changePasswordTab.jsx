"use client";
import React, { useContext } from "react";
import { AppContext } from "../contexts";
import { Tab, Header, Button } from "semantic-ui-react";
import FieldForm from "@/components/Modal/fieldForm";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { toastSuccess, toastError } from "../../components/ToastHelper/Toast";
import { yubChangePassword } from "../../constants/index";
import { getAccessToken } from "../../utils/authen";
import { changePassword } from "../../apis/user.apis";

const initialValues = {
  new_password: "",
  password: "",
  confirm_password: "",
};

const ChangePasswordTab = () => {
  const token = getAccessToken();

  const changePasswordMutation = useMutation({
    mutationFn: (body) => changePassword(body, token),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: yubChangePassword,
    onSubmit: async (values, { resetForm }) => {
      changePasswordMutation.mutate(values, {
        onSuccess: (data) => {
          toastSuccess(data.message);
          resetForm();
        },
        onError: (error) => {
          toastError(error);
        },
      });
    },
  });

  return (
    <Tab.Pane>
      <Header>
        <div className="flex items-center mb-3 ">Đổi mật khẩu</div>
      </Header>
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-rows-3 gap-4 px-[40px] sm:px-[0px] mt-5 mb-5">
          <FieldForm
            label="Mật khẩu mới"
            name="new_password"
            value={formik.values.new_password}
            onChange={formik.handleChange}
            placeholder="Nhập mật khẩu mới"
            error={formik.errors.new_password && formik.touched.new_password && formik.errors.new_password}
          />
          <FieldForm
            label="Mật khẩu cũ"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            placeholder="Nhập mật khẩu cũ"
            error={formik.errors.password && formik.touched.password && formik.errors.password}
          />

          <FieldForm
            label="Xác nhận mật khẩu cũ"
            name="confirm_password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
            placeholder="Nhập xác nhận mật khẩu cũ"
            error={formik.errors.confirm_password && formik.touched.confirm_password && formik.errors.confirm_password}
          />
        </div>
        <div className="mt-3 text-center">
          <Button color="green" type="submit" disabled={changePasswordMutation.isPending}>
            Đổi mật khẩu
          </Button>
        </div>
      </form>
    </Tab.Pane>
  );
};
export default ChangePasswordTab;
