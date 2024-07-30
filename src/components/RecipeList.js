import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const fetchRandomRecipes = async () => {
    try {
        const response = await fetch('https://api.spoonacular.com/recipes/random?number=12&apiKey=50b378cce4a14eadbf995b4f699828bd');
        const data = await response.json();
        console.log('Fetched data:', data);

        if (data && Array.isArray(data.recipes)) {
            return data.recipes; // Tagasta retseptide massiiv
        } else {
            console.error('API response does not contain an array of recipes:', data);
            return [];
        }
    } catch (error) {
        console.error('Error fetching recipes:', error);
        return [];
    }
}

const RecipeList = ({ recipes, isSearching }) => {
    const navigate = useNavigate();
    const [displayedRecipes, setDisplayedRecipes] = useState(recipes);

    useEffect(() => {
        if (!isSearching) {
            const fetchRecipes = async () => {
                const randomRecipes = await fetchRandomRecipes();
                setDisplayedRecipes(randomRecipes);
            };

            fetchRecipes();
        } else {
            setDisplayedRecipes(recipes);
        }
    }, [isSearching, recipes]);

    const handleClick = (recipeId) => {
        navigate(`/recipe/${recipeId}`);
    };

    return (
        <div className="recipes-list">
            {displayedRecipes.length > 0 ? (
                displayedRecipes.map((recipe) => (
                    <div
                        className="recipes-element"
                        key={recipe.id}
                        onClick={() => handleClick(recipe.id)}
                    >
                        <div className="recipes-image">
                            <img src={recipe.image} alt={recipe.title} />
                            <span className="overlay"></span>
                        </div>
                        <h2 className="recipes-element-title">{recipe.title}</h2>
                    </div>
                ))
            ) : (
                <span>No recipes available</span>
            )}
        </div>
    );
};

export default RecipeList;
