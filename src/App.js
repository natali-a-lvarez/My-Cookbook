import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  console.log(recipes);

  const createRecipe = (newRecipe) => {
    setRecipes((currentRecipe) => [newRecipe, ...currentRecipe]);
  };

  const deleteHandler = (indexToDelete) => {
    console.log("del");
    setRecipes((currentRecipe) =>
      currentRecipe.filter((recipe, index) => index !== indexToDelete)
    );
  };

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList deleteHandler={deleteHandler} recipeData={recipes} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;

//make delete work
