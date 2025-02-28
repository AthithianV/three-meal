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
    page: number,
    more: boolean
}

const initialState:InitialState = {
    recipes: [...data.hits],
    selectedRecipe: null,
    loader: false,
    favourites: [],
    keyword: "eggs",
    filter: null,
    page: 1,
    more: true
};

type GetRecipeFilter = {keyword:string, filter:string|null, page:number}

export const getRecipes = createAsyncThunk("recipes/get", async ({keyword, filter, page}:GetRecipeFilter)=>{
    const API_URL = import.meta.env.VITE_API_URL;
    try {
        const res = await axios.get(
        `${API_URL}&q=${keyword?keyword:"eggs"}&${filter?"mealType":""}${filter?filter:""}&from=${(page-1)*10}&to${page*10}`,
        {
            headers: {
                "Edamam-Account-User": "b15f5789",
                "accept": "application/json",
                "Accept-Language": "en"
            }
        })   
        return {recipes: res.data.hits, more: res.data.more};
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
            if(action.payload==="Any"){
                state.filter = null;
                return;
            }            
            state.filter = action.payload;
        },
        setPage: (state, action)=>{
            state.page = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder
            .addCase(getRecipes.pending, (state)=>{
                state.loader = true;
            })
            .addCase(getRecipes.fulfilled, (state, action)=>{
                state.recipes = action.payload?.recipes;
                state.more = action.payload?.more;
                state.loader = false
            })
            .addCase(getRecipes.rejected, (state)=>{
                toast.error("Something Went Wrong!");
                state.more = false;
                state.loader= false;
            })
    }
});

export const recipesActions = recipeSlice.actions;
export const recipesReducers = recipeSlice.reducer;
export const recipesSelector = (state: RootState)=>state.recipesReducers;