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
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Recipe title"
            />
            <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Instructions"
            />
            <input
                type="text"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Ingredients (comma separated)"
            />
            <button onClick={handleAdd}>Add Recipe</button>
        </div>
    );
};

export default AddRecipe;
