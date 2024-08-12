export const searchRecipe = async (searchItem: string, page: number) => {
  const baseURL = new URL("http://localhost:5000/api/recipes/search");
  baseURL.searchParams.append("searchItem", searchItem);
  baseURL.searchParams.append("page", String(page));

  const response = await fetch(baseURL);

  if (!response.ok) {
    throw new Error(`HTTP error! ,Status: ${response.status}`);
  }

  return response.json();
};
