import React, { useState } from 'react';
import yayJpg from '../assets/yay.jpg';
import { Typography } from 'antd';
const { Paragraph, Text } = Typography;

export default function HomePage() {
  const [ellipsis, setEllipsis] = useState(true);
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <div className=' w-24 h-24 bg-white'></div>
      <p className=" truncate ... w-full h-6">用于控制元素中的文本溢出的实用程序。</p>
      <Paragraph ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: '展开' } : false} className='text-orange-200'>
        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team. Ant
        Design, a design language for background applications, is refined by Ant UED Team.
      </Paragraph>
    </div>
  );
}
