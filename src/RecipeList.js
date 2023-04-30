import React from "react";

import "./RecipeList.css";

function RecipeList({ recipeData, deleteHandler }) {
  function isOdd(num) {
    return num % 2;
  }

  const rows = recipeData.map(
    ({ name, cuisine, photo, ingredients, preparation }, index) => (
      <tr className={isOdd(index) === 0 ? "diffBg" : ""} key={index}>
        <td className="narrow">{name}</td>
        <td className="narrow">{cuisine}</td>
        <td>
          <img src={photo} alt={name} className="img" />
        </td>
        <td>{ingredients}</td>
        <td>{preparation}</td>
        <td>
          <button
            onClick={() => deleteHandler(index)}
            name="delete"
            type="delete"
          >
            Delete
          </button>
        </td>
      </tr>
    )
  );

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
