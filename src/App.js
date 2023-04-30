import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const createRecipe = (newRecipe) => {
    setRecipes((currentRecipe) => [newRecipe, ...currentRecipe]);
  };

  const deleteHandler = (indexToDelete) => {
    setRecipes((currentRecipe) =>
      currentRecipe.filter((recipe, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList deleteHandler={deleteHandler} recipeData={recipes} />
      <RecipeCreate createRecipe={createRecipe} recipeData={recipes} />
    </div>
  );
}

export default App;
