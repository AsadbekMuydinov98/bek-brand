import React from 'react';
import { BannerWrapper } from './style';

const Banner: React.FC = () => {
  return (
    <BannerWrapper className='banner'>
      <h1>Super Flash Sale <br />50% Off</h1>
    </BannerWrapper>
  );
}

export default Banner;
