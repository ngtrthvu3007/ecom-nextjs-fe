import React, { useContext } from "react";
import { AppContext } from "../../app/contexts";
import { useFormik } from "formik";
import { Button, Header, Modal, Image } from "semantic-ui-react";
import { useMutation } from "@tanstack/react-query";
import FieldForm from "./fieldForm";
import { yubLoginSchema } from "../../constants/index";
import { loginUser } from "../../apis/user.apis";
import { setProfileUser, saveAccessToken } from "../../utils/authen";
import { Logo } from "../Icons/Icons";

const initialValues = {
  email: "",
  password: "",
};

function LoginModal(props) {
  const { setIsAuthenticated, setProfile } = useContext(AppContext);
  const { open, setOpen } = props;

  const loginMutation = useMutation({
    mutationFn: (body) => loginUser(body),
  });
  const formik = useFormik({
    initialValues,
    validationSchema: yubLoginSchema,
    onSubmit: async (values, { resetForm }) => {
      loginMutation.mutate(values, {
        onSuccess: (data) => {
          const { access_token, refresh_token } = data.result;
          saveAccessToken(access_token);
          console.log(data);
          setIsAuthenticated(true);
          setProfile(new_user);
          setProfileUser(new_user);
          setOpen(false);
          resetForm();
        },
        onError: (error) => {
          console.log(error);
          // const { errors } = error.response.data.error;
          // mapErrorToFormik(errors, formik.errors);
        },
      });
    },
  });
  return (
    <Modal open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)} size="tiny" closeIcon>
      <Header>
        <div className="flex items-center justify-between">
          <Image alt="Next Shop Logo" src={Logo.src} size="massive" />
          <span>Đăng nhập</span>
        </div>
      </Header>
      <Modal.Content>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-rows-2 gap-4 px-[40px] mt-5">
            <FieldForm
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Nhập email"
              error={formik.errors.email && formik.touched.email && formik.errors.email}
            />
            <FieldForm
              label="Mật khẩu"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Nhập mật khẩu"
              error={formik.errors.password && formik.touched.password && formik.errors.password}
            />
          </div>
          <div className="mt-3 text-end">
            <Modal.Actions>
              <Button color="green" type="submit" disabled={loginMutation.isPending}>
                Đăng nhập
              </Button>
              <Button color="red" onClick={() => handleCloseModal()} disabled={loginMutation.isPending}>
                Trở về
              </Button>
            </Modal.Actions>
          </div>
        </form>
      </Modal.Content>
    </Modal>
  );
}
export default LoginModal;
