/*
 * @Author: XiaKeMing xiakeming97@gmail.com
 * @Date: 2023-06-24 00:29:10
 * @LastEditors: XiaKeMing xiakeming97@gmail.com
 * @LastEditTime: 2023-08-23 19:18:49
 * @FilePath: /beautiful-lyrics-h5/src/pages/index.tsx
 * @Description:首页
 *
 * Copyright (c) 2023 by XIAKEMING, All Rights Reserved.
 */
import React, { useState } from "react";
import yayJpg from "../assets/yay.jpg";
import { Button, Card, Typography } from "antd";
const { Paragraph, Text } = Typography;

export default function HomePage() {
  const [ellipsis, setEllipsis] = useState(true);
  return (
    <div>
      <Card className=" bg-cayn-300 w-24 h-96">这是我的第一个网站</Card>
      <div>我有添加了一个钉钉机器人</div>
    </div>
  );
}
