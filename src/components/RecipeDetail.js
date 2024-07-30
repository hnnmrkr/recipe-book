// src/components/RecipeDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../api/recipeApi';
import Back from "./Back";

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
        <div className="main-container">
            <Back></Back>

            <h2 className="recipes-title no-margin">{recipe.title}</h2>

            <div className="recipes-detail">
                <div className="recipes-detail__image">
                    <img src={recipe.image} alt={recipe.title} />
                </div>

                <div className="recipes-detail__info">
                    <p>{recipe.instructions}</p>
                    <ul>
                        {recipe.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default RecipeDetail;
