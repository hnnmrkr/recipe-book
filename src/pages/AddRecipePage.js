// src/pages/AddRecipePage.js
import React from 'react';
import AddRecipe from '../components/AddRecipe';

const AddRecipePage = () => {
    const handleAddRecipe = (newRecipe) => {
        // Handle adding the new recipe (e.g., save it to local state or send it to an API)
        console.log('New Recipe:', newRecipe);
    };

    return (
        <div className="main-container">
            <h2 className="recipes-title no-margin">Add a New Recipe</h2>
            <AddRecipe onAdd={handleAddRecipe} />
        </div>
    );
};

export default AddRecipePage;
