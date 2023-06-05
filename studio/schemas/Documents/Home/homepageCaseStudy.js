export default {
    name: "homepageCaseStudy",
    title: "Homepage Case Study",
    type: "document",
    fields: [
      { title: "Heading", name: "heading", type: "string" },
      { title: "Subhead", name: "subhead", type: "string" },
      { title: "Description", name: "description", type: "string" },
      {
        title: "Content",
        name: "content",
        type: "array",
        of: [
          {
            type: "reference",
            to: [{ type: "caseStudy" }],
          },
        ],
      },
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
    ],
  }
  