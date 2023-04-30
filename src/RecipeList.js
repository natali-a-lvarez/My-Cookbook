import React from "react";

import "./RecipeList.css";

function RecipeList({ recipeData, deleteHandler }) {
  console.log(recipeData);
  // TODO: Display the list of recipes using the structure of table that is provided.
  const rows = recipeData.map(
    ({ name, cuisine, photo, ingredients, preparation }, index) => (
      <tr key={index}>
        <td className="narrow">{name}</td>
        <td className="narrow">{cuisine}</td>
        <td>
          <img src={photo} alt={name} className="img" />
        </td>
        <td>{ingredients}</td>
        <td>{preparation}</td>
        <td>
          <button onClick={() => deleteHandler(index)} type="delete">
            Delete
          </button>
        </td>
      </tr>
    )
  );

  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th className="narrow">Name</th>
            <th className="narrow">Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
