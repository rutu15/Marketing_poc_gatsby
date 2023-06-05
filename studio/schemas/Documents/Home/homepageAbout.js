export default {
  name: "homepageAbout",
  title: "Homepage About",
  type: "document",
  fields: [
    { title: "Heading", name: "heading", type: "string" },
    { title: "Subhead", name: "subhead", type: "string" },
    { title: "Description", name: "description", type: "string" },
    {
      title: "Image Left",
      name: "imageLeft",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Image Right",
      name: "imageRight",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Image Center",
      name: "imageCenter",
      type: "image",
      validation: (Rule) => Rule.required(),
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
