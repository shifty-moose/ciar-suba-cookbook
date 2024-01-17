import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_PREVIEW_TOKEN,
    //host:"cdn.contentful.com" for productions
    host:"preview.contentful.com",
  });

  const getReceipes = async() => {
    try{
      const entries = await client.getEntries({
        content_type:"recipes",
        select: "fields",
        order: "fields.title",
        })
    
      const sanitizedEntries = entries.items.map(item => {
        const picture = item.fields.picture.fields;
        return {
          ...item.fields,
          picture
        }
      })
      return sanitizedEntries

    } catch(error) {
      console.error(`Error fetching authors:${error}`)
    }
  }

  const getSingleReceipe = async(recipeId) => {
    try{
      const intNum = parseInt(recipeId);
      const entries = await client.getEntries({
        content_type:"recipes",
        select: "fields",
        'fields.receipeId': intNum,
        limit: 1,
      })
  
      if (entries.items.length > 0) {
        const item = entries.items[0];
        const picture = item.fields.picture.fields;
        const sanitizedEntry = {
          ...item.fields,
          picture
        }
        return sanitizedEntry;
      } else {
        return null;
      }
  
    } catch(error) {
      console.error(`Error fetching recipe: ${error}`);
    }
  }

  return { getReceipes, getSingleReceipe } 
}

export default useContentful;