import 'antd/dist/reset.css';
import { features, newsItems } from '../../constants';
import { Banner } from '../../components';
// import Features from './HomeItems/Features'
// import AdsProducts from './HomeItems/AdsProducts'
// import News from './HomeItems/News';
import { HomeWrapper } from './style';
import { lazy, useCallback, useEffect, useState } from 'react';
import NotUser from '../../components/Modal/NotUser';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToFavorites, fetchProducts, removeFromFavorites } from '../../redux/slice/products';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import Product from './HomeItems/Product';
const Features = lazy(() => import('./HomeItems/Features'));
const AdsProducts = lazy(() => import('./HomeItems/AdsProducts'));
const News = lazy(() => import('./HomeItems/News'));



const HomePage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.product);
  const { user } = useSelector(state => state.auth);
  const { favorites } = useSelector(state => state.product); 
  const [open, setOpen] = useState(false);


  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };

  
const handleAddToCart = useCallback((product) => {
  if (user) {
    dispatch(addToCart(product, user.id));
    message.success('Added to cart');
  } else {
    showModal();
  }
}, [user, dispatch]);

  
const handleAddToWishList = useCallback((productId) => {
  if (user) {
    if (favorites.includes(productId)) {
      dispatch(removeFromFavorites(productId, user.id));
      message.success('Removed from favorites');
    } else {
      dispatch(addToFavorites(productId, user.id));
      message.success('Added to favorites');
    }
  } else {
    showModal();
  }
}, [user, favorites, dispatch]);

  const goToRegister = () =>{
    navigate('/login')
  }

  const onViewDetails = (id) => {
    navigate(`/product/${id}`)
  }

  
  
  return (
    <HomeWrapper>
      <NotUser 
        goToRegister={goToRegister} 
        open={open} 
        hideModal={hideModal} 
        showModal={showModal} 
      />
      <Banner />
      <Product 
        products={products} 
        handleAddToCart={handleAddToCart} 
        onViewDetails={onViewDetails}
        handleAddToWishList={handleAddToWishList}  
      />
      <Features features={features} />
      <News newsItems={newsItems} />
      <AdsProducts adsproducts={products} />
    </HomeWrapper>
  );
};

export default HomePage;