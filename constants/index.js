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

export const yubEditUser = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z].*[\s\.]*$/g, "Tên người dùng phải bắt đầu bằng chữ cái")
    .required("Vui lòng nhập tên người dùng"),
  address: Yup.string().min(5, "Địa chỉ ít nhất 5 kí tự").required("Vui lòng nhập địa chỉ của bạn"),
});

export const yubChangePassword = Yup.object({
  new_password: Yup.string()
    .required("Vui lòng nhập mật khẩu mới")
    .notOneOf([Yup.ref("password"), null], "Mật khẩu mới không được trùng với mật khẩu cũ"),
  password: Yup.string().required("Vui lòng nhập mật khẩu"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Xác nhận mật khẩu phải trùng khớp với mật khẩu")
    .required("Vui lòng nhập xác nhận mật khẩu"),
});

export const yubCreatOrder = Yup.object({
  name: Yup.string().required("Vui lòng nhập tên người nhận hàng"),
  phone: Yup.string().required("Vui lòng nhập số điện thoại nhận hàng"),
  address: Yup.string().required("Vui lòng nhập địa chỉ nhận hàng"),
  paymentMethod: Yup.string().required("Vui lòng chọn hình thức thanh toán"),
});
