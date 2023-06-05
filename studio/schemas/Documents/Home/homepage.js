export default {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    { title: "Title", name: "title", type: "string" },
    { title: "Description", name: "description", type: "string" },
    { title: "Image", name: "image", type: "image" },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "homepageHeroList" },

            { type: "homepageTestimonialList" },

            { type: "homepageAbout" },
            { type: "homepageServices" },
            { type: "homepageCaseStudy" },
          ],
        },
      ],
    },
  ],
}
