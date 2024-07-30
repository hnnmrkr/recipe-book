// src/pages/Home.js
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import { searchRecipes } from '../../src/api/recipeApi';
import Introduction from '../components/Introduction';

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = async (query) => {
        const results = await searchRecipes(query);
        setRecipes(results);
    };

    return (
        <div className="main-container">
            <Introduction></Introduction>
            <SearchBar onSearch={handleSearch} />
            <h2 className="recipes-title">Recipes</h2>
            <RecipeList recipes={recipes} isSearching={isSearching} />
        </div>
    );
};

export default Home;
