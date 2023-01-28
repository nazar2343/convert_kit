import { configureStore, combineReducers } from '@reduxjs/toolkit';
import currencySlice from './reduxSlice/currencySlice';

const rootReducer = combineReducers({
	currency: currencySlice,
});

export const store = configureStore({
	reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
