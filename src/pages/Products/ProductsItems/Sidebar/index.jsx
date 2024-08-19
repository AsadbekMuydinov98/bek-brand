import { useSelector } from 'react-redux';
import Brands from './Brands';
import { SideBarWrapper } from './style';
import PriceRange from './Price';
import ColorFilters from './Colors';

const Sidebar = ({ isMobile, brands, colors, onBrandChange, onColorChange, selectedBrands, selectedColors }) => {
  
  const theme = useSelector(state => state.theme.mode);

  const handleBrandChange = (brand, checked) => {
    const nextSelectedBrands = checked
      ? [...selectedBrands, brand]
      : selectedBrands.filter((b) => b !== brand);
    onBrandChange(nextSelectedBrands);
  };

  const handleColorChange = (color, checked) => {
    const nextSelectedColors = checked
      ? [...selectedColors, color]
      : selectedColors.filter((c) => c !== color);
    onColorChange(nextSelectedColors);
  };

  return (
    <SideBarWrapper $themeMode={theme} className={isMobile ? "sidebar-mobile" : ""}>
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
