import React, { useState } from "react";
import "./RecipeCreate.css";

function RecipeCreate({ createRecipe, recipeData }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleCuisineChange = (event) => setCuisine(event.target.value);
  const handlePhotoChange = (event) => setPhoto(event.target.value);
  const handleIngredientsChange = (event) => setIngredients(event.target.value);
  const handlePreparationChange = (event) => setPreparation(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe({ name, cuisine, photo, ingredients, preparation });
  };

  function isOdd(num) {
    return num % 2;
  }

  return (
    <form
      onSubmit={handleSubmit}
      name="create"
      className={isOdd(recipeData.length) === 0 ? "diffBg" : ""}
    >
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
                onChange={handlePhotoChange}
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
