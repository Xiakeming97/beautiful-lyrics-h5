import React, { useState } from 'react';
import yayJpg from '../assets/yay.jpg';
import { Button, Typography } from 'antd';
const { Paragraph, Text } = Typography;

export default function HomePage() {
  const [ellipsis, setEllipsis] = useState(true);
  return (
    <div>
      <Button>123</Button>
    </div>
  );
}
