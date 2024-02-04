export const getReceipes = async () => {
  try {
    const response = await fetch('http://localhost:8000/');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const entries = await response.json();
    return entries;
  } catch(error) {
    console.error(`Error fetching recipes: ${error}`);
  };
};

export const getSingleReceipe = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/recipes/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const entry = await response.json();
    return entry;
  } catch(error) {
    console.error(`Error fetching recipe: ${error}`);
  };
};

export const createRecipe = async (recipe) => {

  const sanitizedRecipe = {
    title: recipe.title,
    subheading: recipe.subheading,
    description: recipe.description,
    pictureurl: recipe.pictureurl,
    preptimeinminutes: recipe.preptimeinminutes,
    ingredients: recipe.ingredients,
    method: recipe.method
  };

  try {
    const response = await fetch('http://localhost:8000/recipes/', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
    });
  } catch(error) {
    console.error(`Error creating recipe: ${error}`);
  };
};