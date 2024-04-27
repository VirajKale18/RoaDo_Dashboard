import React from "react";
import { Img } from "./..";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  //use this function to collapse/expand the sidebar
  //function collapseSidebar() {
  //    setCollapsed(!collapsed)
  //}

  return (
    <Sidebar
      {...props}
      width="64px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      className="pl-5 mt-3"
      style={{ boxShadow: "none" }}
    >
      <Img
        src="images/img_sidebar_logo.svg"
        alt="sidebarlogo"
        className="mt-2 h-[29px] w-[32px] mb-6  pr-2"
      />
      <Menu
        menuItemStyles={{
          button: {
            padding: 0,
            alignSelf: "start",
          },
        }}
        rootStyles={{
          ["&>ul"]: {
            gap: "45.00px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
        className="mb-[164px] w-full mt-1"
      >
        <MenuItem
          icon={
            <Img
              src="images/img_add_to_queue_fi.svg"
              alt="addtoqueuefi"
              className="h-[24px] w-[24px]"
            />
          }
        />
        <MenuItem
          icon={
            <Img
              src="images/img_label_important.svg"
              alt="labelimportant"
              className="h-[24px] w-[24px]"
            />
          }
        />
        <MenuItem
          icon={
            <Img
              src="images/img_assignment_fill.svg"
              alt="assignmentfill"
              className="h-[24px] w-[24px]"
            />
          }
        />
        <MenuItem
          icon={
            <Img
              src="images/img_vector.svg"
              alt="vector"
              className="h-[20px] w-full md:h-auto"
            />
          }
        />
        <MenuItem
          icon={
            <Img
              src="images/img_local_shipping.svg"
              alt="localshipping"
              className="h-[24px] w-[24px]"
            />
          }
        />
        <MenuItem
          icon={
            <Img
              src="images/img_parcel_tracking.svg"
              alt="parceltracking"
              className="h-[24px] w-[24px]"
            />
          }
        />
        <MenuItem
          icon={
            <Img
              src="images/img_business_center.svg"
              alt="businesscenter"
              className="h-[24px] w-[24px]"
            />
          }
        />
        <MenuItem
          icon={
            <Img
              src="images/img_account_balance.svg"
              alt="accountbalance"
              className="h-[24px] w-[24px]"
            />
          }
        />
        <MenuItem
          icon={
            <Img
              src="images/img_dynamic_feed_fi.svg"
              alt="dynamicfeedfi"
              className="h-[24px] w-[24px]"
            />
          }
        />
        <MenuItem
          icon={
            <Img
              src="images/img_settings_fill0.svg"
              alt="settingsfillzer"
              className="h-[24px] w-[24px] "
            />
          }
        />
      </Menu>
    </Sidebar>
  );
}
