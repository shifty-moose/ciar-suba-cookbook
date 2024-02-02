import { createClient } from "contentful";

const getReceipes = async () => {
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

export default getReceipes;