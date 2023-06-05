export default {
  name: "homepageHeroList",
  title: "Homepage Hero List",
  type: "document",
  fields: [
    { title: "Text", name: "text", type: "string" },
    { title: "Image", name: "image", type: "image" },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "homepageHero" }],
        },
      ],
    },
  ],
}
