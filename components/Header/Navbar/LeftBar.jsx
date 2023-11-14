import { Sidebar, Menu, Icon } from "semantic-ui-react";
import { Logo } from "@/components/Icons/Icons";
import Image from "next/image";

const LeftBar = ({ visible, profile, setVisible, onOpenModal }) => {
  return (
    <Sidebar
      as={Menu}
      animation="push"
      icon="labeled"
      onHide={() => setVisible(false)}
      vertical
      direction="left"
      visible={visible}
      width="thin">
      <Menu.Item as="a">
        <Image src={Logo} alt="next shop" />
      </Menu.Item>
      {profile ? (
        <>
          <Menu.Item href="https://dev.hainong.vn/" className="flex">
            <Icon name="user" size="tiny" />
            <span>{profile?.name}</span>
          </Menu.Item>
          <Menu.Item href="https://dev.hainong.vn/" className="flex">
            <Icon name="shopping cart" size="tiny" />
            <span> Giỏ hàng</span>
          </Menu.Item>
          <Menu.Item href="https://dev.hainong.vn/" className="flex" onClick={() => handleLogout()}>
            <Icon name="sign out" size="tiny" />
            <span>Đăng xuất</span>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item onClick={() => onOpenModal("login")}>Đăng nhập</Menu.Item>
          <Menu.Item onClick={() => onOpenModal("register")}>Đăng ký</Menu.Item>
        </>
      )}
    </Sidebar>
  );
};
export default LeftBar;
