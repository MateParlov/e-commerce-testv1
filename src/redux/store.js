import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
/* import { logger } from "redux-logger"; */
import combineReducers from "./root-reducer";
const middlewares = [];

const store = createStore(combineReducers, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
