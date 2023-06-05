const sanityBlockContentToHTML = require("@sanity/block-content-to-html")

exports.createSchemaCustomization = async ({ actions }) => {
  actions.createFieldExtension({
    name: "blocktype",
    extend(options) {
      return {
        resolve(source) {
          // capitalize
          const type = source._type
          const cap = type.charAt(0).toUpperCase() + type.slice(1)
          return cap
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "sanityBlockContent",
    args: {
      fieldName: "String",
    },
    extend(options) {
      return {
        resolve(source) {
          const html = sanityBlockContentToHTML({
            blocks: source[options.fieldName],
          })
          return html
        },
      }
    },
  })

  actions.createFieldExtension({
    name: "navItemType",
    args: {
      name: {
        type: "String!",
        defaultValue: "Link",
      },
    },
    extend(options) {
      return {
        resolve() {
          switch (options.name) {
            case "Group":
              return "Group"
            default:
              return "Link"
          }
        },
      }
    },
  })

  // abstract interfaces
  actions.createTypes(/* GraphQL */ `
    interface HomepageBlock implements Node {
      id: ID!
      blocktype: String
    }

    interface HomepageLink implements Node {
      id: ID!
      href: String
      text: String
    }

    interface HeaderNavItem implements Node {
      id: ID!
      navItemType: String
    }

    interface NavItem implements Node & HeaderNavItem {
      id: ID!
      navItemType: String
      href: String
      text: String
      icon: HomepageImage
      description: String
    }

    interface NavItemGroup implements Node & HeaderNavItem {
      id: ID!
      navItemType: String
      name: String
      navItems: [NavItem]
    }

    interface HomepageImage implements Node {
      id: ID!
      alt: String
      gatsbyImageData: GatsbyImageData
      url: String
    }

    interface HomepageHero implements Node {
      id: ID!
      heading: String
      kicker: String
      subhead: String
      image: HomepageImage
      text: String
      links: [HomepageLink]
    }

    interface HomepageAbout implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      subhead: String
      imageLeft: HomepageImage
      imageRight: HomepageImage
      imageCenter: HomepageImage
      description: String
      links: [HomepageLink]
    }

    interface Services implements Node {
      id: ID!
      slug: String!
      title: String
      shortDescription: String!
      image: HomepageImage
    }

    interface HomepageServices implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      links: [HomepageLink]
      content: [Services]
    }

    interface HomepageHeroList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      text: String
      image: HomepageImage
      content: [HomepageHero]
    }

    interface HomepageCta implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      kicker: String
      heading: String
      text: String
      image: HomepageImage
      links: [HomepageLink]
    }

    interface HomepageLogo implements Node {
      id: ID!
      image: HomepageImage
      alt: String
    }

    interface HomepageLogoList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      text: String
      logos: [HomepageLogo]
    }

    interface HomepageTestimonial implements Node {
      id: ID!
      quote: String
      source: String
      position: String
      avatar: HomepageImage
    }

    interface HomepageTestimonialList implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      kicker: String
      heading: String
      content: [HomepageTestimonial]
    }

    interface Homepage implements Node {
      id: ID!
      title: String
      description: String
      image: HomepageImage
      content: [HomepageBlock]
    }

    interface LayoutHeader implements Node {
      id: ID!
      navItems: [HeaderNavItem]
      cta: HomepageLink
    }

    enum SocialService {
      TWITTER
      FACEBOOK
      INSTAGRAM
      YOUTUBE
      LINKEDIN
      GITHUB
      DISCORD
      TWITCH
    }

    interface SocialLink implements Node {
      id: ID!
      username: String!
      service: SocialService!
    }

    interface LayoutFooter implements Node {
      id: ID!
      links: [HomepageLink]
      meta: [HomepageLink]
      socialLinks: [SocialLink]
      copyright: String
    }

    interface Layout implements Node {
      id: ID!
      header: LayoutHeader
      footer: LayoutFooter
    }

    interface Page implements Node {
      id: ID!
      slug: String!
      title: String
      description: String
      image: HomepageImage
      html: String!
    }

    interface Author implements Node {
      id: ID!
      slug: String!
      name: String
      profileImage: HomepageImage
      bio: String
    }

    interface Category implements Node {
      id: ID!
      slug: String!
      title: String
      description: String!
      type: String
    }

    interface Blog implements Node {
      id: ID!
      slug: String!
      title: String
      shortDescription: String
      image: HomepageImage
      author: Author
      publishedAt: Date
      category: Category
      body: String!
      readTime: String
    }

    interface CaseStudy implements Node {
      id: ID!
      slug: String!
      title: String
      shortDescription: String!
      description: String!
      body: String!
      homePageDescription: String
      partnerTestimonial: String
      partnerName: String
      partnerPosition: String
      logo: HomepageImage
      startDate: Date
      endDate: Date
      image: HomepageImage
      backgroundImage: HomepageImage
      homeImage: HomepageImage
      publishedAt: Date
      technology: [Category]
      categories: [Category]
      websiteLink: String
      nextCaseStudy: CaseStudy
      boxcolor: String
    }

    interface HomepageCaseStudy implements Node & HomepageBlock {
      id: ID!
      blocktype: String
      heading: String
      subhead: String
      description: String
      content: [CaseStudy]
      links: [HomepageLink]
    }
  `)

  // CMS-specific types for Homepage
  actions.createTypes(/* GraphQL */ `
    type SanityHomepageLink implements Node & HomepageLink {
      id: ID!
      href: String
      text: String
    }

    type SanityImageAsset implements Node & HomepageImage {
      id: ID!
      alt: String @proxy(from: "altText")
      gatsbyImageData: GatsbyImageData
      url: String
    }

    type SanityHomepage implements Node & Homepage {
      id: ID!
      title: String
      description: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      content: [HomepageBlock] @link
    }

    type SanityHomepageHero implements Node & HomepageHero {
      id: ID!
      _type: String
      heading: String
      kicker: String
      subhead: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      text: String
      links: [HomepageLink] @link
    }

    type SanityHomepageAbout implements Node & HomepageAbout & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      heading: String
      subhead: String
      imageLeft: HomepageImage @link(by: "id", from: "imageLeft.asset._ref")
      imageRight: HomepageImage @link(by: "id", from: "imageRight.asset._ref")
      imageCenter: HomepageImage @link(by: "id", from: "imageCenter.asset._ref")
      description: String
      links: [HomepageLink] @link
    }

    type SanityServices implements Node & Services {
      id: ID!
      slug: String! @proxy(from: "slug.current")
      title: String
      shortDescription: String! @sanityBlockContent(fieldName: "shortDescription")
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
    }

    type SanityHomepageServices implements Node & HomepageServices & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      heading: String
      links: [HomepageLink] @link
      content: [Services]
    }

    type SanityHomepageHeroList implements Node & HomepageHeroList & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      text: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      content: [HomepageHero]
    }


    type SanityHomepageCta implements Node & HomepageCta & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      kicker: String
      heading: String
      text: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      links: [HomepageLink] @link
    }

    type SanityHomepageLogo implements Node & HomepageLogo {
      id: ID!
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      alt: String
    }

    type SanityHomepageLogoList implements Node & HomepageLogoList & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      text: String
      logos: [HomepageLogo]
    }

    type SanityHomepageTestimonial implements Node & HomepageTestimonial {
      id: ID!
      quote: String
      source: String
      position: String
      avatar: HomepageImage @link(by: "id", from: "avatar.asset._ref")
    }

    type SanityHomepageTestimonialList implements Node & HomepageTestimonialList & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      kicker: String
      heading: String
      content: [HomepageTestimonial]
    }

    type SanityNavItem implements Node & NavItem & HeaderNavItem {
      id: ID!
      navItemType: String @navItemType(name: "Link")
      href: String
      text: String
      icon: HomepageImage @link(by: "id", from: "icon.asset._ref")
      description: String
    }

    type SanityNavItemGroup implements Node & NavItemGroup & HeaderNavItem {
      id: ID!
      navItemType: String @navItemType(name: "Group")
      name: String
      navItems: [NavItem] @link
    }

    type SanityLayoutHeader implements Node & LayoutHeader {
      id: ID!
      navItems: [HeaderNavItem] @link(from: "navItems._ref")
      cta: HomepageLink @link
    }

    type SanitySocialLink implements Node & SocialLink {
      id: ID!
      username: String!
      service: SocialService!
    }

    type SanityLayoutFooter implements Node & LayoutFooter {
      id: ID!
      links: [HomepageLink] @link
      meta: [HomepageLink] @link
      socialLinks: [SocialLink] @link
      copyright: String
    }

    type SanityLayout implements Node & Layout {
      id: ID!
      header: LayoutHeader
      footer: LayoutFooter
    }

    type SanityPage implements Node & Page {
      id: ID!
      slug: String! @proxy(from: "slug.current")
      title: String
      description: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      html: String! @sanityBlockContent(fieldName: "content")
    }

    type SanityAuthor implements Node & Author {
      id: ID!
      slug: String! @proxy(from: "slug.current")
      name: String
      profileImage: HomepageImage @link(by: "id", from: "image.asset._ref")
      bio: String 
    }

    type SanityCategory implements Node & Category {
      id: ID!
      slug: String! @proxy(from: "slug.current")
      title: String
      description: String! @sanityBlockContent(fieldName: "description")
    }

    type SanityBlog implements Node & Blog {
      id: ID!
      slug: String! @proxy(from: "slug.current")
      title: String
      shortDescription: String
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      author: Author
      publishedAt: Date
      category: Category
      body: String! @sanityBlockContent(fieldName: "body")
      readTime: String
    }

    type SanityCaseStudy implements Node & CaseStudy {
      id: ID!
      slug: String! @proxy(from: "slug.current")
      title: String
      shortDescription: String! @sanityBlockContent(fieldName: "shortDescription")
      description: String! @sanityBlockContent(fieldName: "description")
      body: String! @sanityBlockContent(fieldName: "body")
      homePageDescription: String
      partnerTestimonial: String
      partnerName: String
      partnerPosition: String
      logo: HomepageImage @link(by: "id", from: "logo.asset._ref")
      startDate: Date
      endDate: Date
      image: HomepageImage @link(by: "id", from: "image.asset._ref")
      backgroundImage: HomepageImage @link(by: "id", from: "backgroundImage.asset._ref")
      homeImage: HomepageImage @link(by: "id", from: "homeImage.asset._ref")
      publishedAt: Date
      technology: [Category]
      categories: [Category]
      websiteLink: String
      nextCaseStudy: CaseStudy
      boxcolor:String
    }

    type SanityHomepageCaseStudy implements Node & HomepageCaseStudy & HomepageBlock {
      id: ID!
      blocktype: String @blocktype
      heading: String
      subhead: String
      description: String
      content: [CaseStudy]
      links: [HomepageLink] @link
    }
  `)
}
