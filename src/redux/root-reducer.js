import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import showcaseItemsReducer from './showcaseItems/showcaseItems.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const cr = combineReducers({
  directory: directoryReducer,
  user: userReducer,
  cart: cartReducer,
  shopCollections: shopReducer,
  showcaseItems: showcaseItemsReducer
});

export default persistReducer(persistConfig, cr);
