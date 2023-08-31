import React from "react";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch } from "antd";

type Props = {
  darkMode:boolean;
  setDarkMode:React.Dispatch<React.SetStateAction<boolean>>;
};

function Menu({darkMode,setDarkMode}: Props) {
  const onChange = (checked: boolean) => {
    setDarkMode(checked)
  };
  return (
    <div className=" w-48 h-full  flex flex-col bg-cyan-100 dark:bg-cyan-900">
      <div className=" flex-1">菜单</div>
      <div className=" w-full h-8 flex items-center ">
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
          checked={darkMode}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Menu;
