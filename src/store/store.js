import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk"
import { navigationSlice } from "./navigationReducer";

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['navigation']
}

const rootReducer = combineReducers({
  navigation: navigationSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)
