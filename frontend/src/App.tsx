import { FormEvent, useState } from "react";
import * as api from "./api";
import { Recipe } from "./types";

const App = () => {
  const [searchItem, setSearchItem] = useState("burger");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const handleSearchSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const recipes = await api.searchRecipe(searchItem, 1);      
      setRecipes(recipes.result.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <p>{recipe.id}</p>
          <h1>{recipe.title}</h1>
          <img src={recipe.image} alt="image" />
          <span>{recipe.imageType}</span>
        </div>
      ))}
      <form onSubmit={(e) => handleSearchSubmit(e)}>
        <button onClick={handleSearchSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default App;
