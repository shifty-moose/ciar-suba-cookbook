export const fetchAllRecipes = async() => {
  try {
    const response = await fetch("http://localhost:8000/");
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
    const response = await fetch(`http://localhost:8000/${id}`);
    if(! response.ok) {
      throw new Error(error.message);
    }
    const data = await response.json();
    return data;
  } catch(error) {
    throw new Error(error.message);
  }
};