"use client";
import Link from "next/link";
import React, { useState, useContext } from "react";
import { AppContext } from "../../../app/contexts";
import RegisterModal from "@/components/Modal/registerModal";
import LoginModal from "@/components/Modal/loginModal";
import LeftBar from "./LeftBar";
import ImageIcon from "./ImageIcon";
import { getProfileUser, clearAccessToken } from "@/utils/authen";
import { Dropdown, Icon } from "semantic-ui-react";
import { IconSearch, IconCart, IconUser, LogoNextShop } from "../../Icons/Icons";

export default function NavigationBar() {
  const { setProfile, profile } = useContext(AppContext);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [visible, setVisible] = React.useState(false);

  const onOpenModal = (type) => (type === "login" ? setOpenLoginModal(true) : setOpenRegisterModal(true));

  const openSideBar = () => setVisible(true);

  const handleLogout = async () => {
    await clearAccessToken();
    setProfile(getProfileUser());
  };

  const ButtonLeftBar = () => {
    return (
      <div
        className="xl:hidden lg:hidden md:hidden sm:col-start-12 sm:col-span-3 flex justify-start items-center"
        onClick={() => openSideBar()}>
        <Icon name="bars" size="big" />
      </div>
    );
  };

  return (
    <>
      <div className="row nav-bar">
        <div className="flex w-full h-full bg-[#515154] sticky text-white">
          <div className="grid grid-cols-12 gap-4 w-full">
            <div className="flex items-center col-span-3 col-start-2 sm:col-start-1 sm:ml-4">
              <div className="logo mr-6  sm:ml-[0.5rem]">
                <Link href="/">
                  <LogoNextShop />
                </Link>
              </div>
              <div className="mx-2 lg:hidden md:hidden sm:hidden">iPhone</div>
              <div className="mx-2 lg:hidden md:hidden sm:hidden">Macbook</div>
              <div className="mx-2 lg:hidden md:hidden sm:hidden">Apple Watch</div>
            </div>
            <div className=" col-start-5 col-span-4 sm:col-start-5 sm:col-span-6 xs:col-start-6 xs:col-span-4 text-black flex items-center relative">
              <input
                type="text"
                placeholder="Tên sản phẩm..."
                className="w-full outline-none rounded-lg h-[35px] px-5 "
              />
              <div className="absolute top-[30px] right-[10px]  ">
                <ImageIcon src={IconSearch} alt="Next shop searching" />
              </div>
            </div>
            {!profile ? (
              <div className="flex items-center justify-between col-span-2 xl:col-start-10 lg:col-start-10 md:col-start-10 md:col-span-3 sm:hidden">
                <div>
                  <button className="text-red-500 mr-3" onClick={() => onOpenModal("login")}>
                    Đăng nhập
                  </button>
                  <button className="text-red-500" onClick={() => onOpenModal("register")}>
                    Đăng ký
                  </button>
                </div>
              </div>
            ) : (
              <div className="col-start-10 col-span-3 flex justify-start items-center sm:hidden ">
                <div className="md:hidden sm:hidden mr-4 ">
                  <ImageIcon alt="Next shop cart" src={IconCart} />
                </div>
                <div className="flex justify-start items-center col-start-11 md:col-start-10 col-span-3">
                  <ImageIcon alt="Next shop profile" src={IconUser} />
                  <div className="text-[18px] ml-2 ">
                    <Dropdown text={profile?.name} className="font-semibold">
                      <Dropdown.Menu>
                        <Dropdown.Item text="Đăng xuất" icon="sign-out" onClick={() => handleLogout()} />
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            )}
            <ButtonLeftBar />
            <LeftBar setVisible={setVisible} profile={profile} visible={visible} onOpenModal={onOpenModal} />
          </div>
        </div>
      </div>
      <LoginModal open={openLoginModal} setOpen={setOpenLoginModal} />
      <RegisterModal open={openRegisterModal} setOpen={setOpenRegisterModal} />
    </>
  );
}
