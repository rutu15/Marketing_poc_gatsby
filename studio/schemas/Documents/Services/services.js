export default {
    name: "services",
    title: "Services",
    type: "document",
    fields: [
      { title: "Title", name: "title", type: "string" },
      {
        title: 'Slug',
        name: 'slug', 
        type: 'slug', 
        options: {
          source: 'title',
          maxLength: 96,    
        },
      },
      {
        title: 'Short Description',
        name: 'shortDescription',
        description: 'A short description of the service.',
        type: "richText",
      },
      {
        title: "Image",
        name: "image",
        type: "image",
      },
    ],
  }
  