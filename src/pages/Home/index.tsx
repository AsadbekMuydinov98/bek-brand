import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import 'antd/dist/reset.css';

import { Banner } from '../../components';
import Features from './HomeItems/Features';
import AdsProducts from './HomeItems/AdsProducts';
import News from './HomeItems/News';
import Product from './HomeItems/Product';
import NotUser from '../../components/Modal/NotUser';
import { HomeWrapper } from './style';
import { addToCart, addToFavorites, fetchProducts, removeFromFavorites } from '../../redux/slice/products';
import { RootState } from '../../redux/store';

import { features, newsItems } from '../../constants'; 
import { iProduct } from '../../interfaces';



const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, favorites } = useSelector((state: RootState) => state.product);
  const { user } = useSelector((state: RootState) => state.auth);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const handleAddToCart = (product: iProduct) => {
    if (user) {
      dispatch(addToCart(product, user.id));
      message.success('Added to cart');
    } else {
      showModal();
    }
  };

  const handleAddToWishList = (productId: string) => {
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
  };

  const goToRegister = () => {
    navigate('/login');
  };

  const onViewDetails = (id: string) => {
    navigate(`/product/${id}`);
  };

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
      <AdsProducts 
        adsproducts={products}
        onAddToCart={handleAddToCart} 
        onViewDetails={onViewDetails}
        onAddToFavorites={handleAddToWishList}
      />
    </HomeWrapper>
  );
};

export default HomePage;
