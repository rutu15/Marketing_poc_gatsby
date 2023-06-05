export default {
    name: "homepageServices",
    title: "Homepage Services",
    type: "document",
    fields: [
      { title: "Heading", name: "heading", type: "string" },
      {
        title: "Links",
        name: "links",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "homepageLink" }],
          },
        ],
      },
      {
        title: "Content",
        name: "content",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "services" }],
          },
        ],
      },
      
    ],
  }
  