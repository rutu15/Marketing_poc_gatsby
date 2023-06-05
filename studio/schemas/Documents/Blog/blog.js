export default {
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
      { title: "Title", name: "title", type: "string" },
      {
        title: 'Short Description',
        name: 'shortDescription',
        type: 'string',
        description: 'A short description of the blog post',
      },
      { title: "Read Time", name: "readTime", type: "string" },
      { title: "Image", name: "image", type: "image" },
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
        title: 'Published At',
        name: 'publishedAt',
        type: 'datetime',
      },
      {
        title: 'Category',
        name: 'category',
        type: 'reference',
        to: [{ type: 'category' }]
      },
      {
        title: 'Author',
        name: 'author',
        type: 'reference',
        to: [{ type: 'author' }],
      },
     
      {
        title: "Blog Body",
        name: "body",
        type: "array",
        of: [{ type: "block" }],
      },
    ],
  }
  