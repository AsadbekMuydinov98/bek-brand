
import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from '../slice/products'; 
import ThemeReducer from '../slice/theme'; 
import WishlistReducer from '../slice/wishlist';
import AuthReducer from '../slice/auth';
import navReducer from '../slice/activelink';

export default configureStore({
  reducer: {
    product: ProductReducer,
    wishlist: WishlistReducer,
    theme: ThemeReducer, 
    auth: AuthReducer,
    nav: navReducer
  },
  // middleware: (getDefaultMiddleware) => {
  //   getDefaultMiddleware({
  //     serializableCheck: false
  //   })
  // },
  devTools: process.env.NODE_ENV !== 'production',
});
