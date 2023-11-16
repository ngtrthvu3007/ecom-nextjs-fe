"use client";
import React, { useState, useContext } from "react";
import { AppContext } from "../contexts";
import { Tab } from 'semantic-ui-react'
import AccountTab from './accoutTab';

const Profile = () => {


  const panes = [
    { menuItem: 'Tài khoản ', render: () => <AccountTab  /> },
    { menuItem: 'Đổi mật khẩu', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  ]


  return (
    <div className="grid grid-cols-12 gap-4 m-auto">
      <div className=" profile col-start-3  col-span-8  md:col-start-2 md:col-span-10 sm:col-start-1 sm:col-span-12  mt-20 mb-6   ">

        <Tab menu={{ fluid: true, vertical: false }} panes={panes}   menuPosition='left' />

      </div>
    </div>
  );
};
export default Profile;
