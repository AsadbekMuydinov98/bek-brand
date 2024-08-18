import React from 'react';
import { Slider } from 'antd';

interface PriceRangeProps {
  defaultValue: [number, number];
}

const PriceRange: React.FC<PriceRangeProps> = ({ defaultValue }) => {
  return (
    <div className="price-range">
      <h4 className="price-title">Prices:</h4>
      <span>Range: $20 - $1000</span>
      <Slider
        range
        defaultValue={defaultValue}
        className="price-range-slider"
        min={20}
        max={1000}
        step={1}
      />
    </div>
  );
};

export default PriceRange;
