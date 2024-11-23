import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { PERSIST, REGISTER, REHYDRATE } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from 'redux-persist/lib/storage';
import { thunk } from "redux-thunk";
import country from './country/country.slice'
import collaboration from './collaboration/collaboration.slice'


const rootReducer = combineReducers({
  country,
  collaboration
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, REHYDRATE, REGISTER],
      },
      immutableCheck: false
    }).concat(thunk),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;

export default store