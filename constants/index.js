import * as Yup from "yup";
export const domain = "https://vu-ecom-api.onrender.com/";

export const yubRegisterSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z].*[\s\.]*$/g, "Tên người dùng phải bắt đầu bằng chữ cái")
    .required("Vui lòng nhập tên người dùng"),
  email: Yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
  password: Yup.string().required("Vui lòng nhập mật khẩu"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Xác nhận mật khẩu phải trùng khớp với mật khẩu")
    .required("Vui lòng nhập xác nhận mật khẩu"),
  phone: Yup.string()
    .matches(/^0\d{9}$/g, "Số điện thoại không hợp lệ")
    .required("Vui lòng nhập số điện thoại"),
  address: Yup.string().required("Vui lòng nhập địa chỉ của bạn"),
});

export const yubLoginSchema = Yup.object({
  email: Yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
  password: Yup.string().required("Vui lòng nhập mật khẩu"),
});
