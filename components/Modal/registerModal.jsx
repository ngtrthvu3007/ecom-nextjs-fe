import React, { useContext } from "react";
import { AppContext } from "../../app/contexts";
import { useFormik } from "formik";
import { Button, Header, Modal, Image } from "semantic-ui-react";
import { registerUser, loginUser } from "../../apis/user.apis";
import { useMutation } from "@tanstack/react-query";
import { yubRegisterSchema } from "../../constants/index";
import FieldForm from "./fieldForm";
import { setProfileUser, saveAccessToken } from "../../utils/authen";
import { Logo } from "../Icons/Icons";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
  phone: "",
  address: "",
};

function RegisterModal(props) {
  const { setIsAuthenticated, setProfile } = useContext(AppContext);
  const { open, setOpen } = props;

  const loginMutation = useMutation({
    mutationFn: (body) => loginUser(body),
  });

  const registerMutation = useMutation({
    mutationFn: (body) => registerUser(body),
  });

  const loginAfterRegister = (email, password) => {
    const body = {
      email: email,
      password: password,
    };
    loginMutation.mutate(body, {
      onSuccess: (data) => {
        const { access_token } = data.result;
        saveAccessToken(access_token);
      },
      onError: (error) => {
        console.log(error);
        // const { errors } = error.response.data.error;
        // mapErrorToFormik(errors, formik.errors);
      },
    });
  };
  const formik = useFormik({
    initialValues,
    validationSchema: yubRegisterSchema,
    onSubmit: async (values, { resetForm }) => {
      registerMutation.mutate(values, {
        onSuccess: (data) => {
          const { newUser } = data.result;
          setIsAuthenticated(true);
          setProfile(newUser);
          setProfileUser(newUser);
          setOpen(false);
          loginAfterRegister(values.email, values.password);
          resetForm();
        },
        onError: (error) => {
          const { errors } = error.response.data.error;
          mapErrorToFormik(errors, formik.errors);
        },
      });
    },
  });

  const mapErrorToFormik = (errors, formikErrors) => {
    // Lặp qua mỗi khóa trong object lỗi API
    Object.keys(errors).forEach((errorKey) => (formikErrors[errorKey] = errors[errorKey].msg));
  };

  const handleCloseModal = () => {
    setOpen(false);
    formik.resetForm();
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)} size="tiny" closeIcon>
      <Header>
        <div className="flex items-center justify-around">
          <Image alt="Next Shop Logo" src={Logo.src} size="massive" />
          <span>Đăng ký người dùng</span>
          <span>{""}</span>
        </div>
      </Header>

      <Modal.Content>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-rows-6 gap-4 px-[40px] mt-5">
            <FieldForm
              label="Tên Người Dùng"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Nhập tên người dùng"
              error={formik.errors.name && formik.touched.name && formik.errors.name}
            />
            <FieldForm
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Nhập email"
              error={formik.errors.email && formik.touched.email && formik.errors.email}
            />
            <FieldForm
              label="Số Điện Thoại"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              placeholder="Nhập số điện thoại"
              error={formik.errors.phone && formik.touched.phone && formik.errors.phone}
            />

            <FieldForm
              label="Địa chỉ"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              placeholder="Nhập địa chỉ"
              error={formik.errors.address && formik.touched.address && formik.errors.address}
            />

            <FieldForm
              label="Mật khẩu"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Nhập mật khẩu"
              error={formik.errors.password && formik.touched.password && formik.errors.password}
            />

            <FieldForm
              label="Xác nhận mật khẩu"
              name="confirm_password"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              placeholder="Nhập xác nhận mật khẩu"
              error={
                formik.errors.confirm_password && formik.touched.confirm_password && formik.errors.confirm_password
              }
            />
          </div>
          <div className="mt-3 text-end">
            <Modal.Actions>
              <Button color="green" type="submit" disabled={registerMutation.isPending}>
                Đăng ký
              </Button>
              <Button color="red" onClick={() => handleCloseModal()} disabled={registerMutation.isPending}>
                Trở về
              </Button>
            </Modal.Actions>
          </div>
        </form>
      </Modal.Content>
    </Modal>
  );
}

export default RegisterModal;
