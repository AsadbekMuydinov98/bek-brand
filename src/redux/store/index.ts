import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../slice/products'; 
import ThemeReducer from '../slice/theme'; 
import WishlistReducer from '../slice/wishlist';
import AuthReducer from '../slice/auth';
import navReducer from '../slice/activelink';

// Configure the store
const store = configureStore({
  reducer: {
    product: ProductReducer,
    wishlist: WishlistReducer,
    theme: ThemeReducer, 
    auth: AuthReducer,
    nav: navReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Define RootState type based on the store's state
export type RootState = ReturnType<typeof store.getState>;

// Define AppDispatch type based on the store's dispatch function
export type AppDispatch = typeof store.dispatch;

// Export the store as the default export
export default store;
