import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Empty, Row, Typography, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FavouriteWrapper } from './style';
import { addToCart, fetchFavorites, removeFromFavorites } from '../../redux/slice/products';
import Item from './Item';
import Loader from '../../components/Loader';
import NotUser from '../../components/Modal/NotUser';
import { State } from '../../interfaces';

const { Title } = Typography;

const FavouritesPage: React.FC = () => {
  const { user } = useSelector((state: State) => state.auth);
  const dispatch = useDispatch();
  const { favorites, loading, error } = useSelector((state: State) => state.product);
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.id) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      dispatch(fetchFavorites(user.id))
        .catch((error: Error) => {
          console.log('Failed to fetch favorites:', error);
          message.error('Failed to fetch favorites');
        });
    }
  }, [dispatch, user?.id]);

  const handleRemoveFromWishlist = (product: Product) => {
    if (user?.id) {
      dispatch(removeFromFavorites(product._id, user.id))
        .then(() => {
          message.success('Removed from favorites');
        })
        .catch((error: Error) => {
          message.error(`Failed to remove from favorites: ${error.message}`);
        });
    } else {
      message.error('User ID not found');
    }
  };

  const handleAddToCart = (product: Product) => {
    if (user?.id) {
      dispatch(addToCart(product, user.id ))
        .then(() => {
          message.success('Added to cart');
        })
        .catch((error: Error) => {
          message.error(`Failed to add to cart: ${error.message}`);
        });
    } else {
      message.error('User ID not found');
    }
  };

  const getImageUrl = (imageUrl: string | string[]): string => {
    if (Array.isArray(imageUrl)) {
      return imageUrl[0];
    }
    return imageUrl;
  };

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <FavouriteWrapper>
      <NotUser 
        open={open} 
        hideModal={hideModal} 
        showModal={showModal} 
        goToRegister={() => navigate('/login')} 
      />
      <Loader visible={loading} />
      <Title className='title'>My Favourite Products</Title>
      {error && <div>Error: {error}</div>}
      {favorites?.length > 0 ? (
        <Row gutter={16}>
          {favorites.map(product => (
            <Item 
              key={product._id} 
              product={product} 
              userId={user?.id}
              handleRemoveFromWishlist={handleRemoveFromWishlist}
              handleAddToCart={handleAddToCart}
              getImageUrl={getImageUrl}
            />
          ))}
        </Row>
      ) : (
        <Empty description="No items in wishlist yet" />
      )}
    </FavouriteWrapper>
  );
};

export default FavouritesPage;
