import {combineReducers,configureStore,} from "@reduxjs/toolkit"
import {
persistStore,
persistReducer,
FLUSH,
REHYDRATE,
PAUSE,
PERSIST,
PURGE,
REGISTER,} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "./cartSlice";
// import { version } from "mongoose";

const persistConfig ={
    key:"root",
    version:1,
    storage,
};

const reducers = combineReducers({
    cart:cartSlice,
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware ({
        serializableCheck:{
            ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
        },
    }),
});

export let persistor = persistStore(store);