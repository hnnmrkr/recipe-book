// src/components/RecipeDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../api/recipeApi';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            const data = await getRecipeDetails(id);
            setRecipe(data);
        };
        fetchRecipe();
    }, [id]);

    return recipe ? (
        <div>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.instructions}</p>
            <ul>
                {recipe.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                ))}
            </ul>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default RecipeDetail;
