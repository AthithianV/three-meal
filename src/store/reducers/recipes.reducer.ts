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
    mealTypeFilter: string|null
    dietTypeFilter: string|null
    page: number,
    more: boolean
}

const initialState:InitialState = {
    recipes: [...data.hits],
    selectedRecipe: null,
    loader: false,
    favourites: [],
    keyword: "eggs",
    mealTypeFilter: null,
    dietTypeFilter: null,
    page: 1,
    more: true
};

type GetRecipeFilter = {keyword:string, mealTypeFilter:string|null, dietTypeFilter:string|null, page:number}

export const getRecipes = createAsyncThunk(
    "recipes/get", 
    async ({keyword, mealTypeFilter, dietTypeFilter, page}:GetRecipeFilter)=>{
        let API_URL = `${import.meta.env.VITE_API_URL}&`;
        try {
            if(mealTypeFilter) API_URL += `mealType=${mealTypeFilter}&`;
            if(dietTypeFilter) API_URL += `diet=${dietTypeFilter}&`;
            if(keyword) API_URL += `q=${keyword}&`;
            if(page){
                API_URL += `from=${(page-1)*20}&`;
                API_URL += `to${page*20}`;
            }
            const res = await axios.get(
            `${API_URL}`,
            {
                headers: {
                    "Edamam-Account-User": "b15f5789",
                    "accept": "application/json",
                    "Accept-Language": "en"
                }
            })   
            const recipes:any[] = res.data.hits.map(({recipe}: {recipe: any})=>{
                return {...recipe, id: recipe.uri.split("#")[1]};
            });
            
            return {recipes, more: res.data.more};
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
)

const recipeSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        pickRecipe: (state, action)=>{
            state.selectedRecipe = action.payload;
        },
        toggleFavourites: (state, action)=>{
            const id = action.payload;
            const favouriteExists = state.favourites.find(recipe=>recipe.id===id)
            if(favouriteExists){
                state.favourites = [...state.favourites.filter(recipe=>recipe.id!==id)];
            }else{
                const found = state.recipes.find(recipe=>recipe.id === action.payload);
                state.favourites.unshift(found);
            }
        },
        setKeyword: (state,action)=>{
            state.keyword = action.payload;
        },
        setFilter: (state, action)=>{
            if(action.payload.name === "Meal Type"){
                if(action.payload.type==="Any"){
                    state.mealTypeFilter = null;
                }else{
                    state.mealTypeFilter = action.payload.type;
                }
            }else{
                if(action.payload.type==="Any"){
                    state.dietTypeFilter = null;
                }else{
                    state.dietTypeFilter = action.payload.type;
                }
            }
        },
        setPage: (state, action)=>{
            state.page = action.payload;
        },
        setSelectedRecipe: (state, action)=>{
            const found = state.recipes.find(recipe=>recipe.id===action.payload);
            state.selectedRecipe = {...found};
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