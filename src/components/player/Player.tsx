import React from "react";
import {
  StepBackwardOutlined,
  CaretRightOutlined,
  StepForwardOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
// 播放器
export default function Player() {
  return (
    <div className="h-16 w-full bg-white dark:bg-black flex fixed bottom-0">
      <div className=" w-16 h-full bg-pink-100 ">
        <img
          src="https://picsum.photos/64/64"
          alt="图片"
          className=" w-full h-full"
        />
      </div>
      <div className=" w-44 h-full grid grid-cols-3 gap-4 items-center">
        <div className=" flex justify-center">
          <StepBackwardOutlined className=" text-4xl" />
        </div>
        <div className=" flex justify-center">
          <CaretRightOutlined className=" text-4xl"  />
        </div>
        <div className=" flex justify-center">
          <StepForwardOutlined className=" text-4xl text-cayn-500" />
        </div>
      </div>
    </div>
  );
}
