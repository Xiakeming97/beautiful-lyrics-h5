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
    <>
      <div className=" w-full h-24 bg-cyan-100 dark:bg-cyan-900 flex items-center pl-3 pr-3">
        <div className="flex w-64 h-full items-center">
          <img
            className=" w-20 h-20 rounded-xl"
            src="https://picsum.photos/200"
          />
          <div className=" flex-1  pl-3">
            <h3 className="w-full ">歌名</h3>
            <p className="w-full">作者</p>
          </div>
        </div>
      </div>
    </>
  );
}
