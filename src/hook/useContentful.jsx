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
        content_type:"cookbook",
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
  return { getReceipes } 
}

export default useContentful;