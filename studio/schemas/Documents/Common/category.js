
export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'SLUG',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          {title: 'Blog', value: 'blog'},
          {title: 'Case Study', value: 'caseStudy'},
          {title: 'Technology', value: 'technology'},
        ]
      }
    }
  ]
};