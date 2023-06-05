import { IGatsbyImageData, ImageDataLike } from "gatsby-plugin-image"

export interface Image {
  url: string
  id: string
  gatsbyImageData: ImageDataLike | IGatsbyImageData
  alt?: any
}

export interface Category {
  slug: string
  title: string
  id: string
}

export interface Technology {
  slug: string
  title: string
  id: string
}

export interface ICaseStudies {
  id: string
  categories: [Category]
  shortDescription: string
  title: string
  slug: string
  image: Image
  boxcolor: string
  backgroundImage: Image
  body: string
  startDate: Date
  endDate: Date
  description: string
  websiteLink: string
  technology: [Technology]
  partnerTestimonial: string
  logo: Image
  partnerName: string
  partnerPosition: string
}
