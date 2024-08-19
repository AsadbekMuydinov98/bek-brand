import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import MobileActions from './ProductsItems/MobileActions';
import HorizontalCard from '../../components/Cards/Horizontal';
import VerticalCard from '../../components/Cards/Vertical';
import Sidebar from './ProductsItems/Sidebar';
import SortBar from './ProductsItems/Sortbar';
import NotUser from '../../components/Modal/NotUser';
import { ProductsWrapper } from './style';
import { fetchProducts, addToCart, addToFavorites, removeFromFavorites } from '../../redux/slice/products';
import Loader from '../../components/Loader';
import brandService from '../../services/brand';
import colorService from '../../services/color';

const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { products } = useSelector(state => state.product);
  const [search, setSearch] = useState('');
  const [view, setView] = useState('grid');
  const [sortBy, setSortBy] = useState('');
  const [open, setOpen] = useState(false);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchProducts());
        const brandsResponse = await brandService.getBrands();
        setBrands(brandsResponse.map(brand => ({ value: brand._id, label: brand.name })));
        const colorsResponse = await colorService.getColors();
        setColors(colorsResponse.map(color => ({ value: color._id, label: color.name })));
      } catch (error) {
        message.error('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const results = products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(search) ||
        product.brand.name.toLowerCase().includes(search);
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand._id);
      const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color._id);

      return matchesSearch && matchesBrand && matchesColor;
    });
    setFilteredProducts(results);
  }, [search, products, selectedBrands, selectedColors]);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const handleAddToCart = (product) => {
    if (user) {
      dispatch(addToCart( product, user.id));
      message.success('Added to cart');
    } else {
      showModal();
    }
  };

  const isFavorite = (productId) => {
    return user?.favorites?.includes(productId);
  };

  const handleAddToWishList = (productId) => {
    if (user) {
      if (isFavorite(productId)) {
        dispatch(removeFromFavorites( productId, user.id));
        message.success('Removed from favorites');
      } else {
        dispatch(addToFavorites( productId, user.id ));
        message.success('Added to favorites');
      }
    } else {
      showModal();
    }
  };

  const onViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  const onSearch = (value) => {
    const text = value.target.value;
    setSearch(text.toLowerCase());
  };

  const changeView = (newView) => {
    setView(newView);
  };

  const handleBrandChange = (selectedValues) => {
    setSelectedBrands(selectedValues);
  };

  const handleColorChange = (selectedValues) => {
    setSelectedColors(selectedValues);
  };

  return (
    <ProductsWrapper>
      <div className="product-page">
        <Loader visible={loading} />
        <NotUser 
          open={open} 
          hideModal={hideModal} 
          showModal={showModal}
          goToRegister={()=>navigate('/login')}
        />
        <Sidebar
          brands={brands}
          colors={colors}
          onBrandChange={handleBrandChange}
          onColorChange={handleColorChange}
          selectedBrands={selectedBrands}
          selectedColors={selectedColors}
        />
        <div className="product-field">
          <MobileActions 
            brands={brands} 
            setSearch={onSearch}
            colors={colors} 
            changeView={changeView} 
            view={view}
            totalItems={filteredProducts.length}
            onBrandChange={handleBrandChange}
            onColorChange={handleColorChange}
            selectedBrands={selectedBrands}
            selectedColors={selectedColors}
          />
          <SortBar
            view={view}
            changeView={changeView}
            setSearch={onSearch}
            sortBy={sortBy}
            setSortBy={setSortBy}
            totalItems={filteredProducts.length}
            setView={setView}
          />
          <div className="product-grid">
            {view === 'grid' &&
              filteredProducts.map((product) => (
                <VerticalCard
                  key={product._id}
                  product={product}
                  onAddToFavorites={() => handleAddToWishList(product._id)}
                  onAddToCart={() => handleAddToCart(product)}
                  onViewDetails={() => onViewDetails(product._id)}
                  isFavorite={isFavorite(product._id)}
                />
              ))}
          </div>
          <div className="product-grid">
            {view === 'list' &&
              filteredProducts.map((product) => (
                <HorizontalCard
                  key={product._id}
                  product={product}
                  onAddToFavorites={() => handleAddToWishList(product._id)}
                  onAddToCart={() => handleAddToCart(product)}
                  onViewDetails={() => onViewDetails(product._id)}
                  isFavorite={isFavorite(product._id)}
                />
              ))}
          </div>
        </div>
      </div>
    </ProductsWrapper>
  );
};

export default ProductPage;
