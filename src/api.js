export const fetchAllRecipes = async() => {
  try {
    const response = await fetch("https://subaciar-backend.onrender.com");
    if(! response.ok) {
      throw new Error(error.message);
    }
    const data = await response.json();
    return data;
  } catch(error) {
    throw new Error(error.message);
  }
};

export const fetchSingleRecipes = async(id) => {
  try {
    const response = await fetch(`https://subaciar-backend.onrender.com/recipes/${id}`);
    if(! response.ok) {
      throw new Error(error.message);
    }
    const data = await response.json();
    return data;
  } catch(error) {
    throw new Error(error.message);
  }
};