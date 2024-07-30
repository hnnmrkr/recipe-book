// src/api/recipeAPI.js
import axios from 'axios';

const API_KEY = '50b378cce4a14eadbf995b4f699828bd';
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const searchRecipes = async (query) => {
    const response = await axios.get(`${BASE_URL}/complexSearch`, {
        params: {
            query,
            apiKey: API_KEY,
        },
    });
    return response.data.results;
};

export const getRecipeDetails = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}/information`, {
        params: {
            apiKey: API_KEY,
        },
    });
    return response.data;
};
