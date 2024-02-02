export const getReceipes = async () => {
  try {
    const response = await fetch('https://subaciar-backend.onrender.com');
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
    const response = await fetch(`https://subaciar-backend.onrender.com/recipes/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const entry = await response.json();
    return entry;
  } catch(error) {
    console.error(`Error fetching recipe: ${error}`);
  };
};

