import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";
import axios from "axios";
import { toast } from "react-toastify";

import data from "../../recipies.json";

type InitialState = {
    recipes: any[],
    selectedRecipe: null|any,
    loader: boolean,
    favourites: any[],
    keyword: string,
    filter: string|null
}

const initialState:InitialState = {
    recipes: [...data.hits],
    selectedRecipe: null,
    loader: false,
    favourites: [],
    keyword: "eggs",
    filter: "lunch"
};

export const getRecipes = createAsyncThunk("recipes/get", async ({keyword, filter}:{keyword:string, filter:string|null})=>{
    const API_URL = import.meta.env.VITE_API_URL;
    return;
    try {
        const res = await axios.get(
        `${API_URL}&q=${keyword?keyword:"eggs"}&mealType=${filter?filter:""}&from=1&to12`,
        {
            headers: {
                "Edamam-Account-User": "b15f5789",
                "accept": "application/json",
                "Accept-Language": "en"
            }
        })   
        return res.data.hits;
    } catch (error) {
        console.log(error);
        throw error;
    }
})

const recipeSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        pickRecipe: (state, action)=>{
            state.selectedRecipe = action.payload;
        },
        addToFavourites: (state, action)=>{
            state.favourites.unshift(action.payload);
        },
        setKeyword: (state,action)=>{
            state.keyword = action.payload;
        },
        setFilter: (state, action)=>{
            console.log(action.payload);
            
            state.filter = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder
            .addCase(getRecipes.pending, (state)=>{
                state.loader = true;
            })
            .addCase(getRecipes.fulfilled, (state, action)=>{
                state.recipes = action.payload;
                state.loader = false
            })
            .addCase(getRecipes.rejected, (state)=>{
                toast.error("Something Went Wrong!");
                state.loader= false
            })
    }
});

export const recipesActions = recipeSlice.actions;
export const recipesReducers = recipeSlice.reducer;
export const recipesSelector = (state: RootState)=>state.recipesReducers;