import { configureStore } from "@reduxjs/toolkit";
import { recipesReducers } from "./reducers/recipes.reducer";


export const store = configureStore({
    reducer: {recipesReducers},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;