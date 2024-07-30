// src/components/AddRecipe.js
import React, { useState } from 'react';

const AddRecipe = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [instructions, setInstructions] = useState('');
    const [ingredients, setIngredients] = useState('');

    const handleAdd = () => {
        const newRecipe = {
            title,
            instructions,
            ingredients: ingredients.split(',').map((ing) => ing.trim()),
        };
        onAdd(newRecipe);
    };

    return (
        <div className="add-recipe-form">

            <div className="add-recipe-row">
                <span>Recipe Title</span>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="add-recipe-row">
                <span>Instructions</span>
                <textarea
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                />
            </div>

            <div className="add-recipe-row">
                <span>Ingredients (separate with a comma)</span>
                <input
                    type="text"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
            </div>

            <button className="btn" onClick={handleAdd}>Add Recipe</button>
        </div>
    );
};

export default AddRecipe;
