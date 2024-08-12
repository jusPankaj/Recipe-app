const apiKey = process.env.API_KEY;

export const searchRecipe = async(searchItem:string, page:number) =>{
    if(!apiKey){
        throw new Error("API key not found");
    }

    const url = new URL("https://api.spoonacular.com/recipes/complexSearch");

    const queryParams = {
        apiKey,
        query: searchItem,
        number : '10',
        offSet: (page * 10).toString()
    }

    url.search = new URLSearchParams(queryParams).toString();

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);        
    }
}