// src/SocialShare.js
import { Button } from 'antd';
import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons';

const SocialShare = () => {
  return (
    <div className="social-share">
      <Button style={{ backgroundColor: 'hsla(215, 43%, 39%, 1)', color: 'white' }} icon={<FacebookOutlined />}>Share on Facebook</Button>
      <Button style={{ backgroundColor: 'hsla(199, 98%, 48%, 1)', color: 'white' }} icon={<TwitterOutlined />}>Share on Twitter</Button>
    </div>
  );
};

export default SocialShare;
