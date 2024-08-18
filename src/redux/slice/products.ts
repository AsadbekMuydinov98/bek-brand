import { createSlice } from '@reduxjs/toolkit';
import userAction from '../../services/userAction';
import productService from '../../services/product';

const initialState = {
  products: [],
  cart: [],
  favorites: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action) {
      state.products = action.payload;
      state.loading = false;
    },
    fetchProductsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addToCartSuccess(state, action) {
      const newItem = action.payload;
      const existingItem = state.cart.find(item => item.id === newItem.id);
      if (existingItem) {
        existingItem.qty += 1; // Increase quantity
      } else {
        state.cart.push({ ...newItem, qty: 1 }); // Add new item
      }
    },
    removeFromCartSuccess(state, action) {
      const itemIdToRemove = action.payload;
      state.cart = state.cart.filter(item => item.id !== itemIdToRemove);
    },
    addToFavoritesSuccess(state, action) {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavoritesSuccess(state, action) {
      state.favorites = state.favorites.filter(id => id !== action.payload);
    },
    fetchCartStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCartSuccess(state, action) {
      state.cart = action.payload;
      state.loading = false;
    },
    fetchCartFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchFavoritesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchFavoritesSuccess(state, action) {
      state.favorites = action.payload;
      state.loading = false;
    },
    fetchFavoritesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    resetFavoritesAndCart(state) {
      state.cart = null;
      state.favorites = null;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  addToCartSuccess,
  removeFromCartSuccess,
  addToFavoritesSuccess,
  removeFromFavoritesSuccess,
  fetchCartStart,
  fetchCartSuccess,
  fetchCartFailure,
  fetchFavoritesStart,
  fetchFavoritesSuccess,
  fetchFavoritesFailure,
  resetFavoritesAndCart,
} = productSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const result = await productService.getProducts();
    dispatch(fetchProductsSuccess(result));
  } catch (error) {
    dispatch(fetchProductsFailure(error.toString()));
  }
};

export const fetchCart = (userId) => async (dispatch) => {
  dispatch(fetchCartStart());
  try {
    const cartItems = await userAction.getCart(userId);
    dispatch(fetchCartSuccess(cartItems));
  } catch (error) {
    dispatch(fetchCartFailure(error.toString()));
  }
};

export const fetchFavorites = (userId) => async (dispatch) => {
  dispatch(fetchFavoritesStart());
  try {
    const result = await userAction.getFavorites(userId);
    dispatch(fetchFavoritesSuccess(result));
  } catch (error) {
    dispatch(fetchFavoritesFailure(error.toString()));
  }
};

export const addToCart = (product, userId) => async (dispatch) => {
  try {
    await userAction.addToCart(product._id, userId);
    dispatch(addToCartSuccess(product));
  } catch (error) {
    console.error('Failed to add to cart:', error);
  }
};

export const removeFromCart = (productId, userId) => async (dispatch) => {
  try {
    await userAction.removeFromCart(productId, userId);
    dispatch(removeFromCartSuccess(productId));
  } catch (error) {
    console.error('Failed to remove from cart:', error);
  }
};

export const addToFavorites = (productId, userId) => async (dispatch) => {
  try {
    await userAction.addToFavorites(productId, userId);
    dispatch(addToFavoritesSuccess(productId));
  } catch (error) {
    console.error('Failed to add to favorites:', error);
  }
};

export const removeFromFavorites = (productId, userId) => async (dispatch) => {
  try {
    await userAction.removeFromFavorites(productId, userId);
    dispatch(removeFromFavoritesSuccess(productId));
  } catch (error) {
    console.error('Failed to remove from favorites:', error);
  }
};
export const resetFavAndCart = () => (dispatch) => {
  dispatch(resetFavoritesAndCart());
};

export default productSlice.reducer;
