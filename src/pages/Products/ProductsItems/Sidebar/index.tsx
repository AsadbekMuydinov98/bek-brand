import React from 'react';
import { useSelector } from 'react-redux';
import Brands from './Brands';
import { SideBarWrapper } from './style';
import PriceRange from './Price';
import ColorFilters from './Colors';
import { RootState } from '../../../../redux/store';

interface SidebarProps {
  isMobile: boolean;
  brands: { value: string; label: string }[];
  colors: { value: string; label: string }[];
  onBrandChange: (selectedBrands: string[]) => void;
  onColorChange: (selectedColors: string[]) => void;
  selectedBrands: string[];
  selectedColors: string[];
}

const Sidebar: React.FC<SidebarProps> = ({
  isMobile,
  brands,
  colors,
  onBrandChange,
  onColorChange,
  selectedBrands,
  selectedColors,
}) => {
  const theme = useSelector((state: RootState) => state.theme.mode);

  const handleBrandChange = (brand: string, checked: boolean) => {
    const nextSelectedBrands = checked
      ? [...selectedBrands, brand]
      : selectedBrands.filter((b) => b !== brand);
    onBrandChange(nextSelectedBrands);
  };

  const handleColorChange = (color: string, checked: boolean) => {
    const nextSelectedColors = checked
      ? [...selectedColors, color]
      : selectedColors.filter((c) => c !== color);
    onColorChange(nextSelectedColors);
  };

  return (
    <SideBarWrapper $themeMode={theme as 'light' | 'dark'} className={isMobile ? 'sidebar-mobile' : ''}>
      <div className="filters">
        <Brands
          brandsData={brands}
          handleChange={handleBrandChange}
          selectedBrands={selectedBrands}
        />
        <PriceRange defaultValue={[20, 50]} />
        <ColorFilters
          colors={colors}
          selectedColors={selectedColors}
          onColorChange={handleColorChange}
        />
      </div>
    </SideBarWrapper>
  );
};

export default Sidebar;
