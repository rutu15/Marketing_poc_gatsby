export default {
    name: "caseStudy",
    title: "Case Study",
    type: "document",
    fieldsets: [
      {name: 'partner', title: 'Partner',options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
      }}
    ],
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
        title: 'Home Page Description',
        name: 'homePageDescription',
        description: 'A description for home page.',
        type: "string",
      },
      {
        title: 'Short Description',
        name: 'shortDescription',
        description: 'A short description of the case study.',
        type: "richText",
      },
      {
        title: 'Description',
        name: 'description',
        description: 'A description of the case study.',
        type: "richText",
      },
      {
        title: "Body",
        name: "body",
        type: "richText",
        description: 'A detail description of the case study.',
      },
      {
        title: "Partner Testimonial",
        name: "partnerTestimonial",
        type: "string",
        fieldset: 'partner'
      },
      {
        title: "Partner Name",
        name: "partnerName",
        type: "string",
        fieldset: 'partner'
      },
      {
        title: "Partner Position",
        name: "partnerPosition",
        type: "string",
        fieldset: 'partner'
      },
      { title: "Logo", name: "logo", type: "image", fieldset: 'partner' },
      { title: "Start Date", name: "startDate", type: "date" },
      { title: "End Date", name: "endDate", type: "date" },
      { title: "Image", name: "image", type: "image" },
      { title: "Background Image", name: "backgroundImage", type: "image" },
      { title: "Home Image", name: "homeImage", type: "image" },
      { title: "Box color", name: "boxcolor", type: "string" },
      {
        title: 'Published At',
        name: 'publishedAt',
        type: 'datetime',
      },
      {
        title: 'Technology',
        name: 'technology',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'category' }],
            options: {
              filter: 'type == $type',
              filterParams: {type: 'technology'}
            }
          },
        ],
      },
      {
        title: 'Categories',
        name: 'categories',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'category' }],
            options: {
              filter: 'type == $type',
              filterParams: {type: 'caseStudy'}
            }
          },
        ],
      },
      { title: "Website Link", name: "websiteLink", type: "url" },
      {
        title: 'Next Case Study',
        name: 'nextCaseStudy',
        type: 'reference',
        to: [{ type: 'caseStudy' }],
      },
    ],
  }