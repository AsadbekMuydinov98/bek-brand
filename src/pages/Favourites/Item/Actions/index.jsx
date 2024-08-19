import { Button } from "antd";

const Actions = ({ product, handleRemoveFromWishlist, handleAddToCart }) => {
  return (
    <>
      <Button type="primary"  key="add" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
      <Button type="primary" danger key="remove" onClick={() => handleRemoveFromWishlist(product)}>Remove</Button>
    </>
  );
};

export default Actions;
