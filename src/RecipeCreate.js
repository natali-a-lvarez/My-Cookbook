import React, { useState } from "react";
import "./RecipeCreate.css";

function RecipeCreate({ createRecipe }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [url, setUrl] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleCuisineChange = (event) => setCuisine(event.target.value);
  const handleUrlChange = (event) => setUrl(event.target.value);
  const handleIngredientsChange = (event) => setIngredients(event.target.value);
  const handlePreparationChange = (event) => setPreparation(event.target.value);

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:");
    createRecipe({ name, cuisine, url, ingredients, preparation });
  };

  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td className="narrow">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={handleNameChange}
              />
            </td>
            <td className="narrow">
              <input
                type="text"
                name="cuisine"
                id="cuisine"
                placeholder="Cuisine"
                onChange={handleCuisineChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="URL"
                onChange={handleUrlChange}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                id="ingredients"
                placeholder="Ingredients"
                onChange={handleIngredientsChange}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                id="preparation"
                placeholder="Preparation"
                onChange={handlePreparationChange}
              />
            </td>

            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
