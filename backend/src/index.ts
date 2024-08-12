import express from "express";
import cors from "cors";
import "dotenv/config";
import * as RecipeAPI from "./recipe-api";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/recipes/search", async (req, res) => {
  const searchItem = req.query.searchItem as string;
  const page = parseInt(req.query.page as string);

  const result = await RecipeAPI.searchRecipe(searchItem, page);

  return res.json({result});
});

app.listen(5000, () => console.log("Server is up and running on port 5000"));
