// src/SocialShare.tsx
import React from 'react';
import { Button } from 'antd';
import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import './style'

const SocialShare: React.FC = () => {
  return (
    <div className="social-share">
      <Button className='facebook' icon={ <FacebookOutlined /> } >
        Share on Facebook
      </Button>
      <Button className='twitter' icon={ <TwitterOutlined /> } >
        Share on Twitter
      </Button>
    </div>
  );
};

export default SocialShare;
