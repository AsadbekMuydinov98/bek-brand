import React from 'react';
import { Button } from 'antd';
import { FavProduct } from '../../../../interfaces';


interface ActionsProps {
  product: FavProduct;
  handleRemoveFromWishlist: (product: FavProduct) => void;
  handleAddToCart: (product: FavProduct) => void;
}

const Actions: React.FC<ActionsProps> = ({ product, handleRemoveFromWishlist, handleAddToCart }) => {
  return (
    <>
      <Button type="primary" key="add" onClick={() => handleAddToCart(product)}>
        Add to Cart
      </Button>
      <Button type="primary" danger key="remove" onClick={() => handleRemoveFromWishlist(product)}>
        Remove
      </Button>
    </>
  );
};

export default Actions;
