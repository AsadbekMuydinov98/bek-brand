// PriceRange.js
import { Slider } from 'antd';

const PriceRange = ({ defaultValue }) => {
  return (
    <div className="price-range">
      <h4 className='price-title'>Prices:</h4>
      <span>Range: $20 - $1000</span>
      <Slider range defaultValue={defaultValue} className="price-range-slider" />
    </div>
  );
};

export default PriceRange;
