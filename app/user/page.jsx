"use client";
import React from "react";
import { Tab } from "semantic-ui-react";
import AccountTab from "./accoutTab";
import ChangePasswordTab from "./changePasswordTab";

const Profile = () => {
  const panes = [
    { menuItem: "Tài khoản ", render: () => <AccountTab /> },
    { menuItem: "Đổi mật khẩu", render: () => <ChangePasswordTab /> },
  ];

  return (
    <div className="grid grid-cols-12 gap-4 m-auto">
      <div className=" profile col-start-3  col-span-8  md:col-start-2 md:col-span-10 sm:col-start-1 sm:col-span-12  mt-20 mb-6   ">
        <Tab menu={{ fluid: true, vertical: false }} panes={panes} menuPosition="left" />
      </div>
    </div>
  );
};
export default Profile;
