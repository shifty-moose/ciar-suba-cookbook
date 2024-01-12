import { createClient } from "contentful";


const useContentful = () => {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_PREVIEW_TOKEN,
    // host:"cdn.contentful.com" for productions
    host:"preview.contentful.com",
  });

  const getReceipes = async() => {
    try{
      const entries = await client.getEntries({
        // content_type:"Cookbook",
        select: "fields",
        // title: "fields.title",
        })

        console.log(entries);
    
        return entries;
    //   const sanitizedEntries = entries.items.map(item => {
    //     const avatar = item.fields.avatar.fields
    //     return {
    //       ...item.fields,
    //       avatar
    //     }
    //   })
    //   return sanitizedEntries

    } catch(error) {
      console.error(`Error fetching authors:${error}`)
    }
  }

  return { getReceipes } 
}

export default useContentful;